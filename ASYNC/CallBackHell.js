//CallBackHell is situation in JS were callbacks are nested within the other callback to the degree were code is difficult to understand
//Its old fashion to handle asynchronous functions , USe promise and Asyn\await to avoid callback hell
function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 Complete");
        callback();
    },3000);
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 Complete");
        callback();
    },3000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 Complete");
        callback();
    },3000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 Complete");
        callback();
    },3000);
}

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                console.log("All tasks COmpleted");
//             })
//         });
//     });
// });

// function task1(callback){
//         console.log("Task 1 Complete");
//         callback();
// }

// function task2(callback){
//         callback();
// }

// function task3(callback){
//         console.log("Task 3 Complete");
//         callback();
// }

// function task4(){
// console.log("Task 4 Complete");
// }

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 Complete");
        callback();
    },3000);
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 Complete");
        callback();
    },3000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 Complete");
        callback();
    },3000);
}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 Complete");
        callback();
    },3000);
}

// task1(task2)
// task2(task3)
// task3(task4)//Here all the task will be printed simulatenously after 3 sec

