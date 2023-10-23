// seccion 2 de javascript

//----------- funciones en javascript
// son bloques de codigo que nos permiten ejecutar una serie de funcuobes eb base a un nomnre y parametros que le pasemos

// funcion sin parametros
function saludar(){
    console.log('hola plebe');
};

saludar();
saludar();
saludar();

// funcion sin parametros

function saludarconparametros(nombre) {
    console.log('Hola' + ' '+ nombre);
};

saludarconparametros(prompt('ingrese su nombre'));
//-------------
function multiplicar(numerouno, numerodos) {
    console.log(numerouno * numerodos);
}

multiplicar(parseInt(prompt('ingrese el primer numero')), parseInt(prompt('ingrese el segundo numero')));
//--------

function realizarsaludo(nombre = null, apellido = null, edad = null) {
    if (nombre === null || apellido === null || edad === null) {
        console.log('Hola anonimo!');
    }else{
    console.log('Hola ' + nombre + '' + apellido + ' ' + edad);
}
}

realizarsaludo('Jose', 'Perdomo');