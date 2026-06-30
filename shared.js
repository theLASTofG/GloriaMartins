/* ============================================================
   GLORIA MARTINS — shared.js
   Injects navbar + footer, handles routing highlights
   ============================================================ */

const BOOK_URL = "https://app.squareup.com/appointments/buyer/widget/3fq53objbtzxe5/WM6SYV1E49FC3";
const LOGO_URL = "images/gloria_martins_logo_superior_sem_fundo.png";
const LANG_STORAGE_KEY = "gm_lang";
const FLAG_AU = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/au.svg";
const FLAG_EN = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg";
const FLAG_PT = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/br.svg";
const FLAG_ES = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ar.svg";
const WA_PHONE = "61407266282";
const WA_MSG   = encodeURIComponent("Hi Gloria, I'd like to book a session!");
const WA_URL_FULL = `https://wa.me/${WA_PHONE}?text=${WA_MSG}`;
const FB_URL   = "https://www.facebook.com/GloriaMartins42";
const IG_URL   = "https://www.instagram.com/Perfect_connection_42/";

/* ---------- Google Translate initialiser (invoked by the GT script callback) ---------- */
window.googleTranslateElementInit = function () {
  if (typeof google === 'undefined' || !google.translate) return;
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'pt,es',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
  }, 'google_translate_element');
};

/* ---------- Detect current page ---------- */
const PAGE_MAP = {
  'index.html': 'home',
  'about.html': 'about',
  'services.html': 'services',
  'contact.html': 'contact',
  'terms.html': 'terms',
};
const filename = location.pathname.split('/').pop() || 'index.html';
const CURRENT_PAGE = PAGE_MAP[filename] || 'home';

/* ---------- Navbar HTML ---------- */
const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="navbar__inner">
    <div class="navbar__left">
      <div class="lang-switch" aria-label="Language selector">
        <button class="lang-switch__btn" data-lang="en" aria-label="Australian English">
          <img src="${FLAG_AU}" alt="Australia" loading="lazy" decoding="async" />
        </button>
        <button class="lang-switch__btn" data-lang="en" aria-label="English">
          <img src="${FLAG_EN}" alt="English" loading="lazy" decoding="async" />
        </button>
        <button class="lang-switch__btn" data-lang="pt" aria-label="Portuguese">
          <img src="${FLAG_PT}" alt="Portuguese" loading="lazy" decoding="async" />
        </button>
        <button class="lang-switch__btn" data-lang="es" aria-label="Spanish">
          <img src="${FLAG_ES}" alt="Spanish" loading="lazy" decoding="async" />
        </button>
      </div>
    </div>
    <ul class="navbar__links">
      <li><a href="index.html"    data-page="home" data-i18n="nav_home">Home</a></li>
      <li><a href="about.html"    data-page="about" data-i18n="nav_about">About Me</a></li>
      <li><a href="services.html" data-page="services" data-i18n="nav_services">Services</a></li>
      <li><a href="contact.html"  data-page="contact" data-i18n="nav_contact">Contact</a></li>
    </ul>
    <a href="${BOOK_URL}" target="_blank" rel="noopener noreferrer"
       class="btn btn--pink navbar__cta" data-i18n="cta_schedule">Schedule an Appointment</a>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div id="google_translate_element" style="display:none;position:absolute;visibility:hidden;width:0;height:0;overflow:hidden;" aria-hidden="true"></div>
<div class="mobile-menu" id="mobile-menu">
  <div class="lang-switch lang-switch--mobile" aria-label="Language selector">
    <button class="lang-switch__btn" data-lang="en" aria-label="Australian English">
      <img src="${FLAG_AU}" alt="Australia" loading="lazy" decoding="async" />
    </button>
    <button class="lang-switch__btn" data-lang="en" aria-label="English">
      <img src="${FLAG_EN}" alt="English" loading="lazy" decoding="async" />
    </button>
    <button class="lang-switch__btn" data-lang="pt" aria-label="Portuguese">
      <img src="${FLAG_PT}" alt="Portuguese" loading="lazy" decoding="async" />
    </button>
    <button class="lang-switch__btn" data-lang="es" aria-label="Spanish">
      <img src="${FLAG_ES}" alt="Spanish" loading="lazy" decoding="async" />
    </button>
  </div>
  <a href="index.html"    data-page="home" data-i18n="nav_home">Home</a>
  <a href="about.html"    data-page="about" data-i18n="nav_about">About Me</a>
  <a href="services.html" data-page="services" data-i18n="nav_services">Services</a>
  <a href="contact.html"  data-page="contact" data-i18n="nav_contact">Contact</a>
  <a href="${BOOK_URL}" target="_blank" rel="noopener noreferrer"
     class="btn btn--pink mobile-cta" style="margin-top:20px;text-align:center;" data-i18n="cta_schedule">
     Schedule an Appointment
  </a>
