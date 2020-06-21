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


//THE NEXT SECTION ON THE WEBSITE

var element_position5 = $('#cardKumon').offset().top;
var screen_height5 = $(window).height();
var activation_offset5 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point5 = element_position5 - (screen_height5 * activation_offset5);
var max_scroll_height5 = $('body').height() - screen_height5 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos5 = window.pageYOffset;

    var element_in_view5 = y_scroll_pos5 > activation_point5;
    var has_reached_bottom_of_page5 = max_scroll_height5 <= y_scroll_pos5 && !element_in_view5;

    if (element_in_view5 || has_reached_bottom_of_page5) {
        const cardChemOly = document.querySelector('#cardKumon');
        cardChemOly.classList.add('animate__animated', 'animate__zoomIn');
    }
});

var element_position6 = $('#cardSBPL').offset().top;
var screen_height6 = $(window).height();
var activation_offset6 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point6 = element_position6 - (screen_height6 * activation_offset6);
var max_scroll_height6 = $('body').height() - screen_height6 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos6 = window.pageYOffset;

    var element_in_view6 = y_scroll_pos6 > activation_point6;
    var has_reached_bottom_of_page6 = max_scroll_height6 <= y_scroll_pos6 && !element_in_view6;

    if (element_in_view6 || has_reached_bottom_of_page6) {
        const cardCSC = document.querySelector('#cardSBPL');
        cardCSC.classList.add('animate__animated', 'animate__zoomIn');
    }
});

var element_position7 = $('#cardSeniorCenter').offset().top;
var screen_height7 = $(window).height();
var activation_offset7 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point7 = element_position7 - (screen_height7 * activation_offset7);
var max_scroll_height7 = $('body').height() - screen_height7 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos7 = window.pageYOffset;

    var element_in_view7 = y_scroll_pos7 > activation_point7;
    var has_reached_bottom_of_page7 = max_scroll_height7 <= y_scroll_pos7 && !element_in_view7;

    if (element_in_view7 || has_reached_bottom_of_page7) {
        const cardCSC = document.querySelector('#cardSeniorCenter');
        cardCSC.classList.add('animate__animated', 'animate__zoomIn');
    }
});

var element_position8 = $('#cardHighSchool').offset().top;
var screen_height8 = $(window).height();
var activation_offset8 = 1.0; //determines how far up the the page the element needs to be before triggering the function
var activation_point8 = element_position8 - (screen_height8 * activation_offset8);
var max_scroll_height8 = $('body').height() - screen_height8 - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos8 = window.pageYOffset;

    var element_in_view8 = y_scroll_pos8 > activation_point8;
    var has_reached_bottom_of_page8 = max_scroll_height8 <= y_scroll_pos8 && !element_in_view8;

    if (element_in_view8 || has_reached_bottom_of_page8) {
        const cardCSC = document.querySelector('#cardHighSchool');
        cardCSC.classList.add('animate__animated', 'animate__zoomIn');
    }
});

//TESTING OUT ANIMATING THE TITLES ON THE PAGES

// var element_position9 = $('#extraCurricularsTitle').offset().top;
// var screen_height9 = $(window).height();
// var activation_offset9 = 1.0; //determines how far up the the page the element needs to be before triggering the function
// var activation_point9 = element_position9 - (screen_height9 * activation_offset9);
// var max_scroll_height9 = $('body').height() - screen_height9 - 5; //-5 for a little bit of buffer

// //Does something when user scrolls to it OR
// //Does it when user has reached the bottom of the page and hasn't triggered the function yet
// $(window).on('scroll', function() {
//     var y_scroll_pos9 = window.pageYOffset;

//     var element_in_view9 = y_scroll_pos9 > activation_point9;
//     var has_reached_bottom_of_page9 = max_scroll_height9 <= y_scroll_pos9 && !element_in_view9;

//     if (element_in_view9 || has_reached_bottom_of_page9) {
//         const cardCSC = document.querySelector('#extraCurricularsTitle');
//         cardCSC.classList.add('animate__animated', 'animate__bounce');
//     }
// });

// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   }); jQUery smooth scrolling 