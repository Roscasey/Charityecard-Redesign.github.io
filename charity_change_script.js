document.addEventListener('DOMContentLoaded', () => {
      //FUNCTION 2: Store the card charity and price 
      const selectCharity = document.getElementById('select_charity');

      //retrieve the charity value
      selectCharity.addEventListener('change', () => {
          const productCharity = selectCharity.value;
          
  
          localStorage.setItem("cardCharity", productCharity); //store the charity 
          let itemCharity = localStorage.getItem("cardCharity");
        
  
          console.log(itemCharity);  
  
      }); 
  
}) 