"use strict";
//***================================================String===========================================================***
// Convert (Number, Boolean, Null, Undefined) Value to String Formate For Use String() Function
/*
***Number Datatype to String Datatype Convert***
let price = 100;
console.log(typeof price); //Return number
price = String(price); //Convert number to string
console.log(typeof price); //Return string

let price = 100;
let newPrice = String(price); //Convert number to string
console.log(typeof newPrice); //string
*/

/*
***Null Datatype to String Datatype Convert***
let text = null;
console.log(typeof text); //object
text = String(text); //Convert null object to string
console.log(typeof text); //string
*/

/*
***Undefined Datatype to String Convert***
let text = undefined;
console.log(typeof text); //undefined
text = String(undefined); //Convert undefined to string
console.log(typeof text); //string
*/

/*
***Boolean Datatype to String Datatype***
let bool = true;
console.log(typeof bool); //boolean
bool = String(bool); //Convert boolean to string
console.log(typeof bool) //string
*/

//***================================================Number===========================================================***

// Convert (String, Boolean, Null, Undefined) or (Empty String) Value to Number Formate For Use Number() Function
/*
***Number Datatype to String Datatype Convert***
let num = "20";
console.log(num); //string
num = Number(num); //Convert string number to number
console.log(num); //number
*/

/**********
//###-Note: When use (arithmetic operators [without + addtion]) inside two string value than javascript automatic convert string value to number.
//But always convert string to number, not depandable on javascript converter
//Example Here---
let num1 = "60";
let num2 = "30";
console.log(num1 % num2); 

// ===Number to other datatype convert & thay are answer===
let str1 = "100";
console.log(Number(str1)); //return 100 (Convert string number to number datatype)
let str2 = "abc";
console.log(Number(str2)); //return NaN [NaN is number datatype] (Convert string to number datatype)

let bool = true;
console.log(Number(bool)); //return 1 (Convert boolen true to number datatype)
let bool2 = false;
console.log(Number(bool2)); //return 0 (Convert boolean false to number datatype)

let datatype = null;
console.log(Number(datatype)); //return 0 (Convert object datatype to number datatype)

let datatype2 = undefined;
console.log(Number(datatype2)); //return NaN [NaN is number datatype] (Convert undefined datatype to number datatype)

let strNum3 = "     500     ";
console.log(Number(strNum3)); //return 500 (Convert string number to number datatype & remove all unwanted spech)

let strNum4 = "     500a    ";
console.log(Number(strNum4)); //return NaN [NaN is number datatype] (Convert number with string to number datatype)

let emptyStr = ""; //or let emptyStr = "      "
console.log(Number(emptyStr)); //return 0 (Convert empty string to number datatype always return 0 value)

**********/


//***================================================Boolean===========================================================***
// Convert (Number, Boolean, Null, Undefined) or (Empty String) or NaN Value to Boolean Formate For Use Boolean() Function
// ([false, 0, '', null, undefined, NaN]) Those number are return false otherwise all value are true

