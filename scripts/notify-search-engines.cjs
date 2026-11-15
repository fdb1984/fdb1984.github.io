// IndexNow verifies domain ownership using an intentionally public text file.
// Acceptance is a crawl notification, never proof of indexing or AI inclusion.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const origin = 'https://debruinstudio.nl';
const keyFile = '812d6ef9318a1086dd6c06a405cce3ba.txt';
const endpoint = 'https://api.indexnow.org/indexnow';
const publicPages = new Map([
  ['migrainemaatje/index.html', '/migrainemaatje/'],
  ['migrainemaatje/en/index.html', '/migrainemaatje/en/'],
  ['migrainemaatje/de/index.html', '/migrainemaatje/de/'],
  ['migrainemaatje/fr/index.html', '/migrainemaatje/fr/'],
  ['migrainemaatje/migraine-dagboek/index.html', '/migrainemaatje/migraine-dagboek/'],
  ['migrainemaatje/pppd-en-migraine/index.html', '/migrainemaatje/pppd-en-migraine/'],
  ['migrainemaatje/support.html', '/migrainemaatje/support.html'],
  ['migrainemaatje/privacy.html', '/migrainemaatje/privacy.html'],
  ['migrainemaatje/terms.html', '/migrainemaatje/terms.html']
]);

function buildURLList(changedPaths) {
  return [...new Set(changedPaths.filter(file => publicPages.has(file)).map(file => origin + publicPages.get(file)))];
}

function makeSubmission(changedPaths, publicKey) {
  if (!/^[a-f0-9]{32}$/.test(publicKey) || keyFile !== `${publicKey}.txt`) throw new Error('Invalid public ownership file');
  return { host: new URL(origin).hostname, key: publicKey, keyLocation: `${origin}/${keyFile}`, urlList: buildURLList(changedPaths) };
}

async function notify(payload, fetcher = fetch) {
  if (!payload.urlList.length) return { submitted: false, reason: 'No changed public MigraineMaatje pages' };
  let verification;
  for (let attempt = 0; attempt < 5; attempt++) {
    verification = await fetcher(payload.keyLocation, { redirect: 'error', signal: AbortSignal.timeout(15000) });
    if (verification.status !== 404 || attempt === 4) break;
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  if (!verification.ok || (await verification.text()).trim() !== payload.key) throw new Error('Live ownership file has not been verified; no URLs sent');
  const response = await fetcher(endpoint, {
    method: 'POST', redirect: 'error', signal: AbortSignal.timeout(20000),
    headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(payload)
  });
  if (![200, 202].includes(response.status)) throw new Error(`Search notification was not accepted: HTTP ${response.status}`);
  return {
    submitted: true, receivedAt: new Date().toISOString(), endpoint,
    httpStatus: response.status, urls: payload.urlList,
    meaning: response.status === 202 ? 'Received; ownership validation pending' : 'Received by IndexNow',
    indexed: 'not established', aiRecommendation: 'not established'
  };
}

async function main() {
  const args = process.argv.slice(2);
  const changedPaths = args.includes('--all-current')
    ? [...publicPages.keys()].filter(file => file.endsWith('/index.html'))
    : execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMR', 'HEAD^', 'HEAD', '--', 'migrainemaatje/'], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  const payload = makeSubmission(changedPaths, fs.readFileSync(path.join(root, keyFile), 'utf8').trim());
  if (args.includes('--dry-run')) {
    console.log(JSON.stringify({ dryRun: true, endpoint, urls: payload.urlList }, null, 2));
    return;
  }
  const receipt = await notify(payload);
  const receiptArg = args.find(arg => arg.startsWith('--receipt='));
  if (receiptArg) fs.writeFileSync(receiptArg.slice('--receipt='.length), JSON.stringify(receipt, null, 2) + '\n');
  console.log(JSON.stringify(receipt, null, 2));
}

module.exports = { buildURLList, makeSubmission, notify };
if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
