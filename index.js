document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

var nodeArray = [
    document.querySelector('#cardRobotics'),
    document.querySelector('#cardLaunchX'),
    document.querySelector('#cardCSC'),
    document.querySelector('#cardChemOly'),

    document.querySelector('#cardKumon'),
    document.querySelector('#cardSBPL'),
    document.querySelector('#cardSeniorCenter'),
    document.querySelector('#cardHighSchool')
];

ScrollReveal({ reset: true, duration: 2000, distance: '25%', scale: 0.85, delay: 200}); //changes for all the elements
//ScrollReveal().reveal('#cardRobotics'); //can add ScrollReveal().reveal('.EXAMPLE', { delay: 500 }); to target a specific element
ScrollReveal().reveal(nodeArray)

ScrollReveal().reveal('#cardRobotics', {origin: 'top'})
ScrollReveal().reveal('#cardLaunchX', {origin: 'bottom'})
ScrollReveal().reveal('#cardCSC', {origin: 'top'})
ScrollReveal().reveal('#cardChemOly', {origin: 'bottom'})

ScrollReveal().reveal('#cardKumon', {origin: 'bottom'})
ScrollReveal().reveal('#cardSBPL', {origin: 'top'})
ScrollReveal().reveal('#cardSeniorCenter', {origin: 'bottom'})
ScrollReveal().reveal('#cardHighSchool', {origin: 'top'})



var typedInterests = new Typed('#interests', {
    strings: ['Interested in: <strong>Computer Science</strong>', 'Interested in: <strong>STEM</strong>', 'Interested in: <strong>Economics</strong>'],
    typeSpeed: 60,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true,
});


// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
}