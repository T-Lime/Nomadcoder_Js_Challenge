document.addEventListener('DOMContentLoaded', function() {

    const characterImage = document.querySelector('#char-container img');
    if (localStorage.getItem('gender')) {
        const gender = localStorage.getItem('gender');
        characterImage.src = `img/${gender}.png`;
    }

    document.querySelectorAll('input[name="gen"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedGender = document.querySelector('input[name="gen"]:checked').id;
            localStorage.setItem('gender', selectedGender);
            characterImage.src = `img/${selectedGender}.png`;
        });
    });

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.clear();
        alert('로그아웃이 되었습니다.');
        location.reload(); 
    });
});