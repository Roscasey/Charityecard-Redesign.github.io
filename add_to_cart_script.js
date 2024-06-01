document.addEventListener('DOMContentLoaded', () => {

    //FUNCTION 1: Click on an img and load its product listing
    const itemPics = document.querySelectorAll('.product_grid_img');

    itemPics.forEach((itemPic) => { //for each ofthe product grid pics add a click function 
        itemPic.addEventListener('click', () => {
            const productCard = itemPic.closest('.product_card'); //get its closest elements (label & img) 
            const cardLabel = productCard.querySelector('.product_grid_label').textContent; //just get the text content of the product card
            const cardImg = productCard.querySelector('.product_grid_img').src; //get the associated img
            

            //store the items 
            localStorage.setItem("productLabel", cardLabel);
            localStorage.setItem("productPic", cardImg);

            let label = localStorage.getItem("productLabel");
            let imageSrc = localStorage.getItem("productPic");

            document.getElementById('card_title').innerHTML = label;
            document.getElementById('card_img').src = imageSrc;
        });
    });

    //loading and calling the first function
    let storedLabel = localStorage.getItem("productLabel"); 
    let storedImg = localStorage.getItem("productPic");

    //if there are stored values, then change them accordingly 
    if (storedLabel) {
        document.getElementById('card_title').innerHTML = storedLabel; //change the title
        document.getElementById('current_page').innerHTML = storedLabel; //changing the progress label too
    }
    if (storedImg) {
        document.getElementById('card_img').src = storedImg; //change the img
    };
});




