(() => {
  const images = (language, labels) => ({
    hero: { src: `/migrainemaatje/assets/web-2026-11-16/${language}/hero.webp`, alt: labels.hero },
    log: { src: `/migrainemaatje/assets/web-2026-11-16/${language}/log.webp`, alt: labels.log },
    diary: { src: `/migrainemaatje/assets/web-2026-11-16/${language}/diary.webp`, alt: labels.diary },
    insights: { src: `/migrainemaatje/assets/web-2026-11-16/${language}/insights.webp`, alt: labels.insights },
    medication: { src: `/migrainemaatje/assets/web-2026-11-16/${language}/medication.webp`, alt: labels.medication },
    care: { src: `/migrainemaatje/assets/web-2026-11-16/${language}/care.webp`, alt: labels.care }
  });

  window.PRODUCT_TRANSLATIONS = {
    nl: {
      meta: {
        title: "MigraineMaatje | Migraine- en hoofdpijndagboek app",
        description: "Gratis migraine en hoofdpijn vastleggen, medicatie bijhouden en een basisrapport voor je arts maken. Met uitleg over je dagboek, duizeligheid en PPPD.",
        locale: "nl_NL"
      },
      global: { skip: "Ga naar inhoud", byStudio: "door de Bruin Studio", navigationLabel: "Hoofdnavigatie", languageLabel: "Kies taal", footerLabel: "Voettekstlinks" },
      nav: { how: "Zo werkt het", insight: "Inzichten", care: "Voor je arts", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Download in de App Store", playStore: "Download via Google Play" },
      hero: {
        identity: "Voor iPhone, iPad, Apple Watch en Android",
        eyebrow: "Gratis migraine- en hoofdpijndagboek",
        promise: "Migraine? Leg alleen het nodige vast.",
        description: "Bewaar je aanval in een paar tikken. Vul medicatie en herstel later aan. Zo hoef je bij je volgende afspraak niet alles uit je hoofd te vertellen.",
        trustLine: "Geen advertenties · geen verkoop van gezondheidsdata",
        factOne: "Snel vastleggen blijft gratis", factTwo: "Geen advertenties", factThree: "Geen verkoop van gezondheidsdata",
        noteOneTitle: "Aanval vastgelegd", noteOneText: "De rest kan wachten.", noteTwoTitle: "Later aanvullen", noteTwoText: "Medicatie, herstel en terugkeer."
      },
      trust: {
        oneTitle: "Rust tijdens migraine", oneText: "Alleen vastleggen wat nu nodig is",
        twoTitle: "Terugzien wat hielp", twoText: "Je eigen medicatie- en herstelgegevens bij elkaar",
        threeTitle: "Je vragen niet vergeten", threeText: "Bereid je artsbezoek op je eigen moment voor"
      },
      facts: {
        title: "Een migrainedagboek voor iPhone en Android",
        summary: "MigraineMaatje is een Nederlandstalige app om migraine, hoofdpijn, medicatie en herstel bij te houden. Je kunt gratis beginnen en een basisrapport maken voor je huisarts of neuroloog.",
        platformsLabel: "Apparaten", platforms: "iPhone, iPad en Android. Met een aanvullende Apple Watch-app.",
        languagesLabel: "Talen", languages: "Nederlands, Engels, Duits en Frans.",
        freeLabel: "Gratis basis", free: "Aanvallen vastleggen en afronden, dagboek, kalender, medicatie, basisstatus, medicatiedagen en basisrapport.",
        premiumLabel: "Optioneel Premium", premium: "Persoonlijke uitleg, medicatie-effect, maandanalyse en consultvoorbereiding. Een abonnement is niet nodig om je dagboek bij te houden.",
        watchLabel: "Zonder smartwatch", watch: "Ja. Je kunt zelf aanvallen en medicatie vastleggen. Apple Gezondheid en Health Connect zijn optioneel.",
        privacyLabel: "Privacy", privacy: "Geen advertenties en geen verkoop van gezondheidsdata. Je kiest zelf welke koppelingen en reservekopie je gebruikt."
      },
      moments: {
        eyebrow: "Op het juiste moment", title: "De app vraagt nooit meer dan nodig.",
        description: "Tijdens pijn wil je snelheid. Later wil je kunnen terugvinden wat er gebeurde. MigraineMaatje houdt die momenten bewust uit elkaar.",
        cardOneTitle: "Wanneer het begint", cardOneText: "Kies migraine of hoofdpijn, geef de ernst aan en sla op. Details zijn niet verplicht.",
        cardTwoTitle: "Wanneer het rustiger is", cardTwoText: "Rond de aanval kort af met medicatie, aura, misselijkheid en herstel. Alleen wanneer jij eraan toe bent.",
        cardThreeTitle: "Wanneer je wilt begrijpen", cardThreeText: "Bekijk medicatiedagen, terugkeer, maandverschillen en bespreekpunten in gewone taal."
      },
      attack: {
        eyebrow: "Tijdens een aanval", title: "Eerst voor jezelf zorgen. De app wacht wel.",
        description: "Een aanval openen duurt enkele seconden. De timer loopt mee, je kunt de ernst aanpassen en later pas aanvullen wat er verder speelde.",
        pointOneTitle: "Weinig tikken", pointOneText: "Geen lang formulier terwijl je pijn hebt.",
        pointTwoTitle: "Medicatie blijft dichtbij", pointTwoText: "Kies je eigen aanvalsmedicatie en vul later het effect aan.",
        pointThreeTitle: "Open aanval blijft zichtbaar", pointThreeText: "Aanpassen, afronden of verwijderen blijft helder."
      },
      insight: {
        eyebrow: "Persoonlijk inzicht met Premium", title: "Wat deed je medicatie bij jouw aanvallen?",
        description: "Je noteert of een middel hielp, deels hielp of niet hielp. MigraineMaatje zet je antwoorden naast elkaar. Ook zie je of klachten terugkwamen en wat er tussen maanden veranderde. Inzichten verschijnen wanneer je gegevens daarvoor voldoende zijn.",
        pointOneTitle: "Wat helpt?", pointOneText: "Effect per middel, rustig geteld uit afgeronde aanvallen.",
        pointTwoTitle: "Wat kwam terug?", pointTwoText: "Terugkeer binnen 24 uur blijft apart zichtbaar.",
        pointThreeTitle: "Wat veranderde?", pointThreeText: "Vergelijk migrainedagen en medicatiedagen met de vorige periode."
      },
      gallery: {
        eyebrow: "Van dagboek tot spreekkamer", title: "Terugvinden wat ertoe doet.",
        description: "Je kalender, medicatie en afspraakvoorbereiding vormen samen één rustig overzicht. Geen losse notities meer vlak voor je gesprek.",
        diaryTitle: "Dagboek en kalender", diaryText: "Zie aanvallen, hoofdpijn en medicatiedagen terug.",
        medicationTitle: "Medicatie bij elkaar", medicationText: "Aanvalsmedicatie, preventie, voorraad en wijzigingen.",
        careTitle: "Voorbereid naar je arts", careText: "Bewaar vragen, afspraken en wat je later wilt opvolgen."
      },
      value: {
        eyebrow: "Gratis en Premium", title: "Gratis bijhouden. Premium begrijpen.",
        description: "De basis blijft bruikbaar zonder abonnement. Premium is optioneel. De winkel toont vóór aankoop de prijs, verlenging en een eventuele proefperiode waarvoor je in aanmerking komt.",
        freeTitle: "Altijd gratis", freeText: "Alles wat je nodig hebt om een betrouwbaar migraine-dagboek bij te houden.",
        freeOne: "Aanvallen vastleggen en later afronden", freeTwo: "Dagboek, kalender en medicatiebeheer", freeThree: "Basisstatus en basisrapport voor je arts", freeFour: "Reservekopie en herstel op je eigen platform",
        premiumTitle: "Neem meer mee uit je dagboek", premiumText: "Bekijk wat je als helpend hebt genoteerd, volg veranderingen en zet je vragen voor je arts klaar.",
        premiumOne: "Waarom je actuele status verandert", premiumTwo: "Medicatie-effect en terugkeer binnen 24 uur", premiumThree: "Maandanalyse in gewone taal", premiumFour: "Consultvoorbereiding en bespreekpunten"
      },
      proof: {
        label: "Verzonnen voorbeeld", title: "Eén middel bij 10 afgeronde aanvallen",
        helped: "keer als helpend genoteerd", partly: "keer als deels helpend genoteerd", notHelped: "keer als niet helpend genoteerd",
        note: "Een samenvatting van ingevulde antwoorden, geen beoordeling van welk middel je moet nemen.",
        caption: "Echte appschermen met voorbeeldgegevens. De beelden tonen de iPhone-app."
      },
      price: {
        title: "Begin gratis. Kies zelf of je meer wilt.",
        text: "In de Nederlandse App Store: € 1,99 per maand of € 19,99 per jaar. Google Play en andere landen kunnen andere prijzen tonen.",
        terms: "Premium is een automatisch verlengend abonnement. De winkel toont vóór aankoop de actuele prijs, voorwaarden en een eventuele proefperiode. Je kunt opzeggen via je winkelaccount."
      },
      privacy: {
        eyebrow: "Gezondheidsdata vraagt om vertrouwen", title: "Jouw gegevens blijven van jou.",
        description: "MigraineMaatje heeft geen advertenties en verkoopt geen gezondheidsdata. Je kiest zelf welke koppelingen of reservekopie je gebruikt.",
        oneTitle: "Geen advertentieprofiel", oneText: "Geen trackers om gezondheidsinformatie te gelde te maken.",
        twoTitle: "Koppelingen zijn optioneel", twoText: "De app blijft bruikbaar zonder Apple Gezondheid of Health Connect.",
        threeTitle: "Voorzichtige uitleg", threeText: "Geen diagnose, voorspelling of medisch advies.",
        fourTitle: "Jouw eigen opslag", fourText: "Op iPhone kies je zelf waar je een export bewaart. Op Android is synchronisatie met je eigen Google Drive optioneel."
      },
      guides: {
        eyebrow: "Praktische uitleg", title: "Migraine, duizeligheid en je dagboek.",
        description: "Wat leg je vast en wat neem je mee naar je arts? Twee korte gidsen met voorbeelden en verwijzingen naar medische informatie.",
        diaryTitle: "Een migraine- en hoofdpijndagboek bijhouden", diaryText: "Wat je tijdens een aanval vastlegt, wat later kan en hoe je medicatie en herstel terugvindt.",
        pppdTitle: "PPPD en migraine: duizeligheid beschrijven", pppdText: "Waarom duizeligheid en migraine niet hetzelfde zijn. Met een voorbeeldnotitie en vragen voor je afspraak."
      },
      final: { title: "Minder invullen. Meer terugvinden.", description: "Begin gratis met vastleggen. Persoonlijke inzichten groeien mee wanneer er genoeg van jouw eigen gegevens zijn." },
      footer: { support: "Support", privacy: "Privacy", terms: "Voorwaarden", studio: "Alle apps" },
      images: images("nl", { hero: "Mijn dag in MigraineMaatje", log: "Snel een aanvalstype kiezen", diary: "Het dagboek van MigraineMaatje", insights: "Persoonlijke inzichten in MigraineMaatje", medication: "Medicatie beheren in MigraineMaatje", care: "Zorg en afspraken in MigraineMaatje" })
    },

    en: {
      meta: {
        title: "MigraineMaatje | Migraine and Headache Diary App",
        description: "Log a migraine attack quickly, add details later and see what stands out in your own diary, medication and recovery.",
        locale: "en_US"
      },
      global: { skip: "Skip to content", byStudio: "by de Bruin Studio", navigationLabel: "Main navigation", languageLabel: "Choose language", footerLabel: "Footer links" },
      nav: { how: "How it works", insight: "Insights", care: "For your doctor", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Download on the App Store", playStore: "Get it on Google Play" },
      hero: {
        identity: "For iPhone, iPad, Apple Watch and Android", eyebrow: "Free migraine and headache diary", promise: "Migraine? Record just the essentials.",
        description: "Save an attack in a few taps. Add medication and recovery later. At your next appointment, you will not have to remember everything on the spot.",
        trustLine: "No ads · no sale of health data",
        factOne: "Quick logging stays free", factTwo: "No advertising", factThree: "No sale of health data",
        noteOneTitle: "Attack saved", noteOneText: "Everything else can wait.", noteTwoTitle: "Add details later", noteTwoText: "Medication, recovery and recurrence."
      },
      trust: {
        oneTitle: "Calm during migraine", oneText: "Only record what matters right now",
        twoTitle: "Look back at what helped", twoText: "Your own medication and recovery records together",
        threeTitle: "Remember your questions", threeText: "Prepare for your appointment in your own time"
      },
      facts: {
        title: "A migraine diary for iPhone and Android",
        summary: "MigraineMaatje is a migraine and headache diary app for recording attacks, medication and recovery. Start for free and create a basic report for your doctor or neurologist.",
        platformsLabel: "Devices", platforms: "iPhone, iPad and Android, with a companion Apple Watch app.",
        languagesLabel: "Languages", languages: "Dutch, English, German and French.",
        freeLabel: "Free basics", free: "Recording and finishing attacks, diary, calendar, medication, basic status, medication days and a basic report.",
        premiumLabel: "Optional Premium", premium: "Personal explanations, medication effect, monthly analysis and appointment preparation. No subscription is needed to keep your diary.",
        watchLabel: "Without a smartwatch", watch: "Yes. Record attacks and medication manually. Apple Health and Health Connect are optional.",
        privacyLabel: "Privacy", privacy: "No ads and no sale of health data. You choose which connections and backup options to use."
      },
      moments: {
        eyebrow: "At the right moment", title: "The app never asks for more than necessary.",
        description: "During pain, you need speed. Later, you want to remember what happened. MigraineMaatje keeps those moments separate.",
        cardOneTitle: "When it starts", cardOneText: "Choose migraine or headache, set the severity and save. Details are optional.",
        cardTwoTitle: "When things settle", cardTwoText: "Finish the attack with medication, aura, nausea and recovery when you are ready.",
        cardThreeTitle: "When you want to understand", cardThreeText: "See medication days, recurrence, month-to-month changes and consultation points in plain language."
      },
      attack: {
        eyebrow: "During an attack", title: "Take care of yourself first. The app can wait.",
        description: "Opening an attack takes seconds. The timer keeps running, severity remains editable and details can wait until later.",
        pointOneTitle: "Only a few taps", pointOneText: "No long form while you are in pain.",
        pointTwoTitle: "Medication stays close", pointTwoText: "Choose your own acute medication and add its effect later.",
        pointThreeTitle: "An open attack stays visible", pointThreeText: "Adjusting, finishing or deleting remains clear."
      },
      insight: {
        eyebrow: "Personal insights with Premium", title: "How did you record your medication helping?",
        description: "Record whether a medication helped, partly helped or did not help. MigraineMaatje puts your answers together. Review returning symptoms and changes between months too. Insights appear when your records contain enough information.",
        pointOneTitle: "What helped?", pointOneText: "Effect per medication, carefully counted from finished attacks.",
        pointTwoTitle: "What came back?", pointTwoText: "Recurrence within 24 hours stays visible on its own.",
        pointThreeTitle: "What changed?", pointThreeText: "Compare migraine days and medication days with the previous period."
      },
      gallery: {
        eyebrow: "From diary to consultation", title: "Find what matters when you need it.",
        description: "Your calendar, medication and appointment preparation form one calm overview, without loose notes before a consultation.",
        diaryTitle: "Diary and calendar", diaryText: "Find attacks, headaches and medication days.",
        medicationTitle: "Medication together", medicationText: "Acute medication, prevention, stock and changes.",
        careTitle: "Prepared for your doctor", careText: "Keep questions, agreements and follow-up points."
      },
      value: {
        eyebrow: "Free and Premium", title: "Track for free. Understand with Premium.",
        description: "The basics remain useful without a subscription. Premium is optional. Before purchase, the store shows the price, renewal and any trial you are eligible for.",
        freeTitle: "Always free", freeText: "Everything you need for a dependable migraine diary.",
        freeOne: "Log attacks and finish them later", freeTwo: "Diary, calendar and medication management", freeThree: "Basic status and basic doctor report", freeFour: "Backup and restore on your own platform",
        premiumTitle: "Get more from your diary", premiumText: "Review what you recorded as helpful, follow changes and keep your questions ready for your doctor.",
        premiumOne: "Why your current status changes", premiumTwo: "Medication effect and recurrence within 24 hours", premiumThree: "Monthly analysis in plain language", premiumFour: "Consultation preparation and discussion points"
      },
      proof: {
        label: "Fictional example", title: "One medication across 10 completed attacks",
        helped: "recorded as helpful", partly: "recorded as partly helpful", notHelped: "recorded as not helpful",
        note: "A summary of recorded answers, not a recommendation of which medication to take.",
        caption: "Real app screens with sample data. Images show the iPhone app."
      },
      price: {
        title: "Start free. Choose more when it helps.",
        text: "In the Dutch App Store: €1.99 per month or €19.99 per year. Google Play and other countries may show different prices.",
        terms: "Premium is an auto-renewing subscription. Before purchase, the store shows the current price, terms and any eligible trial. Cancel through your store account."
      },
      privacy: {
        eyebrow: "Health data deserves trust", title: "Your data remains yours.",
        description: "MigraineMaatje has no ads and does not sell health data. You decide which connections or backup to use.",
        oneTitle: "No advertising profile", oneText: "No trackers that monetise health information.",
        twoTitle: "Connections are optional", twoText: "The app remains useful without Apple Health or Health Connect.",
        threeTitle: "Careful interpretation", threeText: "No diagnosis, prediction or medical advice.",
        fourTitle: "Your own storage", fourText: "On iPhone, you choose where to save an export. On Android, sync with your own Google Drive is optional."
      },
      guides: {
        eyebrow: "Guides in Dutch", title: "Migraine, dizziness and your diary.",
        description: "What can you record and bring to your doctor? These two Dutch-language guides include examples and links to medical information.",
        diaryTitle: "Keeping a migraine and headache diary (Dutch)", diaryText: "What to record during an attack, what can wait and how to review medication and recovery.",
        pppdTitle: "PPPD and migraine: describing dizziness (Dutch)", pppdText: "Why dizziness and migraine are not the same, with a sample note and questions for your appointment."
      },
      final: { title: "Record less. Remember more.", description: "Start tracking for free. Personal insights grow once there is enough of your own data." },
      footer: { support: "Support", privacy: "Privacy", terms: "Terms", studio: "All apps" },
      images: images("en", { hero: "My day in MigraineMaatje", log: "Quickly choosing an attack type", diary: "The MigraineMaatje diary", insights: "Personal insights in MigraineMaatje", medication: "Managing medication in MigraineMaatje", care: "Care and appointments in MigraineMaatje" })
    },

    de: {
      meta: {
        title: "MigraineMaatje | Migräne- und Kopfschmerztagebuch",
        description: "Dokumentiere eine Migräneattacke schnell, ergänze später Details und erkenne, was in deinem eigenen Tagebuch auffällt.",
        locale: "de_DE"
      },
      global: { skip: "Zum Inhalt springen", byStudio: "von de Bruin Studio", navigationLabel: "Hauptnavigation", languageLabel: "Sprache wählen", footerLabel: "Links im Seitenfuß" },
      nav: { how: "So funktioniert es", insight: "Einblicke", care: "Für deinen Arzt", privacy: "Datenschutz", download: "Laden" },
      actions: { appStore: "Im App Store laden", playStore: "Bei Google Play herunterladen" },
      hero: {
        identity: "Für iPhone, iPad, Apple Watch und Android", eyebrow: "Kostenloses Migräne- und Kopfschmerztagebuch", promise: "Migräne? Halte nur das Nötige fest.",
        description: "Speichere eine Attacke mit wenigen Fingertipps. Medikamente und Erholung ergänzt du später. Beim nächsten Arztgespräch musst du dich nicht an alles auf einmal erinnern.",
        trustLine: "Keine Werbung · kein Verkauf von Gesundheitsdaten",
        factOne: "Schnelles Erfassen bleibt kostenlos", factTwo: "Keine Werbung", factThree: "Kein Verkauf von Gesundheitsdaten",
        noteOneTitle: "Attacke gespeichert", noteOneText: "Alles andere kann warten.", noteTwoTitle: "Später ergänzen", noteTwoText: "Medikamente, Erholung und Wiederkehr."
      },
      trust: {
        oneTitle: "Ruhe während der Migräne", oneText: "Nur festhalten, was gerade nötig ist",
        twoTitle: "Nachsehen, was geholfen hat", twoText: "Deine Angaben zu Medikamenten und Erholung zusammen",
        threeTitle: "Deine Fragen nicht vergessen", threeText: "Bereite dein Arztgespräch in deinem Tempo vor"
      },
      facts: {
        title: "Ein Migränetagebuch für iPhone und Android",
        summary: "MigraineMaatje ist eine App, um Migräne, Kopfschmerzen, Medikamente und Erholung festzuhalten. Du kannst kostenlos beginnen und einen Basisbericht für deine Arztpraxis erstellen.",
        platformsLabel: "Geräte", platforms: "iPhone, iPad und Android, mit einer ergänzenden Apple-Watch-App.",
        languagesLabel: "Sprachen", languages: "Niederländisch, Englisch, Deutsch und Französisch.",
        freeLabel: "Kostenlose Basis", free: "Attacken erfassen und abschließen, Tagebuch, Kalender, Medikamente, Basisstatus, Medikamententage und Basisbericht.",
        premiumLabel: "Optionales Premium", premium: "Persönliche Erklärungen, Medikamentenwirkung, Monatsanalyse und Gesprächsvorbereitung. Für dein Tagebuch brauchst du kein Abonnement.",
        watchLabel: "Ohne Smartwatch", watch: "Ja. Du kannst Attacken und Medikamente selbst erfassen. Apple Health und Health Connect sind optional.",
        privacyLabel: "Datenschutz", privacy: "Keine Werbung und kein Verkauf von Gesundheitsdaten. Du entscheidest über Verbindungen und Sicherungen."
      },
      moments: {
        eyebrow: "Im richtigen Moment", title: "Die App fragt nie mehr als nötig.",
        description: "Bei Schmerzen muss es schnell gehen. Später möchtest du nachvollziehen, was passiert ist. MigraineMaatje trennt diese Momente bewusst.",
        cardOneTitle: "Wenn es beginnt", cardOneText: "Wähle Migräne oder Kopfschmerz, gib die Stärke an und speichere. Details sind freiwillig.",
        cardTwoTitle: "Wenn es ruhiger wird", cardTwoText: "Ergänze Medikamente, Aura, Übelkeit und Erholung erst dann, wenn du bereit bist.",
        cardThreeTitle: "Wenn du verstehen möchtest", cardThreeText: "Sieh Medikamententage, Wiederkehr, Monatsunterschiede und Gesprächspunkte in klarer Sprache."
      },
      attack: {
        eyebrow: "Während einer Attacke", title: "Kümmere dich zuerst um dich. Die App kann warten.",
        description: "Eine Attacke ist in Sekunden geöffnet. Die Zeit läuft mit, die Stärke bleibt anpassbar und Details können später folgen.",
        pointOneTitle: "Wenige Fingertipps", pointOneText: "Kein langes Formular bei Schmerzen.",
        pointTwoTitle: "Medikamente in Reichweite", pointTwoText: "Wähle deine Akutmedikation und ergänze die Wirkung später.",
        pointThreeTitle: "Offene Attacke bleibt sichtbar", pointThreeText: "Anpassen, abschließen oder löschen bleibt eindeutig."
      },
      insight: {
        eyebrow: "Persönliche Einblicke mit Premium", title: "Wie hast du die Wirkung deiner Medikamente erlebt?",
        description: "Halte fest, ob ein Mittel geholfen, teilweise geholfen oder nicht geholfen hat. MigraineMaatje fasst deine Antworten zusammen. Sieh auch, ob Beschwerden zurückkamen und was sich zwischen Monaten verändert hat. Einblicke erscheinen, wenn genügend Angaben vorliegen.",
        pointOneTitle: "Was hat geholfen?", pointOneText: "Wirkung je Medikament, vorsichtig aus abgeschlossenen Attacken gezählt.",
        pointTwoTitle: "Was kam zurück?", pointTwoText: "Wiederkehr innerhalb von 24 Stunden bleibt separat sichtbar.",
        pointThreeTitle: "Was hat sich verändert?", pointThreeText: "Vergleiche Migräne- und Medikamententage mit dem vorherigen Zeitraum."
      },
      gallery: {
        eyebrow: "Vom Tagebuch zum Arztgespräch", title: "Wichtiges wiederfinden, wenn du es brauchst.",
        description: "Kalender, Medikamente und Terminvorbereitung bilden eine ruhige Übersicht, ohne lose Notizen kurz vor dem Gespräch.",
        diaryTitle: "Tagebuch und Kalender", diaryText: "Attacken, Kopfschmerzen und Medikamententage wiederfinden.",
        medicationTitle: "Medikamente zusammen", medicationText: "Akutmedikation, Vorbeugung, Vorrat und Änderungen.",
        careTitle: "Vorbereitet zum Arzt", careText: "Fragen, Vereinbarungen und Punkte zur Nachverfolgung speichern."
      },
      value: {
        eyebrow: "Kostenlos und Premium", title: "Kostenlos dokumentieren. Mit Premium verstehen.",
        description: "Die Basis bleibt ohne Abo nutzbar. Premium ist freiwillig. Vor dem Kauf zeigt der Store Preis, Verlängerung und eine mögliche Probephase, für die du berechtigt bist.",
        freeTitle: "Immer kostenlos", freeText: "Alles für ein verlässliches Migränetagebuch.",
        freeOne: "Attacken erfassen und später abschließen", freeTwo: "Tagebuch, Kalender und Medikamentenverwaltung", freeThree: "Basisstatus und Basisbericht für den Arzt", freeFour: "Sicherung und Wiederherstellung auf deiner Plattform",
        premiumTitle: "Mehr aus deinem Tagebuch mitnehmen", premiumText: "Sieh, was du als hilfreich festgehalten hast, verfolge Veränderungen und sammle Fragen für dein Arztgespräch.",
        premiumOne: "Warum sich dein aktueller Status verändert", premiumTwo: "Medikamentenwirkung und Wiederkehr innerhalb von 24 Stunden", premiumThree: "Monatsanalyse in klarer Sprache", premiumFour: "Terminvorbereitung und Gesprächspunkte"
      },
      proof: {
        label: "Fiktives Beispiel", title: "Ein Medikament bei 10 abgeschlossenen Attacken",
        helped: "als hilfreich festgehalten", partly: "als teilweise hilfreich festgehalten", notHelped: "als nicht hilfreich festgehalten",
        note: "Eine Zusammenfassung eingetragener Antworten, keine Empfehlung zur Medikamentenwahl.",
        caption: "Echte App-Ansichten mit Beispieldaten. Die Bilder zeigen die iPhone-App."
      },
      price: {
        title: "Kostenlos starten. Selbst entscheiden.",
        text: "Im niederländischen App Store: 1,99 € pro Monat oder 19,99 € pro Jahr. Google Play und andere Länder können andere Preise anzeigen.",
        terms: "Premium ist ein automatisch verlängerndes Abonnement. Der Store zeigt vor dem Kauf den aktuellen Preis, die Bedingungen und eine mögliche Probephase. Kündige über dein Store-Konto."
      },
      privacy: {
        eyebrow: "Gesundheitsdaten brauchen Vertrauen", title: "Deine Daten bleiben deine.",
        description: "MigraineMaatje enthält keine Werbung und verkauft keine Gesundheitsdaten. Du entscheidest über Verknüpfungen und Sicherung.",
        oneTitle: "Kein Werbeprofil", oneText: "Keine Tracker zur Vermarktung von Gesundheitsinformationen.",
        twoTitle: "Verknüpfungen sind freiwillig", twoText: "Die App bleibt ohne Apple Health oder Health Connect nutzbar.",
        threeTitle: "Vorsichtige Einordnung", threeText: "Keine Diagnose, Vorhersage oder medizinische Beratung.",
        fourTitle: "Dein eigener Speicher", fourText: "Auf dem iPhone wählst du den Speicherort eines Exports selbst. Unter Android ist die Synchronisierung mit deinem Google Drive freiwillig."
      },
      guides: {
        eyebrow: "Ratgeber auf Niederländisch", title: "Migräne, Schwindel und dein Tagebuch.",
        description: "Was kannst du festhalten und zum Arztgespräch mitnehmen? Zwei niederländische Ratgeber mit Beispielen und medizinischen Quellen.",
        diaryTitle: "Migräne- und Kopfschmerztagebuch führen (Niederländisch)", diaryText: "Was du während einer Attacke festhältst, was warten kann und wie du Medikamente und Erholung wiederfindest.",
        pppdTitle: "PPPD und Migräne: Schwindel beschreiben (Niederländisch)", pppdText: "Warum Schwindel und Migräne nicht dasselbe sind, mit einer Beispielnotiz und Fragen für deinen Termin."
      },
      final: { title: "Weniger eintragen. Mehr wiederfinden.", description: "Starte kostenlos. Persönliche Einblicke wachsen, sobald genug eigene Daten vorhanden sind." },
      footer: { support: "Support", privacy: "Datenschutz", terms: "Bedingungen", studio: "Alle Apps" },
      images: images("de", { hero: "Mein Tag in MigraineMaatje", log: "Schnelle Wahl des Attackentyps", diary: "Das MigraineMaatje-Tagebuch", insights: "Persönliche Einblicke in MigraineMaatje", medication: "Medikamente verwalten in MigraineMaatje", care: "Versorgung und Termine in MigraineMaatje" })
    },

    fr: {
      meta: {
        title: "MigraineMaatje | Journal de migraine et de maux de tête",
        description: "Enregistrez rapidement une crise, complétez les détails plus tard et découvrez ce qui ressort de votre propre journal.",
        locale: "fr_FR"
      },
      global: { skip: "Aller au contenu", byStudio: "par de Bruin Studio", navigationLabel: "Navigation principale", languageLabel: "Choisir la langue", footerLabel: "Liens de pied de page" },
      nav: { how: "Fonctionnement", insight: "Analyses", care: "Pour votre médecin", privacy: "Confidentialité", download: "Télécharger" },
      actions: { appStore: "Télécharger dans l’App Store", playStore: "Disponible sur Google Play" },
      hero: {
        identity: "Pour iPhone, iPad, Apple Watch et Android", eyebrow: "Journal gratuit de migraine et de maux de tête", promise: "Une migraine ? Notez seulement l’essentiel.",
        description: "Enregistrez une crise en quelques gestes. Ajoutez les médicaments et la récupération plus tard. Lors de votre prochain rendez-vous, vous n’aurez pas à tout raconter de mémoire.",
        trustLine: "Sans publicité · aucune vente de données de santé",
        factOne: "L’enregistrement rapide reste gratuit", factTwo: "Sans publicité", factThree: "Aucune vente de données de santé",
        noteOneTitle: "Crise enregistrée", noteOneText: "Le reste peut attendre.", noteTwoTitle: "Compléter plus tard", noteTwoText: "Médicaments, récupération et retour."
      },
      trust: {
        oneTitle: "Du calme pendant la migraine", oneText: "Notez seulement ce qui compte maintenant",
        twoTitle: "Retrouvez ce qui a aidé", twoText: "Vos notes sur les médicaments et la récupération réunies",
        threeTitle: "N’oubliez pas vos questions", threeText: "Préparez votre consultation à votre rythme"
      },
      facts: {
        title: "Un journal de migraine pour iPhone et Android",
        summary: "MigraineMaatje est une application pour noter les migraines, les maux de tête, les médicaments et la récupération. Commencez gratuitement et créez un rapport de base pour votre médecin ou neurologue.",
        platformsLabel: "Appareils", platforms: "iPhone, iPad et Android, avec une application complémentaire pour Apple Watch.",
        languagesLabel: "Langues", languages: "Néerlandais, anglais, allemand et français.",
        freeLabel: "Base gratuite", free: "Enregistrer et terminer les crises, journal, calendrier, médicaments, état de base, jours de prise et rapport de base.",
        premiumLabel: "Premium facultatif", premium: "Explications personnelles, effet des médicaments, analyse mensuelle et préparation des consultations. Aucun abonnement n’est nécessaire pour tenir votre journal.",
        watchLabel: "Sans montre connectée", watch: "Oui. Notez vous-même les crises et les médicaments. Apple Santé et Health Connect sont facultatifs.",
        privacyLabel: "Confidentialité", privacy: "Aucune publicité ni vente de données de santé. Vous choisissez les connexions et les options de sauvegarde."
      },
      moments: {
        eyebrow: "Au bon moment", title: "L’app ne demande jamais plus que nécessaire.",
        description: "Pendant la douleur, il faut aller vite. Plus tard, vous voulez retrouver ce qui s’est passé. MigraineMaatje sépare volontairement ces moments.",
        cardOneTitle: "Quand la crise commence", cardOneText: "Choisissez migraine ou mal de tête, indiquez l’intensité et enregistrez. Les détails restent facultatifs.",
        cardTwoTitle: "Quand cela s’apaise", cardTwoText: "Ajoutez médicaments, aura, nausée et récupération seulement lorsque vous êtes prêt.",
        cardThreeTitle: "Quand vous voulez comprendre", cardThreeText: "Consultez les jours de médicaments, les retours, les différences mensuelles et les points à discuter en termes simples."
      },
      attack: {
        eyebrow: "Pendant une crise", title: "Prenez d’abord soin de vous. L’app peut attendre.",
        description: "Ouvrir une crise prend quelques secondes. Le temps continue, l’intensité reste modifiable et les détails peuvent attendre.",
        pointOneTitle: "Très peu de gestes", pointOneText: "Aucun long formulaire pendant la douleur.",
        pointTwoTitle: "Vos médicaments à portée", pointTwoText: "Choisissez votre traitement de crise et ajoutez son effet plus tard.",
        pointThreeTitle: "La crise ouverte reste visible", pointThreeText: "Modifier, terminer ou supprimer reste clair."
      },
      insight: {
        eyebrow: "Des observations personnelles avec Premium", title: "Quel effet avez-vous noté pour vos médicaments ?",
        description: "Notez si un médicament a aidé, a aidé en partie ou n’a pas aidé. MigraineMaatje rassemble vos réponses. Retrouvez aussi les retours de symptômes et les changements entre les mois. Les observations apparaissent lorsque vos notes sont suffisantes.",
        pointOneTitle: "Qu’est-ce qui a aidé ?", pointOneText: "Effet par médicament, compté avec prudence dans les crises terminées.",
        pointTwoTitle: "Qu’est-ce qui est revenu ?", pointTwoText: "Le retour dans les 24 heures reste visible séparément.",
        pointThreeTitle: "Qu’est-ce qui a changé ?", pointThreeText: "Comparez les jours de migraine et de médicaments à la période précédente."
      },
      gallery: {
        eyebrow: "Du journal à la consultation", title: "Retrouvez l’essentiel au bon moment.",
        description: "Calendrier, médicaments et préparation du rendez-vous forment un aperçu calme, sans notes éparses avant la consultation.",
        diaryTitle: "Journal et calendrier", diaryText: "Retrouvez crises, maux de tête et jours de médicaments.",
        medicationTitle: "Médicaments réunis", medicationText: "Traitement de crise, prévention, stock et changements.",
        careTitle: "Préparé pour le médecin", careText: "Conservez vos questions, décisions et points à suivre."
      },
      value: {
        eyebrow: "Gratuit et Premium", title: "Suivre gratuitement. Comprendre avec Premium.",
        description: "L’essentiel reste utile sans abonnement. Premium est facultatif. Avant l’achat, la boutique affiche le prix, le renouvellement et tout essai auquel vous êtes éligible.",
        freeTitle: "Toujours gratuit", freeText: "Tout le nécessaire pour un journal de migraine fiable.",
        freeOne: "Enregistrer les crises et les terminer plus tard", freeTwo: "Journal, calendrier et gestion des médicaments", freeThree: "Statut de base et rapport de base pour le médecin", freeFour: "Sauvegarde et restauration sur votre plateforme",
        premiumTitle: "Tirez davantage de votre journal", premiumText: "Retrouvez ce que vous avez noté comme utile, suivez les changements et gardez vos questions pour le médecin.",
        premiumOne: "Pourquoi votre statut actuel change", premiumTwo: "Effet des médicaments et retour dans les 24 heures", premiumThree: "Analyse mensuelle en langage clair", premiumFour: "Préparation de consultation et points à discuter"
      },
      proof: {
        label: "Exemple fictif", title: "Un médicament pour 10 crises terminées",
        helped: "fois noté comme utile", partly: "fois noté comme partiellement utile", notHelped: "fois noté comme sans effet",
        note: "Un résumé des réponses saisies, pas une recommandation sur le médicament à prendre.",
        caption: "Vrais écrans de l’app avec des données fictives. Les images montrent l’app iPhone."
      },
      price: {
        title: "Commencez gratuitement. Choisissez la suite.",
        text: "Dans l’App Store néerlandais : 1,99 € par mois ou 19,99 € par an. Google Play et les autres pays peuvent afficher des prix différents.",
        terms: "Premium est un abonnement à renouvellement automatique. Avant l’achat, la boutique affiche le prix actuel, les conditions et tout essai disponible. Résiliez depuis votre compte de boutique."
      },
      privacy: {
        eyebrow: "Les données de santé exigent de la confiance", title: "Vos données restent les vôtres.",
        description: "MigraineMaatje n’affiche aucune publicité et ne vend aucune donnée de santé. Vous choisissez les connexions et la sauvegarde.",
        oneTitle: "Aucun profil publicitaire", oneText: "Aucun traqueur pour monétiser vos informations de santé.",
        twoTitle: "Connexions facultatives", twoText: "L’app reste utile sans Apple Santé ni Health Connect.",
        threeTitle: "Interprétation prudente", threeText: "Aucun diagnostic, prédiction ou conseil médical.",
        fourTitle: "Votre propre stockage", fourText: "Sur iPhone, vous choisissez où enregistrer un export. Sur Android, la synchronisation avec votre Google Drive est facultative."
      },
      guides: {
        eyebrow: "Guides en néerlandais", title: "Migraine, vertiges et votre journal.",
        description: "Que noter et apporter à votre médecin ? Deux guides en néerlandais avec des exemples et des sources médicales.",
        diaryTitle: "Tenir un journal de migraine et de maux de tête (néerlandais)", diaryText: "Que noter pendant une crise, ce qui peut attendre et comment retrouver les médicaments et la récupération.",
        pppdTitle: "PPPD et migraine : décrire les vertiges (néerlandais)", pppdText: "Pourquoi les vertiges et la migraine sont différents, avec une note fictive et des questions pour votre rendez-vous."
      },
      final: { title: "Moins de saisie. Plus de repères.", description: "Commencez gratuitement. Les analyses personnelles évoluent lorsqu’il y a assez de vos propres données." },
      footer: { support: "Assistance", privacy: "Confidentialité", terms: "Conditions", studio: "Toutes les apps" },
      images: images("fr", { hero: "Ma journée dans MigraineMaatje", log: "Choix rapide du type de crise", diary: "Le journal MigraineMaatje", insights: "Analyses personnelles dans MigraineMaatje", medication: "Gestion des médicaments dans MigraineMaatje", care: "Soins et rendez-vous dans MigraineMaatje" })
    }
  };
})();
