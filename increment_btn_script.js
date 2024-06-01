document.addEventListener('DOMContentLoaded', ()=> {
    //Increment and decrement buttons on cart product item
    const qty = document.getElementById('qty_num');
    const dec_btn = document.getElementById('btn_minus');
    const add_btn = document.getElementById('btn_plus');
    
    //Product Price adjustment
    let item_price_element = document.querySelector('.cart_product_price'); //get the cart product price
    let item_price = 9.95; //the price of all cards 

    //Remove cart item
    const remove = document.getElementById('my_cart_delete');
    const product_item = document.getElementById('cart_item');
    const cart_hr = document.getElementById('cart_product_hr');


    //Update price x qty 
    let update_price = () => {
        let current_qty = parseInt(qty.value); 
        let add_it =  (item_price * current_qty).toFixed(2); //round decimal points 
        item_price_element.innerHTML = '$' + add_it; //add the $ symbol back
        console.log(add_it); // tester output
    } 

    dec_btn.addEventListener('click', ()=> {
        if (qty.value <= 1) {
            qty.value = 1; //assume that the item is added/in their cart. To remove they can 'X instead of 0 items'
        }
        else {
            qty.value = parseInt(qty.value) - 1; //turn into a number and decrease by 1 per click 
        }
        update_price();
    });
    add_btn.addEventListener('click', ()=> {
        qty.value = parseInt(qty.value) + 1; //turn into a number and increase by 1 per click
        update_price();
    });

    //remove item
    remove.addEventListener('click', () => {
        product_item.style.display = 'none';
        cart_hr.style.display = 'none';
    });
});
  