</div>`;

/* ---------- Footer HTML ---------- */
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">

      <div>
        <img src="${LOGO_URL}"
             alt="Gloria Martins" class="footer__logo" />
        <p class="footer__tagline" data-i18n="footer_tagline">
          Someday everything will make perfect sense. So, for now, laugh at the confusion,
          smile through the tears and keep reminding yourself that everything happens for a reason.
        </p>
        <div class="footer__social">
          <a href="https://www.facebook.com/GloriaMartins42" target="_blank" rel="noopener noreferrer"
             aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/Perfect_connection_42/" target="_blank" rel="noopener noreferrer"
             aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>

      <div>
        <p class="footer__col-title" data-i18n="footer_pages">Pages</p>
        <div class="footer__links">
          <a href="index.html" data-i18n="nav_home">Home</a>
          <a href="about.html" data-i18n="nav_about">About Me</a>
          <a href="services.html" data-i18n="nav_services">Services</a>
          <a href="contact.html" data-i18n="nav_contact">Contact</a>
        </div>
      </div>

      <div>
        <p class="footer__col-title" data-i18n="footer_sessions">Sessions</p>
        <div class="footer__links">
          <a href="services.html" data-i18n="footer_session_counselling">Counselling</a>
          <a href="services.html" data-i18n="footer_session_women_couples">Women &amp; Couples</a>
          <a href="services.html" data-i18n="footer_session_package">Wellness Package</a>
          <a href="services.html" data-i18n="footer_session_master">Master Classes</a>
          <a href="services.html" data-i18n="footer_session_vibro">Vibroacoustic Therapy</a>
          <a href="services.html" data-i18n="footer_session_sound">Sound Healing</a>
        </div>
      </div>

      <div>
        <p class="footer__col-title" data-i18n="nav_contact">Contact</p>
        <div class="footer__links" style="gap:8px;">
          <span style="font-size:13px;color:rgba(255,255,255,.55);">North Lakes, QLD<br>Brisbane, Australia 4509</span>
          <a href="mailto:perfectconnectiongm@yahoo.com">perfectconnectiongm@yahoo.com</a>
          <a href="${WA_URL_FULL}" target="_blank" rel="noopener noreferrer"
             style="font-size:13px;color:rgba(255,255,255,.8);display:flex;align-items:center;gap:6px;">
            <svg width="14" height="14" viewBox="0 0 32 32" fill="#25D366"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.47 2.025 7.773L.057 31.943l8.297-2.175A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.383c-.394-.198-2.333-1.151-2.694-1.281-.362-.132-.624-.198-.888.198-.263.396-1.02 1.281-1.249 1.547-.23.264-.46.298-.854.099-.394-.198-1.664-.614-3.172-1.961-1.173-1.048-1.964-2.34-2.196-2.736-.23-.396-.024-.61.173-.806.178-.178.395-.462.593-.693.198-.231.263-.396.395-.66.131-.264.065-.495-.034-.693-.099-.198-.888-2.145-1.217-2.937-.32-.772-.645-.667-.888-.679l-.756-.013c-.263 0-.692.099-1.055.495-.362.396-1.382 1.35-1.382 3.293 0 1.944 1.415 3.822 1.613 4.086.199.264 2.784 4.253 6.748 5.962.944.407 1.68.65 2.252.832.947.302 1.808.259 2.488.157.758-.113 2.333-.954 2.663-1.876.329-.922.329-1.713.23-1.877-.099-.165-.362-.264-.756-.462z"/></svg>
            +61 407 266 282
          </a>
          <a href="${BOOK_URL}" target="_blank" rel="noopener noreferrer"
             class="btn btn--pink" style="margin-top:12px;text-align:center;font-size:10px;padding:10px 20px;" data-i18n="book_now">
             Book Now
          </a>
        </div>
      </div>

    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.08);margin-top:40px;padding-top:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
      <p class="footer__copyright" style="margin:0;">
        &copy; <span id="footer-year"></span> Gloria Martins &mdash; Counselling &amp; Holistic Therapies &middot; North Brisbane, Australia
      </p>
      <a href="terms.html"
         style="display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.2);padding:8px 18px;transition:all 0.25s;white-space:nowrap;"
         onmouseover="this.style.color='#fff';this.style.borderColor='rgba(255,255,255,0.5)'"
         onmouseout="this.style.color='rgba(255,255,255,0.6)';this.style.borderColor='rgba(255,255,255,0.2)'">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        </svg>
        Terms &amp; Conditions
      </a>
    </div>
  </div>
</footer>`;

