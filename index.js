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



$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

// var pctScrolled;

// function amountscrolled() {
//     var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
//     var docheight = getDocHeight()
//     var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
//     var trackLength = docheight - winheight
//     pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
//     console.log(pctScrolled + '% scrolled')
// }

// window.addEventListener("scroll", function() {
//     amountscrolled()
//     if (pctScrolled > 40) {
//         console.log("IT IS WORKING");
//         const element = document.querySelector('.firstCard');
//         element.classList.add('animate__animated', 'animate__bounceOutLeft');
//     }
// }, false)

// const element = document.querySelector('#firstCard');
const element = document.getElementById('firstCard');
element.classList.add('animate__animated', 'animate__bounceOutLeft');