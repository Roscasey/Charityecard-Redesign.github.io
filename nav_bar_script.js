/*
This code is to handle the side nav collapsing and coming out 
with the use of an event listener.
*/

document.addEventListener('DOMContentLoaded', () => {

    // Selecting all the relevant icons
    const hamburgerIcon = document.getElementById('hamburger_icon');
    const side_nav = document.getElementById('side_nav');
    const exitButton = document.getElementById('exit_icon');
    const dropIt = document.getElementById('side_drop_btn');
    const dropItems = document.getElementsByClassName('side_nav_drop_item');

    // Clicking hamburger --> open side nav
    hamburgerIcon.addEventListener('click', () => {
        if (side_nav.style.width === '250px') {
            side_nav.style.width = '0';
        } else {
            side_nav.style.width = '250px';
        }
    });
    // Clicking X icon --> close side nav
    exitButton.addEventListener('click', () => {
        side_nav.style.width = '0';
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
            side_nav.style.width = '0';
        } 
    }
    screenTooBig();
    window.addEventListener('resize', screenTooBig);

    //Increment and decrement buttons on cart product item 
    const qty = document.getElementById('qty_num');
    const dec_btn = document.getElementById('btn_minus');
    const add_btn = document.getElementById('btn_plus');

    dec_btn.addEventListener('click', () => {
        if (qty.value <= 1) {
            qty.value = 1; //To go to 0 items or remove, they have option to click the 'remove / X' icon
        }
        else {
            qty.value = parseInt(qty.value) - 1;
        }
    });
    add_btn.addEventListener('click', () => {
        qty.value = parseInt(qty.value) + 1
    });
});




