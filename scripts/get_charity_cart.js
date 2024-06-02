//Just loads the charity label into the cart page 
//Used in my_cart / checkout_payment 

let itemCharity = localStorage.getItem("cardCharity");
document.getElementById('mini_charity').innerHTML = itemCharity;