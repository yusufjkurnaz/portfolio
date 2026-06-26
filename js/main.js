import { initTheme } from './theme.js';
import { initLanguages } from './i18n.js';
import { initContactForm } from './contact.js';
import { initTabs } from './tabs.js';
import { initShortcuts } from './shortcuts.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguages();
    initContactForm();
    initTabs();
    initShortcuts();
});