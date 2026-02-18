document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('lang-toggle');
    let currentLang = 'en';
    const elementsToTranslate = document.querySelectorAll('[data-lang-en], [data-lang-ko]');

    function switchLanguage() {
        currentLang = (currentLang === 'en') ? 'ko' : 'en';
        toggleButton.textContent = (currentLang === 'en') ? 'KO / EN' : 'EN / KO';
        
        elementsToTranslate.forEach(element => {
            const targetAttr = `data-lang-${currentLang}`;
            if (element.hasAttribute(targetAttr)) {
                element.textContent = element.getAttribute(targetAttr);
            }
        });
        document.documentElement.lang = currentLang;
    }

    toggleButton.addEventListener('click', switchLanguage);
});