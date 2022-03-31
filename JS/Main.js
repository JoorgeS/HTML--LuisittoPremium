document.querySelector('.menubtn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.carousel-inner', { delay: 500 });
ScrollReveal().reveal('.main-content', { delay: 500 });
ScrollReveal().reveal('.cards', { delay: 500 });
ScrollReveal().reveal('.content-section', { delay: 500 });
ScrollReveal().reveal('.tituloTyC', { delay: 500 });
ScrollReveal().reveal('.parrafos', { delay: 500 });
ScrollReveal().reveal('.Somos', { delay: 500 });
ScrollReveal().reveal('.image-Logo', { delay: 500 });
ScrollReveal().reveal('.headline', { delay: 500 });
ScrollReveal().reveal('.headline', { delay: 500 });

//Formulario
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
