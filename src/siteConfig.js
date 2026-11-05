/**
 * CENTRALISATION DES DONNÉES DU SITE (SITE_CONFIG)
 * Toutes les données modifiables sont réunies ici pour une maintenance simple.
 * Règle stricte de véracité : aucun faux numéro ou fausse certification inventée.
 */
export const SITE_CONFIG = {
  // Identité de l'entreprise
  company: {
    shortName: "FKF",
    fullName: "Fatoukateminit et Fils",
    tagline: "Logistique • Shipping • Assainissement Industriel",
    slogan: "Votre partenaire logistique & assainissement à Kamsar – Boké",
    description: "FKF Fatoukateminit et Fils accompagne les entreprises minières, industrielles et les organisations dans leurs besoins en Shipping, logistique et assainissement. Nous plaçons la fiabilité, la sécurité (HSE) et le respect de l'environnement au cœur de nos opérations.",
    foundedNote: "Société de droit guinéen enregistrée",
  },

  // Coordonnées & Contact (Officiels FKF)
  contact: {
    addressLine: "Kamsar, Préfecture de Boké",
    country: "République de Guinée",
    fullLocation: "Kamsar • Boké • République de Guinée",
    phone: "+224 623 74 65 87",
    phoneHref: "tel:+224623746587",
    email: "fatoukateminitetfils2@gmail.com",
    emailHref: "mailto:fatoukateminitetfils2@gmail.com",
    whatsappNumber: "+224 623 74 65 87",
    whatsappRaw: "224623746587",
    whatsappHref: "https://wa.me/224623746587",
  },

  // Réseaux sociaux & Liens externes
  socials: {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
  },

  // Indicateurs clés du Hero (100% véridiques et conformes)
  trustIndicators: [
    {
      id: "local",
      title: "Ancrage Local",
      description: "Présence opérationnelle stratégique à Kamsar et dans le corridor minier de Boké.",
      icon: "MapPin"
    },
    {
      id: "hse",
      title: "Exigence HSE",
      description: "Engagement strict Qualité, Hygiène, Sécurité au travail et respect de l'Environnement.",
      icon: "ShieldCheck"
    },
    {
      id: "reactivity",
      title: "Réactivité Opérationnelle",
      description: "Équipes disponibles, processus agiles et capacité d'intervention rapide sur site.",
      icon: "Clock"
    }
  ],

  // Les 5 Piliers d'excellence (Section À Propos)
  pillars: [
    {
      title: "Professionnalisme",
      description: "Rigueur technique, respect scrupuleux des délais et reporting clair à chaque étape de la mission.",
      icon: "CheckCircle2"
    },
    {
      title: "Sécurité (HSE)",
      description: "Tolérance zéro pour les risques. Port systématique des EPI et protocoles de prévention adaptés aux sites miniers.",
      icon: "HardHat"
    },
    {
      title: "Qualité de Service",
      description: "Standard élevé de réalisation, contrôle permanent des prestations et écoute active de nos partenaires.",
      icon: "Award"
    },
    {
      title: "Réactivité",
      description: "Capacité d'ajustement immédiat aux contraintes maritimes, portuaires et aux imprévus logistiques.",
      icon: "Zap"
    },
    {
      title: "Responsabilité Environnementale",
      description: "Gestion rationnelle des rejets, tri des matières et valorisation écologique dans le respect du littoral guinéen.",
      icon: "Leaf"
    }
  ],

  // Les 7 Domaines d'Activité
  services: [
    {
      id: "shipping",
      title: "Transport & Shipping",
      shortDesc: "Transport maritime et terrestre, gestion des expéditions, logistique portuaire et opérations de fret adaptées au secteur minier et industriel.",
      icon: "Ship",
      details: [
        "Assistance aux escales et consignation maritime à Kamsar",
        "Transport multimodal et acheminement terrestre sécurisé",
        "Suivi rigoureux et traçabilité des opérations de fret"
      ]
    },
    {
      id: "cleaning",
      title: "Nettoyage & Assainissement",
      shortDesc: "Nettoyage industriel de pointe, assainissement urbain et entretien approfondi des bases-vie, sites industriels et installations tertiaires.",
      icon: "Sparkles",
      details: [
        "Nettoyage haute pression et décapage de zones techniques",
        "Entretien périodique des bases-vie et bureaux d'exploitation",
        "Désinfection et assainissement sanitaire certifié"
      ]
    },
    {
      id: "waste",
      title: "Gestion des Déchets",
      shortDesc: "Collecte, tri sélectif, évacuation sécurisée et traitement responsable des déchets solides, banals et industriels spéciaux.",
      icon: "Recycle",
      details: [
        "Mise en place de filières de tri adaptées sur site",
        "Évacuation traçable vers les centres autorisés",
        "Plan de gestion et conformité réglementaire environnementale"
      ]
    },
    {
      id: "storage",
      title: "Conditionnement & Stockage",
      shortDesc: "Entreposage sécurisé, manutention précautionneuse, conditionnement sur mesure et organisation logistique des marchandises et pièces de rechange.",
      icon: "Package",
      details: [
        "Espaces d'entreposage surveillés et organisés",
        "Palettisation, empotage et conditionnement robuste",
        "Gestion rigoureuse des stocks et inventaires périodiques"
      ]
    },
    {
      id: "hse",
      title: "Sécurité & Prévention HSE",
      shortDesc: "Accompagnement opérationnel rigoureux en Santé, Sécurité et Environnement, analyse des risques et culture de vigilance partagée.",
      icon: "ShieldAlert",
      details: [
        "Évaluation des risques et causeries sécurité (Toolbox talks)",
        "Vérification du port et de la conformité des EPI",
        "Plans d'intervention d'urgence et sensibilisation du personnel"
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Entretien",
      shortDesc: "Entretien préventif et curatif de premier niveau, maintenance des équipements de soutien, outillages et infrastructures d'exploitation.",
      icon: "Wrench",
      details: [
        "Inspection périodique et maintenance préventive",
        "Dépannage d'équipements auxiliaires et logistiques",
        "Maintien en conditions opérationnelles de vos installations"
      ]
    },
    // 7ème Service (Bannière large)
    {
      id: "custom",
      title: "Autres prestations & Services spécialisés",
      shortDesc: "Vous avez un besoin spécifique sur mesure à Kamsar ou Boké ? FKF configure ses moyens humains et techniques selon votre cahier des charges.",
      icon: "Briefcase",
      details: [
        "Mise à disposition de main-d'œuvre qualifiée et encadrée",
        "Appui logistique événementiel et missions d'urgence",
        "Étude personnalisée de vos exigences opérationnelles"
      ],
      isBanner: true
    }
  ],

  // Équipes & Opérations Terrain (Photos réalistes et badges)
  operations: [
    {
      id: "pole-shipping",
      badge: "Pôle Shipping & Logistique",
      title: "Maîtrise de la chaîne logistique portuaire et terrestre",
      description: "Nos équipes opérationnelles interviennent directement sur les quais, zones de fret et corridors logistiques de Kamsar et Boké. Équipées des Équipements de Protection Individuelle (EPI) les plus stricts, elles coordonnent les mouvements de cargaisons et veillent à la fluidité des transits.",
      photoBadge: "Emplacement photo officielle FKF",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Opérations portuaires coordonnées", "Protocoles de levage et sécurisation", "Supervision terrain continue"]
    },
    {
      id: "pole-sanitation",
      badge: "Pôle Assainissement & Environnement",
      title: "Rigueur sanitaire et respect des écosystèmes industriels",
      description: "Spécialisés dans le nettoyage industriel lourd et la gestion environnementale, nos techniciens opèrent en tenues intégrales avec des méthodes éprouvées. Nous garantissons la propreté des installations de production et la préservation du milieu naturel environnant.",
      photoBadge: "Emplacement photo officielle FKF",
      imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
      highlights: ["Hygiène industrielle approfondie", "Gestion contrôlée des effluents", "Protection de l'environnement local"]
    }
  ]
};

