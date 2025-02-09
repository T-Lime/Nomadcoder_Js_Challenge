document.addEventListener('DOMContentLoaded', function() {
    // 로컬 스토리지에서 값 가져오기
    const characterImage = document.querySelector('#char-container img');
    if (localStorage.getItem('gender')) {
        const gender = localStorage.getItem('gender');
        characterImage.src = `img/${gender}.png`;
    }

    // 라디오 버튼 선택 시 값 저장
    document.querySelectorAll('input[name="gen"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedGender = document.querySelector('input[name="gen"]:checked').id;
            localStorage.setItem('gender', selectedGender);
            characterImage.src = `img/${selectedGender}.png`;
        });
    });
});