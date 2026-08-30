window.PRODUCT_TRANSLATIONS = (() => {
  const images = (migraineLanguage, homeLanguage, labels) => ({
    migraineHero: {
      src: `migrainemaatje/assets/web-2026-08-30/${migraineLanguage}/hero.png`,
      alt: labels.migraineHero
    },
    migraineInsights: {
      src: `migrainemaatje/assets/web-2026-08-30/${migraineLanguage}/insights.png`,
      alt: labels.migraineInsights
    },
    homeDashboard: {
      src: `homescreen/assets/web-2026-08-30/${homeLanguage}/dashboard.png`,
      alt: labels.homeDashboard
    },
    homeControls: {
      src: `homescreen/assets/web-2026-08-30/${homeLanguage}/controls.png`,
      alt: labels.homeControls
    }
  });

  return {
    nl: {
      meta: {
        title: "de Bruin Studio - rustige apps voor echte momenten",
        description: "Ontdek MigraineMaatje en HomeScreen for HomeKit: onafhankelijke apps die dagelijkse informatie overzichtelijk en rustig maken.",
        locale: "nl_NL"
      },
      global: { skip: "Ga naar inhoud", navigationLabel: "Hoofdnavigatie", languageLabel: "Taal kiezen", footerLabel: "Voettekstnavigatie" },
      nav: { apps: "Apps", approach: "Aanpak", studio: "Studio", discover: "Ontdek de apps" },
      hero: {
        eyebrow: "de Bruin Studio",
        title: "Migraine bijhouden. Je woning bedienen.",
        description: "Twee apps, elk gebouwd rond één duidelijke taak. Zonder advertenties of verkoop van je gegevens.",
        primary: "Bekijk de apps", secondary: "Neem contact op",
        factOne: "Geen advertenties", factTwo: "Privacy als uitgangspunt", factThree: "Zelf ontworpen en gebouwd"
      },
      trust: {
        oneTitle: "Klein en betrokken", oneText: "Direct contact met de maker",
        twoTitle: "Geen dataverkoop", twoText: "Je gegevens zijn geen verdienmodel",
        threeTitle: "Gemaakt voor dagelijks gebruik", threeText: "Duidelijk op telefoon, tablet en horloge"
      },
      apps: { eyebrow: "Onze apps", title: "Twee apps met hetzelfde uitgangspunt: minder gedoe.", description: "Elke app wordt gebouwd rond het moment waarop je hem echt nodig hebt." },
      migraine: {
        promise: "Je migraine-dagboek, zonder extra gedoe.",
        description: "Leg een aanval in een paar tikken vast. Bekijk later wat hielp, hoe je herstelde en wat je met je arts wilt bespreken.",
        one: "Snel vastleggen tijdens een aanval", two: "Medicatie, dagboek en artsvoorbereiding bij elkaar", three: "Persoonlijke inzichten met voorzichtige uitleg"
      },
      home: {
        promise: "Je HomeKit-woning in één oogopslag.",
        description: "Een vast dashboard op iPad en snelle bediening op iPhone, zonder door kamers en menu's te zoeken.",
        one: "Leesbaar dashboard voor tafel of wand", two: "Favorieten, zoeken en bediening zonder omwegen", three: "30 dagen proberen, daarna één aankoop"
      },
      actions: { appStore: "Download voor Apple", googlePlay: "Download voor Android", tryHome: "Probeer 30 dagen", more: "Bekijk alles", migraine: "Zo werkt MigraineMaatje", home: "Zo werkt HomeScreen" },
      principles: {
        eyebrow: "Hoe we bouwen", title: "Techniek hoort op de achtergrond te blijven.", description: "Een goede app vraagt zo min mogelijk aandacht en geeft precies genoeg terug.",
        oneTitle: "Geen advertenties", oneText: "Geen advertentieprofielen in onze apps.",
        twoTitle: "Geen verkoop van gegevens", twoText: "Je gegevens zijn geen verdienmodel.",
        threeTitle: "Direct contact met mij", threeText: "Je vraag komt terecht bij de maker."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Zelf gemaakt. Rechtstreeks contact.", description: "Ik ontwerp en bouw deze apps zelf in Nederland. Heb je een vraag of werkt iets niet prettig, dan komt je bericht rechtstreeks bij mij terecht.", contact: "Mail de Bruin Studio" },
      final: { title: "Kies de app die vandaag iets makkelijker maakt.", description: "Bekijk rustig hoe MigraineMaatje en HomeScreen werken.", action: "Naar de apps" },
      footer: { contact: "Contact" },
      links: { migraine: "migrainemaatje/?lang=nl", home: "homescreen/?lang=nl", migraineSupport: "migrainemaatje/support.html?lang=nl", homeSupport: "homescreen/support.html?lang=nl" },
      images: images("nl", "nl", { migraineHero: "MigraineMaatje op iPhone", migraineInsights: "Persoonlijke inzichten in MigraineMaatje", homeDashboard: "HomeScreen-dashboard", homeControls: "Bediening in HomeScreen" })
    },

    en: {
      meta: {
        title: "de Bruin Studio - calm apps for real moments",
        description: "Meet MigraineMaatje and HomeScreen for HomeKit: independent apps that keep everyday information clear and calm.",
        locale: "en_US"
      },
      global: { skip: "Skip to content", navigationLabel: "Main navigation", languageLabel: "Choose language", footerLabel: "Footer navigation" },
      nav: { apps: "Apps", approach: "Approach", studio: "Studio", discover: "Explore the apps" },
      hero: {
        eyebrow: "de Bruin Studio",
        title: "Track migraine. Control your home.",
        description: "Two apps, each built around one clear task. No ads and no sale of your data.",
        primary: "Explore the apps", secondary: "Get in touch",
        factOne: "No ads", factTwo: "Privacy by design", factThree: "Designed and built in-house"
      },
      trust: {
        oneTitle: "Small and involved", oneText: "Direct contact with the maker",
        twoTitle: "No data sales", twoText: "Your data is not the business model",
        threeTitle: "Made for daily use", threeText: "Clear on phone, tablet and watch"
      },
      apps: { eyebrow: "Our apps", title: "Two apps, one principle: less hassle.", description: "Each app starts with the moment in which you actually need it." },
      migraine: {
        promise: "Your migraine diary, without extra hassle.",
        description: "Log an attack in a few taps. Later, see what helped, how you recovered and what you want to discuss with your doctor.",
        one: "Quick logging during an attack", two: "Medication, diary and appointment preparation together", three: "Personal insights with careful explanations"
      },
      home: {
        promise: "Your HomeKit home at a glance.",
        description: "A fixed dashboard on iPad and quick control on iPhone, without searching through rooms and menus.",
        one: "Readable dashboard for a table or wall", two: "Favourites, search and controls without detours", three: "Try everything for 30 days, then one purchase"
      },
      actions: { appStore: "Download for Apple", googlePlay: "Download for Android", tryHome: "Try for 30 days", more: "See everything", migraine: "How MigraineMaatje works", home: "How HomeScreen works" },
      principles: {
        eyebrow: "How we build", title: "Technology should stay in the background.", description: "A good app asks for little attention and gives just enough back.",
        oneTitle: "No ads", oneText: "No advertising profiles in our apps.",
        twoTitle: "No sale of data", twoText: "Your data is not the business model.",
        threeTitle: "Direct contact with me", threeText: "Your question reaches the maker."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Made by me. Direct contact.", description: "I design and build these apps myself in the Netherlands. Questions and feedback come straight to me.", contact: "Email the studio" },
      final: { title: "Choose the app that makes today a little easier.", description: "Take a calm look at MigraineMaatje and HomeScreen.", action: "View the apps" },
      footer: { contact: "Contact" },
      links: { migraine: "migrainemaatje/?lang=en", home: "homescreen/?lang=en", migraineSupport: "migrainemaatje/support.html?lang=en", homeSupport: "homescreen/support.html?lang=en" },
      images: images("en", "en", { migraineHero: "MigraineMaatje on iPhone", migraineInsights: "Personal insights in MigraineMaatje", homeDashboard: "HomeScreen dashboard", homeControls: "Controls in HomeScreen" })
    },

    de: {
      meta: {
        title: "de Bruin Studio - ruhige Apps für echte Momente",
        description: "Entdecke MigraineMaatje und HomeScreen for HomeKit: unabhängige Apps, die Alltagsinformationen klar und ruhig darstellen.",
        locale: "de_DE"
      },
      global: { skip: "Zum Inhalt springen", navigationLabel: "Hauptnavigation", languageLabel: "Sprache wählen", footerLabel: "Fußzeilennavigation" },
      nav: { apps: "Apps", approach: "Ansatz", studio: "Studio", discover: "Apps entdecken" },
      hero: {
        eyebrow: "de Bruin Studio",
        title: "Migräne festhalten. Dein Zuhause bedienen.",
        description: "Zwei Apps, jeweils für eine klare Aufgabe. Ohne Werbung und ohne Verkauf deiner Daten.",
        primary: "Apps entdecken", secondary: "Kontakt aufnehmen",
        factOne: "Keine Werbung", factTwo: "Datenschutz von Anfang an", factThree: "Selbst entworfen und entwickelt"
      },
      trust: {
        oneTitle: "Klein und nahbar", oneText: "Direkter Kontakt zum Entwickler",
        twoTitle: "Kein Datenverkauf", twoText: "Deine Daten sind kein Geschäftsmodell",
        threeTitle: "Für den Alltag gemacht", threeText: "Klar auf Smartphone, Tablet und Watch"
      },
      apps: { eyebrow: "Unsere Apps", title: "Zwei Apps, ein Grundsatz: weniger Aufwand.", description: "Jede App beginnt bei dem Moment, in dem du sie wirklich brauchst." },
      migraine: {
        promise: "Dein Migränetagebuch, ohne zusätzlichen Aufwand.",
        description: "Erfasse eine Attacke mit wenigen Fingertipps. Sieh später, was geholfen hat, wie du dich erholt hast und was du mit deinem Arzt besprechen möchtest.",
        one: "Schnell erfassen während einer Attacke", two: "Medikation, Tagebuch und Arzttermin-Vorbereitung zusammen", three: "Persönliche Einblicke mit vorsichtiger Erklärung"
      },
      home: {
        promise: "Dein HomeKit-Zuhause auf einen Blick.",
        description: "Ein festes Dashboard auf dem iPad und schnelle Bedienung auf dem iPhone, ohne durch Räume und Menüs zu suchen.",
        one: "Gut lesbares Dashboard für Tisch oder Wand", two: "Favoriten, Suche und Bedienung ohne Umwege", three: "30 Tage testen, danach einmal kaufen"
      },
      actions: { appStore: "Für Apple laden", googlePlay: "Für Android laden", tryHome: "30 Tage testen", more: "Alles ansehen", migraine: "So funktioniert MigraineMaatje", home: "So funktioniert HomeScreen" },
      principles: {
        eyebrow: "Wie wir entwickeln", title: "Technik sollte im Hintergrund bleiben.", description: "Eine gute App verlangt wenig Aufmerksamkeit und gibt genau genug zurück.",
        oneTitle: "Keine Werbung", oneText: "Keine Werbeprofile in unseren Apps.",
        twoTitle: "Kein Verkauf von Daten", twoText: "Deine Daten sind kein Geschäftsmodell.",
        threeTitle: "Direkter Kontakt mit mir", threeText: "Deine Frage erreicht den Entwickler."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Von mir gemacht. Direkter Kontakt.", description: "Ich entwerfe und entwickle diese Apps selbst in den Niederlanden. Fragen und Feedback erreichen mich direkt.", contact: "E-Mail an das Studio" },
      final: { title: "Wähle die App, die den heutigen Tag etwas leichter macht.", description: "Sieh dir MigraineMaatje und HomeScreen in Ruhe an.", action: "Zu den Apps" },
      footer: { contact: "Kontakt" },
      links: { migraine: "migrainemaatje/?lang=de", home: "homescreen/?lang=de", migraineSupport: "migrainemaatje/support.html?lang=de", homeSupport: "homescreen/support.html?lang=de" },
      images: images("de", "de", { migraineHero: "MigraineMaatje auf dem iPhone", migraineInsights: "Persönliche Einblicke in MigraineMaatje", homeDashboard: "HomeScreen-Dashboard", homeControls: "Bedienung in HomeScreen" })
    },

    fr: {
      meta: {
        title: "de Bruin Studio - des apps sereines pour la vraie vie",
        description: "Découvrez MigraineMaatje et HomeScreen for HomeKit : des apps indépendantes qui rendent les informations quotidiennes plus claires.",
        locale: "fr_FR"
      },
      global: { skip: "Aller au contenu", navigationLabel: "Navigation principale", languageLabel: "Choisir la langue", footerLabel: "Navigation du pied de page" },
      nav: { apps: "Apps", approach: "Approche", studio: "Studio", discover: "Découvrir les apps" },
      hero: {
        eyebrow: "de Bruin Studio",
        title: "Suivre la migraine. Piloter votre maison.",
        description: "Deux apps, chacune conçue pour une tâche claire. Sans publicité ni vente de vos données.",
        primary: "Découvrir les apps", secondary: "Nous contacter",
        factOne: "Sans publicité", factTwo: "Confidentialité dès la conception", factThree: "Conçues et développées en interne"
      },
      trust: {
        oneTitle: "Petit studio, contact direct", oneText: "Échangez avec la personne qui crée l'app",
        twoTitle: "Aucune vente de données", twoText: "Vos données ne sont pas notre modèle économique",
        threeTitle: "Pensées pour le quotidien", threeText: "Claires sur téléphone, tablette et montre"
      },
      apps: { eyebrow: "Nos apps", title: "Deux apps, un même principe : moins de complications.", description: "Chaque app part du moment où vous en avez réellement besoin." },
      migraine: {
        promise: "Votre journal de migraine, sans complication.",
        description: "Enregistrez une crise en quelques gestes. Retrouvez ensuite ce qui vous a aidé, comment vous avez récupéré et ce que vous souhaitez aborder avec votre médecin.",
        one: "Saisie rapide pendant une crise", two: "Médicaments, journal et préparation du rendez-vous réunis", three: "Repères personnels expliqués avec prudence"
      },
      home: {
        promise: "Votre maison HomeKit en un coup d'œil.",
        description: "Un tableau de bord fixe sur iPad et des commandes rapides sur iPhone, sans chercher dans les pièces et les menus.",
        one: "Tableau de bord lisible sur table ou au mur", two: "Favoris, recherche et commandes sans détour", three: "Essai complet de 30 jours, puis un achat unique"
      },
      actions: { appStore: "Télécharger pour Apple", googlePlay: "Télécharger pour Android", tryHome: "Essayer 30 jours", more: "Tout découvrir", migraine: "Comment fonctionne MigraineMaatje", home: "Comment fonctionne HomeScreen" },
      principles: {
        eyebrow: "Notre façon de créer", title: "La technologie doit rester en arrière-plan.", description: "Une bonne app demande peu d'attention et donne juste ce qu'il faut.",
        oneTitle: "Sans publicité", oneText: "Aucun profil publicitaire dans nos apps.",
        twoTitle: "Aucune vente de données", twoText: "Vos données ne sont pas notre modèle économique.",
        threeTitle: "Contact direct avec moi", threeText: "Votre question arrive chez la personne qui crée l'app."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Créées par moi. Contact direct.", description: "Je conçois et développe moi-même ces apps aux Pays-Bas. Vos questions et vos retours m'arrivent directement.", contact: "Écrire au studio" },
      final: { title: "Choisissez l'app qui simplifie un peu votre journée.", description: "Découvrez tranquillement MigraineMaatje et HomeScreen.", action: "Voir les apps" },
      footer: { contact: "Contact" },
      links: { migraine: "migrainemaatje/?lang=fr", home: "homescreen/?lang=en", migraineSupport: "migrainemaatje/support.html?lang=fr", homeSupport: "homescreen/support.html?lang=en" },
      images: images("fr", "en", { migraineHero: "MigraineMaatje sur iPhone", migraineInsights: "Repères personnels dans MigraineMaatje", homeDashboard: "Tableau de bord HomeScreen", homeControls: "Commandes dans HomeScreen" })
    }
  };
})();
