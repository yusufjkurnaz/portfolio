export function switchTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.nav-link[data-tab]');

    tabContents.forEach(content => content.classList.remove('active'));
    tabLinks.forEach(item => item.classList.remove('active'));

    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
        localStorage.setItem('activeTab', tabId);
    }

    const relatedLinks = document.querySelectorAll(`.nav-link[data-tab="${tabId}"]`);
    relatedLinks.forEach(relLink => relLink.classList.add('active'));

    history.pushState(null, null, `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function initTabs() {
    const tabLinks = document.querySelectorAll('.nav-link[data-tab]');

    const hashTab = window.location.hash.replace('#', '');
    const defaultTab = (hashTab && document.getElementById(hashTab)) ? hashTab : (localStorage.getItem('activeTab') || 'hero');
    switchTab(defaultTab);

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-tab');
            switchTab(targetId);
        });
    });
}