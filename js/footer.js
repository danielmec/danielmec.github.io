// ─────────────────────────────────────────────
//  footer.js  —  Shared footer component
//  Injects <footer> as last child of <body>.
// ─────────────────────────────────────────────

(function () {
    function buildFooter() {
        return `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h2>Daniel<span>Meco</span></h2>
                    <p data-i18n="footer.role">Software Developer</p>
                </div>
                <div class="social-links">
                    <a href="https://github.com/danielmec" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/daniel-meco-62a2a9253/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:danielmeco20@gmail.com"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="copyright">
                <p data-i18n="footer.copy">&copy; 2026 Daniel Meco. All rights reserved.</p>
            </div>
        </div>
    </footer>`;
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.body.insertAdjacentHTML('beforeend', buildFooter());
    });
})();
