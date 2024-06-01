document.addEventListener('DOMContentLoaded', ()=> {
    let itemCharity = localStorage.getItem("cardCharity");
    document.getElementById('mini_charity').innerHTML = itemCharity; 
}) //this loads the charity 