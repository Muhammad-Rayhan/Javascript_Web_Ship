"use strict";
// 1. alert("Hello Rayhan"); //Alert is a javascript function
// 2. prompt("Input Feild Label"); //Prompt is also javascript function (Prompt return string type value)
// 3. confirm("Are you admin") //Confirm is also javascript function


/* ========================= PROMPT ============================= */

// Example
// prompt("User Name");  //Input Box

/*
console.log(prompt("User Name"));
let age = prompt("Age");
console.log(age);

Note: When click cancel button than print null in console.
      When click ok button but not entry any charecter than print empty string.
      When fillup this input form and click ok button than print input box value.
*/

/* 
let name = prompt("Name", "Rayhan");
console.log(name);

Note: Pass Any Value Inside Input Feild Than Pass Second Argument in 
      Prompt Function. The Second Argumrnt is The Value of Prompt Input Feild.
*/


// let firstName = prompt("First Name");
// let lastName = prompt("Last Name");
// console.log(`Hello! ${firstName} ${lastName}`);


/* ========================= CONFIRM ============================= */
// Print Confirm Message
/*
let isAdmin = confirm("Are You Admin?");
console.log(isAdmin);

Note: When click ok button than return boolean (true) or click cancel than
      return boolean (false)
*/

let text = "Are You Admin?";
if(confirm(text) == true)
{
      console.log("Press Ok");
} else {
      console.log("Press Cancel");
}