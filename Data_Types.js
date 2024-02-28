let username;

let salary=1000000;

document.getElementById("btn").onclick = function(){
    username=document.getElementById("inp").value;
    document.getElementById("myH1").textContent=`Hello ${username}`;
}


let name ;
name =window.prompt("Emter ypur name");
console.log(`Hi my name is ${name}`);