const translations = {
    fr: {
        nav_home: "🏠 Accueil", nav_wifi: "📶 WiFi", nav_local: "🛒 Commerces", nav_tours: "📍 Visites",
        title_home: "Bienvenue à Vendargues",
        welcome_title: "Votre Maison de Vacances",
        welcome_text: "Nous sommes ravis de vous accueillir. Nous espérons que vous passerez un excellent séjour dans notre belle région.",
        contact_title: "Une question ?",
        contact_text: "Contactez-nous via Abritel ou par téléphone en cas d'urgence.",
        title_wifi: "Connexion Internet",
        wifi_text: "Voici les identifiants pour vous connecter :",
        wifi_network: "Réseau :",
        wifi_password: "Mot de passe :",
        title_local: "Commerces & Adresses",
        local_text: "Quelques adresses utiles accessibles rapidement :",
        local_1: "Boulangerie : À 5 minutes à pied, ouverte dès 7h.",
        local_2: "Supermarché : Situé à l'entrée du village.",
        local_3: "Restaurant local : Excellente cuisine méditerranéenne.",
        local_4: "Pharmacie : Sur la place principale.",
        title_tours: "À découvrir dans la région",
        tours_text: "Quelques incontournables autour de Vendargues :",
        tour_1: "Montpellier (Centre historique) - 15 min en voiture.",
        tour_2: "Le Pic Saint-Loup - Idéal pour la randonnée et le vin.",
        tour_3: "Les Plages (La Grande-Motte, Carnon) - À 20 minutes.",
        tour_4: "La Camargue - Nature sauvage et paysages uniques."
    },
    en: {
        nav_home: "🏠 Home", nav_wifi: "📶 WiFi", nav_local: "🛒 Shops", nav_tours: "📍 Tours",
        title_home: "Welcome to Vendargues",
        welcome_title: "Your Holiday Home",
        welcome_text: "We are delighted to welcome you. We hope you have a great stay in our beautiful region.",
        contact_title: "Any questions?",
        contact_text: "Contact us via Abritel or by phone in case of emergency.",
        title_wifi: "Internet Connection",
        wifi_text: "Here are the credentials to connect:",
        wifi_network: "Network:",
        wifi_password: "Password:",
        title_local: "Shops & Essential Addresses",
        local_text: "Useful places nearby:",
        local_1: "Bakery: 5 minutes walk, opens at 7am.",
        local_2: "Supermarket: Located at the entrance of the village.",
        local_3: "Local Restaurant: Excellent Mediterranean food.",
        local_4: "Pharmacy: On the main square.",
        title_tours: "To discover in the area",
        tours_text: "Must-see places around Vendargues:",
        tour_1: "Montpellier (Historical center) - 15 min drive.",
        tour_2: "Pic Saint-Loup - Great for hiking and wine tasting.",
        tour_3: "Beaches (La Grande-Motte, Carnon) - 20 minutes away.",
        tour_4: "Camargue - Wild nature and unique landscapes."
    },
    de: {
        nav_home: "🏠 Startseite", nav_wifi: "📶 WLAN", nav_local: "🛒 Geschäfte", nav_tours: "📍 Touren",
        title_home: "Willkommen in Vendargues",
        welcome_title: "Ihr Ferienhaus",
        welcome_text: "Wir freuen uns, Sie begrüßen zu dürfen. Wir wünschen Ihnen einen tollen Aufenthalt.",
        contact_title: "Fragen?",
        contact_text: "Kontaktieren Sie uns über Abritel oder im Notfall per Telefon.",
        title_wifi: "WLAN-Verbindung",
        wifi_text: "Hier sind die Zugangsdaten:",
        wifi_network: "Netzwerk:",
        wifi_password: "Passwort:",
        title_local: "Geschäfte & Empfehlungen",
        local_text: "Nützliche Adressen in der Nähe:",
        local_1: "Bäckerei: 5 Gehminuten, öffnet um 7 Uhr.",
        local_2: "Supermarkt: Am Ortseingang gelegen.",
        local_3: "Restaurant: Hervorragende mediterrane Küche.",
        local_4: "Apotheke: Auf dem Hauptplatz.",
        title_tours: "Ausflüge in die Region",
        tours_text: "Sehenswürdigkeiten rund um Vendargues:",
        tour_1: "Montpellier (Historisches Zentrum) - 15 Min. Fahrt.",
        tour_2: "Pic Saint-Loup - Ideal zum Wandern und Weinverkostung.",
        tour_3: "Strände (La Grande-Motte, Carnon) - 20 Minuten entfernt.",
        tour_4: "Camargue - Unberührte Natur und einzigartige Landschaften."
    },
    nl: {
        nav_home: "🏠 Home", nav_wifi: "📶 WiFi", nav_local: "🛒 Winkels", nav_tours: "📍 Uitstapjes",
        title_home: "Welkom in Vendargues",
        welcome_title: "Uw Vakantiehuis",
        welcome_text: "We zijn verheugd u te mogen verwelkomen. We hopen dat u een geweldig verblijf heeft.",
        contact_title: "Vragen?",
        contact_text: "Neem contact op via Abritel of telefonisch in noodgevallen.",
        title_wifi: "WiFi Verbinding",
        wifi_text: "Hier zijn de gegevens om verbinding te maken:",
        wifi_network: "Netwerk:",
        wifi_password: "Wachtwoord:",
        title_local: "Winkels & Aanbevelingen",
        local_text: "Handige adressen in de buurt:",
        local_1: "Bakkerij: 5 minuten lopen, open vanaf 7 uur.",
        local_2: "Supermarkt: Aan de ingang van het dorp.",
        local_3: "Restaurant: Heerlijke mediterrane keuken.",
        local_4: "Apotheek: Op het centrale plein.",
        title_tours: "Te ontdekken in de omgeving",
        tours_text: "Leuke plekken rondom Vendargues:",
        tour_1: "Montpellier (Historisch centrum) - 15 min rijden.",
        tour_2: "Pic Saint-Loup - Geweldig voor wandelingen en wijn.",
        tour_3: "Stranden (La Grande-Motte, Carnon) - Op 20 minuten.",
        tour_4: "Camargue - Wilde natuur en unieke landschappen."
    }
};

function applyLanguage(lang) {
    document.getElementById('lang-selector').value = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function changeLanguage() {
    const lang = document.getElementById('lang-selector').value;
    localStorage.setItem('guest_lang', lang);
    applyLanguage(lang);
}

// Au chargement, on récupère la langue en mémoire ou le français par défaut
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('guest_lang') || 'fr';
    applyLanguage(savedLang);
});