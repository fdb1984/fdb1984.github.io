(() => {
  const images = (language, labels) => ({
    dashboard: { src: `assets/web-2026-08-30/${language}/dashboard.png`, alt: labels.dashboard },
    controls: { src: `assets/web-2026-08-30/${language}/controls.png`, alt: labels.controls },
    alerts: { src: `assets/web-2026-08-30/${language}/alerts.png`, alt: labels.alerts },
    cameras: { src: `assets/web-2026-08-30/${language}/cameras.png`, alt: labels.cameras }
  });

  window.PRODUCT_TRANSLATIONS = {
    nl: {
      meta: { title: "HomeScreen for HomeKit - je huis in één oogopslag", description: "Je HomeKit-dashboard voor iPhone en iPad, met CarPlay, widgets en klimaatbediening. Probeer alles 30 dagen; daarna één aankoop, geen abonnement.", locale: "nl_NL" },
      global: { skip: "Ga naar inhoud", byStudio: "door de Bruin Studio", navigationLabel: "Hoofdnavigatie", languageLabel: "Kies taal", footerLabel: "Voettekstlinks" },
      nav: { overview: "Overzicht", control: "Bediening", trial: "Proberen", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Probeer 30 dagen", discover: "Bekijk hoe het werkt", support: "Lees de handleiding" },
      hero: {
        identity: "Voor iPhone, iPad en CarPlay", eyebrow: "Dashboard en bediening", promise: "Je huis in één oogopslag. Thuis én onderweg.",
        description: "Een persoonlijk dashboard op je iPad, je favoriete bediening op je iPhone en eigen favorieten in CarPlay. Bekijk wat belangrijk is en houd de bediening die je nodig hebt binnen bereik.",
        factOne: "30 dagen volledig proberen", factTwo: "Daarna één aankoop", factThree: "Geen abonnement",
        noteOneTitle: "Woning in beeld", noteOneText: "Weer, klimaat en favorieten.", noteTwoTitle: "Direct bedienen", noteTwoText: "Lampen, scènes en klimaat."
      },
      trust: {
        oneTitle: "Gemaakt voor iPad", oneText: "Een vast dashboard in liggende weergave",
        twoTitle: "Snel op iPhone", twoText: "Favorieten en zoeken binnen handbereik",
        threeTitle: "HomeKit blijft de basis", threeText: "Geen apart account of eigen woningcloud"
      },
      moments: {
        eyebrow: "Minder zoeken", title: "Alles wat ertoe doet, zonder volle tegelmuur.", description: "HomeScreen kiest voor overzicht: eerst zien wat aandacht vraagt, daarna pas bedienen.",
        cardOneTitle: "In één blik", cardOneText: "Tijd, lokaal weer, klimaat, verlichting, deuren en favorieten op één scherm.",
        cardTwoTitle: "Alleen wat nodig is", cardTwoText: "Een lage batterij, open deur of offline camera krijgt aandacht zonder je dashboard over te nemen.",
        cardThreeTitle: "Een bord per plek", cardThreeText: "Maak een eigen selectie voor woonkamer, keuken, hal of een compacte iPhone-weergave."
      },
      dashboard: {
        eyebrow: "Het iPad-dashboard", title: "Leesbaar vanaf de andere kant van de kamer.", description: "Het dashboard is gemaakt voor een iPad op tafel of aan de muur. Grote informatie, vaste posities en een rustige donkere basis.",
        pointOneTitle: "Lokaal weer", pointOneText: "Apple Weather naast de status van je woning.",
        pointTwoTitle: "Favorieten vooraan", pointTwoText: "Wat je vaak gebruikt blijft direct bereikbaar.",
        pointThreeTitle: "Camera's op verzoek", pointThreeText: "Bekijk een HomeKit-camera schermvullend wanneer je die nodig hebt."
      },
      gallery: {
        eyebrow: "Kijken én bedienen", title: "Je woning binnen een paar tikken.", description: "Gebruik favorieten, Recent en zoeken om niet telkens door alle kamers en accessoires te hoeven gaan.",
        controlsTitle: "Snelle bediening", controlsText: "Lampen, scenes, schakelaars, schermen en ondersteunde thermostaten en airco's.",
        alertsTitle: "Aandacht zonder onrust", alertsText: "Zie open deuren, lage batterijen of een offline apparaat.",
        camerasTitle: "HomeKit-camera's", camerasText: "Open het beeld groot, zonder opname of upload door HomeScreen."
      },
      value: {
        eyebrow: "Eerst thuis proberen", title: "30 dagen alles gebruiken. Daarna één keer kiezen.", description: "Geen abonnement en geen uitgeklede demo. Kijk rustig of HomeScreen bij jouw woning en scherm past.",
        trialTitle: "De eerste 30 dagen", trialText: "Probeer alle functies met je eigen woning, inclusief CarPlay, klimaatbediening en widgets.",
        trialOne: "Dashboard op iPad en bediening op iPhone", trialTwo: "Eigen favorieten in CarPlay en widgets", trialThree: "Camera's, klimaat en woningmeldingen",
        afterEyebrow: "Daarna", afterTitle: "Eenmalig ontgrendelen", afterText: "Je kiest zelf of je HomeScreen koopt. Geen automatische afschrijving na de proefperiode en geen maandelijkse kosten.",
        afterOne: "Geen abonnement", afterTwo: "Aankoop herstellen via Apple", afterThree: "Geen advertenties of apart account"
      },
      privacy: {
        eyebrow: "Je woning is privé", title: "HomeKit blijft bij Apple.", description: "HomeScreen heeft geen eigen account, advertenties of tracking. Woningdata wordt niet naar een server van de Bruin Studio gestuurd.",
        oneTitle: "Geen eigen woningcloud", oneText: "HomeKit-woningen en accessoires blijven in Apple HomeKit.",
        twoTitle: "Camera's blijven camera's", twoText: "HomeScreen neemt geen beelden op en uploadt geen livestreams.",
        threeTitle: "Je inrichting via iCloud", threeText: "Bewaar dashboards en gedeelde instellingen via iCloud. Favorieten en schermgedrag blijven per apparaat; dit is geen HomeKit-back-up.",
        fourTitle: "Geen advertenties", fourText: "Geen advertentieprofiel en geen verkoop van woningdata."
      },
      everyday: {
        eyebrow: "Bediening binnen bereik", title: "Je favoriete bediening gaat met je mee.", description: "Op je dashboard, in een widget of in de auto: kies wat jij binnen bereik wilt hebben.",
        carplayTitle: "Je eigen CarPlay-favorieten", carplayText: "Kies vooraf op je iPhone maximaal vier scènes of bedieningen per woning, los van je dashboardfavorieten. Start bijvoorbeeld je thuiskomscène vanaf het autoscherm en bekijk sensoren en meldingen. Een compatibele auto of autoradio is nodig.",
        climateTitle: "De temperatuur direct instellen", climateText: "Bedien ondersteunde thermostaten en airco's in HomeScreen. De app kan waarschuwen voor HomeKit-automatiseringen die je instelling later mogelijk aanpassen. Je automatiseringen blijven ongewijzigd.",
        widgetsTitle: "Favorieten en meldingen als widget", widgetsText: "Bedien je favorieten of bekijk woningmeldingen zonder eerst de app te openen. Kies een passend formaat en wissel in de favorietenwidget tussen je woningen. Widgetstatussen worden periodiek bijgewerkt."
      },
      final: { title: "Probeer het met jouw woning.", description: "30 dagen alle functies op iPhone en iPad, inclusief CarPlay en widgets. Daarna één aankoop, geen abonnement." },
      footer: { support: "Support", privacy: "Privacy", terms: "Voorwaarden", studio: "Alle apps" },
      images: images("nl", { dashboard: "HomeScreen-dashboard op iPad", controls: "Bediening in HomeScreen", alerts: "Aandachtspunten in HomeScreen", cameras: "HomeKit-camera's in HomeScreen" })
    },

    en: {
      meta: { title: "HomeScreen for HomeKit - your home at a glance", description: "Your HomeKit dashboard for iPhone and iPad, with CarPlay, widgets and climate controls. Try everything for 30 days; then one purchase, no subscription.", locale: "en_US" },
      global: { skip: "Skip to content", byStudio: "by de Bruin Studio", navigationLabel: "Main navigation", languageLabel: "Choose language", footerLabel: "Footer links" },
      nav: { overview: "Overview", control: "Controls", trial: "Try it", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Try for 30 days", discover: "See how it works", support: "Read the guide" },
      hero: {
        identity: "For iPhone, iPad and CarPlay", eyebrow: "Dashboard and controls", promise: "Your home at a glance. At home and on the go.",
        description: "A personal dashboard on your iPad, favourite controls on your iPhone and your own favourites in CarPlay. See what matters and keep the controls you need within reach.",
        factOne: "Try everything for 30 days", factTwo: "One purchase afterwards", factThree: "No subscription",
        noteOneTitle: "Your home at a glance", noteOneText: "Weather, climate and favourites.", noteTwoTitle: "Control it directly", noteTwoText: "Lights, scenes and climate."
      },
      trust: {
        oneTitle: "Made for iPad", oneText: "A fixed dashboard in landscape",
        twoTitle: "Fast on iPhone", twoText: "Favourites and search within reach",
        threeTitle: "HomeKit stays the foundation", threeText: "No separate account or proprietary home cloud"
      },
      moments: {
        eyebrow: "Less searching", title: "Everything that matters, without a wall of tiles.", description: "HomeScreen puts clarity first: see what needs attention, then control it.",
        cardOneTitle: "At a glance", cardOneText: "Time, local weather, climate, lighting, doors and favourites on one screen.",
        cardTwoTitle: "Only what matters", cardTwoText: "A low battery, open door or offline camera gets attention without taking over the dashboard.",
        cardThreeTitle: "A board for every place", cardThreeText: "Create a selection for the living room, kitchen, hallway or a compact iPhone view."
      },
      dashboard: {
        eyebrow: "The iPad dashboard", title: "Readable from across the room.", description: "The dashboard is made for an iPad on a table or wall. Large information, stable positions and a calm dark base.",
        pointOneTitle: "Local weather", pointOneText: "Apple Weather alongside the state of your home.",
        pointTwoTitle: "Favourites first", pointTwoText: "What you use often remains immediately available.",
        pointThreeTitle: "Cameras on demand", pointThreeText: "Open a HomeKit camera full screen when you need it."
      },
      gallery: {
        eyebrow: "See and control", title: "Your home within a few taps.", description: "Use Favourites, Recent and search instead of navigating every room and accessory.",
        controlsTitle: "Quick controls", controlsText: "Lights, scenes, switches, shades, and supported thermostats and air conditioners.",
        alertsTitle: "Attention without noise", alertsText: "See open doors, low batteries or an offline device.",
        camerasTitle: "HomeKit cameras", camerasText: "Open a large view without HomeScreen recording or uploading it."
      },
      value: {
        eyebrow: "Try it at home first", title: "Use everything for 30 days. Decide once afterwards.", description: "No subscription and no stripped-down demo. See whether HomeScreen fits your home and display.",
        trialTitle: "The first 30 days", trialText: "Try every feature with your own home, including CarPlay, climate controls and widgets.",
        trialOne: "iPad dashboard and iPhone controls", trialTwo: "Your own favourites in CarPlay and widgets", trialThree: "Cameras, climate and home alerts",
        afterEyebrow: "Afterwards", afterTitle: "Unlock once", afterText: "You decide whether to buy HomeScreen. No automatic charge when the trial ends and no monthly cost.",
        afterOne: "No subscription", afterTwo: "Restore purchase through Apple", afterThree: "No ads or separate account"
      },
      privacy: {
        eyebrow: "Your home is private", title: "HomeKit stays with Apple.", description: "HomeScreen has no separate account, advertising or tracking. Home data is not sent to a de Bruin Studio server.",
        oneTitle: "No proprietary home cloud", oneText: "HomeKit homes and accessories remain in Apple HomeKit.",
        twoTitle: "Cameras remain cameras", twoText: "HomeScreen does not record video or upload livestreams.",
        threeTitle: "Your setup through iCloud", threeText: "Save dashboards and shared settings through iCloud. Favourites and idle-screen settings stay per device; this is not a HomeKit backup.",
        fourTitle: "No advertising", fourText: "No advertising profile and no sale of home data."
      },
      everyday: {
        eyebrow: "Controls within reach", title: "Take your favourite controls with you.", description: "On your dashboard, in a widget or in the car: choose what you want within reach.",
        carplayTitle: "Your own CarPlay favourites", carplayText: "Before driving, choose up to four scenes or controls per home on your iPhone, separate from your dashboard favourites. Start your arriving-home scene from the car display and check sensors and alerts. A compatible car or receiver is required.",
        climateTitle: "Set the temperature directly", climateText: "Control supported thermostats and air conditioners in HomeScreen. The app can warn about HomeKit automations that may change your setting later. Your automations remain unchanged.",
        widgetsTitle: "Favourites and alerts as widgets", widgetsText: "Control favourites or check home alerts without opening the app first. Choose a suitable size and switch between homes in the favourites widget. Widget status updates periodically."
      },
      final: { title: "Try it with your own home.", description: "30 days with all features on iPhone and iPad, including CarPlay and widgets. Then one purchase, no subscription." },
      footer: { support: "Support", privacy: "Privacy", terms: "Terms", studio: "All apps" },
      images: images("en", { dashboard: "HomeScreen dashboard on iPad", controls: "Controls in HomeScreen", alerts: "Attention points in HomeScreen", cameras: "HomeKit cameras in HomeScreen" })
    },

    de: {
      meta: { title: "HomeScreen for HomeKit - dein Zuhause auf einen Blick", description: "Dein HomeKit-Dashboard für iPhone und iPad mit CarPlay, Widgets und Klimasteuerung. 30 Tage alles testen, danach einmal kaufen. Kein Abo.", locale: "de_DE" },
      global: { skip: "Zum Inhalt springen", byStudio: "von de Bruin Studio", navigationLabel: "Hauptnavigation", languageLabel: "Sprache wählen", footerLabel: "Links im Seitenfuß" },
      nav: { overview: "Übersicht", control: "Bedienung", trial: "Ausprobieren", privacy: "Datenschutz", download: "Laden" },
      actions: { appStore: "30 Tage testen", discover: "So funktioniert es", support: "Anleitung lesen" },
      hero: {
        identity: "Für iPhone, iPad und CarPlay", eyebrow: "Dashboard und Bedienung", promise: "Dein Zuhause auf einen Blick. Zu Hause und unterwegs.",
        description: "Ein persönliches Dashboard auf dem iPad, deine bevorzugten Bedienelemente auf dem iPhone und eigene Favoriten in CarPlay. Sieh, was wichtig ist, und halte die passende Bedienung griffbereit.",
        factOne: "30 Tage alles testen", factTwo: "Danach ein Kauf", factThree: "Kein Abonnement",
        noteOneTitle: "Zuhause im Blick", noteOneText: "Wetter, Klima und Favoriten.", noteTwoTitle: "Direkt bedienen", noteTwoText: "Licht, Szenen und Klima."
      },
      trust: {
        oneTitle: "Für das iPad gemacht", oneText: "Ein festes Dashboard im Querformat",
        twoTitle: "Schnell auf dem iPhone", twoText: "Favoriten und Suche griffbereit",
        threeTitle: "HomeKit bleibt die Basis", threeText: "Kein separates Konto und keine eigene Zuhause-Cloud"
      },
      moments: {
        eyebrow: "Weniger suchen", title: "Alles Wichtige, ohne eine Wand aus Kacheln.", description: "HomeScreen setzt auf Übersicht: erst sehen, was Aufmerksamkeit braucht, dann bedienen.",
        cardOneTitle: "Auf einen Blick", cardOneText: "Zeit, lokales Wetter, Klima, Beleuchtung, Türen und Favoriten auf einem Bildschirm.",
        cardTwoTitle: "Nur was wichtig ist", cardTwoText: "Niedriger Batteriestand, offene Tür oder Offline-Kamera fallen auf, ohne das Dashboard zu übernehmen.",
        cardThreeTitle: "Ein Board für jeden Ort", cardThreeText: "Erstelle eine Auswahl für Wohnzimmer, Küche, Flur oder eine kompakte iPhone-Ansicht."
      },
      dashboard: {
        eyebrow: "Das iPad-Dashboard", title: "Vom anderen Ende des Raumes lesbar.", description: "Das Dashboard ist für ein iPad auf dem Tisch oder an der Wand gemacht: große Informationen, feste Positionen und eine ruhige dunkle Basis.",
        pointOneTitle: "Lokales Wetter", pointOneText: "Apple Weather neben dem Status deines Zuhauses.",
        pointTwoTitle: "Favoriten zuerst", pointTwoText: "Häufig Genutztes bleibt direkt erreichbar.",
        pointThreeTitle: "Kameras bei Bedarf", pointThreeText: "Öffne eine HomeKit-Kamera bei Bedarf bildschirmfüllend."
      },
      gallery: {
        eyebrow: "Sehen und bedienen", title: "Dein Zuhause mit wenigen Fingertipps.", description: "Nutze Favoriten, Zuletzt und die Suche, statt jedes Zimmer und Zubehör zu durchlaufen.",
        controlsTitle: "Schnelle Bedienung", controlsText: "Licht, Szenen, Schalter, Beschattung sowie unterstützte Thermostate und Klimaanlagen.",
        alertsTitle: "Aufmerksamkeit ohne Unruhe", alertsText: "Sieh offene Türen, niedrige Batterien oder ein Offline-Gerät.",
        camerasTitle: "HomeKit-Kameras", camerasText: "Öffne das Bild groß, ohne Aufnahme oder Upload durch HomeScreen."
      },
      value: {
        eyebrow: "Erst zu Hause testen", title: "30 Tage alles nutzen. Danach einmal entscheiden.", description: "Kein Abonnement und keine eingeschränkte Demo. Prüfe in Ruhe, ob HomeScreen zu deinem Zuhause passt.",
        trialTitle: "Die ersten 30 Tage", trialText: "Teste alle Funktionen mit deinem Zuhause, einschließlich CarPlay, Klimasteuerung und Widgets.",
        trialOne: "iPad-Dashboard und iPhone-Bedienung", trialTwo: "Eigene Favoriten in CarPlay und Widgets", trialThree: "Kameras, Klima und Meldungen",
        afterEyebrow: "Danach", afterTitle: "Einmal freischalten", afterText: "Du entscheidest, ob du HomeScreen kaufst. Keine automatische Abbuchung nach dem Testzeitraum und keine monatlichen Kosten.",
        afterOne: "Kein Abonnement", afterTwo: "Kauf über Apple wiederherstellen", afterThree: "Keine Werbung und kein separates Konto"
      },
      privacy: {
        eyebrow: "Dein Zuhause ist privat", title: "HomeKit bleibt bei Apple.", description: "HomeScreen hat kein eigenes Konto, keine Werbung und kein Tracking. Zuhause-Daten werden nicht an einen Server von de Bruin Studio gesendet.",
        oneTitle: "Keine eigene Zuhause-Cloud", oneText: "HomeKit-Zuhause und Zubehör bleiben in Apple HomeKit.",
        twoTitle: "Kameras bleiben Kameras", twoText: "HomeScreen zeichnet nicht auf und lädt keine Livestreams hoch.",
        threeTitle: "Deine Einrichtung über iCloud", threeText: "Speichere Dashboards und gemeinsame Einstellungen über iCloud. Favoriten und Ruhebildschirm bleiben pro Gerät eingestellt. Dies ist kein HomeKit-Backup.",
        fourTitle: "Keine Werbung", fourText: "Kein Werbeprofil und kein Verkauf von Zuhause-Daten."
      },
      everyday: {
        eyebrow: "Bedienung griffbereit", title: "Deine bevorzugte Bedienung ist dabei.", description: "Auf dem Dashboard, als Widget oder im Auto: Wähle, was du griffbereit haben möchtest.",
        carplayTitle: "Deine eigenen CarPlay-Favoriten", carplayText: "Wähle vor der Fahrt auf deinem iPhone bis zu vier Szenen oder Bedienelemente pro Zuhause, unabhängig vom Dashboard. Starte etwa deine Ankunftsszene vom Autodisplay und prüfe Sensoren und Meldungen. Ein kompatibles Auto oder Autoradio ist erforderlich.",
        climateTitle: "Die Temperatur direkt einstellen", climateText: "Bediene unterstützte Thermostate und Klimaanlagen in HomeScreen. Die App kann auf HomeKit-Automationen hinweisen, die deine Einstellung später möglicherweise verändern. Deine Automationen bleiben unverändert.",
        widgetsTitle: "Favoriten und Meldungen als Widgets", widgetsText: "Bediene Favoriten oder prüfe Meldungen, ohne zuerst die App zu öffnen. Wähle eine passende Größe und wechsle im Favoriten-Widget zwischen deinen Zuhause. Der Widgetstatus wird regelmäßig aktualisiert."
      },
      final: { title: "Teste es mit deinem Zuhause.", description: "30 Tage alle Funktionen auf iPhone und iPad, einschließlich CarPlay und Widgets. Danach ein Kauf, kein Abonnement." },
      footer: { support: "Support", privacy: "Datenschutz", terms: "Bedingungen", studio: "Alle Apps" },
      images: images("de", { dashboard: "HomeScreen-Dashboard auf dem iPad", controls: "Bedienung in HomeScreen", alerts: "Hinweise in HomeScreen", cameras: "HomeKit-Kameras in HomeScreen" })
    }
  };
})();
