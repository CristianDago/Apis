
const baseUrl = "https://mindicador.cl/api/"

async function getChangeMoney() {

try{
    const resp = await fetch(baseUrl);
    const data = await resp.json();

    console.log(data)  
    return data;
    } catch (e) {
        alert(e.message);
        }

}

const btnActualizar = document.querySelector("#actualizarValor");
const valorTotal = document.querySelector("#valorTotal");

window.addEventListener('DOMContentLoaded', async (event) => {

    const moneda = await getChangeMoney()
    const dolarValor = moneda["dolar"]["valor"];
    const euroValor = moneda["euro"]["valor"];
  

    btnActualizar.addEventListener("click",() => {

    const inputPesos = document.querySelector("#inputPesos").value;
    const monedas = document.querySelector("#monedas").value
    
    


    if( inputPesos == "" ) {

        alert ('Debes agregar el monto a convertir');
        return;
    }

    else if( monedas == "" ) {

        alert ('Debes seleccionar el tipo de cambio');
        return;

    }

    else if ( monedas == "dolar" ){

        TotalDolar = inputPesos / dolarValor


        valorTotal.innerHTML = TotalDolar.toFixed(6)    

    } else {

        TotalEuro = inputPesos / euroValor
     
            
        valorTotal.innerHTML = TotalEuro.toFixed(6)  
    }
 
    });
});




