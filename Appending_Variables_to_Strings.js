/*
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Set someAdjective and append it to myStr using the += operator.*/

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// example

var someAdjective = "great";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr);
