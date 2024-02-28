//Synchronous JS = Executes or run instructions in mentioned sequence step by step;
//ASynchronous JS = Suppose a instruction is taking lonfg time to execute then next intruction is exxecuted and that instruction will be running parallely ,  allowing certain tasks to run in the background while the main thread continues executing other instructions.
// Callbacks: Functions that are passed as arguments to other functions and are executed at a later time, often after the completion of an asynchronous operation.
console.log("First instruction");
setTimeout(() => {
    console.log("Async operation completed after 2000ms");
}, 2000);
console.log("Next instruction");
console.log("Next instruction");

////////////////////////////////////////////////////////////////
function a(){
    console.log("In A");
}

// setTimeout(()=>{
//     a()
// },2000)

function b(a){
    setTimeout(()=>{
       console.log("In B")
    },2000)
    a();
    
}

b(a);

