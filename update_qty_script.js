document.addEventListener('DOMContentLoaded', () => {
    
    //Product charity qty
    const product_qty = document.getElementById('qty');
    const product_cost = 9.95;
    const card_price = document.getElementById('card_price');

    let update_qty = () => {
        let product_amount = parseInt(product_qty.value);
        let add_more = (product_amount * product_cost).toFixed(2);
        card_price.innerHTML = '$' + add_more;
    }

    product_qty.addEventListener('change', () => {
    update_qty();
    });

})
