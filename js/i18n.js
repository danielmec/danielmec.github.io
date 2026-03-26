// =============================================
//  Daniel Meco — Portfolio  |  i18n.js
//  Internationalization EN / IT
// =============================================

const translations = {
    en: {
        // ── Navigation ──
        'nav.home':     'Home',
        'nav.about':    'About Me',
        'nav.projects': 'Projects',
        'nav.contact':  'Contact',
        // ── Footer ──
        'footer.role': 'Software Developer',
        'footer.copy': '© 2026 Daniel Meco. All rights reserved.',
        // ── Index · Hero ──
        'index.hero.badge':   'Available for opportunities',
        'index.hero.h1':    'Hello, I\'m <span>Daniel Meco</span>',
        'index.hero.p':       'Welcome to my professional portfolio. I create elegant solutions through code — web, desktop, and beyond.',
        'index.hero.work':    'View My Work',
        'index.hero.contact': 'Contact Me',
        // ── Index · Featured Projects ──
        'index.featured.title': 'Featured <span>Projects</span>',
        'index.escape.desc':    'Escape Room Multiplayer Game is a real-time web application where players collaborate to solve puzzles and overcome challenges within a fixed time limit.',
        'index.fitflow.desc':   'FitFlow is a cross-platform application (iOS, MacOS, Android, Desktop) developed with .NET MAUI that offers a comprehensive solution for gym management.',
        'index.learn':   'Learn More',
        'index.viewall': 'View All Projects',
        // ── Index · Skills ──
        'index.skills.title':    'My <span>Skills</span>',
        'index.skills.frontend': 'Frontend',
        'index.skills.backend':  'Backend',
        'index.skills.tools':    'Tools',
        // ── Index · CTA ──
        'index.cta.h2':  'Interested in working together?',
        'index.cta.p':   "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
        'index.cta.btn': 'Get In Touch',
        // ── About · Hero ──
        'about.hero.badge': 'About Me',
        'about.hero.h1':    'Who I <span>Am</span>',
        'about.hero.p':     'Passionate computer engineer, lifelong learner and problem-solver based in Rimini, Italy.',
        // ── About · Intro ──
        'about.intro.title': 'A bit about <span>myself</span>',
        'about.intro.p1':    'My name is <strong>Daniel Meco</strong>, and I\'m a Master\'s student in Computer Engineering at the University of Bologna. I completed my Bachelor\'s degree in 2024, and before that I graduated from a technical high school in Computer Science in 2020 with a score of <strong>100/100</strong>.',
        'about.intro.p2':    'I\'m passionate about technology, problem-solving, and creating innovative software solutions. My journey in computer science has been driven by curiosity and a continuous desire to grow — from building web apps to cross-platform desktop tools and multiplayer games.',
        // ── About · Education ──
        'about.edu.title':            'Education <span>Timeline</span>',
        'about.edu.master.h4':        "Master's Degree in Computer Engineering",
        'about.edu.master.p':         'Advanced topics in software engineering, distributed systems, and AI.',
        'about.edu.master.date':      '2024 — Present',
        'about.edu.bachelor.h4':      "Bachelor's Degree in Computer Engineering",
        'about.edu.bachelor.p':       'Core studies in algorithms, data structures, web development, databases and OOP.',
        'about.edu.bachelor.date':    '2021 — 2024',
        'about.edu.highschool.h4':    'Technical High School — Computer Science',
        'about.edu.highschool.place': 'ITIS A. Volta',
        'about.edu.highschool.p':     'Graduated with a score of <strong>100/100</strong>. Foundation in programming, networks and electronics.',
        'about.edu.highschool.date':  '2015 — 2020',
        // ── About · Skills ──
        'about.skills.title':    'My <span>Skills</span>',
        'about.skills.frontend': 'Frontend',
        'about.skills.backend':  'Backend',
        'about.skills.db':       'Database &amp; Tools',
        // ── About · Experience ──
        'about.exp.title':       'Project <span>Experience</span>',
        'about.exp.escape.p':    'Real-time multiplayer web app where teams solve puzzles against the clock. Built with Socket.io for live communication.',
        'about.exp.fitflow.p':   'Cross-platform app (iOS, macOS, Android, Desktop) managing gym customers, trainers, bookings and equipment.',
        'about.exp.risk.p':      'Desktop multiplayer strategy game inspired by Risiko. Supports local and online play with a functional architecture.',
        'about.exp.analyzer.p':  'Desktop tool that scans Java projects, extracts class dependencies and renders them as an interactive graph.',
        'about.exp.honeypot.p':  'Distributed cybersecurity system simulating vulnerable services to capture intrusion attempts in real time, with AI-powered attack analysis and a full CI/CD pipeline.',
        // ── About · Hobbies ──
        'about.hobbies.title': 'Hobbies &amp; <span>Interests</span>',
        'about.hobby.tech':    'New Technologies',
        'about.hobby.ai':      'Artificial Intelligence',
        'about.hobby.games':   'Video Games',
        'about.hobby.hack':    'Hackathons',
        'about.hobby.read':    'Tech Reading',
        // ── About · CTA ──
        'about.cta.h2':  'Interested in working together?',
        'about.cta.p':   "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
        'about.cta.btn': 'Get In Touch',
        // ── Projects · Hero ──
        'projects.hero.badge': 'Portfolio',
        'projects.hero.h1':    'My Projects',
        'projects.hero.p':     'A collection of my recent work and personal projects',
        // ── Projects · Filters ──
        'projects.filter.all':     'All Projects',
        'projects.filter.web':     'Web Development',
        'projects.filter.desktop': 'Desktop Applications',
        'projects.filter.mobile':  'Mobile Apps',
        // ── Projects · Cards ──
        'projects.escape.p':    'Escape Room Multiplayer Game is a real-time web application where players collaborate to solve puzzles and overcome challenges within a fixed time limit. The game features interactive elements, timer countdowns, and team coordination.',
        'projects.fitflow.p':   'A cross-platform application (iOS, MacOS, Android, Desktop) built with .NET MAUI that manages gym customers, personal trainers, workout plans, equipment, and a booking system to provide a pre-scheduled training plan, saving time.',
        'projects.risk.p':      'Risk is a multiplayer desktop application inspired by the board game Risiko, developed entirely in Scala. The project features a modular and functional architecture, supporting two game modes: local and online.',
        'projects.analyzer.p':  'A desktop application that analyzes dependencies in Java projects. Scans Java files, visualizes class relationships through an interactive graph, and provides statistics on analyzed files and found dependencies.',
        'projects.honeypot.p':  'Distributed cybersecurity system simulating vulnerable services (fake login page, SSH server, file uploader) to capture and analyze intrusion attempts in real time. Features a live monitoring dashboard with map, charts, interactive SSH terminal, AI-powered attack analysis via Groq LLM, containerized microservices architecture with MongoDB replica set, MQTT messaging and full CI/CD pipeline.',
        'projects.mobile.h3':   'Mobile App Project',
        'projects.mobile.p':    'A new mobile application project is currently in development. Stay tuned for updates!',
        'projects.source':      'View Source',
        'projects.comingsoon':  'Coming Soon',
        // ── Projects · CTA ──
        'projects.cta.h2':  'Have a project in mind?',
        'projects.cta.p':   "I'm always looking for new challenges and opportunities to collaborate.",
        'projects.cta.btn': "Let's Talk",
        // ── Contact ──
        'contact.hero.badge':    "Let's Talk",
        'contact.hero.h2':       'Get In Touch',
        'contact.hero.p':        'Have a question or want to work together? Feel free to contact me!',
        'contact.info.h3':       'Contact Information',
        'contact.info.location': 'Rimini, Italy',
        'contact.connect':       'Connect With Me',
        'contact.form.h3':       'Send Me a Message',
        'contact.form.name':     'Name',
        'contact.form.email':    'Email',
        'contact.form.subject':  'Subject',
        'contact.form.message':  'Message',
        'contact.form.btn':      'Send Message',
        // ── Typed words (home hero) ──
        'typed.words': 'Computer Engineer|Software Developer|Problem Solver|Full Stack Dev',
    },

    it: {
        // ── Navigation ──
        'nav.home':     'Home',
        'nav.about':    'Chi Sono',
        'nav.projects': 'Progetti',
        'nav.contact':  'Contatti',
        // ── Footer ──
        'footer.role': 'Sviluppatore Software',
        'footer.copy': '© 2026 Daniel Meco. Tutti i diritti riservati.',
        // ── Index · Hero ──
        'index.hero.badge':   'Disponibile per opportunità',
        'index.hero.h1':    'Ciao, sono <span>Daniel Meco</span>',
        'index.hero.p':       'Benvenuto nel mio portfolio professionale. Creo soluzioni eleganti attraverso il codice — web, desktop e oltre.',
        'index.hero.work':    'Vedi i Miei Progetti',
        'index.hero.contact': 'Contattami',
        // ── Index · Featured Projects ──
        'index.featured.title': 'Progetti in <span>Evidenza</span>',
        'index.escape.desc':    'Escape Room è un gioco multiplayer in tempo reale in cui i giocatori collaborano per risolvere enigmi e superare sfide entro un limite di tempo.',
        'index.fitflow.desc':   "FitFlow è un'applicazione multi-piattaforma (iOS, MacOS, Android, Desktop) sviluppata con .NET MAUI che offre una soluzione completa per la gestione della palestra.",
        'index.learn':   'Scopri',
        'index.viewall': 'Vedi Tutti i Progetti',
        // ── Index · Skills ──
        'index.skills.title':    'Le Mie <span>Competenze</span>',
        'index.skills.frontend': 'Frontend',
        'index.skills.backend':  'Backend',
        'index.skills.tools':    'Strumenti',
        // ── Index · CTA ──
        'index.cta.h2':  'Interessato a collaborare?',
        'index.cta.p':   'Sono sempre disponibile a discutere nuovi progetti, idee creative o opportunità di far parte della tua visione.',
        'index.cta.btn': 'Contattami',
        // ── About · Hero ──
        'about.hero.badge': 'Chi Sono',
        'about.hero.h1':    'Chi <span>Sono</span>',
        'about.hero.p':     'Ingegnere informatico appassionato, studente curioso e risolutore di problemi basato a Rimini, Italia.',
        // ── About · Intro ──
        'about.intro.title': 'Un po\' di <span>me</span>',
        'about.intro.p1':    'Mi chiamo <strong>Daniel Meco</strong>, sono uno studente magistrale in Ingegneria Informatica all\'Università di Bologna. Ho completato la triennale nel 2024, e prima ancora ho conseguito il diploma tecnico in Informatica nel 2020 con il punteggio di <strong>100/100</strong>.',
        'about.intro.p2':    'Sono appassionato di tecnologia, problem-solving e creazione di soluzioni software innovative. Il mio percorso nell\'informatica è stato guidato dalla curiosità e dal continuo desiderio di crescere — dalla creazione di app web a strumenti desktop multi-piattaforma e giochi multiplayer.',
        // ── About · Education ──
        'about.edu.title':            'Percorso <span>Formativo</span>',
        'about.edu.master.h4':        'Laurea Magistrale in Ingegneria Informatica',
        'about.edu.master.p':         'Argomenti avanzati in ingegneria del software, sistemi distribuiti e intelligenza artificiale.',
        'about.edu.master.date':      '2024 — In corso',
        'about.edu.bachelor.h4':      'Laurea Triennale in Ingegneria Informatica',
        'about.edu.bachelor.p':       'Studi fondamentali su algoritmi, strutture dati, sviluppo web, database e OOP.',
        'about.edu.bachelor.date':    '2021 — 2024',
        'about.edu.highschool.h4':    'Istituto Tecnico Industriale — Informatica',
        'about.edu.highschool.place': 'ITIS A. Volta',
        'about.edu.highschool.p':     'Diplomato con <strong>100/100</strong>. Basi di programmazione, reti ed elettronica.',
        'about.edu.highschool.date':  '2015 — 2020',
        // ── About · Skills ──
        'about.skills.title':    'Le Mie <span>Competenze</span>',
        'about.skills.frontend': 'Frontend',
        'about.skills.backend':  'Backend',
        'about.skills.db':       'Database &amp; Strumenti',
        // ── About · Experience ──
        'about.exp.title':       'Esperienza nei <span>Progetti</span>',
        'about.exp.escape.p':    'App web multiplayer in tempo reale dove i team risolvono enigmi contro il tempo. Sviluppata con Socket.io per la comunicazione live.',
        'about.exp.fitflow.p':   'App multi-piattaforma (iOS, macOS, Android, Desktop) per la gestione di clienti, allenatori, prenotazioni e attrezzature in palestra.',
        'about.exp.risk.p':      'Gioco strategico desktop multiplayer ispirato a Risiko. Supporta partite locali e online con architettura modulare e funzionale.',
        'about.exp.analyzer.p':  'Strumento desktop che analizza i progetti Java, estrae le dipendenze tra classi e le visualizza in un grafo interattivo con statistiche.',
        'about.exp.honeypot.p':  'Sistema distribuito di cybersecurity che simula servizi vulnerabili per catturare tentativi di intrusione in tempo reale, con analisi AI degli attacchi e pipeline CI/CD completa.',
        // ── About · Hobbies ──
        'about.hobbies.title': 'Hobby e <span>Interessi</span>',
        'about.hobby.tech':    'Nuove Tecnologie',
        'about.hobby.ai':      'Intelligenza Artificiale',
        'about.hobby.games':   'Videogiochi',
        'about.hobby.hack':    'Hackathon',
        'about.hobby.read':    'Letture Tech',
        // ── About · CTA ──
        'about.cta.h2':  'Interessato a collaborare?',
        'about.cta.p':   'Sono sempre disponibile a discutere nuovi progetti, idee creative o opportunità di far parte della tua visione.',
        'about.cta.btn': 'Contattami',
        // ── Projects · Hero ──
        'projects.hero.badge': 'Portfolio',
        'projects.hero.h1':    'I Miei Progetti',
        'projects.hero.p':     'Una raccolta dei miei lavori recenti e progetti personali',
        // ── Projects · Filters ──
        'projects.filter.all':     'Tutti i Progetti',
        'projects.filter.web':     'Sviluppo Web',
        'projects.filter.desktop': 'Applicazioni Desktop',
        'projects.filter.mobile':  'App Mobile',
        // ── Projects · Cards ──
        'projects.escape.p':    'Escape Room è un gioco multiplayer in tempo reale dove i giocatori collaborano per risolvere enigmi entro un limite di tempo. Include elementi interattivi, countdown e coordinamento di squadra.',
        'projects.fitflow.p':   'App multi-piattaforma (iOS, MacOS, Android, Desktop) con .NET MAUI che gestisce clienti, personal trainer, piani di allenamento, attrezzature e un sistema di prenotazione.',
        'projects.risk.p':      'Applicazione desktop multiplayer ispirata a Risiko, sviluppata interamente in Scala. Architettura modulare e funzionale con supporto per modalità locale e online.',
        'projects.analyzer.p':  'Applicazione desktop che analizza le dipendenze nei progetti Java. Scansiona i file .java, visualizza le relazioni tra classi tramite grafo interattivo e fornisce statistiche.',
        'projects.honeypot.p':  'Sistema distribuito di cybersecurity che simula servizi vulnerabili (fake login page, SSH server, file uploader) per catturare e analizzare tentativi di intrusione in tempo reale. Dashboard live con mappa delle intrusioni, grafici, terminale SSH interattivo, analisi AI degli attacchi tramite Groq LLM, architettura a microservizi containerizzata con MongoDB replica set, messaggistica MQTT e pipeline CI/CD completa.',
        'projects.mobile.h3':   'Progetto App Mobile',
        'projects.mobile.p':    'Un nuovo progetto di app mobile è attualmente in sviluppo. Restate sintonizzati!',
        'projects.source':      'Vedi Codice',
        'projects.comingsoon':  'Prossimamente',
        // ── Projects · CTA ──
        'projects.cta.h2':  'Hai un progetto in mente?',
        'projects.cta.p':   'Sono sempre alla ricerca di nuove sfide e opportunità di collaborazione.',
        'projects.cta.btn': 'Parliamone',
        // ── Contact ──
        'contact.hero.badge':    'Parliamoci',
        'contact.hero.h2':       'Contattami',
        'contact.hero.p':        'Hai una domanda o vuoi collaborare? Non esitare a contattarmi!',
        'contact.info.h3':       'Informazioni di Contatto',
        'contact.info.location': 'Rimini, Italia',
        'contact.connect':       'Connettiti Con Me',
        'contact.form.h3':       'Inviami un Messaggio',
        'contact.form.name':     'Nome',
        'contact.form.email':    'Email',
        'contact.form.subject':  'Oggetto',
        'contact.form.message':  'Messaggio',
        'contact.form.btn':      'Invia Messaggio',
        // ── Typed words (home hero) ──
        'typed.words': 'Ingegnere Informatico|Sviluppatore Software|Problem Solver|Full Stack Dev',
    }
};

