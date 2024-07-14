const valor_recibido = document.querySelector("#ingresado")
const valor_resultado = document.querySelector("#resultado")
let resultado_final = 0
let data

// FUNCION PARA TRAER DATOS DESDE API
async function valores_monedas() {
    try{
        const res = await fetch("https://mindicador.cl/api");
        data = await res.json();
    } catch (error){
        document.querySelector("#error").innerHTML = "¡Algo salió mal! Error:Failed to fetch"
    }
    return data
}

// FUNCION PARA CALCULAR VALOR DE MONEDA
async function calcular_moneda(){
    const monedas = await valores_monedas();
    const moneda = document.querySelector("#moneda").value
    if (moneda === "dolar"){
        resultado_final = valor_recibido.value / data.dolar.valor
    } else if (moneda === "euro"){
        resultado_final = valor_recibido.value / data.euro.valor
    } else if (moneda === "uf"){
        resultado_final = valor_recibido.value / data.uf.valor
    } else{
        resultado_final = 0
    }
    
    valor_resultado.innerHTML = resultado_final.toFixed(2)
}




