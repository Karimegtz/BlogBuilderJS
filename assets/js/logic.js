document.addEventListener('DOMContentLoaded', function() {
    // Modo oscuro - Cargar y establecer según localStorage
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    if (darkModeSwitch) {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeSwitch.checked = true;
        }

        darkModeSwitch.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.removeItem('darkMode');
            }
        });
    }
});
