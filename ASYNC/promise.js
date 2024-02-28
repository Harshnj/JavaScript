// Promises are a feature in JavaScript introduced to handle asynchronous operations more effectively and provide a cleaner and more maintainable way to work with asynchronous code. A Promise represents a value that may not be available yet but will be resolved at some point in the future, either with a resolved value or a reason why it cannot be resolved (rejected).

// Promises have three states:
// Pending:
// The initial state when a Promise is created.
// The operation associated with the Promise is still ongoing, and the result is not yet available.

// Fulfilled (Resolved):
// The Promise has successfully completed its operation.
// The result, or the resolved value, is available.

// Rejected:
// The Promise has encountered an error or failed during its operation.
// The reason for the rejection is available.

// resolve Function:
// The resolve function is used to fulfill or successfully complete a Promise.
// When the asynchronous operation associated with the Promise is successful, you call resolve with the value or result of that operation.

// reject Function:
// The reject function is used to reject a Promise, indicating that the associated asynchronous operation encountered an error or failed.
// When an error occurs, you call reject with an error object or any reason for the rejection.

function task1(){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Task 1 Complete");
        resolve("Sucess");
    },1000);
    
   })
}


function task2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Task 2 Complete");
            resolve("Sucess");
        },1000);
        
       })
}

function task3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Task 3 Complete");
            resolve("Sucess");
        },1000);
       
       })
}

function task4(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Task 4 Complete");
            resolve("Sucess");
        },1000);
       
       })
}

task1().then((()=>{
    task2().then(()=>{
        task3().then(()=>{
            task4().then(()=>{
                setTimeout(()=>{
                        console.log("All Success");
                         },2000)
            })
        })
    })
}))

// task1().then(() => {
//     return task2();
// }).then(() => {
//     return task3();
// }).then(() => {
//     return task4();
// }).then(() => {
//     setTimeout(()=>{
//         console.log("All Success");
//     },2000)
// }).catch((error) => {
//     console.error("An error occurred:", error);
// });
