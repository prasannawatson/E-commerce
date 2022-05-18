'use strict';

// storing values in the variables

let inputValue = document.getElementById('name');
let addButton = document.getElementById('add');
addButton.addEventListener("click", addList);
let clickEvent = document.getElementById("addedList");

// Add name in the list div

function addList()
{
 let value = inputValue.value;
 if(value){
 document.getElementById('addedList').innerHTML += `<li>${value}</li>`;
 inputValue.value = '';
 }
 else{
     alert("Empty string can't be added");
 }

}

//  strikethrough the name while clicking and remove it vice versa

clickEvent.addEventListener('click', function(event) {  
    event.target.classList.toggle("mystyle");
});
    

