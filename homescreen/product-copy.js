(() => {
  const images = (language, labels) => ({
    dashboard: { src: `assets/web-2026-08-30/${language}/dashboard.png`, alt: labels.dashboard },
    controls: { src: `assets/web-2026-08-30/${language}/controls.png`, alt: labels.controls },
    alerts: { src: `assets/web-2026-08-30/${language}/alerts.png`, alt: labels.alerts },
    cameras: { src: `assets/web-2026-08-30/${language}/cameras.png`, alt: labels.cameras }
  });

  window.PRODUCT_TRANSLATIONS = {
    nl: {
      meta: { title: "HomeScreen for HomeKit - je woning op één rustig scherm", description: "Maak van je iPad een helder HomeKit-dashboard en gebruik je iPhone als snelle bediening voor je woning.", locale: "nl_NL" },
      global: { skip: "Ga naar inhoud", byStudio: "door de Bruin Studio", navigationLabel: "Hoofdnavigatie", languageLabel: "Kies taal", footerLabel: "Voettekstlinks" },
      nav: { overview: "Overzicht", control: "Bediening", trial: "Proberen", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Probeer 30 dagen", discover: "Bekijk hoe het werkt", support: "Lees de handleiding" },
      hero: {
        identity: "Voor iPhone en iPad", eyebrow: "HomeKit zonder zoeken", promise: "Je woning. Eén rustig scherm.",
        description: "Maak van je iPad een vast woningdashboard en gebruik je iPhone als snelle bediening voor wat je vaak nodig hebt.",
        factOne: "30 dagen volledig proberen", factTwo: "Daarna één aankoop", factThree: "Geen abonnement",
        noteOneTitle: "Woning in beeld", noteOneText: "Weer, klimaat en favorieten.", noteTwoTitle: "Direct bedienen", noteTwoText: "Lampen, scenes en schermen."
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
        controlsTitle: "Snelle bediening", controlsText: "Lampen, schakelaars, scenes en schermen.",
        alertsTitle: "Aandacht zonder onrust", alertsText: "Zie open deuren, lage batterijen of een offline apparaat.",
        camerasTitle: "HomeKit-camera's", camerasText: "Open het beeld groot, zonder opname of upload door HomeScreen."
      },
      value: {
        eyebrow: "Eerst thuis proberen", title: "30 dagen alles gebruiken. Daarna één keer kiezen.", description: "Geen abonnement en geen uitgeklede demo. Kijk rustig of HomeScreen bij jouw woning en scherm past.",
        trialTitle: "De eerste 30 dagen", trialText: "Alle functies zijn beschikbaar, zodat je een echt dashboard kunt opbouwen.",
        trialOne: "iPad-dashboard en iPhone-bediening", trialTwo: "Borden, favorieten en zichtbaarheid", trialThree: "Camera's, widgets en aandachtspunten",
        afterEyebrow: "Daarna", afterTitle: "Eenmalig ontgrendelen", afterText: "Eén Apple-aankoop houdt HomeScreen beschikbaar. Geen maandelijkse kosten.",
        afterOne: "Geen abonnement", afterTwo: "Aankoop herstellen via Apple", afterThree: "Geen advertenties of apart account"
      },
      privacy: {
        eyebrow: "Je woning is privé", title: "HomeKit blijft bij Apple.", description: "HomeScreen heeft geen eigen account, advertenties of tracking. Woningdata wordt niet naar een server van de Bruin Studio gestuurd.",
        oneTitle: "Geen eigen woningcloud", oneText: "HomeKit-woningen en accessoires blijven in Apple HomeKit.",
        twoTitle: "Camera's blijven camera's", twoText: "HomeScreen neemt geen beelden op en uploadt geen livestreams.",
        threeTitle: "Alleen jouw iCloud", threeText: "Gekozen appinstellingen kunnen via je eigen iCloud synchroniseren.",
        fourTitle: "Geen advertenties", fourText: "Geen advertentieprofiel en geen verkoop van woningdata."
      },
      final: { title: "Geef je iPad een vaste plek in huis.", description: "Probeer HomeScreen 30 dagen met je eigen HomeKit-woning." },
      footer: { support: "Support", privacy: "Privacy", terms: "Voorwaarden", studio: "Alle apps" },
      images: images("nl", { dashboard: "HomeScreen-dashboard op iPad", controls: "Bediening in HomeScreen", alerts: "Aandachtspunten in HomeScreen", cameras: "HomeKit-camera's in HomeScreen" })
    },

    en: {
      meta: { title: "HomeScreen for HomeKit - your home on one calm screen", description: "Turn your iPad into a clear HomeKit dashboard and use your iPhone for quick home controls.", locale: "en_US" },
      global: { skip: "Skip to content", byStudio: "by de Bruin Studio", navigationLabel: "Main navigation", languageLabel: "Choose language", footerLabel: "Footer links" },
      nav: { overview: "Overview", control: "Controls", trial: "Try it", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Try for 30 days", discover: "See how it works", support: "Read the guide" },
      hero: {
        identity: "For iPhone and iPad", eyebrow: "HomeKit without the searching", promise: "Your home. One calm screen.",
        description: "Turn your iPad into a fixed home dashboard and use your iPhone for quick access to what you use most.",
        factOne: "Try everything for 30 days", factTwo: "One purchase afterwards", factThree: "No subscription",
        noteOneTitle: "Your home at a glance", noteOneText: "Weather, climate and favourites.", noteTwoTitle: "Control it directly", noteTwoText: "Lights, scenes and shades."
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
        controlsTitle: "Quick controls", controlsText: "Lights, switches, scenes and shades.",
        alertsTitle: "Attention without noise", alertsText: "See open doors, low batteries or an offline device.",
        camerasTitle: "HomeKit cameras", camerasText: "Open a large view without HomeScreen recording or uploading it."
      },
      value: {
        eyebrow: "Try it at home first", title: "Use everything for 30 days. Decide once afterwards.", description: "No subscription and no stripped-down demo. See whether HomeScreen fits your home and display.",
        trialTitle: "The first 30 days", trialText: "Every feature is available so you can build a real dashboard.",
        trialOne: "iPad dashboard and iPhone controls", trialTwo: "Boards, favourites and visibility", trialThree: "Cameras, widgets and attention points",
        afterEyebrow: "Afterwards", afterTitle: "Unlock once", afterText: "One Apple purchase keeps HomeScreen available. No monthly cost.",
        afterOne: "No subscription", afterTwo: "Restore purchase through Apple", afterThree: "No ads or separate account"
      },
      privacy: {
        eyebrow: "Your home is private", title: "HomeKit stays with Apple.", description: "HomeScreen has no separate account, advertising or tracking. Home data is not sent to a de Bruin Studio server.",
        oneTitle: "No proprietary home cloud", oneText: "HomeKit homes and accessories remain in Apple HomeKit.",
        twoTitle: "Cameras remain cameras", twoText: "HomeScreen does not record video or upload livestreams.",
        threeTitle: "Only your iCloud", threeText: "Selected app settings can sync through your own iCloud.",
        fourTitle: "No advertising", fourText: "No advertising profile and no sale of home data."
      },
      final: { title: "Give your iPad a permanent place at home.", description: "Try HomeScreen for 30 days with your own HomeKit home." },
      footer: { support: "Support", privacy: "Privacy", terms: "Terms", studio: "All apps" },
      images: images("en", { dashboard: "HomeScreen dashboard on iPad", controls: "Controls in HomeScreen", alerts: "Attention points in HomeScreen", cameras: "HomeKit cameras in HomeScreen" })
    },

    de: {
      meta: { title: "HomeScreen for HomeKit - dein Zuhause auf einem ruhigen Bildschirm", description: "Mach dein iPad zum übersichtlichen HomeKit-Dashboard und nutze dein iPhone zur schnellen Bedienung.", locale: "de_DE" },
      global: { skip: "Zum Inhalt springen", byStudio: "von de Bruin Studio", navigationLabel: "Hauptnavigation", languageLabel: "Sprache wählen", footerLabel: "Links im Seitenfuß" },
      nav: { overview: "Übersicht", control: "Bedienung", trial: "Ausprobieren", privacy: "Datenschutz", download: "Laden" },
      actions: { appStore: "30 Tage testen", discover: "So funktioniert es", support: "Anleitung lesen" },
      hero: {
        identity: "Für iPhone und iPad", eyebrow: "HomeKit ohne Suchen", promise: "Dein Zuhause. Ein ruhiger Bildschirm.",
        description: "Mach dein iPad zum festen Zuhause-Dashboard und nutze dein iPhone für den schnellen Zugriff auf häufig verwendete Dinge.",
        factOne: "30 Tage alles testen", factTwo: "Danach ein Kauf", factThree: "Kein Abonnement",
        noteOneTitle: "Zuhause im Blick", noteOneText: "Wetter, Klima und Favoriten.", noteTwoTitle: "Direkt bedienen", noteTwoText: "Lichter, Szenen und Beschattung."
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
        controlsTitle: "Schnelle Bedienung", controlsText: "Lichter, Schalter, Szenen und Beschattung.",
        alertsTitle: "Aufmerksamkeit ohne Unruhe", alertsText: "Sieh offene Türen, niedrige Batterien oder ein Offline-Gerät.",
        camerasTitle: "HomeKit-Kameras", camerasText: "Öffne das Bild groß, ohne Aufnahme oder Upload durch HomeScreen."
      },
      value: {
        eyebrow: "Erst zu Hause testen", title: "30 Tage alles nutzen. Danach einmal entscheiden.", description: "Kein Abonnement und keine eingeschränkte Demo. Prüfe in Ruhe, ob HomeScreen zu deinem Zuhause passt.",
        trialTitle: "Die ersten 30 Tage", trialText: "Alle Funktionen sind verfügbar, damit du ein echtes Dashboard aufbauen kannst.",
        trialOne: "iPad-Dashboard und iPhone-Bedienung", trialTwo: "Boards, Favoriten und Sichtbarkeit", trialThree: "Kameras, Widgets und Hinweise",
        afterEyebrow: "Danach", afterTitle: "Einmal freischalten", afterText: "Ein Apple-Kauf hält HomeScreen verfügbar. Keine monatlichen Kosten.",
        afterOne: "Kein Abonnement", afterTwo: "Kauf über Apple wiederherstellen", afterThree: "Keine Werbung und kein separates Konto"
      },
      privacy: {
        eyebrow: "Dein Zuhause ist privat", title: "HomeKit bleibt bei Apple.", description: "HomeScreen hat kein eigenes Konto, keine Werbung und kein Tracking. Zuhause-Daten werden nicht an einen Server von de Bruin Studio gesendet.",
        oneTitle: "Keine eigene Zuhause-Cloud", oneText: "HomeKit-Zuhause und Zubehör bleiben in Apple HomeKit.",
        twoTitle: "Kameras bleiben Kameras", twoText: "HomeScreen zeichnet nicht auf und lädt keine Livestreams hoch.",
        threeTitle: "Nur dein iCloud", threeText: "Ausgewählte App-Einstellungen können über dein eigenes iCloud synchronisieren.",
        fourTitle: "Keine Werbung", fourText: "Kein Werbeprofil und kein Verkauf von Zuhause-Daten."
      },
      final: { title: "Gib deinem iPad einen festen Platz zu Hause.", description: "Teste HomeScreen 30 Tage mit deinem eigenen HomeKit-Zuhause." },
      footer: { support: "Support", privacy: "Datenschutz", terms: "Bedingungen", studio: "Alle Apps" },
      images: images("de", { dashboard: "HomeScreen-Dashboard auf dem iPad", controls: "Bedienung in HomeScreen", alerts: "Hinweise in HomeScreen", cameras: "HomeKit-Kameras in HomeScreen" })
    }
  };
})();
