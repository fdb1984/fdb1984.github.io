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
        eyebrow: "Onafhankelijke apps uit Nederland",
        title: "Software die rust brengt in echte situaties.",
        description: "Bij migraine wil je snel kunnen vastleggen. Thuis wil je niet zoeken naar de juiste knop. Daarom maken we apps die eerst duidelijk zijn en daarna pas slim.",
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
        promise: "Migraine bijhouden zonder dat je hoofd er nog voller van wordt.",
        description: "Leg een aanval snel vast, vul later aan en ontdek welke veranderingen in je eigen dagboek, medicatie, gezondheid en weer echt opvallen.",
        one: "Snel vastleggen tijdens een aanval", two: "Medicatie, dagboek en artsvoorbereiding bij elkaar", three: "Persoonlijke inzichten met voorzichtige uitleg"
      },
      home: {
        promise: "Je woning op één rustig scherm.",
        description: "Maak van je iPad een vast dashboard en gebruik je iPhone voor snelle bediening. Tijd, lokaal weer, klimaat, lampen, schermen en camera's blijven overzichtelijk bij elkaar.",
        one: "Leesbaar dashboard voor tafel of wand", two: "Favorieten, zoeken en bediening zonder omwegen", three: "30 dagen proberen, daarna één aankoop"
      },
      actions: { appStore: "Download voor Apple", googlePlay: "Download voor Android", tryHome: "Probeer 30 dagen", more: "Bekijk alles" },
      principles: {
        eyebrow: "Hoe we bouwen", title: "Techniek hoort op de achtergrond te blijven.", description: "Een goede app vraagt zo min mogelijk aandacht en geeft precies genoeg terug.",
        oneTitle: "Rust vóór functies", oneText: "Geen scherm vol opties als één duidelijke handeling genoeg is.",
        twoTitle: "Eerlijk over gegevens", twoText: "We leggen uit wat een app gebruikt, waar het staat en wat een conclusie nog niet zegt.",
        threeTitle: "Verbeterd met echte feedback", threeText: "De apps groeien vanuit dagelijks gebruik, niet vanuit een lijst marketingfuncties."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Onafhankelijk gemaakt, dichtbij gehouden.", description: "de Bruin Studio is een kleine Nederlandse softwarestudio. Dat betekent korte lijnen, duidelijke keuzes en aandacht voor de mensen die een app dagelijks gebruiken.", contact: "Mail de studio" },
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
        eyebrow: "Independent apps from the Netherlands",
        title: "Software that brings calm to real situations.",
        description: "With migraine, logging should be quick. At home, the right control should be easy to find. We build apps that are clear first and smart second.",
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
        promise: "Track migraine without adding more noise to your day.",
        description: "Log an attack quickly, add details later and see which changes in your own diary, medication, health and weather genuinely stand out.",
        one: "Quick logging during an attack", two: "Medication, diary and appointment preparation together", three: "Personal insights with careful explanations"
      },
      home: {
        promise: "Your home on one calm screen.",
        description: "Turn your iPad into a fixed dashboard and use your iPhone for quick controls. Time, local weather, climate, lights, shades and cameras stay together in one clear view.",
        one: "Readable dashboard for a table or wall", two: "Favourites, search and controls without detours", three: "Try everything for 30 days, then one purchase"
      },
      actions: { appStore: "Download for Apple", googlePlay: "Download for Android", tryHome: "Try for 30 days", more: "See everything" },
      principles: {
        eyebrow: "How we build", title: "Technology should stay in the background.", description: "A good app asks for little attention and gives just enough back.",
        oneTitle: "Calm before features", oneText: "No screen full of options when one clear action will do.",
        twoTitle: "Honest about data", twoText: "We explain what an app uses, where it stays and what a conclusion cannot tell you yet.",
        threeTitle: "Improved through real feedback", threeText: "The apps grow from daily use, not from a marketing checklist."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Independently made, kept close.", description: "de Bruin Studio is a small Dutch software studio. That means short lines, clear choices and attention for the people who use an app every day.", contact: "Email the studio" },
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
        eyebrow: "Unabhängige Apps aus den Niederlanden",
        title: "Software, die in echten Situationen Ruhe schafft.",
        description: "Bei Migräne soll das Erfassen schnell gehen. Zu Hause soll die richtige Bedienung leicht zu finden sein. Deshalb bauen wir Apps, die zuerst klar und dann intelligent sind.",
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
        promise: "Migräne festhalten, ohne den Kopf noch voller zu machen.",
        description: "Erfasse eine Attacke schnell, ergänze Details später und sieh, welche Veränderungen in deinem Tagebuch, deiner Medikation, Gesundheit und beim Wetter wirklich auffallen.",
        one: "Schnell erfassen während einer Attacke", two: "Medikation, Tagebuch und Arzttermin-Vorbereitung zusammen", three: "Persönliche Einblicke mit vorsichtiger Erklärung"
      },
      home: {
        promise: "Dein Zuhause auf einem ruhigen Bildschirm.",
        description: "Mach dein iPad zum festen Dashboard und nutze dein iPhone zur schnellen Bedienung. Uhrzeit, lokales Wetter, Klima, Licht, Beschattung und Kameras bleiben übersichtlich zusammen.",
        one: "Gut lesbares Dashboard für Tisch oder Wand", two: "Favoriten, Suche und Bedienung ohne Umwege", three: "30 Tage testen, danach einmal kaufen"
      },
      actions: { appStore: "Für Apple laden", googlePlay: "Für Android laden", tryHome: "30 Tage testen", more: "Alles ansehen" },
      principles: {
        eyebrow: "Wie wir entwickeln", title: "Technik sollte im Hintergrund bleiben.", description: "Eine gute App verlangt wenig Aufmerksamkeit und gibt genau genug zurück.",
        oneTitle: "Ruhe vor Funktionen", oneText: "Kein Bildschirm voller Optionen, wenn eine klare Handlung genügt.",
        twoTitle: "Ehrlich bei Daten", twoText: "Wir erklären, was eine App nutzt, wo es bleibt und was eine Auswertung noch nicht aussagt.",
        threeTitle: "Mit echtem Feedback verbessert", threeText: "Die Apps wachsen aus dem täglichen Gebrauch, nicht aus einer Marketingliste."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Unabhängig entwickelt, persönlich geblieben.", description: "de Bruin Studio ist ein kleines niederländisches Softwarestudio. Das bedeutet kurze Wege, klare Entscheidungen und Aufmerksamkeit für die Menschen, die eine App täglich nutzen.", contact: "E-Mail an das Studio" },
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
        eyebrow: "Apps indépendantes créées aux Pays-Bas",
        title: "Des logiciels qui apaisent les situations réelles.",
        description: "Avec une migraine, la saisie doit être rapide. À la maison, la bonne commande doit être facile à trouver. Nous créons des apps d'abord claires, puis intelligentes.",
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
        promise: "Suivre la migraine sans ajouter du bruit à votre journée.",
        description: "Enregistrez rapidement une crise, complétez-la plus tard et voyez quels changements ressortent vraiment de votre journal, de vos médicaments, de votre santé et de la météo.",
        one: "Saisie rapide pendant une crise", two: "Médicaments, journal et préparation du rendez-vous réunis", three: "Repères personnels expliqués avec prudence"
      },
      home: {
        promise: "Votre maison sur un seul écran calme.",
        description: "Transformez votre iPad en tableau de bord fixe et utilisez votre iPhone pour les commandes rapides. Heure, météo locale, climat, éclairage, stores et caméras restent réunis.",
        one: "Tableau de bord lisible sur table ou au mur", two: "Favoris, recherche et commandes sans détour", three: "Essai complet de 30 jours, puis un achat unique"
      },
      actions: { appStore: "Télécharger pour Apple", googlePlay: "Télécharger pour Android", tryHome: "Essayer 30 jours", more: "Tout découvrir" },
      principles: {
        eyebrow: "Notre façon de créer", title: "La technologie doit rester en arrière-plan.", description: "Une bonne app demande peu d'attention et donne juste ce qu'il faut.",
        oneTitle: "Le calme avant les fonctions", oneText: "Pas d'écran rempli d'options lorsqu'une seule action claire suffit.",
        twoTitle: "Transparence sur les données", twoText: "Nous expliquons ce que l'app utilise, où les données restent et ce qu'une analyse ne permet pas encore d'affirmer.",
        threeTitle: "Améliorées grâce aux retours réels", threeText: "Les apps évoluent avec l'usage quotidien, pas avec une liste marketing."
      },
      studio: { eyebrow: "de Bruin Studio", title: "Créé indépendamment, avec une relation directe.", description: "de Bruin Studio est un petit studio logiciel néerlandais. Cela permet des échanges courts, des choix clairs et une vraie attention aux personnes qui utilisent l'app au quotidien.", contact: "Écrire au studio" },
      final: { title: "Choisissez l'app qui simplifie un peu votre journée.", description: "Découvrez tranquillement MigraineMaatje et HomeScreen.", action: "Voir les apps" },
      footer: { contact: "Contact" },
      links: { migraine: "migrainemaatje/?lang=fr", home: "homescreen/?lang=en", migraineSupport: "migrainemaatje/support.html?lang=fr", homeSupport: "homescreen/support.html?lang=en" },
      images: images("fr", "en", { migraineHero: "MigraineMaatje sur iPhone", migraineInsights: "Repères personnels dans MigraineMaatje", homeDashboard: "Tableau de bord HomeScreen", homeControls: "Commandes dans HomeScreen" })
    }
  };
})();
