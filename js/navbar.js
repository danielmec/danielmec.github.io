// ─────────────────────────────────────────────
//  navbar.js  —  Shared navigation component
//  Injects <header> into every page and marks
//  the current page link as active.
// ─────────────────────────────────────────────

(function () {
    const NAV_LINKS = [
        { href: 'index.html',    key: 'nav.home',     label: 'Home' },
        { href: 'about.html',    key: 'nav.about',    label: 'About Me' },
        { href: 'projects.html', key: 'nav.projects', label: 'Projects' },
        { href: 'contact.html',  key: 'nav.contact',  label: 'Contact' },
    ];

    // Detect current page filename
    function currentPage() {
        const parts = window.location.pathname.split('/');
        const file  = parts[parts.length - 1];
        return file === '' ? 'index.html' : file;
    }

    function buildHeader() {
        const page = currentPage();

        const links = NAV_LINKS.map(({ href, key, label }) => {
            const active = href === page ? ' class="active"' : '';
            return `<li><a href="${href}"${active} data-i18n="${key}">${label}</a></li>`;
        }).join('\n                    ');

        return `
    <header>
        <div class="container">
            <div class="logo">
                <h1>Daniel<span>Meco</span></h1>
            </div>
            <button class="menu-toggle" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <nav>
                <ul>
                    ${links}
                    <li class="lang-dropdown" id="langDropdown">
                        <span class="lang-current" id="langCurrent">EN</span>
                        <div class="lang-options">
                            <button id="langToggle" class="lang-option">IT</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>`;
    }

    function wireLangDropdown() {
        const dropdown  = document.getElementById('langDropdown');
        const currentEl = document.getElementById('langCurrent');
        const optionBtn = document.getElementById('langToggle');

        if (currentEl) {
            currentEl.addEventListener('click', function (e) {
                e.stopPropagation();
                dropdown && dropdown.classList.toggle('open');
            });
        }

        if (optionBtn) {
            optionBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                I18n.toggle();
                dropdown && dropdown.classList.remove('open');
            });
        }

        document.addEventListener('click', function () {
            dropdown && dropdown.classList.remove('open');
        });
    }

    function wireHamburger() {
        const toggle = document.querySelector('.menu-toggle');
        const nav    = document.querySelector('nav');
        if (!toggle || !nav) return;
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            toggle.classList.toggle('active');
        });
        document.querySelectorAll('nav a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    // Inject header as first child of <body>
    document.addEventListener('DOMContentLoaded', function () {
        document.body.insertAdjacentHTML('afterbegin', buildHeader());
        wireLangDropdown();
        wireHamburger();
    });
})();
