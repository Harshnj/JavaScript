const h=document.getElementById("a");
const f=document.getElementById("f");
const c=document.getElementById("c");
const t=document.getElementById("t");
const r=document.getElementById("r");
const n=document.getElementById("n");
const submit=document.getElementById("btn");

submit.onclick=function(){
    if(h.checked){
        r.textContent="Youo Have hobbie";
    }
    else{
        r.textContent="Youo dont have  Have hobbie";
    }
        
    if(f.checked){
              n.textContent="FOOTBALL";
        }
        else  if(c.checked){
            n.textContent="CRICKET";
        }
        else  if(t.checked){
            n.textContent="tennis";
        }
        else{
          n.textContent="Not Selected";
        }
    
   
}
