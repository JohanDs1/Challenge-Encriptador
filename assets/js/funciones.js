const text = document.querySelector(".text-area");
const text2 = document.querySelector(".caja");
const btnEncrip = document.querySelector(".encriptar");
const btnDesencrip = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const clearAll = document.querySelector(".clearAll")
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/



clearAll.addEventListener("click",()=>{
    text.value = "";
})


btnEncrip.addEventListener("click",(evento)=>{
    evento.preventDefault();
    encriptarText();
});
btnDesencrip.addEventListener("click",()=>{
    desencriptarText();
});

const encriptarText = ()=>{
    const texto = text.value;
    const reemplazos  = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",  
        u: "ufat"
    }
    const textoEncrip = Array.from(texto).map(caracter => reemplazos[caracter] || caracter).join('');
    text2.value = textoEncrip;
    text.value = '';
}




    
    const desencriptarText = () => {
        const texto = text.value;
    
        let textoDesencrip = texto.replace(/ai/g, 'a')
                                  .replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    
        console.log(textoDesencrip);
        text2.value = textoDesencrip;
        text.value = '';
    };

    btnCopiar.addEventListener("click",()=>{
        const texto = text2.value;
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado al portapapeles: " + texto);
        }).catch(error => {
            alert("Error al copiar al portapapeles: " + error);
        });
    })
    
    













 