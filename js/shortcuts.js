import { switchTab } from './tabs.js';
import { toggleTheme } from './theme.js';

export function initShortcuts() {
    window.addEventListener('keydown', (e) => {
        const activeElem = document.activeElement;
        if (activeElem && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeElem.tagName)) {
            return;
        }

        if (e.code === 'Digit1' || e.code === 'Numpad1') {
            switchTab('hero');
        } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
            switchTab('projects');
        } else if (e.code === 'Digit3' || e.code === 'Numpad3') {
            switchTab('contact');
        } else if (e.code === 'KeyT') {
            toggleTheme();
        }
    });
}