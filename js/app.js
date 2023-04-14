const textarea1 = document.getElementById("texarea1");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btncopiar = document.getElementById("btncopiar");

    function iniciar(){
        prohibir();
    }

    iniciar();


    function prohibir(){  //prohibimos tildes y acentos
        textarea1.addEventListener("keypress", function(event) {
            const caracter = String.fromCharCode(event.which);
                if (/[áéíóúüñÁÉÍÓÚÜÑ]/.test(caracter)) {
                event.preventDefault();
            }
        });
      
      textarea1.addEventListener("input", function(event) {
        const valorAnterior = event.target.value;
        const nuevoValor = valorAnterior.replace(/[áéíóúüñÁÉÍÓÚÜÑ]/g, "");
            if (valorAnterior !== nuevoValor) {
            event.target.value = nuevoValor;
            }
        });
    }

    btnEncriptar.addEventListener("click", function(){
        var Datoscapturados = texarea1.value; //capturamos

        if(Datoscapturados){
            document.querySelector(".contenedorIMG").classList.add("ocultar");
            document.querySelector(".btncopiar").classList.remove("ocultar");
            encriptar(Datoscapturados); //llamamos a la funcion
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes escribir un texto antes de encriptar',
                
            });
        }
    });

    function encriptar(texto){
        var textoencriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".textarea2").value = textoencriptado;
        document.querySelector("#texarea1").value = "";
    };

    
    btnDesencriptar.addEventListener("click", function() {
        var texto = textarea1.value;
        if(texto){
            desencriptar(texto);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes escribir un texto antes de Desencriptar',
                
            });
        }
    });

    function desencriptar(texto){
        var textoencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".textarea2").value = textoencriptado;
        document.querySelector("#texarea1").value = "";
    }

    btncopiar.addEventListener("click", function(){
        var texto = texarea2.value;

        if(texto){
            texarea2.select();
            navigator.clipboard.writeText(texto)
            .then(function() {
                Swal.fire({
                icon: 'success',
                title: 'Copiado',
                text: 'El Texto fue copiado Correctamente',
                button: 'OK'
                })
    
              })
              .catch(function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    
                  })
              });
        }
    });

