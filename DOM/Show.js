const a= document.getElementById("btn");
const b= document.getElementById("img");

a.addEventListener("click",event=>{
    if(a.innerText === "Hide"){
        a.innerHTML="Show";
        b.style.visibility=`hidden`;

    }
    else{
        if(a.innerText === "Show"){
            a.innerHTML="Hide";
            b.style.visibility=`visible`;
    
        }
    }
})


