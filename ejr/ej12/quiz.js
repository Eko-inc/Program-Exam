//variables
let amount = parseFloat(prompt("enter the amount to convert"));
let unity = prompt("cm or m?");

//ifff
if (unity === "m"){
    let cm = amount * 100;
    document.write("its ", cm, "m");
}
else if (unity === "cm"){
    let m = amount / 100;
    document.write("its ", m, "cm");
}

else{
    document.write("Error");
};




