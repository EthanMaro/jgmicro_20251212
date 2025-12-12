document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('lang-toggle');
    // 초기 언어는 영어(en)로 설정합니다.
    let currentLang = 'en';

    // 텍스트를 포함하는 모든 요소를 찾습니다. (data-lang-en 또는 data-lang-ko 속성을 가진 요소)
    const elementsToTranslate = document.querySelectorAll('[data-lang-en], [data-lang-ko]');

    // 언어를 전환하는 함수
    function switchLanguage() {
        // 현재 언어를 반대 언어로 바꿉니다.
        currentLang = (currentLang === 'en') ? 'ko' : 'en';
        
        // 버튼 텍스트를 업데이트합니다. (현재 활성 언어 / 비활성 언어)
        toggleButton.textContent = (currentLang === 'en') ? 'KO / EN' : 'EN / KO';
        
        // 모든 텍스트 요소를 순회하며 언어를 전환합니다.
        elementsToTranslate.forEach(element => {
            // 바꿀 언어 속성 (예: data-lang-ko)
            const targetAttr = `data-lang-${currentLang}`;
            // 요소의 텍스트를 해당 속성 값으로 바꿉니다.
            if (element.hasAttribute(targetAttr)) {
                element.textContent = element.getAttribute(targetAttr);
            }
        });

        // HTML <html> 태그의 언어 속성도 변경 (검색 엔진 최적화 등)
        document.documentElement.lang = currentLang;
        
        // 브라우저의 로컬 저장소에 언어 상태를 저장하여 나중에 다시 접속해도 유지되게 할 수 있지만, 여기서는 생략합니다.
    }

    // 버튼 클릭 이벤트 리스너 추가
    toggleButton.addEventListener('click', switchLanguage);

    // 페이지 로드 시 기본 언어(영어)로 설정되도록 초기화합니다.
    // (switchLanguage()를 호출하면 바로 ko로 바뀌므로, 현재는 텍스트를 HTML에 EN으로 작성해두고 초기 설정을 생략합니다.)
    // 만약 초기 언어를 강제로 KO로 하고 싶다면 switchLanguage()를 한 번 호출하세요.
});