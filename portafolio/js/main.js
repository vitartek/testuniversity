let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
let navLinks = document.querySelectorAll('.navmenu  a');

window.onscroll = () => {
    // Se calcula la altura del div para agregar en el link del header la clase active
    // scroll section navbar
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    const puntoCero = document.documentElement.getBoundingClientRect();


    // if (window.scrollY != 0) {
    if (puntoCero.top != 0) {
      document.querySelector('.header').classList.add('is-sticky')
    } else {
      document.querySelector('.header').classList.remove('is-sticky')
    }
}


// typed js
const typed = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'UX/UI Designer', 'Diseñador Web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// croll reveal
ScrollReveal({ 
    // reset: true, //al darle true solo sale el efecto una sola vez
    distance: '200px',
    duration: 2000,
    delay: 200
});
// ScrollReveal().reveal('.header .logo', { origin: 'left' });
// ScrollReveal().reveal('.header .navmenu', { origin: 'right' });
ScrollReveal().reveal('.hero .hero__content, .nav-social', { origin: 'bottom' });
ScrollReveal().reveal('.nav-social', { origin: 'top' });
ScrollReveal().reveal('.hero img', { origin: 'bottom' });
ScrollReveal().reveal('.about, .gallery, .contact ', { origin: 'left' });