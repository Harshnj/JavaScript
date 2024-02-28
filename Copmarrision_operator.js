// = ->Assignment Operator
// == ->Compares the value
// === ->Strict equality ==Compares value as well as Data type
// != ->inequality operator
// !== ->Strict inequality ==Compares value as well as Data type

const pi="3.14";

if(pi == 3.14){
    console.log("In PI");
}                            /////Output is In PI
else{
    console.log("Not In PI");
}


if(pi === 3.14){
    console.log("In PI");
}                        /////Output is Not In PI as datatype is string and is compared to a number
else{ 
    console.log("Not In PI");
}


if(pi != 3.14){
    console.log("In not PI");
}                                    /////Output is  In PI
else{
    console.log(" In PI");
}


if(pi !== 3.14){
    console.log("In  not PI");
}                                /////Output is In not Pi
else{
    console.log("In PI");
}