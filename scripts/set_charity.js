//FUNCTION 2: Store the card charity and price: Used in product_charity / my_cart /checkout_payment
//retrieve the charity value
const selectCharity = document.getElementById('select_charity');
const cardTitle = document.getElementById('card_title');

selectCharity.addEventListener('change', () => {
    const productCharity = selectCharity.value; //the product charity is the one inside the selection box 
    const titleValue = cardTitle.innerHTML;
    
    if (titleValue === 'Classic Christmas') {
        sessionStorage.setItem("classicChristmasCharity", productCharity); 
    } //sessionStorage is used because local storage keeps the selected charities, so i found that this refreshes it. 
    else { //sessionStorage info obtained from https://www.w3schools.com/jsref/prop_win_sessionstorage.asp 
        sessionStorage.setItem("seasonsCharity", productCharity);
    }
});
