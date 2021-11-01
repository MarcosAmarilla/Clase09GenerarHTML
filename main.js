let nuevoConvocado = document.getElementById("convocado");
let agregar = document.getElementById("agregar");
let lista = document.getElementById("lista");


let listaConvocados = new Array();
    listaConvocados.push("Matias");
    listaConvocados.push("Sergio");
    listaConvocados.push("Juan");

cargarLista();

function cargarLista() {
    for (let i = 0; i < listaConvocados.length; i++) {
        let jugador = listaConvocados[i];
        agregarLista(jugador);
    }
}

function agregarLista(convocado) {
    let li = document.createElement("li");
    li.textContent = convocado;
    lista.appendChild(li);
}

agregar.addEventListener("click",()=>{
    listaConvocados.push(nuevoConvocado.value);
    agregarLista(nuevoConvocado.value);
    nuevoConvocado.value ="";
})

agregar.addEventListener('keypress',(event)=>{
    if (KeyboardEvent.keyCod === 13){
        listaConvocados.push(nuevoConvocado.value);
        agregarLista(nuevoConvocado.value);
        nuevoConvocado.value ="";
    }
})
