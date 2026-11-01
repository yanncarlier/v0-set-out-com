// ========================================
// Internationalization (i18n)
// ========================================

function getStoredLanguage() {
    return localStorage.getItem('preferred-language') || 'en';
}

function setStoredLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
}

function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    // Update footer landing links to point to the right language pages
    const langQuery = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    document.querySelectorAll('.footer-landing-link[data-landing]').forEach(a => {
        const baseHref = a.getAttribute('href')?.split('?')[0] || a.getAttribute('href');
        if (baseHref) {
            a.setAttribute('href', `${baseHref}${langQuery}`);
        }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                value = undefined;
                break;
            }
        }

        if (value !== undefined) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = langLabels[lang] || lang.toUpperCase();
    }
}

function initLanguageSwitcher() {
    const langSwitcher = document.querySelector('.language-switcher');
    const langToggle = document.querySelector('.lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langSwitcher || !langToggle) return;

    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        langSwitcher.classList.remove('active');
    });

    langOptions.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = btn.dataset.lang;
            setStoredLanguage(lang);
            updateContent(lang);
            langSwitcher.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = getStoredLanguage();
    updateContent(preferredLang);
    initLanguageSwitcher();
});
