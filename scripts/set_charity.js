//FUNCTION 2: Store the card charity and price: Used in product_charity / my_cart /checkout_payment
//retrieve the charity value
const selectCharity = document.getElementById('select_charity');
const cardTitle = document.getElementById('card_title');

selectCharity.addEventListener('change', () => {
    const productCharity = selectCharity.value; //the product charity is the one inside the selection box 
    const titleValue = cardTitle.value;
    
    if (titleValue === 'Classic Christmas') {
        localStorage.setItem("classicChristmasCharity", productCharity);
    }
    else {
        localStorage.setItem("seasonsCharity", productCharity);
    }

    //localStorage.setItem("cardCharity", productCharity); //store the charity 
    //let itemCharity = localStorage.getItem("cardCharity"); //now get the charity 

});
    