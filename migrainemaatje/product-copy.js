(() => {
  const images = (language, labels) => ({
    hero: { src: `assets/web-2026-08-30/${language}/hero.png`, alt: labels.hero },
    log: { src: `assets/web-2026-08-30/${language}/log.png`, alt: labels.log },
    diary: { src: `assets/web-2026-08-30/${language}/diary.png`, alt: labels.diary },
    insights: { src: `assets/web-2026-08-30/${language}/insights.png`, alt: labels.insights },
    medication: { src: `assets/web-2026-08-30/${language}/medication.png`, alt: labels.medication },
    care: { src: `assets/web-2026-08-30/${language}/care.png`, alt: labels.care }
  });

  window.PRODUCT_TRANSLATIONS = {
    nl: {
      meta: {
        title: "MigraineMaatje - migraine bijhouden zonder gedoe",
        description: "Leg een migraineaanval snel vast, vul later aan en ontdek wat in jouw eigen dagboek, medicatie en herstel opvalt.",
        locale: "nl_NL"
      },
      global: { skip: "Ga naar inhoud", byStudio: "door de Bruin Studio", navigationLabel: "Hoofdnavigatie", languageLabel: "Kies taal", footerLabel: "Voettekstlinks" },
      nav: { how: "Zo werkt het", insight: "Inzichten", care: "Voor je arts", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Download in de App Store", playStore: "Download via Google Play" },
      hero: {
        identity: "Voor iPhone, iPad, Apple Watch en Android",
        eyebrow: "Een rustig migraine-dagboek",
        promise: "Snel vastleggen. Later zien wat hielp.",
        description: "Leg een aanval in een paar tikken vast. Vul later medicatie en herstel aan en bewaar wat je met je arts wilt bespreken.",
        trustLine: "Geen advertenties · geen verkoop van gezondheidsdata",
        factOne: "Snel vastleggen blijft gratis", factTwo: "Geen advertenties", factThree: "Geen verkoop van gezondheidsdata",
        noteOneTitle: "Aanval vastgelegd", noteOneText: "De rest kan wachten.", noteTwoTitle: "Later aanvullen", noteTwoText: "Medicatie, herstel en terugkeer."
      },
      trust: {
        oneTitle: "Rust tijdens migraine", oneText: "Alleen vastleggen wat nu nodig is",
        twoTitle: "Inzicht uit je eigen gegevens", twoText: "Geen algemene conclusie vermomd als zekerheid",
        threeTitle: "Gebouwd voor vertrouwen", threeText: "Jij kiest welke koppelingen je gebruikt"
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
        eyebrow: "Jouw verhaal, niet een gemiddelde", title: "Van registreren naar iets waar je wat aan hebt.",
        description: "Het dagboek blijft overzichtelijk. Als er genoeg gegevens zijn, maakt Premium zichtbaar wat in jouw vastgelegde aanvallen, medicatie en herstel terugkomt.",
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
        description: "De basis blijft bruikbaar zonder abonnement. Premium is er voor terugkerende persoonlijke verdieping.",
        freeTitle: "Altijd gratis", freeText: "Alles wat je nodig hebt om een betrouwbaar migraine-dagboek bij te houden.",
        freeOne: "Aanvallen vastleggen en later afronden", freeTwo: "Dagboek, kalender en medicatiebeheer", freeThree: "Basisstatus en basisrapport voor je arts", freeFour: "Reservekopie en herstel op je eigen platform",
        premiumTitle: "Wat verandert er bij mij?", premiumText: "Persoonlijke uitleg uit wat je zelf vastlegt, zonder te doen alsof een verband een zekerheid is.",
        premiumOne: "Waarom je actuele status verandert", premiumTwo: "Medicatie-effect en terugkeer binnen 24 uur", premiumThree: "Maandanalyse in gewone taal", premiumFour: "Consultvoorbereiding en bespreekpunten"
      },
      privacy: {
        eyebrow: "Gezondheidsdata vraagt om vertrouwen", title: "Jouw gegevens blijven van jou.",
        description: "MigraineMaatje heeft geen advertenties en verkoopt geen gezondheidsdata. Je kiest zelf welke koppelingen of reservekopie je gebruikt.",
        oneTitle: "Geen advertentieprofiel", oneText: "Geen trackers om gezondheidsinformatie te gelde te maken.",
        twoTitle: "Koppelingen zijn optioneel", twoText: "De app blijft bruikbaar zonder Apple Gezondheid of Health Connect.",
        threeTitle: "Voorzichtige uitleg", threeText: "Geen diagnose, voorspelling of medisch advies.",
        fourTitle: "Jouw eigen opslag", fourText: "Reservekopieën blijven in je eigen iCloud of Google Drive."
      },
      final: { title: "Minder invullen. Meer terugvinden.", description: "Begin gratis met vastleggen. Persoonlijke inzichten groeien mee wanneer er genoeg van jouw eigen gegevens zijn." },
      footer: { support: "Support", privacy: "Privacy", terms: "Voorwaarden", studio: "Alle apps" },
      images: images("nl", { hero: "Een open migraineaanval in MigraineMaatje", log: "Snel een aanvalstype kiezen", diary: "Het dagboek van MigraineMaatje", insights: "Persoonlijke inzichten in MigraineMaatje", medication: "Medicatie beheren in MigraineMaatje", care: "Arts en afspraken in MigraineMaatje" })
    },

    en: {
      meta: {
        title: "MigraineMaatje - migraine tracking without the overload",
        description: "Log a migraine attack quickly, add details later and see what stands out in your own diary, medication and recovery.",
        locale: "en_US"
      },
      global: { skip: "Skip to content", byStudio: "by de Bruin Studio", navigationLabel: "Main navigation", languageLabel: "Choose language", footerLabel: "Footer links" },
      nav: { how: "How it works", insight: "Insights", care: "For your doctor", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Download on the App Store", playStore: "Get it on Google Play" },
      hero: {
        identity: "For iPhone, iPad, Apple Watch and Android", eyebrow: "A calmer migraine diary", promise: "Log it quickly. See what helped later.",
        description: "Log an attack in a few taps. Add medication and recovery later, and keep what you want to discuss with your doctor.",
        trustLine: "No ads · no sale of health data",
        factOne: "Quick logging stays free", factTwo: "No advertising", factThree: "No sale of health data",
        noteOneTitle: "Attack saved", noteOneText: "Everything else can wait.", noteTwoTitle: "Add details later", noteTwoText: "Medication, recovery and recurrence."
      },
      trust: {
        oneTitle: "Calm during migraine", oneText: "Only record what matters right now",
        twoTitle: "Insight from your own data", twoText: "No generic conclusion presented as certainty",
        threeTitle: "Built for trust", threeText: "You choose which connections to use"
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
        eyebrow: "Your story, not an average", title: "Turn tracking into something useful.",
        description: "The diary stays clear. Once there is enough data, Premium shows what recurs across your recorded attacks, medication and recovery.",
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
        description: "Essential care remains useful without a subscription. Premium adds recurring personal interpretation.",
        freeTitle: "Always free", freeText: "Everything you need for a dependable migraine diary.",
        freeOne: "Log attacks and finish them later", freeTwo: "Diary, calendar and medication management", freeThree: "Basic status and basic doctor report", freeFour: "Backup and restore on your own platform",
        premiumTitle: "What is changing for me?", premiumText: "Personal explanation from what you record, without treating an association as certainty.",
        premiumOne: "Why your current status changes", premiumTwo: "Medication effect and recurrence within 24 hours", premiumThree: "Monthly analysis in plain language", premiumFour: "Consultation preparation and discussion points"
      },
      privacy: {
        eyebrow: "Health data deserves trust", title: "Your data remains yours.",
        description: "MigraineMaatje has no ads and does not sell health data. You decide which connections or backup to use.",
        oneTitle: "No advertising profile", oneText: "No trackers that monetise health information.",
        twoTitle: "Connections are optional", twoText: "The app remains useful without Apple Health or Health Connect.",
        threeTitle: "Careful interpretation", threeText: "No diagnosis, prediction or medical advice.",
        fourTitle: "Your own storage", fourText: "Backups remain in your own iCloud or Google Drive."
      },
      final: { title: "Record less. Remember more.", description: "Start tracking for free. Personal insights grow once there is enough of your own data." },
      footer: { support: "Support", privacy: "Privacy", terms: "Terms", studio: "All apps" },
      images: images("en", { hero: "An open migraine attack in MigraineMaatje", log: "Quickly choosing an attack type", diary: "The MigraineMaatje diary", insights: "Personal insights in MigraineMaatje", medication: "Recording acute medication", care: "Care and appointments in MigraineMaatje" })
    },

    de: {
      meta: {
        title: "MigraineMaatje - Migräne dokumentieren ohne zusätzlichen Stress",
        description: "Dokumentiere eine Migräneattacke schnell, ergänze später Details und erkenne, was in deinem eigenen Tagebuch auffällt.",
        locale: "de_DE"
      },
      global: { skip: "Zum Inhalt springen", byStudio: "von de Bruin Studio", navigationLabel: "Hauptnavigation", languageLabel: "Sprache wählen", footerLabel: "Links im Seitenfuß" },
      nav: { how: "So funktioniert es", insight: "Einblicke", care: "Für deinen Arzt", privacy: "Datenschutz", download: "Laden" },
      actions: { appStore: "Im App Store laden", playStore: "Bei Google Play herunterladen" },
      hero: {
        identity: "Für iPhone, iPad, Apple Watch und Android", eyebrow: "Ein ruhigeres Migränetagebuch", promise: "Schnell festhalten. Später sehen, was geholfen hat.",
        description: "Halte eine Attacke mit wenigen Fingertipps fest. Ergänze später Medikamente und Erholung und bewahre auf, was du mit deinem Arzt besprechen möchtest.",
        trustLine: "Keine Werbung · kein Verkauf von Gesundheitsdaten",
        factOne: "Schnelles Erfassen bleibt kostenlos", factTwo: "Keine Werbung", factThree: "Kein Verkauf von Gesundheitsdaten",
        noteOneTitle: "Attacke gespeichert", noteOneText: "Alles andere kann warten.", noteTwoTitle: "Später ergänzen", noteTwoText: "Medikamente, Erholung und Wiederkehr."
      },
      trust: {
        oneTitle: "Ruhe während der Migräne", oneText: "Nur festhalten, was gerade nötig ist",
        twoTitle: "Einblicke aus deinen eigenen Daten", twoText: "Keine allgemeine Aussage als Gewissheit",
        threeTitle: "Auf Vertrauen ausgelegt", threeText: "Du entscheidest, welche Verknüpfungen du nutzt"
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
        eyebrow: "Deine Geschichte, kein Durchschnitt", title: "Aus Dokumentation wird etwas Nützliches.",
        description: "Das Tagebuch bleibt übersichtlich. Mit genügend Daten zeigt Premium, was sich in deinen erfassten Attacken, Medikamenten und Erholungsphasen wiederholt.",
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
        description: "Die wichtige Basis bleibt ohne Abo nutzbar. Premium ergänzt wiederkehrende persönliche Einordnung.",
        freeTitle: "Immer kostenlos", freeText: "Alles für ein verlässliches Migränetagebuch.",
        freeOne: "Attacken erfassen und später abschließen", freeTwo: "Tagebuch, Kalender und Medikamentenverwaltung", freeThree: "Basisstatus und Basisbericht für den Arzt", freeFour: "Sicherung und Wiederherstellung auf deiner Plattform",
        premiumTitle: "Was verändert sich bei mir?", premiumText: "Persönliche Erklärungen aus deinen Einträgen, ohne einen Zusammenhang als Gewissheit darzustellen.",
        premiumOne: "Warum sich dein aktueller Status verändert", premiumTwo: "Medikamentenwirkung und Wiederkehr innerhalb von 24 Stunden", premiumThree: "Monatsanalyse in klarer Sprache", premiumFour: "Terminvorbereitung und Gesprächspunkte"
      },
      privacy: {
        eyebrow: "Gesundheitsdaten brauchen Vertrauen", title: "Deine Daten bleiben deine.",
        description: "MigraineMaatje enthält keine Werbung und verkauft keine Gesundheitsdaten. Du entscheidest über Verknüpfungen und Sicherung.",
        oneTitle: "Kein Werbeprofil", oneText: "Keine Tracker zur Vermarktung von Gesundheitsinformationen.",
        twoTitle: "Verknüpfungen sind freiwillig", twoText: "Die App bleibt ohne Apple Health oder Health Connect nutzbar.",
        threeTitle: "Vorsichtige Einordnung", threeText: "Keine Diagnose, Vorhersage oder medizinische Beratung.",
        fourTitle: "Dein eigener Speicher", fourText: "Sicherungen bleiben in deinem eigenen iCloud- oder Google-Drive-Konto."
      },
      final: { title: "Weniger eintragen. Mehr wiederfinden.", description: "Starte kostenlos. Persönliche Einblicke wachsen, sobald genug eigene Daten vorhanden sind." },
      footer: { support: "Support", privacy: "Datenschutz", terms: "Bedingungen", studio: "Alle Apps" },
      images: images("de", { hero: "Eine offene Migräneattacke in MigraineMaatje", log: "Schnelle Wahl des Attackentyps", diary: "Das MigraineMaatje-Tagebuch", insights: "Persönliche Einblicke in MigraineMaatje", medication: "Akutmedikation erfassen", care: "Behandlung und Termine in MigraineMaatje" })
    },

    fr: {
      meta: {
        title: "MigraineMaatje - suivre vos migraines sans surcharge",
        description: "Enregistrez rapidement une crise, complétez les détails plus tard et découvrez ce qui ressort de votre propre journal.",
        locale: "fr_FR"
      },
      global: { skip: "Aller au contenu", byStudio: "par de Bruin Studio", navigationLabel: "Navigation principale", languageLabel: "Choisir la langue", footerLabel: "Liens de pied de page" },
      nav: { how: "Fonctionnement", insight: "Analyses", care: "Pour votre médecin", privacy: "Confidentialité", download: "Télécharger" },
      actions: { appStore: "Télécharger dans l’App Store", playStore: "Disponible sur Google Play" },
      hero: {
        identity: "Pour iPhone, iPad, Apple Watch et Android", eyebrow: "Un journal de migraine plus apaisé", promise: "Enregistrer vite. Voir ensuite ce qui a aidé.",
        description: "Enregistrez une crise en quelques gestes. Ajoutez plus tard les médicaments et la récupération, puis gardez ce que vous souhaitez aborder avec votre médecin.",
        trustLine: "Sans publicité · aucune vente de données de santé",
        factOne: "L’enregistrement rapide reste gratuit", factTwo: "Sans publicité", factThree: "Aucune vente de données de santé",
        noteOneTitle: "Crise enregistrée", noteOneText: "Le reste peut attendre.", noteTwoTitle: "Compléter plus tard", noteTwoText: "Médicaments, récupération et retour."
      },
      trust: {
        oneTitle: "Du calme pendant la migraine", oneText: "Notez seulement ce qui compte maintenant",
        twoTitle: "Des éclairages issus de vos données", twoText: "Aucune généralité présentée comme une certitude",
        threeTitle: "Conçu pour la confiance", threeText: "Vous choisissez les connexions utilisées"
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
        eyebrow: "Votre histoire, pas une moyenne", title: "Transformez le suivi en quelque chose d’utile.",
        description: "Le journal reste clair. Avec assez de données, Premium montre ce qui revient dans vos crises, vos médicaments et votre récupération enregistrés.",
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
        description: "L’essentiel reste utile sans abonnement. Premium ajoute une interprétation personnelle régulière.",
        freeTitle: "Toujours gratuit", freeText: "Tout le nécessaire pour un journal de migraine fiable.",
        freeOne: "Enregistrer les crises et les terminer plus tard", freeTwo: "Journal, calendrier et gestion des médicaments", freeThree: "Statut de base et rapport de base pour le médecin", freeFour: "Sauvegarde et restauration sur votre plateforme",
        premiumTitle: "Qu’est-ce qui change pour moi ?", premiumText: "Une explication personnelle à partir de vos saisies, sans présenter une association comme une certitude.",
        premiumOne: "Pourquoi votre statut actuel change", premiumTwo: "Effet des médicaments et retour dans les 24 heures", premiumThree: "Analyse mensuelle en langage clair", premiumFour: "Préparation de consultation et points à discuter"
      },
      privacy: {
        eyebrow: "Les données de santé exigent de la confiance", title: "Vos données restent les vôtres.",
        description: "MigraineMaatje n’affiche aucune publicité et ne vend aucune donnée de santé. Vous choisissez les connexions et la sauvegarde.",
        oneTitle: "Aucun profil publicitaire", oneText: "Aucun traqueur pour monétiser vos informations de santé.",
        twoTitle: "Connexions facultatives", twoText: "L’app reste utile sans Apple Santé ni Health Connect.",
        threeTitle: "Interprétation prudente", threeText: "Aucun diagnostic, prédiction ou conseil médical.",
        fourTitle: "Votre propre stockage", fourText: "Les sauvegardes restent dans votre compte iCloud ou Google Drive."
      },
      final: { title: "Moins de saisie. Plus de repères.", description: "Commencez gratuitement. Les analyses personnelles évoluent lorsqu’il y a assez de vos propres données." },
      footer: { support: "Assistance", privacy: "Confidentialité", terms: "Conditions", studio: "Toutes les apps" },
      images: images("fr", { hero: "Une crise de migraine ouverte dans MigraineMaatje", log: "Choix rapide du type de crise", diary: "Le journal MigraineMaatje", insights: "Analyses personnelles dans MigraineMaatje", medication: "Enregistrement du traitement de crise", care: "Soins et rendez-vous dans MigraineMaatje" })
    }
  };
})();
