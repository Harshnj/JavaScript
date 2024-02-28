// Events are fired to notify code of "interesting changes" that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g. low battery or media events from the operating system), and other causes.

// When an event occurs, an event object is created and passed to the event handler. It contains information about the event, such as the type of event, the target element, mouse coordinates, key codes, etc.

//Events are the signal which occur during certain action and performs a certain action on it
//Event handling is deciding what to whena event occurs

const a = document.getElementById("div");
const c = document.getElementById("in");

// Event	       Description
// onchange	       An HTML element has been changed
// onclick	       The user clicks an HTML element
// onmouseover	   The user moves the mouse over an HTML element
// onmouseout	   The user moves the mouse away from an HTML element
// onkeydown	   The user pushes a keyboard key , for input 
// onload	       The browser has finished loading the page
//ondblclick       The user clicks an HTML element twice
const b =   document.getElementsByTagName("body");
// a.onclick=()=>{
//   a.style.backgroundColor=`red`;
// }

// a.onmouseover=()=>{
//     a.style.backgroundColor=`black`;
//   }
  
//   a.onmouseout=()=>{s
//     a.style.backgroundColor=`green`;
//   }

//   c.onkeydown=()=>{
//     b[0].style.backgroundColor=`green`;
//   }

//   a.ondblclick=()=>{
//     a.style.backgroundColor=`blue`;
//   }

//addEventListener = ttaches an event handler to a document.

a.addEventListener("click",()=>{
    a.style.backgroundColor=`blue`;
  }
);

a.addEventListener("dblclick",()=>{
    a.style.backgroundColor=`red`;
  }
);