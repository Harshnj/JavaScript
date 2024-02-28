// // The async keyword is used to define a function that returns a Promise
// The await keyword is used to pause the execution of the async function until the Promise is resolved, and it returns the resolved value.


 function task1(){
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
         console.log("Task 1 Complete");
         resolve("Sucess task1");
     },1000);
     
    })
 }
 
 
 function task2(){
     return new Promise((resolve, reject)=>{
         setTimeout(()=>{
             console.log("Task 2 Complete");
             resolve("Sucess task2");
         },1000);
         
        })
 }
 
 async function task3(){
     return new Promise((resolve, reject)=>{
         setTimeout(()=>{
             console.log("Task 3 Complete");
             resolve("Sucess task3");
         },1000);
        
        })
 }
 
 function task4(){
    let a=100;
     return new Promise((resolve, reject)=>{
         setTimeout(()=>{
            if(a == 101){
             console.log("Task 4 Complete");
             resolve("Sucess task4");
            }
             else{
                reject("Falied task4");
             }
             
         },1000);
        
        })
 }

 async function Alltask(){
  let a=  await task1();
  console.log(a);
  a = await task2();
    console.log(a);
  a = await task3();
    console.log(a);
  a = await task4();
    console.log(a);
    setTimeout(()=>{
        console.log("All task completed");
    },2000)
 }

 Alltask();