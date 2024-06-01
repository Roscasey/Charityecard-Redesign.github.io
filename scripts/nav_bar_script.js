/*
This code is to handle the side nav collapsing and coming out 
with the use of an event listener.
*/

document.addEventListener('DOMContentLoaded', () => {

    // Selecting all the relevant icons
    const hamburgerIcon = document.getElementById('hamburger_icon');
    const sideNav = document.getElementById('side_nav');
    const exitButton = document.getElementById('exit_icon');
    const dropIt = document.getElementById('side_drop_btn');
    const dropItems = document.getElementsByClassName('side_nav_drop_item');

    // Clicking hamburger --> open side nav
    hamburgerIcon.addEventListener('click', () => {
        if (sideNav.style.width === '250px') {
            sideNav.style.width = '0';
        } else {
            sideNav.style.width = '250px';
        }
    });
    // Clicking X icon --> close side nav
    exitButton.addEventListener('click', () => {
        sideNav.style.width = '0';
    });

    dropIt.addEventListener('click', (event) => {
        event.stopPropagation();
        for (let i = 0; i < dropItems.length; i++) {
           dropItems[i].style.display = 'flex';
        }
    });
    // Edge case: close side nav when it is currently open but the screen width exceeds 760p 
    function screenTooBig() {
        if (window.innerWidth > 760) {
            sideNav.style.width = '0';
        } 
    }
    screenTooBig();
    window.addEventListener('resize', screenTooBig);

});





 



