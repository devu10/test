// const elm = document.getElementById("first");

// const elm = document.getElementsByClassName("info");

// const elm = document.getElementsByTagName("div");

// const elm = document.querySelector(".first");
// const elm = document.querySelectorAll(".first");
// const elm = document.querySelector(".info");
// const val = elm.innerHTML;
// const val = elm.innerText;
// console.log(val);

// document.write("extra conteetn");
/*
const elm = document.querySelector(".message");

const cval = elm.innerText;

console.log(cval);

elm.innerText = "change formt he server";

elm.innerHTML = "<h1>change forfmt he serve with html</h1>";
*/
//manipulating HTML elements from js
//elm is the parent element
const elm = document.querySelector("body");

const txtNode = document.createTextNode("this is a dynamic contest");
elm.appendChild(txtNode);
const paragraphElement = document.createElement("p");
paragraphElement.innerText = "txtNode";
elm.appendChild(paragraphElement);
// add element in the middle
const newElm = document.createElement("p");
newElm.innerText =
  "this is example of the adding element in the middle of html page";

elm.insertBefore(newElm, document.querySelector(".info"));

// remove element from dom
elm.removeChild(document.querySelector("[href='google.com']"));

// replace the element
const newElmRep = document.createElement("p");
newElmRep.innerText = "new element for the replcae eleme";
elm.replaceChild(newElmRep, document.querySelector(".display"));

//update css form the js
//note. selecting the element with class name that is used multiple times or the elemetn that is used in multiple place the first occurance elemet is selected
const infoElm = document.querySelector(".info");
infoElm.style.fontSize = "2rem";

const mulElm = document.querySelector("div");
mulElm.style.color = "red";