const FLOAT_HTML = `
<div class="float-social" aria-label="Social media">
  <a href="${WA_URL_FULL}" class="float-social__btn float-social__btn--whatsapp"
     target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.47 2.025 7.773L.057 31.943l8.297-2.175A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25a13.2 13.2 0 01-6.744-1.841l-.486-.287-5.013 1.2 1.225-4.881-.317-.5A13.196 13.196 0 012.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25zm7.27-9.867c-.394-.198-2.333-1.151-2.694-1.281-.362-.132-.624-.198-.888.198-.263.396-1.02 1.281-1.249 1.547-.23.264-.46.298-.854.099-.394-.198-1.664-.614-3.172-1.961-1.173-1.048-1.964-2.34-2.196-2.736-.23-.396-.024-.61.173-.806.178-.178.395-.462.593-.693.198-.231.263-.396.395-.66.131-.264.065-.495-.034-.693-.099-.198-.888-2.145-1.217-2.937-.32-.772-.645-.667-.888-.679l-.756-.013c-.263 0-.692.099-1.055.495-.362.396-1.382 1.35-1.382 3.293 0 1.944 1.415 3.822 1.613 4.086.199.264 2.784 4.253 6.748 5.962.944.407 1.68.65 2.252.832.947.302 1.808.259 2.488.157.758-.113 2.333-.954 2.663-1.876.329-.922.329-1.713.23-1.877-.099-.165-.362-.264-.756-.462z"/>
    </svg>
  </a>
  <a href="${FB_URL}" class="float-social__btn float-social__btn--facebook"
     target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  </a>
  <a href="${IG_URL}" class="float-social__btn float-social__btn--instagram"
     target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  </a>
</div>`;

const I18N = {
  en: {
    nav_home: "Home",
    nav_about: "About Me",
    nav_services: "Services",
    nav_hypnotherapy: "Hypnotherapy",
    nav_contact: "Contact",
    cta_schedule: "Schedule an Appointment",
    book_now: "Book Now",
    footer_pages: "Pages",
    footer_sessions: "Sessions",
    footer_session_counselling: "Counselling",
    footer_session_women_couples: "Women & Couples",
    footer_session_package: "Wellness Package",
    footer_session_master: "Master Classes",
    footer_session_vibro: "Vibroacoustic Therapy",
    footer_session_sound: "Sound Healing",
    footer_tagline: "Someday everything will make perfect sense. So, for now, laugh at the confusion, smile through the tears and keep reminding yourself that everything happens for a reason.",
  },
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_services: "Serviços",
    nav_hypnotherapy: "Hipnoterapia",
    nav_contact: "Contato",
    cta_schedule: "Agendar Atendimento",
    book_now: "Agendar Agora",
    footer_pages: "Páginas",
    footer_sessions: "Atendimentos",
    footer_session_counselling: "Aconselhamento",
    footer_session_women_couples: "Mulheres e Casais",
    footer_session_package: "Pacote Bem-Estar",
    footer_session_master: "Master Classes",
    footer_session_vibro: "Terapia Vibroacústica",
    footer_session_sound: "Terapia com Som",
    footer_tagline: "Um dia tudo fará perfeito sentido. Por enquanto, ria da confusão, sorria através das lágrimas e continue lembrando que tudo acontece por uma razão.",
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_services: "Servicios",
    nav_hypnotherapy: "Hipnoterapia",
    nav_contact: "Contacto",
    cta_schedule: "Reservar Cita",
    book_now: "Reservar Ahora",
    footer_pages: "Páginas",
    footer_sessions: "Sesiones",
    footer_session_counselling: "Consejería",
    footer_session_women_couples: "Mujeres y Parejas",
    footer_session_package: "Paquete de Bienestar",
    footer_session_master: "Master Classes",
    footer_session_vibro: "Terapia Vibroacústica",
    footer_session_sound: "Sanación Sonora",
    footer_tagline: "Algún día todo tendrá perfecto sentido. Por ahora, ríe en medio de la confusión, sonríe entre lágrimas y recuerda que todo sucede por una razón.",
  },
};

