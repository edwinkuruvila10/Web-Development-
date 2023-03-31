console.log("This is tutorial 53");

function greet(name, greenText="Greeting from javascript"){
    console.log(greenText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a+ b + c;
    return d;
}

let name = "edwin";
let name1 = "rohan";
let name2 = "das";
let name3 = "rajjj";
let greenText = "Good morning";
greet(name, greenText);
greet(name1, greenText);
greet(name2, greenText);
greet(name3);

let returnVal = sum(1,2,3);
console.log(returnVal)