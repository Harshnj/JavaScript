//Used for navigation through the elements in the documnet
const a = document.getElementById("fruits");
const b = document.getElementById("vege");

//firstElementChild;
console.log(a.firstElementChild);

//lastElementChild;
console.log(a.lastElementChild);
 
//nextElementSibling;
console.log(a.nextElementSibling);

//previousElementSibling;
console.log(a.previousElementSibling);

//parentElement
console.log(a.parentElement);

//children
console.log(a.children);

//innerHtml
a.innerHTML="<h1>Dom Manipulation</h1>";  //By innerHtml we can change the element 

//innertext
a.innerText="Hii";

//textContent
a.textContent="Hi Harsh";
