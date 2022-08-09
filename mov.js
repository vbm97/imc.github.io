function start(){
   var buttonCalcularImc = document.querySelector('#button-imc'); 
   buttonCalcularImc.addEventListener('click', handleButtonClick)
}


function calcularImc(weight, height) {
   return weight / (height * height);
}

function handleButtonClick(){
   var inputWeight = document.querySelector("#input-weight");
   var inputHeight = document.querySelector("#input-height");
   var imcResultado = document.querySelector('#imc-resultado');

   var weight = Number(inputWeight.value);
   var height = Number(inputHeight.value);

   var imc = calcularImc(weight,height);
   var formattedImc = imc.toFixed(2). replace('.' , ',')

   imcResultado.textContent = formattedImc;
}

start();