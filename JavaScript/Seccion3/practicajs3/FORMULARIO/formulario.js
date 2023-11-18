/*2) Crear un formulario que contenga lo siguiente:
   * Nombres (Letras y espacios)
   * Apellidos (Letras y espacios)
   * Edad (Numero)
   * Fecha de Nacimiento (DD/MM/YY)
   * Cedula de Identidad 
   * Direccion de IP (192.168.1.1)
   * Direccion MAC (00:1B:44:11:3A:B7)
   * Numero de Telefono (412-888-99-99) 
   Nota: Validar cada uno de estos campos con expresiones regulares.
*/
let enviar = document.getElementById('enviar')

enviar.addEventListener('click', function(){

    let nombre = document.getElementById('nombre')
    let regexnombre = /^[a-zA-Z]+\s[a-zA-Z]+$/
    if(regexnombre.test(nombre.value)){
        nombre.classList.remove('incorrecto')
        nombre.classList.add('correcto')
    }else{
        nombre.classList.remove('correcto')
        nombre.classList.add('incorrecto')
    }

    let apellido = document.getElementById('apellido')
    if(regexnombre.test(apellido.value)){
        apellido.classList.remove('incorrecto')
        apellido.classList.add('correcto')
    }else{
        apellido.classList.remove('correcto')
        apellido.classList.add('incorrecto')
    }
//---------------------------------------------------
    let regexedad = /^([1-9])|([1-9])([1-9])$/
    let edad = document.getElementById('edad')
    if(regexedad.test(edad.value)){
        edad.classList.remove('incorrecto')
        edad.classList.add('correcto')
    }else{
        edad.classList.remove('correcto')
        edad.classList.add('incorrecto')
    }
//---------------------------------------------------
    let regexfecha = /^(19\d{2}|20[0-1][0-9]|202[0-3])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/
    let fecha = document.getElementById('fecha')
    if(regexfecha.test(fecha.value)){
        fecha.classList.remove('incorrecto')
        fecha.classList.add('correcto')
    }else{
        fecha.classList.remove('correcto')
        fecha.classList.add('incorrecto')
    }
//---------------------------------------------------
    let regexcedula = /\d{2}\.\d{3}\.\d{3}/
    let cedula = document.getElementById('cedula')
    if(regexcedula.test(cedula.value)){
        cedula.classList.remove('incorrecto')
        cedula.classList.add('correcto')
    }else{
        cedula.classList.remove('correcto')
        cedula.classList.add('incorrecto')
    }
//---------------------------------------------------
    let regexip = /\d{3}\.\d{3}\.\d{1}\.\d{1}/ 
    let ipusuario = document.getElementById('ip')
    if(regexip.test(ipusuario.value)){
        ipusuario.classList.remove('incorrecto')
        ipusuario.classList.add('correcto')
    }else{
        ipusuario.classList.remove('correcto')
        ipusuario.classList.add('incorrecto')
    }
//---------------------------------------------------
    let regexmac = /(\d\w|\w\d|\d{2}|\w{2})\:(\d\w|\w\d|\d{2}|\w{2})\:(\d\w|\w\d|\d{2}|\w{2})\:(\d\w|\w\d|\d{2}|\w{2})\:(\d\w|\w\d|\d{2}|\w{2})\:(\d\w|\w\d|\d{2}|\w{2})/
    let mac = document.getElementById('mac')
    if(regexmac.test(mac.value)){
        mac.classList.remove('incorrecto')
        mac.classList.add('correcto')
    }else{
        mac.classList.remove('correcto')
        mac.classList.add('incorrecto')
    }
//---------------------------------------------------
    let regexnum = /\d{3}\-\d{3}\-\d{2}\-\d{2}/
    let num = document.getElementById('num')
    if(regexnum.test(num.value)){
        num.classList.remove('incorrecto')
        num.classList.add('correcto')
    }else{
        num.classList.remove('correcto')
        num.classList.add('incorrecto')
    }
//--------------------------------------------------
    let form = document.getElementById('form')
    let datosvalidos = 0;
    for(let i = 0; i < form.length;i++){
        if(form[i].classList.value == 'correcto'){
            datosvalidos++
        }else{
            datosvalidos = 0
        }
    }
    if(datosvalidos === (form.length)){
        form.submit()
    }else{
        alert('Rellene todos los campos correctamente')
    }
})




