document.addEventListener('DOMContentLoaded', () => {
    //loading and calling the first function
    let storedLabel = localStorage.getItem("productLabel"); 
    let storedImg = localStorage.getItem("productPic");
   
    document.getElementById('card_title').innerHTML = storedLabel;
    document.getElementById('card_img').src = storedImg;
});