const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const { buildURLList, makeSubmission, notify } = require('../scripts/notify-search-engines.cjs');
const root = path.resolve(__dirname, '..');
const key = fs.readFileSync(path.join(root, '812d6ef9318a1086dd6c06a405cce3ba.txt'), 'utf8').trim();

test('notifications include only maintained public MigraineMaatje HTML routes', () => {
  assert.deepEqual(buildURLList(['migrainemaatje/index.html', 'migrainemaatje/en/index.html', 'migrainemaatje/privacy.html', 'homescreen/index.html', 'private-export.json', 'migrainemaatje/assets/screen.png', 'migrainemaatje/../../private.html']), [
    'https://debruinstudio.nl/migrainemaatje/', 'https://debruinstudio.nl/migrainemaatje/en/', 'https://debruinstudio.nl/migrainemaatje/privacy.html'
  ]);
});
test('repeated paths notify once and empty changes remain empty', () => {
  assert.equal(buildURLList(['migrainemaatje/index.html', 'migrainemaatje/index.html']).length, 1);
  assert.deepEqual(buildURLList([]), []);
});
test('ownership is tied to the existing public file and fixed domain', () => {
  const payload = makeSubmission(['migrainemaatje/index.html'], key);
  assert.equal(payload.host, 'debruinstudio.nl');
  assert.equal(payload.keyLocation, `https://debruinstudio.nl/${key}.txt`);
  assert.throws(() => makeSubmission([], 'not-a-valid-key'));
  assert.throws(() => makeSubmission([], 'a'.repeat(32)));
});
test('no network call when no maintained pages changed', async () => {
  assert.equal((await notify(makeSubmission([], key), () => { throw new Error('Must not fetch'); })).submitted, false);
});
test('unverified ownership prevents any notification', async () => {
  let calls = 0;
  await assert.rejects(notify(makeSubmission(['migrainemaatje/index.html'], key), async () => {
    calls++; return { ok: true, status: 200, text: async () => 'wrong key' };
  }), /no URLs sent/);
  assert.equal(calls, 1);
});
for (const status of [200, 202]) {
  test(`HTTP ${status} records receipt, not an indexing or recommendation claim`, async () => {
    const calls = [];
    const receipt = await notify(makeSubmission(['migrainemaatje/index.html'], key), async (url, options) => {
      calls.push({ url, options });
      return calls.length === 1 ? { ok: true, status: 200, text: async () => key + '\n' } : { status };
    });
    assert.equal(receipt.submitted, true);
    assert.equal(receipt.indexed, 'not established');
    assert.equal(receipt.aiRecommendation, 'not established');
    assert.equal(calls[1].options.method, 'POST');
    assert.deepEqual(JSON.parse(calls[1].options.body).urlList, ['https://debruinstudio.nl/migrainemaatje/']);
  });
}
test('a rejected API request is not reported as submitted', async () => {
  let calls = 0;
  await assert.rejects(notify(makeSubmission(['migrainemaatje/index.html'], key), async () => {
    return ++calls === 1 ? { ok: true, status: 200, text: async () => key } : { status: 429 };
  }), /HTTP 429/);
});
