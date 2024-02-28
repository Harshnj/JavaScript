//Element Selector is a method to access and manipulate html element
//document.getElementById()  = Gets the elemeny by its id , is not null
//document.getElementByClassName() = Collection of elements (HTML COLLECTION) haing same class name , if not null
//document.getElementByTagName() = Collection of elements (HTML COLLECTION) of all same tag names , if not null
//document.querySelector() = Selects the first ocuuranace element //Only one single element 
//document.querySelectorAll() = NodeList / collection


// When you use getElementsByClassName and getElementsByTagName, they return HTML collections, not single elements. Therefore, you need to access elements within those collections by index. Also, the textContent property should be set individually for each element. Here's the corrected version:
// Select by id
const a = document.getElementById("myHeading");
a.textContent = "Hi welcome";

// Select by class name
const bElements = document.getElementsByClassName("myPara");
for (const element of bElements) {
  element.textContent = "Harsh is G.O.A.T";
}
bElements[0].style.backgroundColor=`yellow`;
bElements[1].style.backgroundColor="lightblue";

// Select by tag name / Element
const cElements = document.getElementsByTagName("button");
for (const element of cElements) {
  element.textContent = "Please";
}
cElements[0].style.fontSize="20px";


//QuerySelector
const d = document.querySelector("h1"); //Selects only first occcured element 
d.style.color="RED";

const e =document.querySelectorAll(".myPara");
e.forEach(val =>{
    val.style.fontSize="30px";
}) 