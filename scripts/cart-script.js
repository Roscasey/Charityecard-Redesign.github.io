/* This code is for clicking on the two cards and adding them to cart and updating their total price */

// getting all the document elements for each card 
const classicItem = document.getElementById('classic_item');
const classicChristmasCharity = sessionStorage.getItem("classicChristmasCharity");
const seasonsGreetingCharity = sessionStorage.getItem("seasonsCharity")

const seasonsGreetingCharityElement = document.getElementById('seasons_greeting_charity');
const classicChristmasCharityElement = document.getElementById('classic_christmans_charity');

//getting the total_box sub / total 
const subTotalPriceElement = document.getElementById("subtotal_price");
const totalPriceElement = document.getElementById("total_price");

seasonsGreetingCharityElement.innerHTML = seasonsGreetingCharity;

// display classic christmas only if it is added to cart
if (classicChristmasCharity === null) {
    classicItem.style.display = "none";
}
else {
    classicItem.style.display = "";
    classicChristmasCharityElement.innerHTML = classicChristmasCharity;
    subTotalPriceElement.innerHTML = "$19.90";
    totalPriceElement.innerHTML = "$19.90";
}
