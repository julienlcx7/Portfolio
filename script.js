document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        if (currentTheme === 'night') {
            document.body.classList.add('night-mode');
            document.querySelector('.sidebar').classList.add('night-mode');
            document.querySelector('.onepage').classList.add('night-mode');
            document.querySelectorAll('.section_time').forEach(el => el.classList.add('night-mode'));
            document.querySelectorAll('.btn button').forEach(el => el.classList.add('night-mode'));
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.body.classList.add('night-mode');
            document.querySelector('.sidebar').classList.add('night-mode');
            document.querySelector('.onepage').classList.add('night-mode');
            document.querySelectorAll('.section_time').forEach(el => el.classList.add('night-mode'));
            document.querySelectorAll('.btn button').forEach(el => el.classList.add('night-mode'));
            localStorage.setItem('theme', 'night');
        } else {
            document.body.classList.remove('night-mode');
            document.querySelector('.sidebar').classList.remove('night-mode');
            document.querySelector('.onepage').classList.remove('night-mode');
            document.querySelectorAll('.section_time').forEach(el => el.classList.remove('night-mode'));
            document.querySelectorAll('.btn button').forEach(el => el.classList.remove('night-mode'));
            localStorage.setItem('theme', 'day');
        }
    });
});
