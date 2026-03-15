let display = document.getElementById("display");

let currentinput ="";
let currentOperator="";

//textContent propriedade DOM



//esta função pega o novo numero adicionado
function appendnumber(value){
currentinput +=value
display.textContent = currentinput
}

/*se curretinput for vazio e operador diferente de "."" nao retorna NADA*/

//o parametro operador pegará o operador digitado na calculadora curretinput = ''+operador = operador digitado
function pegaope(operador){
    if(currentinput==="" && operador !== ".") return''
    currentinput += operador;
    //textContent  ganha o valor de curretinput
    display.textContent = currentinput;
}


function calculate(){
    try{ 

let result = eval(currentinput);
//verifica se o resultado é DIFERENTE de um numero inteiro
if(!Number.isInteger(result))

    //caso seja um numero decimal, limita a 2 casas decimais
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