// ─────────────────────────────────────────────
//  Core i18n engine
// ─────────────────────────────────────────────
const I18n = (() => {
    const STORAGE_KEY = 'dm_lang';
    let current = localStorage.getItem(STORAGE_KEY) || 'en';

    function t(key) {
        return (translations[current] && translations[current][key]) ||
               (translations['en'][key]) ||
               key;
    }

    function applyTranslations() {
        const lang = current;
        document.documentElement.lang = lang;

        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val !== undefined) el.textContent = val;
        });

        // Inner HTML (titles with colored <span>, or <strong>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const val = t(key);
            if (val !== undefined) el.innerHTML = val;
        });

        // Placeholders (form inputs)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = t(key);
            if (val !== undefined) el.placeholder = val;
        });

        // Update language dropdown
        const currentEl = document.getElementById('langCurrent');
        const optionBtn = document.getElementById('langToggle');
        if (currentEl) currentEl.textContent = lang.toUpperCase();
        if (optionBtn) optionBtn.textContent = lang === 'en' ? 'IT' : 'EN';

        // Notify main.js to restart typed text if needed
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }

    function toggle() {
        current = current === 'en' ? 'it' : 'en';
        localStorage.setItem(STORAGE_KEY, current);
        applyTranslations();
    }

    function getLang()  { return current; }
    function getTypedWords() {
        return t('typed.words').split('|');
    }

    return { applyTranslations, toggle, getLang, getTypedWords, t };
})();

// Expose globally so navbar.js and main.js can access it
window.I18n = I18n;

// ─────────────────────────────────────────────
//  Init on DOM ready
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language (navbar injected by navbar.js before this runs)
    I18n.applyTranslations();
});
