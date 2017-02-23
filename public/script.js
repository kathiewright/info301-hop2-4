/*    Project:  Hands-On Project 2-4
      Author:
      Date:
      Purpose:
*/ 
function calcTotal() {
         var itemTotal = 0;
         //store the checkbox elements each to a corresponding variable that has access to all properties
         var item1 = document.getElementById("item1");
         var item2 = document.getElementById("item2");
         var item3 = document.getElementById("item3");
         var item4 = document.getElementById("item4");
         var item5 = document.getElementById("item5");
         //now that you have the variables, check the ".checked" property to see if selected
         (item1.checked) ? (itemTotal += 8) : (itemTotal += 0);
         (item2.checked) ? (itemTotal += 9) : (itemTotal += 0);
         (item3.checked) ? (itemTotal += 8) : (itemTotal += 0);
         (item4.checked) ? (itemTotal += 13) : (itemTotal += 0);
         (item5.checked) ? (itemTotal += 6) : (itemTotal += 0);
         //now calculate the sales total after computing tax
         var salesTaxRate = 0.07;
         var orderTotal = itemTotal + (itemTotal * salesTaxRate);
         alert("Your order total is $" + orderTotal.toFixed(2));  //toFixed(2) writes out 2 decimals
      }
      //don't forget to call the function!
      document.getElementById("submit").addEventListener("click", calcTotal, false);