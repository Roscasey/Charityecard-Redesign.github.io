document.addEventListener('DOMContentLoaded', ()=> {
    //Increment and decrement buttons on cart product item
    const qty = document.getElementById('qty_num');
    const decBtn = document.getElementById('btn_minus');
    const addBtn = document.getElementById('btn_plus');
    
    //Product Price adjustment
    let itemPriceElement = document.querySelector('.cart_product_price'); //get the cart product price
    let itemPrice = 9.95; //the price of all cards 

    //Remove cart item
    const remove = document.getElementById('my_cart_delete');
    const productItem = document.getElementById('cart_item');
    const cartHr = document.getElementById('cart_product_hr');

    //Update price x qty 
    let updatePrice = () => {
        let currentQty = parseInt(qty.value); //make sure that the qty is a number 
        let addIt =  (itemPrice * currentQty).toFixed(2); //round decimal points 
        itemPriceElement.innerHTML = '$' + addIt; //add the $ symbol back
    } 

    decBtn.addEventListener('click', ()=> {
        if (qty.value <= 1) {
            qty.value = 1; //assume that the item is added/in their cart. To remove they can 'X instead of 0 items'
        }
        else {
            qty.value = parseInt(qty.value) - 1; //turn into a number and decrease by 1 per click 
        }
        updatePrice();
    });
    addBtn.addEventListener('click', ()=> {
        qty.value = parseInt(qty.value) + 1; //turn into a number and increase by 1 per click
        updatePrice();
    });

    // //remove item
    // remove.addEventListener('click', () => {
    //     productItem.style.display = 'none';
    //     cartHr.style.display = 'none';
    // });
});
  


