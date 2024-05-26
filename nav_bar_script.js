/*
This code is to handle the side nav collapsing and coming out 
with the use of an event listener.
*/

document.addEventListener('DOMContentLoaded', () => {

    // Selecting all the relevant icons
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const sideNav = document.getElementById('sideNav');
    const exitButton = document.getElementById('exitIcon');

    // clicking hamburger --> open side nav
    hamburgerIcon.addEventListener('click', () => {
        if (sideNav.style.width === '250px') {
            sideNav.style.width = '0';
        } else {
            sideNav.style.width = '250px';
        }
    });

    // clicking X icon --> close side nav
    exitButton.addEventListener('click', () => {
        sideNav.style.width = '0';

    });


    // edge case: close side nav when it is currently open but the screen width exceeds 760px.
    function screenTooBig() {
        if (window.innerWidth > 760) {
            sideNav.style.width = '0';
        }
    }

    screenTooBig();
    window.addEventListener('resize', screenTooBig);
});