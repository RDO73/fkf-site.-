# FKF – Fatoukateminit et Fils
### Landing Page Institutionnelle B2B (Logistique, Shipping & Assainissement Industriel)
**Localisation :** Kamsar, Préfecture de Boké, République de Guinée

---

## 🌟 Présentation du Projet
Application web corporate haut de gamme conçue pour l'entreprise **FKF – Fatoukateminit et Fils**, partenaire de référence des entreprises minières et industrielles de la zone portuaire de Kamsar et du corridor de Boké.

## 🛠 Stack Technique & Architecture
- **Framework :** React 18
- **Styling :** Tailwind CSS (palette corporate `#0A192F`, `#112240`, `#D4AF37`)
- **Icônes :** Lucide React / SVG vectoriel haute précision
- **Typographie :** Montserrat (Titres & Identité) & Inter (Corps de texte)
- **Centralisation des Données :** Objet de configuration `SITE_CONFIG`

---

## 📁 Structure des Fichiers
```
fkf-app/
├── index.html           # Application autonome complète (React 18 + Tailwind + Lucide), prête à l'emploi dans n'importe quel navigateur
├── src/
│   ├── App.jsx          # Composant React modulaire complet pour intégration Vite / Next.js
│   └── siteConfig.js    # Fichier de configuration centralisé (téléphone, email, textes, services)
├── package.json
└── README.md
```

---

## ⚙️ Modification Facile des Données (`SITE_CONFIG`)
Pour personnaliser les numéros, emails, photos ou textes, modifiez simplement l'objet `SITE_CONFIG` en haut de `index.html` ou dans `src/siteConfig.js` :
- `contact.phone` : Remplacer `[Numéro à renseigner]` par le numéro de téléphone réel.
- `contact.email` : Remplacer `[Email officiel]` par l'e-mail de contact.
- `contact.whatsappHref` : Renseigner le lien WhatsApp avec l'indicatif guinéen (ex: `https://wa.me/224XXXXXXXXX`).
- `operations` : Remplacer les URLs de photos par les photos officielles de vos équipes et chantiers sur le terrain.

---

## 🚀 Utilisation
1. **Lancement direct et immédiat :**
   Double-cliquez simplement sur `index.html` ou ouvrez-le avec votre navigateur préféré (Chrome, Edge, Firefox, Safari). Tout est fonctionnel sans aucune commande d'installation !
2. **Intégration React / Vite :**
   Copiez `src/App.jsx` et `src/siteConfig.js` dans votre environnement Vite ou Next.js avec `lucide-react` et `tailwindcss`.

