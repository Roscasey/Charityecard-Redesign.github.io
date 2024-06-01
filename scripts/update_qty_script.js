document.addEventListener('DOMContentLoaded', () => {
    
    //Product charity qty
    const productQty = document.getElementById('qty');
    const productCost = 9.95;
    const cardPrice = document.getElementById('card_price');

    let updateQty = () => {
        let productAmount = parseInt(productQty.value);
        let addMore = (productAmount * productCost).toFixed(2);
        cardPrice.innerHTML = '$' + addMore;
    }

    productQty.addEventListener('change', () => {
        updateQty();
    });

})
