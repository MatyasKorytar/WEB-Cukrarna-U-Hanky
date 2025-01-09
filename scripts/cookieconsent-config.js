import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box inline",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "cs",
        autoDetect: "document",
        translations: {
            cs: {
                consentModal: {
                    title: "Vítejte!",
                    description: "Používáme soubory cookies pro zajištění správné funkce webu a zlepšení vašeho uživatelského zážitku. Vaše soukromí je pro nás důležité. Vyberte, co vám vyhovuje.",
                    acceptAllBtn: "Přijmout vše",
                    acceptNecessaryBtn: "Odmítnout vše",
                    showPreferencesBtn: "Spravovat nastavení",
                    footer: "<a href=\"#link\">Zásady ochrany osobních údajů</a>\n<a href=\"#link\">Obchodní podmínky</a>"
                },
                preferencesModal: {
                    title: "Centrum preferencí cookies",
                    acceptAllBtn: "Přijmout vše",
                    acceptNecessaryBtn: "Odmítnout vše",
                    savePreferencesBtn: "Uložit nastavení",
                    closeIconLabel: "Zavřít okno",
                    serviceCounterLabel: "Služba|Služby",
                    sections: [
                        {
                            title: "Použití cookies",
                            description: "Používáme cookies pro zajištění funkčnosti webu a analýzu návštěvnosti. Pomáhají nám zlepšovat vaše zkušenosti."
                        },
                        {
                            title: "Nezbytné cookies <span class=\"pm__badge\">Vždy povoleno</span>",
                            description: "Tyto cookies jsou nutné pro základní funkce webu, jako je zabezpečení nebo správa přístupu, a nelze je vypnout.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funkční cookies",
                            description: "Tyto cookies nám umožňují přizpůsobit web vašim potřebám, např. si zapamatovat vaše preference.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytické cookies",
                            description: "Pomocí těchto cookies zjišťujeme, jak uživatelé náš web používají, a pomáháme tak optimalizovat jeho obsah.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Reklamní cookies",
                            description: "Tyto cookies slouží k personalizaci reklam a sledování efektivity marketingových kampaní.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Další informace",
                            description: "Pokud máte dotazy k našim zásadám používání cookies, kontaktujte nás <a class=\"cc__link\" href=\"#yourdomain.com\">zde</a>."
                        }
                    ]
                }
            }
        }
    }
});