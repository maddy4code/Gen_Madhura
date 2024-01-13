/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */


const View = {
  init: () => {
    const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');
     
     fetch('../../db/db.json')
     .then((response) => response.json())
     .then((json) => {
    
      let cartItems = json.cart;
      
      cartItems.forEach(item => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const nameCell = document.createElement('td');
    
        idCell.textContent =  json.products.find(x => x.id === item.id).id ; 
        nameCell.textContent = json.products.find(x => x.id === item.id).name;
        row.appendChild(idCell);
        row.appendChild(nameCell);
    
        tbodyElem.appendChild(row);
      });
    });
   
    //console.log('TODO: Please see the above requirement' );
  }
};
document.addEventListener('DOMContentLoaded', View.init);
