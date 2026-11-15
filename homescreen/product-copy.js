(() => {
  const images = (language, labels) => ({
    dashboard: { src: `/homescreen/assets/web-2026-10-07/${language}/iPad-13/01-dashboard.png`, alt: labels.dashboard },
    controls: { src: `/homescreen/assets/web-2026-10-07/${language}/iPad-13/09-light-controls.png`, alt: labels.controls },
    alerts: { src: `/homescreen/assets/web-2026-10-07/${language}/iPad-13/08-alerts.png`, alt: labels.alerts },
    settings: { src: `/homescreen/assets/web-2026-10-07/${language}/iPad-13/10-settings.png`, alt: labels.settings },
    phoneDashboard: { src: `/homescreen/assets/web-2026-10-07/${language}/iPhone-6.9/01-dashboard.png`, alt: labels.phoneDashboard },
    phoneControls: { src: `/homescreen/assets/web-2026-10-07/${language}/iPhone-6.9/09-light-controls.png`, alt: labels.phoneControls },
    phoneScenes: { src: `/homescreen/assets/web-2026-10-07/${language}/iPhone-6.9/03-scenes.png`, alt: labels.phoneScenes }
  });

  window.PRODUCT_TRANSLATIONS = {
    nl: {
      meta: { title: "HomeScreen for HomeKit - iPad-dashboard en bediening", description: "Maak van je iPad een HomeKit-bedienpaneel voor het hele huishouden. Ook op iPhone, met CarPlay en widgets. 30 dagen proberen, daarna één aankoop.", locale: "nl_NL" },
      global: { skip: "Ga naar inhoud", byStudio: "door de Bruin Studio", navigationLabel: "Hoofdnavigatie", languageLabel: "Kies taal", footerLabel: "Voettekstlinks" },
      nav: { overview: "Overzicht", control: "Bediening", trial: "Proberen", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Probeer 30 dagen", discover: "Bekijk hoe het werkt", support: "Lees de handleiding" },
      requirements: { title: "Voor je bestaande HomeKit-woning", text: "HomeScreen gebruikt de woning die je al in Apple Woning hebt ingericht. Je kiest zelf welke onderdelen zichtbaar zijn. Beschikbare informatie en bediening hangen af van je HomeKit-apparaten." },
      phone: { eyebrow: "Op je iPhone", title: "Je huis bedienen, waar je ook bent.", description: "Bekijk je woning, start een scène of stel een lamp in. De staande weergave houdt de bediening binnen bereik.", dashboardTitle: "Jouw overzicht", dashboardText: "Woningstatus en favorieten op het dashboard.", scenesTitle: "Scènes per ruimte", scenesText: "Vind de juiste scène en voer hem uit.", controlsTitle: "De juiste lichtsterkte", controlsText: "Kies uit, de laatste aan-stand of een eigen percentage." },
      hero: {
        identity: "Voor je bestaande HomeKit-woning", eyebrow: "Dashboard en bediening", promise: "Een bedienpaneel voor het hele huishouden.",
        description: "Nog lampen aan? Een raam open? Maak van je iPad een vaste plek voor je woningstatus en dagelijkse scènes. Kies wat zichtbaar is, zodat huisgenoten niet door alle apparaten hoeven te zoeken.",
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
        eyebrow: "Het iPad-dashboard", title: "Een HomeKit-dashboard voor je iPad aan de muur.", description: "Geef je iPad een vaste plek op tafel of aan de muur. Zet veelgebruikte scènes en apparaten als favoriet klaar, naast het weer en de status van je woning. De inrichting bepaal jij; huisgenoten vinden de gekozen bediening op het dashboard.",
        pointOneTitle: "Lokaal weer", pointOneText: "Apple Weather naast de status van je woning.",
        pointTwoTitle: "Favorieten vooraan", pointTwoText: "Wat je vaak gebruikt blijft direct bereikbaar.",
        pointThreeTitle: "Camera's op verzoek", pointThreeText: "Bekijk een HomeKit-camera schermvullend wanneer je die nodig hebt."
      },
      gallery: {
        eyebrow: "Kijken én bedienen", title: "Je woning binnen een paar tikken.", description: "Gebruik favorieten, Recent en zoeken om niet telkens door alle kamers en accessoires te hoeven gaan.",
        controlsTitle: "Snelle bediening", controlsText: "Lampen, scenes, schakelaars, schermen en ondersteunde thermostaten en airco's.",
        alertsTitle: "Aandacht zonder onrust", alertsText: "Zie open deuren, lage batterijen of een offline apparaat.",
        settingsTitle: "Jouw instellingen", settingsText: "Een vaste zijbalk op iPad; een compacte categoriekeuze op iPhone."
      },
      value: {
        eyebrow: "Eerst thuis proberen", title: "30 dagen alles gebruiken. Daarna één keer kiezen.", description: "Geen abonnement en geen uitgeklede demo. Kijk rustig of HomeScreen bij jouw woning en scherm past.",
        trialTitle: "De eerste 30 dagen", trialText: "Probeer alle functies met je eigen woning, inclusief CarPlay, klimaatbediening en widgets.",
        trialOne: "Dashboard op iPad en bediening op iPhone", trialTwo: "Eigen favorieten in CarPlay en widgets", trialThree: "Camera's, klimaat en woningmeldingen",
        afterEyebrow: "Daarna", afterTitle: "Eenmalig ontgrendelen", afterText: "Je kiest zelf of je HomeScreen koopt. Geen automatische afschrijving na de proefperiode en geen maandelijkse kosten.",
        afterOne: "Inclusief Delen met gezin via Apple", afterTwo: "Aankoop herstellen via Apple", afterThree: "Hulp bij aankoop en herstel via support"
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
      faq: {
        title: "Vragen over HomeScreen for HomeKit",
        description: "Wat je nodig hebt, wat je kunt bedienen en hoe de aankoop werkt.",
        purposeQuestion: "Wat is HomeScreen for HomeKit?",
        purposeAnswer: "HomeScreen for HomeKit is een dashboard en bedieningsapp voor iPad en iPhone van de Bruin Studio. Je ziet tijd, weer en woningstatus en bedient je geselecteerde lampen, scènes en accessoires. De app gebruikt je bestaande woning in Apple Woning; het is geen vervanging voor het inrichten van HomeKit of het maken van automatiseringen.",
        ipadQuestion: "Kan ik van mijn iPad een HomeKit-bedienpaneel maken?",
        ipadAnswer: "Ja. Plaats een compatibele iPad op tafel of aan de muur en kies welke kamers, scènes en apparaten zichtbaar zijn. Het dashboard is bedoeld voor liggend gebruik op iPad en ondersteunt Begeleide toegang. Op iPhone kun je het ook staand gebruiken. Controleer de actuele apparaat- en systeemvereisten in de App Store.",
        devicesQuestion: "Werkt HomeScreen met mijn lampen, Shelly's of andere slimme apparaten?",
        devicesAnswer: "HomeScreen leest apparaten en scènes die in je Apple Woning beschikbaar zijn. Een apparaat moet via HomeKit of een geschikte bridge aan die woning zijn toegevoegd. Alleen een account bij bijvoorbeeld Hue, Shelly of Home Assistant is niet voldoende. De beschikbare bediening hangt af van wat het apparaat via HomeKit doorgeeft; probeer dit met je eigen woning tijdens de proefperiode.",
        carplayQuestion: "Kan ik HomeKit-scènes vanuit CarPlay starten?",
        carplayAnswer: "Ja. Kies op je iPhone maximaal vier CarPlay-favorieten per woning, apart van je dashboardfavorieten. Een compatibele auto of autoradio is nodig. Apple kan voor beveiligde acties, zoals een garage of slot openen, bevestiging of het ontgrendelen van de iPhone vereisen. HomeScreen omzeilt die beveiliging niet.",
        widgetsQuestion: "Zijn er widgets voor favorieten en meldingen?",
        widgetsAnswer: "Ja. Je kunt favorieten bedienen en woningmeldingen bekijken via widgets op je beginscherm. In de favorietenwidget kun je tussen woningen wisselen. Widgetstatussen worden periodiek bijgewerkt; het zijn geen continu bijgewerkte camerabeelden.",
        purchaseQuestion: "Heeft HomeScreen een abonnement?",
        purchaseAnswer: "Nee. Je kunt alle functies 30 dagen proberen. Daarna kun je de volledige versie eenmalig in de app ontgrendelen via Apple, inclusief Delen met gezin. Na de proefperiode wordt niets automatisch afgeschreven. De actuele prijs voor jouw land staat bij de aankoop in de app.",
        cloudQuestion: "Wordt mijn HomeKit-woning opgeslagen op een eigen server?",
        cloudAnswer: "Nee. Er is geen apart HomeScreen-account, geen advertentietracking en geen eigen woningcloud van de Bruin Studio. Dashboards en gedeelde instellingen kunnen via je Apple-account in iCloud worden bewaard. Favorieten en schermgedrag blijven per apparaat. Dit is geen back-up van je HomeKit-woning of automatiseringen.",
        helpQuestion: "Waar vind ik de handleiding en ondersteuning?",
        helpAnswer: "Lees de HomeScreen-handleiding voor instellingen, camera's, zichtbaarheid, iCloud en hulp bij aankopen. HomeScreen for HomeKit wordt ontwikkeld door de Bruin Studio. Voor persoonlijke hulp kun je mailen naar support@dbruin.com."
      },
      footer: { support: "Support", privacy: "Privacy", terms: "Voorwaarden", studio: "Alle apps" },
      images: images("nl", { dashboard: "HomeScreen 2.1.4-dashboard op iPad met voorbeeldwoning", controls: "Lichtsterkte instellen in HomeScreen op iPad", alerts: "Woningmeldingen in HomeScreen op iPad", settings: "Instellingen met zijbalk op iPad", phoneDashboard: "HomeScreen-dashboard op iPhone in staande weergave", phoneControls: "Een lamp dimmen op iPhone", phoneScenes: "Scènes per ruimte op iPhone" })
    },

    en: {
      meta: { title: "HomeScreen for HomeKit - iPad dashboard and controls", description: "Turn your iPad into a HomeKit control panel for your household. Also on iPhone, with CarPlay and widgets. Try for 30 days, then unlock once.", locale: "en_US" },
      global: { skip: "Skip to content", byStudio: "by de Bruin Studio", navigationLabel: "Main navigation", languageLabel: "Choose language", footerLabel: "Footer links" },
      nav: { overview: "Overview", control: "Controls", trial: "Try it", privacy: "Privacy", download: "Download" },
      actions: { appStore: "Try for 30 days", discover: "See how it works", support: "Read the guide" },
      requirements: { title: "For your existing HomeKit home", text: "HomeScreen uses the home you have already set up in Apple's Home app. You choose which items appear. Available information and controls depend on your HomeKit devices." },
      phone: { eyebrow: "On your iPhone", title: "Control your home, wherever you are.", description: "Check your home, run a scene or adjust a light. Portrait mode keeps the controls within reach.", dashboardTitle: "Your overview", dashboardText: "Home status and favourites on the dashboard.", scenesTitle: "Scenes by room", scenesText: "Find the right scene and run it.", controlsTitle: "The right brightness", controlsText: "Choose off, the last on-state or your own percentage." },
      hero: {
        identity: "For your existing HomeKit home", eyebrow: "Dashboard and controls", promise: "A home control panel for your household.",
        description: "Lights still on? A window open? Give your iPad a fixed place for home status and everyday scenes. Choose what appears, so your household does not have to search through every device.",
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
        eyebrow: "The iPad dashboard", title: "A HomeKit dashboard for your wall-mounted iPad.", description: "Give your iPad a place on a table or wall. Add frequently used scenes and devices as favourites, alongside weather and home status. You choose the setup; your household finds the selected controls on the dashboard.",
        pointOneTitle: "Local weather", pointOneText: "Apple Weather alongside the state of your home.",
        pointTwoTitle: "Favourites first", pointTwoText: "What you use often remains immediately available.",
        pointThreeTitle: "Cameras on demand", pointThreeText: "Open a HomeKit camera full screen when you need it."
      },
      gallery: {
        eyebrow: "See and control", title: "Your home within a few taps.", description: "Use Favourites, Recent and search instead of navigating every room and accessory.",
        controlsTitle: "Quick controls", controlsText: "Lights, scenes, switches, shades, and supported thermostats and air conditioners.",
        alertsTitle: "Attention without noise", alertsText: "See open doors, low batteries or an offline device.",
        settingsTitle: "Your settings", settingsText: "A fixed sidebar on iPad; a compact category picker on iPhone."
      },
      value: {
        eyebrow: "Try it at home first", title: "Use everything for 30 days. Decide once afterwards.", description: "No subscription and no stripped-down demo. See whether HomeScreen fits your home and display.",
        trialTitle: "The first 30 days", trialText: "Try every feature with your own home, including CarPlay, climate controls and widgets.",
        trialOne: "iPad dashboard and iPhone controls", trialTwo: "Your own favourites in CarPlay and widgets", trialThree: "Cameras, climate and home alerts",
        afterEyebrow: "Afterwards", afterTitle: "Unlock once", afterText: "You decide whether to buy HomeScreen. No automatic charge when the trial ends and no monthly cost.",
        afterOne: "Includes Family Sharing through Apple", afterTwo: "Restore purchase through Apple", afterThree: "Help with purchases and restoring access"
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
      faq: {
        title: "Questions about HomeScreen for HomeKit",
        description: "What you need, what you can control and how the purchase works.",
        purposeQuestion: "What is HomeScreen for HomeKit?",
        purposeAnswer: "HomeScreen for HomeKit is an iPad and iPhone dashboard and control app by de Bruin Studio. See time, weather and home status, and control your selected lights, scenes and accessories. It uses your existing home in Apple's Home app; it does not replace HomeKit setup or automation editing.",
        ipadQuestion: "Can I turn my iPad into a HomeKit control panel?",
        ipadAnswer: "Yes. Place a compatible iPad on a table or wall and choose which rooms, scenes and devices appear. The iPad dashboard is designed for landscape use and supports Guided Access. On iPhone, you can also use portrait mode. Check the App Store for current device and system requirements.",
        devicesQuestion: "Does HomeScreen work with my lights, Shelly devices or other smart devices?",
        devicesAnswer: "HomeScreen reads devices and scenes available in your Apple Home. A device must be added to that home through HomeKit or a suitable bridge. An account with Hue, Shelly or Home Assistant alone is not enough. Available controls depend on what the device exposes through HomeKit; check your own home during the trial.",
        carplayQuestion: "Can I run HomeKit scenes from CarPlay?",
        carplayAnswer: "Yes. Choose up to four CarPlay favourites per home on your iPhone, independently of your dashboard favourites. A compatible car or head unit is required. Apple may require confirmation or an unlocked iPhone for secure actions such as opening a garage or lock. HomeScreen does not bypass that protection.",
        widgetsQuestion: "Are there widgets for favourites and alerts?",
        widgetsAnswer: "Yes. Home Screen widgets let you control favourites and view home alerts. You can switch homes in the favourites widget. Widget status updates periodically; these are not continuously updated camera feeds.",
        purchaseQuestion: "Does HomeScreen require a subscription?",
        purchaseAnswer: "No. Try all features for 30 days, then unlock the full version with a one-time in-app purchase through Apple, including Family Sharing. There is no automatic charge when the trial ends. The in-app purchase shows the current price for your country.",
        cloudQuestion: "Is my HomeKit home stored on a separate server?",
        cloudAnswer: "No. There is no separate HomeScreen account, advertising tracking or proprietary home cloud at de Bruin Studio. Dashboards and shared settings can be saved to iCloud using your Apple account. Favourites and idle-screen behaviour remain per device. This is not a backup of your HomeKit home or automations.",
        helpQuestion: "Where can I find the guide and support?",
        helpAnswer: "Read the HomeScreen guide for settings, cameras, visibility, iCloud and purchase help. HomeScreen for HomeKit is developed by de Bruin Studio. For individual help, email support@dbruin.com."
      },
      footer: { support: "Support", privacy: "Privacy", terms: "Terms", studio: "All apps" },
      images: images("en", { dashboard: "HomeScreen 2.1.4 dashboard on iPad with a sample home", controls: "Adjusting light brightness on iPad", alerts: "Home alerts on iPad", settings: "Settings sidebar on iPad", phoneDashboard: "HomeScreen dashboard on iPhone in portrait mode", phoneControls: "Dimming a light on iPhone", phoneScenes: "Scenes by room on iPhone" })
    },

    de: {
      meta: { title: "HomeScreen for HomeKit - iPad-Dashboard und Steuerung", description: "Dein iPad als HomeKit-Bedienpanel für den Haushalt. Auch auf dem iPhone, mit CarPlay und Widgets. 30 Tage testen, danach einmal freischalten.", locale: "de_DE" },
      global: { skip: "Zum Inhalt springen", byStudio: "von de Bruin Studio", navigationLabel: "Hauptnavigation", languageLabel: "Sprache wählen", footerLabel: "Links im Seitenfuß" },
      nav: { overview: "Übersicht", control: "Bedienung", trial: "Ausprobieren", privacy: "Datenschutz", download: "Laden" },
      actions: { appStore: "30 Tage testen", discover: "So funktioniert es", support: "Anleitung lesen" },
      requirements: { title: "Für dein vorhandenes HomeKit-Zuhause", text: "HomeScreen nutzt das Zuhause, das du bereits in Apples Home-App eingerichtet hast. Du wählst aus, welche Elemente angezeigt werden. Verfügbare Informationen und Bedienelemente hängen von deinen HomeKit-Geräten ab." },
      phone: { eyebrow: "Auf deinem iPhone", title: "Dein Zuhause bedienen, auch unterwegs.", description: "Prüfe dein Zuhause, starte eine Szene oder stelle eine Lampe ein. Im Hochformat bleibt die Bedienung griffbereit.", dashboardTitle: "Deine Übersicht", dashboardText: "Hausstatus und Favoriten auf dem Dashboard.", scenesTitle: "Szenen nach Raum", scenesText: "Finde die passende Szene und führe sie aus.", controlsTitle: "Die passende Helligkeit", controlsText: "Wähle aus, den letzten Ein-Zustand oder einen eigenen Prozentwert." },
      hero: {
        identity: "Für dein vorhandenes HomeKit-Zuhause", eyebrow: "Dashboard und Bedienung", promise: "Ein Bedienpanel für deinen Haushalt.",
        description: "Noch Licht an? Ein Fenster offen? Gib deinem iPad einen festen Platz für den Hausstatus und alltägliche Szenen. Du wählst, was angezeigt wird, damit dein Haushalt nicht alle Geräte durchsuchen muss.",
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
        eyebrow: "Das iPad-Dashboard", title: "Ein HomeKit-Dashboard für dein iPad an der Wand.", description: "Gib deinem iPad einen Platz auf dem Tisch oder an der Wand. Lege häufig genutzte Szenen und Geräte als Favoriten neben Wetter und Hausstatus ab. Du bestimmst die Einrichtung; dein Haushalt findet die ausgewählten Bedienelemente auf dem Dashboard.",
        pointOneTitle: "Lokales Wetter", pointOneText: "Apple Weather neben dem Status deines Zuhauses.",
        pointTwoTitle: "Favoriten zuerst", pointTwoText: "Häufig Genutztes bleibt direkt erreichbar.",
        pointThreeTitle: "Kameras bei Bedarf", pointThreeText: "Öffne eine HomeKit-Kamera bei Bedarf bildschirmfüllend."
      },
      gallery: {
        eyebrow: "Sehen und bedienen", title: "Dein Zuhause mit wenigen Fingertipps.", description: "Nutze Favoriten, Zuletzt und die Suche, statt jedes Zimmer und Zubehör zu durchlaufen.",
        controlsTitle: "Schnelle Bedienung", controlsText: "Licht, Szenen, Schalter, Beschattung sowie unterstützte Thermostate und Klimaanlagen.",
        alertsTitle: "Aufmerksamkeit ohne Unruhe", alertsText: "Sieh offene Türen, niedrige Batterien oder ein Offline-Gerät.",
        settingsTitle: "Deine Einstellungen", settingsText: "Eine feste Seitenleiste auf dem iPad; eine kompakte Kategorieauswahl auf dem iPhone."
      },
      value: {
        eyebrow: "Erst zu Hause testen", title: "30 Tage alles nutzen. Danach einmal entscheiden.", description: "Kein Abonnement und keine eingeschränkte Demo. Prüfe in Ruhe, ob HomeScreen zu deinem Zuhause passt.",
        trialTitle: "Die ersten 30 Tage", trialText: "Teste alle Funktionen mit deinem Zuhause, einschließlich CarPlay, Klimasteuerung und Widgets.",
        trialOne: "iPad-Dashboard und iPhone-Bedienung", trialTwo: "Eigene Favoriten in CarPlay und Widgets", trialThree: "Kameras, Klima und Meldungen",
        afterEyebrow: "Danach", afterTitle: "Einmal freischalten", afterText: "Du entscheidest, ob du HomeScreen kaufst. Keine automatische Abbuchung nach dem Testzeitraum und keine monatlichen Kosten.",
        afterOne: "Mit Familienfreigabe über Apple", afterTwo: "Kauf über Apple wiederherstellen", afterThree: "Hilfe beim Kauf und Wiederherstellen"
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
      faq: {
        title: "Fragen zu HomeScreen for HomeKit",
        description: "Was du brauchst, was du steuern kannst und wie der Kauf funktioniert.",
        purposeQuestion: "Was ist HomeScreen for HomeKit?",
        purposeAnswer: "HomeScreen for HomeKit ist eine Dashboard- und Steuerungs-App für iPad und iPhone von de Bruin Studio. Sie zeigt Uhrzeit, Wetter und Hausstatus und steuert ausgewählte Lampen, Szenen und Geräte. Die App nutzt dein vorhandenes Zuhause in Apples Home-App; sie ersetzt weder die HomeKit-Einrichtung noch das Bearbeiten von Automationen.",
        ipadQuestion: "Kann ich mein iPad als HomeKit-Bedienpanel nutzen?",
        ipadAnswer: "Ja. Stelle ein kompatibles iPad auf den Tisch oder befestige es an der Wand und wähle die sichtbaren Räume, Szenen und Geräte. Das iPad-Dashboard ist für das Querformat ausgelegt und unterstützt den geführten Zugriff. Auf dem iPhone kannst du auch das Hochformat nutzen. Aktuelle Geräte- und Systemanforderungen findest du im App Store.",
        devicesQuestion: "Funktioniert HomeScreen mit meinen Lampen, Shelly-Geräten oder anderen smarten Geräten?",
        devicesAnswer: "HomeScreen liest Geräte und Szenen, die in deinem Apple-Zuhause verfügbar sind. Ein Gerät muss über HomeKit oder eine geeignete Bridge hinzugefügt sein. Ein Konto bei Hue, Shelly oder Home Assistant allein reicht nicht aus. Die Bedienmöglichkeiten hängen davon ab, was das Gerät über HomeKit bereitstellt. Prüfe dein eigenes Zuhause im Testzeitraum.",
        carplayQuestion: "Kann ich HomeKit-Szenen über CarPlay starten?",
        carplayAnswer: "Ja. Wähle auf deinem iPhone bis zu vier CarPlay-Favoriten pro Zuhause, unabhängig von den Dashboard-Favoriten. Ein kompatibles Auto oder Autoradio ist erforderlich. Apple kann bei sicherheitsrelevanten Aktionen wie dem Öffnen einer Garage oder eines Schlosses eine Bestätigung oder ein entsperrtes iPhone verlangen. HomeScreen umgeht diesen Schutz nicht.",
        widgetsQuestion: "Gibt es Widgets für Favoriten und Meldungen?",
        widgetsAnswer: "Ja. Mit Widgets auf dem Home-Bildschirm kannst du Favoriten bedienen und Hausmeldungen ansehen. Im Favoriten-Widget kannst du zwischen deinen Zuhause wechseln. Der Widgetstatus wird regelmäßig aktualisiert; es handelt sich nicht um ständig aktualisierte Kamerabilder.",
        purchaseQuestion: "Braucht HomeScreen ein Abonnement?",
        purchaseAnswer: "Nein. Teste alle Funktionen 30 Tage und schalte danach die Vollversion mit einem einmaligen In-App-Kauf über Apple frei, einschließlich Familienfreigabe. Am Ende des Testzeitraums wird nichts automatisch abgebucht. Der In-App-Kauf zeigt den aktuellen Preis für dein Land.",
        cloudQuestion: "Wird mein HomeKit-Zuhause auf einem eigenen Server gespeichert?",
        cloudAnswer: "Nein. Es gibt kein separates HomeScreen-Konto, kein Werbetracking und keine eigene Zuhause-Cloud bei de Bruin Studio. Dashboards und gemeinsame Einstellungen können über deinen Apple-Account in iCloud gespeichert werden. Favoriten und Ruhebildschirm bleiben pro Gerät eingestellt. Dies ist kein Backup deines HomeKit-Zuhauses oder deiner Automationen.",
        helpQuestion: "Wo finde ich die Anleitung und Hilfe?",
        helpAnswer: "Lies die HomeScreen-Anleitung zu Einstellungen, Kameras, Sichtbarkeit, iCloud und Kaufhilfe. HomeScreen for HomeKit wird von de Bruin Studio entwickelt. Für persönliche Hilfe schreibe an support@dbruin.com."
      },
      footer: { support: "Support", privacy: "Datenschutz", terms: "Bedingungen", studio: "Alle Apps" },
      images: images("de", { dashboard: "HomeScreen 2.1.4-Dashboard auf dem iPad mit einem Beispiel-Zuhause", controls: "Lichthelligkeit auf dem iPad einstellen", alerts: "Hausmeldungen auf dem iPad", settings: "Einstellungen mit Seitenleiste auf dem iPad", phoneDashboard: "HomeScreen-Dashboard auf dem iPhone im Hochformat", phoneControls: "Eine Lampe auf dem iPhone dimmen", phoneScenes: "Szenen nach Raum auf dem iPhone" })
    }
  };
})();
