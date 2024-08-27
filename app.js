const botonParaEncriptar = document.querySelector(".boton-encriptar");
const textoEncriptar = document.querySelector(".caja-texto");
const advertencia = document.querySelector(".texto-advertencia");
const textoEncriptado = document.querySelector(".texto-final");
const contenido = document.querySelector(".contenedor-resultado");
const botonCopiar = document.querySelector(".boton-copiar")
const botonParaDesencriptar = document.querySelector(".boton-desencriptar");

function advertenciaStyleCampoVacio(){
    advertencia.style.background = "#67c2ff";
    advertencia.style.color = "#FFFF";
    advertencia.style.fontWeight = "800";
    advertencia.textContent = "Advertencia: ¡El campo de texto no puede estár vacio!";
}

function advertenciaStyleCaracteres(){
    advertencia.style.background = "#67c2ff";
    advertencia.style.color = "#FFFF";
    advertencia.style.fontWeight = "800";
    advertencia.textContent = "Advertencia: ¡No se aceptan acentos!";
}

function timeOut() {
    setTimeout(()=>{
        advertencia.removeAttribute("style");
    },1500);
}

function encriptar() {
    
}

botonParaEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    
    let textoParaEncriptar = textoEncriptar.value;
    let texto = textoParaEncriptar.normalize("NFD").replace(/[´¨]/g, "");
    
    if (textoParaEncriptar == "") {
        advertenciaStyleCampoVacio();
        timeOut()

    } else if (textoParaEncriptar !== texto) {
        advertenciaStyleCaracteres();
        timeOut()

    } else {
        textoParaEncriptar = textoParaEncriptar.replace(/e/mg, "enter");
        textoParaEncriptar = textoParaEncriptar.replace(/i/mg, "imes");
        textoParaEncriptar = textoParaEncriptar.replace(/a/mg, "ai");
        textoParaEncriptar = textoParaEncriptar.replace(/o/mg, "ober");
        textoParaEncriptar = textoParaEncriptar.replace(/u/mg, "ufat");

        textoEncriptado.innerHTML = textoParaEncriptar;
        contenido.remove();
        botonCopiar.style.visibility = "inherit";
    }
})

botonParaDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    
    let textoParaEncriptar = textoEncriptar.value;
    let texto = textoParaEncriptar.normalize("NFD").replace(/[´¨]/g, "");
    
    if (textoParaEncriptar == "") {
        advertenciaStyleCampoVacio();
        timeOut()

    } else if (textoParaEncriptar !== texto) {
        advertenciaStyleCaracteres();
        timeOut()

    } else {
        textoParaEncriptar = textoParaEncriptar.replace(/enter/mg, "e");
        textoParaEncriptar = textoParaEncriptar.replace(/imes/mg, "i");
        textoParaEncriptar = textoParaEncriptar.replace(/ai/mg, "a");
        textoParaEncriptar = textoParaEncriptar.replace(/ober/mg, "o");
        textoParaEncriptar = textoParaEncriptar.replace(/ufat/mg, "u");

        textoEncriptado.innerHTML = textoParaEncriptar;
        contenido.remove();
        botonCopiar.style.visibility = "inherit";
    }
})

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = textoEncriptado;
    copiar.select();
    document.execCommand("copy");
})