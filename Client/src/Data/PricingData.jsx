import { BsCheck2Circle } from "react-icons/bs";

const PricingFullData = [
    {
        id: 1,
        title: "Gratuit",
        price: "0€",
        month: "/mois",
        description: "Commencez dès aujourd'hui avec notre formule gratuite et découvrez la puissance de l'IA pour interagir",
        icon: <BsCheck2Circle />,
        featureOne: "Jusqu’à 5 PDFs par mois",
        featureTwo: "Possibilité de poser 10 questions sur les PDF",
        featureThree: "Accès à l'analyse conversationnelle des documents",
        featureFour: "Stockage cloud limité à 100 Mo",
        btnOffer:"Passer à la formule Gratuite"
    },
    {
        id: 2,
        title: "Pro",
        price: "9.99€",
        month: "/mois",
        description: "Passez à notre formule Pro pour un traitement illimité des PDF, une analyse avancée des documents avec suggestions contextuelles, et un stockage cloud étendu.",
        icon: <BsCheck2Circle />,
        featureOne: "Traitement illimité des PDF",
        featureTwo: "Analyse avancée des documents avec suggestions contextuelles",
        featureThree: "Accès à l'API pour intégrations personnalisées",
        featureFour: "Stockage cloud étendu à 1 Go",
        btnOffer:"Passer à la formule Pro"

    },
    {
        id: 3,
        title: "Premium",
        popularity: "Populaire",
        price: "29.99€",
        month: "/mois",
        description: "Maximisez la puissance de PDFGeniusAI avec notre formule Premium, offrant toutes les fonctionnalités de la formule Pro, un accès prioritaire au support client, une reconnaissance optique de caractères (OCR) avancée, et un stockage cloud illimité",
        icon: <BsCheck2Circle />,
        featureOne: "Toutes les fonctionnalités de la formule Pro",
        featureTwo: "Accès prioritaire au support client",
        featureThree: "Reconnaissance optique de caractères (OCR) avancée",
        featureFour: "Stockage cloud illimité",
        btnOffer:"Passer à la formule Premium"

    },
]

export default PricingFullData