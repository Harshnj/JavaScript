// const a = document.getElementById("div");

// // document.addEventListener("keydown",()=>{
// //    a.textContent="🤣"
// // a.style.backgroundColor=`red`;
// // })
   
// // document.addEventListener("keyup",()=>{
// //     a.textContent="😂"
// //     a.style.backgroundColor=`#5f9ea0`;
// //     })
       
// let x =0;
// let y=0;
// let move = 10;
// document.addEventListener("keydown",event=>{
//     if(event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 y -=move;
//                 break;
//             case "ArrowDown":
//                 y +=move;
//                 break;
//             case "ArrowRight":
//                 x -=move;
//                 break;
//             case "ArrowLeft":
//                 x +=move;
//                 break;
             
//         }
//         a.style.top=`${y}px`;
//         a.style.left=`${x}px`;
//     }
// });
const a = document.getElementById("div");
const b= document.getElementsByTagName("body");


let x = 0;
let y = 0;
let move = 100;
b[0].addEventListener("keydown", event => {
    console.log(event.key);//Displays which key is pressed
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowRight":
                x += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
        }
        a.style.top = `${y}px`;
        a.style.left = `${x}px`;
    }
});
