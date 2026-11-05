import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "./siteConfig";
import {
  MapPin,
  Phone,
  Mail,
  Ship,
  Sparkles,
  Recycle,
  Package,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  Briefcase,
  Clock,
  HardHat,
  Award,
  Zap,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Send,
  MessageCircle,
  Check,
  Building,
  User
} from "lucide-react";

// Map d'icônes dynamiques Lucide
const iconComponents = {
  MapPin,
  Phone,
  Mail,
  Ship,
  Sparkles,
  Recycle,
  Package,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  Briefcase,
  Clock,
  HardHat,
  Award,
  Zap,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Send,
  MessageCircle,
  Check,
  Building,
  User
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(SITE_CONFIG.services[0].title);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: SITE_CONFIG.services[0].title,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectServiceFromCard = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, service: serviceTitle }));
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "service") {
      setSelectedService(value);
    }
  };

  const buildWhatsAppQuoteUrl = (data) => {
    const text = [
      "Bonjour FKF (Fatoukateminit et Fils),",
      "",
      "Je souhaite vous adresser une demande de devis :",
      `• *Nom complet :* ${data.fullName || "-"}`,
      `• *Entreprise / Organisation :* ${data.company || "-"}`,
      `• *Téléphone :* ${data.phone || "-"}`,
      `• *E-mail :* ${data.email || "-"}`,
      `• *Prestation choisie :* ${data.service || "-"}`,
      "",
      "*Détails du besoin :*",
      data.message || "-"
    ].join("\n");
    return `https://wa.me/${SITE_CONFIG.contact.whatsappRaw || "224623746587"}?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoQuoteUrl = (data) => {
    const subject = `Demande de devis FKF - ${data.service} (${data.company || data.fullName})`;
    const body = [
      "Bonjour FKF (Fatoukateminit et Fils),",
      "",
      "Voici les détails de ma demande de devis :",
      `- Nom complet : ${data.fullName}`,
      `- Entreprise / Organisation : ${data.company}`,
      `- Téléphone : ${data.phone}`,
      `- E-mail : ${data.email}`,
      `- Prestation souhaitée : ${data.service}`,
      "",
      "Description détaillée du besoin :",
      data.message
    ].join("\n");
    return `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.contact.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Nouveau Devis FKF : ${formData.service} - ${formData.company || formData.fullName}`,
          Nom_Complet: formData.fullName,
          Entreprise_Organisation: formData.company,
          Telephone: formData.phone,
          Email_Client: formData.email,
          Prestation_Demandee: formData.service,
          Description_Du_Besoin: formData.message,
          _template: "table",
          _captcha: "false"
        })
      });
    } catch (err) {
      // Fallback silencieux
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: SITE_CONFIG.services[0].title,
      message: ""
    });
    setFormSubmitted(false);
  };

  const renderIcon = (name, props = {}) => {
    const Comp = iconComponents[name] || ShieldCheck;
    return <Comp {...props} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      
      {/* =================================================================
          A. HEADER (Top Bar & Sticky Nav)
          ================================================================= */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        {/* Top Bar Fine en Bleu Marine Profond #0A192F */}
        <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 border-b border-[#112240]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2 font-medium">
              <span className="text-[#D4AF37]"><MapPin size={14} /></span>
              <span>{SITE_CONFIG.contact.fullLocation}</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a href={SITE_CONFIG.contact.phoneHref} className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Phone size={13} className="text-[#D4AF37]" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <span className="hidden md:inline text-slate-500">|</span>
              <a href={SITE_CONFIG.contact.emailHref} className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Mail size={13} className="text-[#D4AF37]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barre de Navigation Principale */}
        <nav className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100" 
            : "bg-white py-5 shadow-sm"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            
            {/* Logo Textuel Stylisé FKF */}
            <a href="#accueil" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-lg bg-[#0A192F] flex items-center justify-center border-2 border-[#D4AF37] shadow-md group-hover:scale-105 transition-transform duration-300">
                <span className="font-bold text-xl text-[#D4AF37] tracking-wider">FKF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-[#0A192F] leading-tight tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  {SITE_CONFIG.company.fullName}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                  Kamsar • Boké • Guinée
                </span>
              </div>
            </a>

            {/* Liens Desktop */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
              <a href="#accueil" className="hover:text-[#0A192F] transition-colors">Accueil</a>
              <a href="#a-propos" className="hover:text-[#0A192F] transition-colors">À propos</a>
              <a href="#activites" className="hover:text-[#0A192F] transition-colors">Domaines d'activité</a>
              <a href="#equipes" className="hover:text-[#0A192F] transition-colors">Nos Équipes</a>
              <a href="#contact" className="hover:text-[#0A192F] transition-colors">Contact</a>
            </div>

            {/* CTA Desktop */}
            <div className="hidden sm:flex items-center">
              <a 
                href="#contact" 
                className="bg-[#D4AF37] hover:bg-[#B5952F] text-[#0A192F] font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Demander un devis
              </a>
            </div>

            {/* Bouton Hamburger Mobile */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0A192F] hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl">
              <div className="flex flex-col space-y-4 font-medium text-slate-800">
                <a 
                  href="#accueil" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#D4AF37] border-b border-slate-100"
                >
                  Accueil
                </a>
                <a 
                  href="#a-propos" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#D4AF37] border-b border-slate-100"
                >
                  À propos
                </a>
                <a 
                  href="#activites" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#D4AF37] border-b border-slate-100"
                >
                  Domaines d'activité
                </a>
                <a 
                  href="#equipes" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#D4AF37] border-b border-slate-100"
                >
                  Nos Équipes
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#D4AF37] border-b border-slate-100"
                >
                  Contact
                </a>
                <div className="pt-2">
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-[#D4AF37] text-[#0A192F] font-bold py-3 rounded-lg uppercase tracking-wider text-xs shadow-md"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* =================================================================
          B. HERO SECTION (Impact Visuel & Indicateurs de Confiance)
          ================================================================= */}
      <section id="accueil" className="relative bg-[#0A192F] text-white overflow-hidden py-20 lg:py-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-25 filter grayscale"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/95 to-[#0A192F]/85 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Badge Supérieur */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
              <span>{SITE_CONFIG.company.tagline}</span>
            </div>

            {/* Titre Principal H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Votre partenaire logistique & assainissement à <span className="text-[#D4AF37]">Kamsar – Boké</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              {SITE_CONFIG.company.description}
            </p>

            {/* 2 Boutons d'action CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
              <a 
                href="#activites" 
                className="inline-flex justify-center items-center gap-2 bg-[#D4AF37] hover:bg-[#B5952F] text-[#0A192F] font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <span>Découvrir nos activités</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-slate-400/50 hover:border-white font-semibold text-sm uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all duration-200"
              >
                <span>Demander une cotation</span>
              </a>
            </div>

          </div>

          {/* Indicateurs de Confiance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-700/60">
            {SITE_CONFIG.trustIndicators.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#112240]/60 backdrop-blur-md border border-slate-700/60 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-colors duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                  {renderIcon(item.icon, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================================================
          C. SECTION À PROPOS (« Qui sommes-nous ? »)
          ================================================================= */}
      <section id="a-propos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-[#D4AF37] font-bold text-xs uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-md">
                Qui sommes-nous ?
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight">
                Une structure dédiée aux exigences industrielles du corridor de Boké
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] rounded-full"></div>
              
              <p className="text-slate-600 leading-relaxed text-base">
                Implantée au cœur de la région minière et portuaire de <strong>Kamsar (Préfecture de Boké)</strong>, l'entreprise <strong>FKF – Fatoukateminit et Fils</strong> s'est structurée pour répondre aux défis logistiques et environnementaux les plus exigeants de la République de Guinée.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Nous apportons aux consortiums miniers, opérateurs portuaires, sous-traitants industriels et PME locales des solutions pragmatiques et sécurisées. De la gestion des expéditions maritimes et terrestres jusqu'à l'assainissement et la valorisation responsable des déchets, notre rigueur d'intervention assure la continuité sereine de vos opérations.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-xs font-semibold text-[#0A192F]">
                  <MapPin size={16} className="text-[#D4AF37]" />
                  <span>Ancrage local Kamsar</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-xs font-semibold text-[#0A192F]">
                  <ShieldCheck size={16} className="text-[#D4AF37]" />
                  <span>Conformité HSE rigoureuse</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-[#0A192F] mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
                  <span>Nos 5 Piliers d'Engagement</span>
                </h3>

                <div className="space-y-4">
                  {SITE_CONFIG.pillars.map((pillar, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-[#D4AF37] flex items-center justify-center shrink-0">
                        {renderIcon(pillar.icon, { size: 20 })}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A192F] text-sm mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          D. SECTION NOS 7 ACTIVITÉS (« Nos domaines d'intervention »)
          ================================================================= */}
      <section id="activites" className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-[#D4AF37] font-bold text-xs uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-md mb-3">
              Expertise Terrain
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-4">
              Nos 7 Domaines d'Intervention
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 text-base">
              Une offre intégrée pour couvrir l'ensemble des besoins logistiques, techniques et de salubrité industrielle sur vos sites opérationnels à Kamsar et Boké.
            </p>
          </div>

          {/* Grille des 6 premières activités (3 colonnes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {SITE_CONFIG.services.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#0A192F] text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {renderIcon(service.icon, { size: 28 })}
                  </div>

                  <h3 className="font-bold text-xl text-[#0A192F] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleSelectServiceFromCard(service.title)}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-50 hover:bg-[#D4AF37] text-[#0A192F] font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#D4AF37] transition-all duration-200"
                >
                  <span>Demander un devis pour ce service</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* 7ème Activité : Bannière Large Horizontale */}
          {SITE_CONFIG.services[6] && (
            <div className="bg-[#0A192F] text-white rounded-2xl p-8 lg:p-10 border-2 border-[#D4AF37]/40 shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37] text-[#0A192F] flex items-center justify-center shrink-0 shadow-lg">
                    {renderIcon(SITE_CONFIG.services[6].icon, { size: 32 })}
                  </div>
                  <div className="max-w-2xl">
                    <div className="inline-block text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
                      Service sur mesure & Personnalisé
                    </div>
                    <h3 className="font-extrabold text-2xl text-white mb-2">
                      {SITE_CONFIG.services[6].title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {SITE_CONFIG.services[6].shortDesc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <button 
                    onClick={() => handleSelectServiceFromCard(SITE_CONFIG.services[6].title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B5952F] text-[#0A192F] font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Consulter notre équipe</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =================================================================
          E. SECTION ÉQUIPES & OPÉRATIONS TERRAIN
          ================================================================= */}
      <section id="equipes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-[#D4AF37] font-bold text-xs uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-md mb-3">
              Engagement & Sécurité
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-4">
              Équipes Dédiées & Opérations Terrain
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 text-base">
              Des professionnels formés aux spécificités des zones industrielles et portuaires guinéennes, équipés des protections réglementaires (EPI) pour intervenir en toute sécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {SITE_CONFIG.operations.map((op) => (
              <div 
                key={op.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A192F]">
                  <img 
                    src={op.imageUrl} 
                    alt={op.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-black/20"></div>
                  
                  <div className="absolute top-4 left-4 bg-[#0A192F]/80 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] text-[11px] font-semibold px-3 py-1 rounded-md shadow">
                    📷 {op.photoBadge}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[#D4AF37] text-[#0A192F] font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-md">
                      {op.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-[#0A192F] mb-3">
                      {op.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {op.description}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-slate-200 pt-4">
                    {op.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#0A192F]">
                        <span className="text-[#D4AF37]"><Check size={16} /></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================================================
          F. SECTION CONTACT & DEMANDE DE DEVIS INTERACTIF
          ================================================================= */}
      <section id="contact" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-[#D4AF37] font-bold text-xs uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-md mb-3">
              Échange & Devis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-4">
              Contactez FKF & Demandez une Cotation
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 text-base">
              Transmettez-nous les détails de vos besoins opérationnels. Notre équipe étudiera votre demande avec la plus haute réactivité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="bg-[#0A192F] text-white rounded-2xl p-8 border border-[#112240] shadow-xl space-y-8">
                <div>
                  <span className="text-[#D4AF37] font-black text-2xl tracking-wider">FKF</span>
                  <h3 className="font-bold text-lg text-white mt-1">
                    {SITE_CONFIG.company.fullName}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Partenaire logistique et assainissement industriel
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#D4AF37] uppercase tracking-wider">Siège & Opérations</div>
                      <div className="text-slate-200 mt-0.5">{SITE_CONFIG.contact.addressLine}</div>
                      <div className="text-slate-400 text-xs">{SITE_CONFIG.contact.country}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#D4AF37] uppercase tracking-wider">Ligne Téléphonique & WhatsApp</div>
                      <a href={SITE_CONFIG.contact.phoneHref} className="block text-slate-200 hover:text-[#D4AF37] transition-colors mt-0.5">{SITE_CONFIG.contact.phone}</a>
                      <div className="text-slate-400 text-xs">Accueil & service client</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#D4AF37] uppercase tracking-wider">Courrier Électronique</div>
                      <a href={SITE_CONFIG.contact.emailHref} className="block text-slate-200 hover:text-[#D4AF37] transition-colors mt-0.5">{SITE_CONFIG.contact.email}</a>
                      <div className="text-slate-400 text-xs">Réception des appels d'offres</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80">
                  <p className="text-slate-400 text-xs italic">
                    * Les informations de contact ci-dessus sont modifiables dans siteConfig.js.
                  </p>
                </div>
              </div>

              <a 
                href={SITE_CONFIG.contact.whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-4 group transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <MessageCircle size={24} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm tracking-wider uppercase">Discuter sur WhatsApp</div>
                  <div className="text-xs text-green-100">Échange direct avec nos coordinateurs</div>
                </div>
              </a>

            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl">
                
                {formSubmitted ? (
                  <div className="py-10 px-4 text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 size={42} />
                    </div>
                    <h3 className="font-extrabold text-2xl text-[#0A192F]">
                      Votre demande de devis a été envoyée !
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Merci <strong>{formData.fullName}</strong> ({formData.company || "Votre structure"}). Vos informations ont été transmises à <strong>{SITE_CONFIG.contact.email}</strong> pour votre besoin en <strong>{formData.service}</strong>.
                    </p>
                    
                    <div className="bg-[#F8FAFC] p-5 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="text-[#0A192F] font-bold">Récapitulatif de votre demande :</div>
                      <div><span className="text-slate-500">Nom & Entreprise :</span> {formData.fullName} ({formData.company})</div>
                      <div><span className="text-slate-500">Prestation :</span> {formData.service}</div>
                      <div><span className="text-slate-500">Contact :</span> {formData.email} | {formData.phone}</div>
                      <div><span className="text-slate-500">Besoin :</span> {formData.message}</div>
                    </div>

                    <div className="max-w-md mx-auto space-y-3 pt-2">
                      <p className="text-xs font-semibold text-[#0A192F]">
                        Pour un traitement immédiat avec la Direction Générale, confirmez aussi en 1 clic sur WhatsApp :
                      </p>
                      <a
                        href={buildWhatsAppQuoteUrl(formData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        <MessageCircle size={20} />
                        <span>Envoyer ce devis pré-rempli sur WhatsApp ({SITE_CONFIG.contact.whatsappNumber})</span>
                      </a>

                      <a
                        href={buildMailtoQuoteUrl(formData)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#0A192F] font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl border border-[#D4AF37] transition-all"
                      >
                        <Mail size={16} />
                        <span>Ouvrir dans ma messagerie ({SITE_CONFIG.contact.email})</span>
                      </a>
                    </div>

                    <div className="pt-4">
                      <button 
                        onClick={handleResetForm}
                        className="bg-[#0A192F] text-white hover:bg-[#112240] font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-lg shadow transition-colors"
                      >
                        Nouvelle demande de devis
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-[#0A192F] mb-1">
                        Demande de cotation / Devis express
                      </h3>
                      <p className="text-slate-500 text-xs">
                        Remplissez ce formulaire pour recevoir une proposition adaptée à votre cahier des charges.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                            <User size={18} />
                          </span>
                          <input 
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleFormChange}
                            placeholder="ex: Mamadou Diallo"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Entreprise / Organisation <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                            <Building size={18} />
                          </span>
                          <input 
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleFormChange}
                            placeholder="ex: Consortium Minier / Entreprise"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Adresse e-mail <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                            <Mail size={18} />
                          </span>
                          <input 
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="contact@entreprise.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Numéro de téléphone <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                            <Phone size={18} />
                          </span>
                          <input 
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleFormChange}
                            placeholder="+224 6XX XX XX XX"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Type de prestation recherchée <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-white font-medium text-slate-800"
                      >
                        {SITE_CONFIG.services.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Description détaillée du besoin <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Précisez le volume, la localisation à Kamsar ou Boké, la période souhaitée et les contraintes techniques..."
                        className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="space-y-3">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D4AF37] hover:bg-[#B5952F] text-[#0A192F] font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Transmission à {SITE_CONFIG.contact.email}...</span>
                        ) : (
                          <>
                            <span>Envoyer ma demande de devis par E-mail</span>
                            <Send size={18} />
                          </>
                        )}
                      </button>

                      <a
                        href={buildWhatsAppQuoteUrl(formData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/40 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={18} />
                        <span>Envoyer directement ce devis sur WhatsApp ({SITE_CONFIG.contact.whatsappNumber})</span>
                      </a>
                    </div>

                    <div className="text-center">
                      <p className="text-[11px] text-slate-400">
                        Vos données sont traitées de manière strictement confidentielle pour l'élaboration de votre devis.
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          G. FOOTER (Pied de page) & BOUTON FLOTTANT
          ================================================================= */}
      <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#112240] flex items-center justify-center border border-[#D4AF37]">
                  <span className="font-bold text-lg text-[#D4AF37]">FKF</span>
                </div>
                <span className="font-bold text-lg text-white">
                  {SITE_CONFIG.company.fullName}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Entreprise de référence en logistique, Shipping, transport et assainissement industriel, basée à Kamsar dans la Préfecture de Boké.
              </p>
              <div className="text-xs text-[#D4AF37] font-semibold">
                📍 {SITE_CONFIG.contact.fullLocation}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#accueil" className="hover:text-[#D4AF37] transition-colors">Accueil</a></li>
                <li><a href="#a-propos" className="hover:text-[#D4AF37] transition-colors">À propos de FKF</a></li>
                <li><a href="#activites" className="hover:text-[#D4AF37] transition-colors">Nos 7 Domaines d'activité</a></li>
                <li><a href="#equipes" className="hover:text-[#D4AF37] transition-colors">Équipes & Opérations terrain</a></li>
                <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Demander un devis</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Nos Domaines
              </h4>
              <ul className="space-y-2 text-xs">
                {SITE_CONFIG.services.map((s) => (
                  <li key={s.id}>
                    <button 
                      onClick={() => handleSelectServiceFromCard(s.title)}
                      className="hover:text-[#D4AF37] transition-colors text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Coordonnées
              </h4>
              <div className="space-y-3 text-xs text-slate-400">
                <p><strong className="text-white">Localisation :</strong><br />{SITE_CONFIG.contact.addressLine}, {SITE_CONFIG.contact.country}</p>
                <p><strong className="text-white">Téléphone & WhatsApp :</strong><br /><a href={SITE_CONFIG.contact.phoneHref} className="hover:text-[#D4AF37] transition-colors">{SITE_CONFIG.contact.phone}</a></p>
                <p><strong className="text-white">E-mail :</strong><br /><a href={SITE_CONFIG.contact.emailHref} className="hover:text-[#D4AF37] transition-colors">{SITE_CONFIG.contact.email}</a></p>
              </div>
              <div className="pt-4 flex items-center gap-3">
                <a href={SITE_CONFIG.socials.linkedin} className="w-8 h-8 rounded-lg bg-[#112240] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="LinkedIn">
                  in
                </a>
                <a href={SITE_CONFIG.socials.facebook} className="w-8 h-8 rounded-lg bg-[#112240] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all" aria-label="Facebook">
                  f
                </a>
                <a href={SITE_CONFIG.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all" aria-label="WhatsApp">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              © 2026 FKF Fatoukateminit et Fils – Tous droits réservés.
            </div>
            <div className="text-slate-400">
              Kamsar • Boké • République de Guinée
            </div>
          </div>

        </div>
      </footer>

      {/* Bouton Flottant WhatsApp (Bas droite) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href={SITE_CONFIG.contact.whatsappHref}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contacter sur WhatsApp"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-full shadow-2xl border-2 border-white transition-all transform hover:scale-105 group"
        >
          <MessageCircle size={24} className="text-white" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider pr-1">
            WhatsApp Direct
          </span>
        </a>
      </div>

    </div>
  );
}