function setHomeI18nKeys() {
  if (CURRENT_PAGE !== 'home') return;
  const bind = (selector, key) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('data-i18n', key);
  };
  bind('.hero__eyebrow', 'home_hero_eyebrow');
  bind('.hero__title', 'home_hero_title');
  bind('.hero__sub', 'home_hero_sub');
  bind('.hero__desc', 'home_hero_desc');
  bind('.hero .btn.btn--pink', 'book_now');
  bind('.welcome-grid .eyebrow', 'home_welcome_eyebrow');
  bind('.welcome-grid .section-title', 'home_welcome_title');
}

function applyHeroTitle() {
  if (CURRENT_PAGE !== 'home') return;
  const lang = getActiveLang();
  if (lang === 'en') return;
  const el = document.querySelector('.hero__title');
  if (!el) return;
  const dict = I18N[lang];
  if (dict && dict.home_hero_title) el.innerHTML = dict.home_hero_title;
}

Object.assign(I18N.en, {
  home_hero_eyebrow: "Perfect Connection · Mind, Body, Spirit",
  home_hero_title: "Counselling,<br>and holistic<br>therapies.",
  home_hero_sub: "Mind, body, Spirit",
  home_hero_desc: "Flowing as Existence, still as timeless being.<br>Try to keep quiet and focus on the silence of your heart.",
  home_welcome_eyebrow: "Welcome To Perfect Connection",
  home_welcome_title: "Everything changes<br>nothing stays the same.",
});

Object.assign(I18N.pt, {
  home_hero_eyebrow: "Conexão Perfeita · Mente, Corpo, Espírito",
  home_hero_title: "Aconselhamento profissional,<br>e terapias<br>holísticas.",
  home_hero_sub: "Mente, corpo, espírito",
  home_hero_desc: "Fluindo como existência, em quietude como ser atemporal.<br>Tente silenciar e focar no silêncio do seu coração.",
  home_welcome_eyebrow: "Bem-vinda à Perfect Connection",
  home_welcome_title: "Tudo muda,<br>nada permanece igual.",
});

Object.assign(I18N.es, {
  home_hero_eyebrow: "Conexión Perfecta · Mente, Cuerpo, Espíritu",
  home_hero_title: "Consejería,<br>y terapias<br>holísticas.",
  home_hero_sub: "Mente, cuerpo, espíritu",
  home_hero_desc: "Fluyendo como existencia, en quietud como ser atemporal.<br>Intenta guardar silencio y escuchar el corazón.",
  home_welcome_eyebrow: "Bienvenida a Perfect Connection",
  home_welcome_title: "Todo cambia,<br>nada permanece igual.",
});

/* Read the active language from the googtrans cookie set by GT */
function getActiveLang() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  if (!match || !match[1]) return localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  const val = decodeURIComponent(match[1]);
  if (!val) return 'en';
  const code = val.split('/').pop();
  return (code && I18N[code]) ? code : 'en';
}

/* Set googtrans cookie and reload — this is how Google Translate embed actually works */
function applyLanguage(lang) {
  const selectedLang = I18N[lang] ? lang : 'en';
  localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
  const host = location.hostname;
  if (selectedLang === 'en') {
    const exp = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'googtrans=; ' + exp + '; path=/';
    if (host && host.includes('.')) {
      document.cookie = 'googtrans=; ' + exp + '; path=/; domain=.' + host;
    }
  } else {
    const val = '/en/' + selectedLang;
    document.cookie = 'googtrans=' + val + '; path=/';
    if (host && host.includes('.')) {
      document.cookie = 'googtrans=' + val + '; path=/; domain=.' + host;
    }
  }
  location.reload();
}

