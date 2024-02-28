const a = document.createElement("p");
const b = document.createElement("p");
a.innerText="GOD is THE G.O.A.T" ;
b.innerText="Harsh is THE G.O.A.T";
//node.append(ele);  = will append at the last of the node
document.getElementById("d").append(a);

//node.prepend(ele) = will append at the start of the node
document.getElementById("d").prepend(a);


//node.before() = append before the node
document.getElementById("d").before(b);

//node.after() = append after the node
document.getElementById("d").after(b);

//remove()
b.remove();