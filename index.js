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

var element_position = $('#cardRobotics').offset().top;
var screen_height = $(window).height();
var activation_offset = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - (screen_height * activation_offset);
var max_scroll_height = $('body').height() - screen_height - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if (element_in_view || has_reached_bottom_of_page) {
        const cardRobotics = document.querySelector('#cardRobotics');
        cardRobotics.classList.add('animate__animated', 'animate__zoomIn');
    }
});

var element_position2 = $('#cardLaunchX').offset().top;
var screen_height2 = $(window).height();
var activation_offset2 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point2 = element_position2 - (screen_height2 * activation_offset2);
var max_scroll_height2 = $('body').height() - screen_height2 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos2 = window.pageYOffset;

    var element_in_view2 = y_scroll_pos2 > activation_point2;
    var has_reached_bottom_of_page2 = max_scroll_height2 <= y_scroll_pos2 && !element_in_view2;

    if (element_in_view2 || has_reached_bottom_of_page2) {
        const cardLaunchX = document.querySelector('#cardLaunchX');
        cardLaunchX.classList.add('animate__animated', 'animate__zoomIn');
    }
});

var element_position3 = $('#cardCSC').offset().top;
var screen_height3 = $(window).height();
var activation_offset3 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point3 = element_position3 - (screen_height3 * activation_offset3);
var max_scroll_height3 = $('body').height() - screen_height3 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos3 = window.pageYOffset;

    var element_in_view3 = y_scroll_pos3 > activation_point3;
    var has_reached_bottom_of_page3 = max_scroll_height3 <= y_scroll_pos3 && !element_in_view3;

    if (element_in_view3 || has_reached_bottom_of_page3) {
        const cardCSC = document.querySelector('#cardCSC');
        cardCSC.classList.add('animate__animated', 'animate__zoomIn');
    }
});

var element_position4 = $('#cardChemOly').offset().top;
var screen_height4 = $(window).height();
var activation_offset4 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point4 = element_position4 - (screen_height4 * activation_offset4);
var max_scroll_height4 = $('body').height() - screen_height4 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos4 = window.pageYOffset;

    var element_in_view4 = y_scroll_pos4 > activation_point4;
    var has_reached_bottom_of_page4 = max_scroll_height4 <= y_scroll_pos4 && !element_in_view4;

    if (element_in_view4 || has_reached_bottom_of_page4) {
        const cardChemOly = document.querySelector('#cardChemOly');
        cardChemOly.classList.add('animate__animated', 'animate__zoomIn');
    }
});