import { translations } from './translations.js';

export function initLanguages() {
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('lang') || 'tr';
    
    langSelect.value = savedLang;
    setLanguage(savedLang);
    
    langSelect.addEventListener('change', (e) => {
        const targetLang = e.target.value;
        localStorage.setItem('lang', targetLang);
        setLanguage(targetLang);
    });
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
}