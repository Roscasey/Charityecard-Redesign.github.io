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
});