function initServiceModal() {
  const modal = document.getElementById('service-modal');
  if (!modal) return;

  const titleEl = document.getElementById('service-modal-title');
  const subtitleEl = document.getElementById('service-modal-subtitle');
  const descEl = document.getElementById('service-modal-desc');
  const pointsEl = document.getElementById('service-modal-points');
  const metaEl = document.getElementById('service-modal-meta');
  const contactEl = document.getElementById('service-modal-contact');

  const services = {
    counselling: {
      title: "Counselling Sessions",
      subtitle: "Gloria Martins — Mental Health Advocate | Mindfulness Practitioner | Holistic Therapist",
      desc: "A compassionate and personalized counselling space focused on emotional healing, self-awareness, and practical tools for daily life.",
      points: [
        "More than 20 years supporting clients through movement, mindfulness, and emotional wellbeing.",
        "Integrative approach with counselling, breathwork, meditation, and holistic practices.",
        "Support for anxiety, confidence, self-esteem, and life transitions.",
        "A safe non-judgmental environment where healing and personal growth can happen."
      ],
      meta: "1 hour · $135 · North Brisbane",
      contact: "For a tailored plan, contact by phone or email.",
      img: "images/WhatsApp-Image-2025-07-08-at-09.04.55_4d93344c.jpg",
    },
    vibroacoustic: {
      title: "Vibroacoustic Therapy",
      subtitle: "Vibroacoustic Sound Healing Therapy",
      desc: "A 3D inner-body vibratory sound therapy that supports relaxation, nervous system regulation, and whole-body recovery.",
      points: [
        "Uses low-frequency vibration and therapeutic music to stimulate deep relaxation.",
        "Can support stress reduction, improved heart rate variability, and emotional regulation.",
        "Linked to vagus nerve activation and parasympathetic response.",
        "Sessions available individually or in discounted multi-session packages."
      ],
      meta: "1h 30m · $135 · North Brisbane",
      contact: "30 min $85 · 1h $135 · Packages available. Contact: karmaesp@yahoo.com",
      img: "images/WhatsApp-Image-2023-06-28-at-12.53.40.jpg",
    },
    "sound-healing": {
      title: "Sound Healing Therapy",
      subtitle: "Healing through vibration, rhythm, and frequency",
      desc: "A restorative therapy that helps release emotional tension, calm the mind, and reconnect mind and body through sound.",
      points: [
        "Supports emotional balancing and stress reduction through frequency work.",
        "Designed to help move from lower emotional states into more grounded states.",
        "Excellent complementary practice for mental, emotional, and spiritual wellbeing.",
        "\"Music and rhythm find their way to the secret places of the soul.\" — Plato"
      ],
      meta: "1h 30m · Private $135 / Couples $185",
      contact: "Contact: karmaesp@yahoo.com · Mobile: 0407 266 282",
      img: "images/WhatsApp-Image-2023-06-13-at-11.05.47.jpg",
    },
    workshop: {
      title: "Workshop Sessions",
      subtitle: "Group wellness workshops for teams and communities",
      desc: "Interactive sessions to teach practical breathwork, yoga, and meditation tools that can be used at work or at home.",
      points: [
        "Great for businesses, communities, schools, and private groups.",
        "Designed to build connection, wellbeing, and emotional reset in groups.",
        "North Brisbane area or location of your choice.",
        "Maximum capacity up to 50 participants."
      ],
      meta: "2h 30m · Price on request",
      contact: "Service from $60 p/p (varies by group size and location).",
      img: "images/WhatsApp-Image-2023-07-04-at-14.22.37.jpg",
    },
    "master-classes": {
      title: "Master Classes",
      subtitle: "Master classes for fun and relaxation",
      desc: "Dynamic group experiences combining movement, mindfulness, breathwork, and stress-release tools in a welcoming format.",
      points: [
        "2h 30m group session focused on practical techniques and wellbeing.",
        "Business, private, and recreational group options.",
        "North side of Brisbane or arranged external location.",
        "Ideal for strengthening group connection and emotional balance."
      ],
      meta: "2-3 hours · Group pricing",
      contact: "Service from $60 p/p (varies). Packages organized via phone or email.",
      img: "images/WhatsApp-Image-2023-07-04-at-14.22.28.jpg",
    },
    "wellness-package": {
      title: "Wellness Package",
      subtitle: "Wellness and Mindfulness Package",
      desc: "A structured 5-session private journey combining yoga, alignment, breathwork, and mindfulness for consistent results.",
      points: [
        "5 x 1 hour private sessions.",
        "$600 for 1 person · $1000 for 2 people.",
        "Usually delivered at North Lakes workspace unless arranged otherwise.",
        "Program designed to be completed within a focused 5-week period."
      ],
      meta: "5 sessions · $600 package",
      contact: "Contact: 56 Dickson Crescent, North Lakes · +61 407 266 282 · karmaesp@yahoo.com",
      img: "images/0439f4_df268d306f1d49c396fcfc031119a36cmv2.webp",
    },
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openModal = (serviceKey) => {
    const service = services[serviceKey];
    if (!service) return;
    titleEl.textContent = service.title;
    subtitleEl.textContent = service.subtitle || "";
    descEl.textContent = service.desc;
    pointsEl.innerHTML = "";
    (service.points || []).forEach((point) => {
      const li = document.createElement('li');
      li.textContent = point;
      pointsEl.appendChild(li);
    });
    metaEl.textContent = service.meta;
    contactEl.textContent = service.contact || "";
    const mediaEl = modal.querySelector('.service-modal__media');
    if (mediaEl && service.img) {
      mediaEl.style.padding = '0';
      mediaEl.innerHTML = `<img src="${service.img}" alt="${service.title}" style="width:100%;height:100%;min-height:520px;object-fit:cover;display:block;" onerror="this.parentNode.style.padding='24px';this.style.display='none'" />`;
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  document.querySelectorAll('.home-service-card__open').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.service));
  });

  modal.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ---------- Inject + init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav before everything
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer at end
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  // Inject floating social buttons
  document.body.insertAdjacentHTML('beforeend', FLOAT_HTML);
  setHomeI18nKeys();
  applyHeroTitle();

  document.getElementById('footer-year').textContent = new Date().getFullYear();

  // Highlight active nav link
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.dataset.page === CURRENT_PAGE) a.classList.add('active');
  });

  // Hamburger toggle
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });

  // Close mobile menu on link click
  mob.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
    });
  });

  // Load Google Translate script
  (function () {
    const s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.defer = true;
    document.head.appendChild(s);
  }());

  // Language selector — GT applies translation automatically via googtrans cookie on reload
  const initialLang = getActiveLang();
  document.documentElement.lang = initialLang === 'pt' ? 'pt-BR' : initialLang;
  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === initialLang);
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Home services modal popup
  initServiceModal();

  // Specialised support tabs (Women & Couples)
  document.querySelectorAll('.spec-tabs__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.spec-tabs');
      group.querySelectorAll('.spec-tabs__btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.spec-tabs__panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = group.querySelector('#tab-' + btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  // Navbar scroll shadow
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow =
      window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.08)' : '';
  });

  // --- Scroll reveal: core elements ---
  const CORE_REVEAL = '.hero__title, .hero__sub, .hero__desc, .section-title, .eyebrow, .cta-banner__title, .cta-banner__sub, .lead, .quote-signature__photo';
  const CARD_REVEAL = '.home-service-card, .service-card, .testimonial-card, .benefit-box, .info-card';

  document.querySelectorAll(CORE_REVEAL).forEach(el => el.classList.add('reveal-up'));

  // Cards: reveal with stagger based on sibling position
  document.querySelectorAll(CARD_REVEAL).forEach(card => {
    card.classList.add('reveal-up');
    const siblings = Array.from(card.parentElement.children).filter(c => c.matches(CARD_REVEAL));
    const idx = siblings.indexOf(card);
    if (idx >= 1 && idx <= 6) card.classList.add(`reveal-up--d${idx}`);
  });

  // Dividers grow left-to-right
  document.querySelectorAll('.divider').forEach(d => d.classList.add('divider--animated'));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-up, .divider--animated').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -32px 0px',
  });

  document.querySelectorAll('.reveal-up, .divider--animated').forEach(el => revealObserver.observe(el));

  // --- Hero parallax (subtle background drift on scroll) ---
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    let rafPending = false;
    window.addEventListener('scroll', () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        heroBg.style.transform = `translateY(${window.scrollY * 0.26}px)`;
        rafPending = false;
      });
    }, { passive: true });
  }
});
