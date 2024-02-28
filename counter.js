let count=0;
const dec=document.getElementById("dec");  //the variable dec stores a reference to the HTML element with the id "myH1," not the content of the element itself.
const res=document.getElementById("res");
const inc=document.getElementById("inc");
const display=document.getElementById("myH1");
dec.onclick=function(){
        count--;
       display.textContent=count;
}

res.onclick=function(){
    count=0;
    display.textContent=count;
}

inc.onclick=function(){
    count++;
    display.textContent=count;
}