let display = document.getElementById("display");

let currentinput ="";
let currentOperator="";

function appendnumber(value){
currentinput +=value
display.textContent = currentinput
}


function pegaope(operador){
    if(currentinput==="" && operador !== ".") return''
    currentinput += operador;
    display.textContent = currentinput;
}


function calculate(){
    try{ 

let result = eval(currentinput);

if(!Number.isInteger(result))
result = result.toFixed(2)

currentinput = result
display.textContent = currentinput;
    } catch(error){
display.textContent = "erro";
currentinput ="";

    }
}


function apagaDisplay(){
    currentinput ="";
    display.textContent = currentinput;
    
}