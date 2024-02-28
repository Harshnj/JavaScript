// The window object in JavaScript is a global object in the browser environment. It represents the browser window and serves as the global scope for JavaScript code running on a web page. It includes properties and methods for interacting with the browser window, handling events, and managing the document. Variables and functions declared globally become properties and methods of the window object. Additionally, it provides access to the location object for working with the current URL and navigation.//The DOM, or Document Object Model
// DOM is a way for programs (usually written in JavaScript) to interact with the structure, style, and content of HTML, XML, or XHTML documents. It provides a structured representation of the document, allowing scripts to dynamically update the content, structure, and style of a web page.
//document is the object which contains the content of browser.
    //        Document
    //            |
    //          HTML
    //          /  \
    //         /    \
    //       Head     Body
    //       /  \       |
    //     /     \     div
    //   Title  link    |
    //                  img
//By DOM we can dynamically change the content of webpage based on user interaction and without altering the main document 

console.log(document);//Displays HTML code
console.dir(document); //Displays all the methods and properties 


document.getElementById('myHeading').textContent = "Hii Bitchaa";
document.body.style.backgroundColor='red';