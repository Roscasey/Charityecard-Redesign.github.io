/*
This code is to handle the side nav collapsing and coming out 
with the use of an event listener.
*/

document.addEventListener('DOMContentLoaded', () => {

    // Selecting all the relevant icons
    const hamburgerIcon = document.getElementById('hamburger_icon');
    const side_nav = document.getElementById('side_nav');
    const exitButton = document.getElementById('exitIcon');

    // clicking hamburger --> open side nav
    hamburgerIcon.addEventListener('click', () => {
        if (side_nav.style.width === '250px') {
            side_nav.style.width = '0';
        } else {
            side_nav.style.width = '250px';
        }
    });

    // clicking X icon --> close side nav
    exitButton.addEventListener('click', () => {
        side_nav.style.width = '0';

    });


    // edge case: close side nav when it is currently open but the screen width exceeds 760px.
    function screenTooBig() {
        if (window.innerWidth > 760) {
            side_nav.style.width = '0';
        }
    }

    screenTooBig();
    window.addEventListener('resize', screenTooBig);
});