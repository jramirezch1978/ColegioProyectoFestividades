document.addEventListener('DOMContentLoaded', () => {
    console.log("Airbnb Clone JavaScript loaded.");

    // Manejo básico del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us, ' + contactForm.name.value + '!');
            contactForm.reset();
        });
    }

    // Funcionalidad para botones de login y signup (simples alertas)
    const btnLogin = document.querySelector('.btn-login');
    const btnSignup = document.querySelector('.btn-signup');

    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            alert('Login functionality is not implemented yet.');
        });
    }

    if (btnSignup) {
        btnSignup.addEventListener('click', () => {
            alert('Signup functionality is not implemented yet.');
        });
    }
});
