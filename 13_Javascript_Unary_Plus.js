"use strict"

/*
#Note: +"5" Unary Plus is Number(), When Declear Any String Number With First Declear Unary Plus That Means +"5" = Number("5") Than Convert String Number to Number,
# Unarry Plus Means Number(),
#When Declear Unary Plus Than Automatic Convert (String, Boolean, Null, Undefined) or (Empty String) to Number
#Example:---
*/

let num = "10";
console.log(num); //Return String 10
num = +"10"; //Unary Plus & String 10
console.log(num); //Return Number 10

let num1 = "9";
let num2 = "10";
let num3 = num1 + num2;
console.log(num3); //Return String Number 910
let num4 = +num1 + +num2; // Unary Plus Like +num1 & +num2
console.log(num4); //Return Number 19