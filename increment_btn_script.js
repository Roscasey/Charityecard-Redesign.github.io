document.addEventListener('DOMContentLoaded', ()=> {
    //Increment and decrement buttons on cart product item
    const qty = document.getElementById('qty_num');
    const dec_btn = document.getElementById('btn_minus');
    const add_btn = document.getElementById('btn_plus');

    dec_btn.addEventListener('click', ()=> {
        if (qty.value <= 1) {
            qty.value = 1; //assume that the item is added/in their cart. To remove they can 'X instead of 0 items'
        }
        else {
            qty.value = parseInt(qty.value) - 1; //turn into a number and decrease by 1 per click 
        }
    });
    add_btn.addEventListener('click', ()=> {
        qty.value = parseInt(qty.value) + 1; //turn into a number and increase by 1 per click
    });
});