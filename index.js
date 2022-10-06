// 1.Ways to print in javascript
// console.log("Hello World");
// document.write("marvel infinity war");
// alert("hiii");

// 2.javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("david warner");
// console.error("error 3000");
// console.assert(4==(6-3))         It gives error message!

// 3.javascript variables
// what are variables? - containers to store data values
var num1 = 34;
var num2 = 56;
// console.log(num1+num2);

// 4. Data types in javascript
// numbers
var num3 = 455;
var num4 = 57.34;

// strings
var str1 = "This is my first string";
var str2 = "This is my second string"; //this also correct in js

// objects
var marks = {
  ravi: 34,
  shreya: "ghosal",
  shubham: 78,
  harmoine: 99.98,
};
// console.log(marks);

//booleans
var a = true; //It comes in blue colour
var b = false;
// console.log(a, b);

var und;
// console.log(und);   //It will print undefined because und doesn't hold any data
// console.log(undefined);      //Exception   (print undefined)
var n = null;
// console.log(n);     //It will print null because we are saying that don't keep any value within this variable.

/*
At a very high level, there are two types of data tyoes in javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects

*/

var arr = [10, 20, "Saurabh", 40, 50];
// console.log(arr);

// Operators in javascript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is",a+b);
// console.log("The value of a-b is",a-b);
// console.log("The value of a*b is",a*b);
// console.log("The value of a/b is",a/b);

// Assignment Operators
var c = b;
// c+=2;  //c=c+2;
// c-=2;
// c*=2;
// c/=2;  //c=c/2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x==y);     //false
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);      //true
// console.log(x>y);

// Logical Operators

// Logical and
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);

//Logical or
// console.log(true || true);
// console.log(false || true);
// console.log(true || false)
// console.log(false || false);

// Logical not
// console.log(!false);
// console.log(!true);

// Functions in javascript
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

var c1 = avg(4, 6);
var c2 = avg(4, 17);
// console.log(c1,c2);

// Notes=> blue color is for numbers while black is for strings.

// Conditions in javascript

// if and if else and nested if statement
var age = 8;
// if(age>=18){
//     console.log(" You can go at emma's birthday party");
// }
// else if(age>=15&&age<18){
//     console.log("You can't go in emma's b'day party");
// }
// else{
//     console.log("You have to stay at home");
// }

// Loops in javascript
var arr = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 50) {
    // break;
    continue;
  }
  // console.log(arr[i]);
}

// console.log(arr.length); // 7

/* Notes=> (var/let/const) var- It's defined throghout the program as compared to let.
   let=> It's a block scoped.
   const=> I think you know this.
   */
let j = 10;
// while(j<=arr.length*10){
//     console.log(j);
//     j=j+10;
// }

// do{
//     console.log(j);
//     j=j+10;
// }while(j<=arr.length*10);

// Array methods
let myArr = ["fan", "Camera", 356, null, true];
// myArr.pop();   // one reduce from last
// myArr.push("harry");   //add one at last
// myArr.shift();     //reduce one from front
// myArr.unshift('justin');  // add one at front
// const newlen = myArr.('justin');  // Gives length of array after addition of one extra string.
// console.log(newlen);
// console.log(myArr);

// String methods in javascript
let mystring$ = "saurabh is a good boy boy";
// console.log(mystring$.indexOf("boy"));   //18    (index start from 0)
// console.log(mystring$.lastIndexOf("boy")); //22
// console.log(mystring$.length);

// console.log(mystring$.slice(1,3));  //start include but end doesn't include.
// console.log(mystring$.slice(2,5)) //ura

// var d=mystring$.replace("saurabh","justin");
// console.log(d,mystring$);
// // console.log(mystring$);
// d=d.replace("justin","Alexandra");
// console.log(d);

/****** For-each loop*****/
// let sum=0;
// var arr = [10, 20, 30, 40, 50, 60, 70];
// arr.forEach(myfunction);

// function myfunction(item){
//   sum+=item;
// }

// console.log(sum);
const myDate = new Date();
console.log(myDate.getTime()); //get time in miliseconds
console.log(myDate.getFullYear());
console.log(myDate.getHours()); //24 hour clock
console.log(myDate.getSeconds()); //get in getSeconds
console.log(myDate.getDay()); //0
//  sun  // 0
//  mon
//  tues
// wed
//  Thu
// fri
// sat

let elem = document.getElementById("rock");
// elem.style.background="cyan";
// console.log(elem);

elem.classList.add("bg-primary");
// elem.classList.remove("bg-primary");

let prefer = document.getElementById("firstcontainer").innerText;
// console.log(prefer);

// let obj=document.getElementById("trix").innerText="shreya";
console.log(trix.innerText);

let tr = document.getElementsByTagName('span');
createdelement = document.createElement("p");
createdelement.innerText = "this is a created para";
tr[0].appendChild(createdelement);

let createdelement2=document.createElement('b');
createdelement2.innerText="this is a bold para";
// tr[0].replaceChild(createdelement2,createdelement);

tr[0].removeChild(createdelement);

// Selecting using Query
sel= document.querySelector('.BTS')
console.log(sel);                   //used for css

