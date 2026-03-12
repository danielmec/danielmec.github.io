// =============================================
//  Daniel Meco — Portfolio  |  main.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    /* ── Hamburger menu ── */
    const menuToggle = document.querySelector('.menu-toggle');
    const nav        = document.querySelector('nav');
    let overlay      = document.querySelector('.nav-overlay');

    // Create overlay if it doesn't exist
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        nav.classList.add('active');
        overlay.classList.add('active');
        menuToggle.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.contains('active') ? closeMenu() : openMenu();
        });
    }

    overlay.addEventListener('click', closeMenu);

    // Close on nav link click
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* ── Header shadow on scroll ── */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* ── Smooth scroll for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ── Scroll-reveal animation ── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        revealObserver.observe(el);
    });

    /* ── Typed text effect (hero) ── */
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        let words = (window.I18n ? window.I18n.getTypedWords() : ['Computer Engineer', 'Software Developer', 'Problem Solver', 'Full Stack Dev']);
        let wi = 0, ci = 0, deleting = false, timer;

        function type() {
            const word = words[wi];
            typedEl.textContent = deleting
                ? word.slice(0, ci--)
                : word.slice(0, ci++);

            let delay = deleting ? 60 : 100;

            if (!deleting && ci === word.length + 1) {
                delay = 1800; deleting = true;
            } else if (deleting && ci === 0) {
                deleting = false;
                wi = (wi + 1) % words.length;
                delay = 400;
            }
            timer = setTimeout(type, delay);
        }
        type();

        // Restart with translated words on language change
        window.addEventListener('langchange', () => {
            clearTimeout(timer);
            words = window.I18n ? window.I18n.getTypedWords() : words;
            wi = 0; ci = 0; deleting = false;
            type();
        });
    }

    /* ── Projects filter ── */
    const filterBtns  = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity = match ? '1' : '0.25';
                card.style.transform = match ? 'scale(1)' : 'scale(0.97)';
                card.style.pointerEvents = match ? 'auto' : 'none';
            });
        });
    });

    /* ── Contact form (mailto fallback) ── */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name    = document.getElementById('name').value;
            const email   = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const mailto  = `mailto:danielmeco20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
            window.location.href = mailto;
        });
    }
});
