// seccion 2 de javascript

//----------- funciones en javascript
// son bloques de codigo que nos permiten ejecutar una serie de funcuobes eb base a un nomnre y parametros que le pasemos

// funcion sin parametros
function saludar(){
    console.log('hola plebe');
};

saludar();
saludar();

// funcion sin parametros

function saludarconparametros(Saludo) {
    console.log(Saludo);
};

saludarconparametros(`Hola perro`);
//-------------
function multiplicar(numerouno, numerodos) {
    console.log(numerouno * numerodos);
}

multiplicar(5, 4)
//multiplicar(parseInt(prompt('ingrese el primer numero')), parseInt(prompt('ingrese el segundo numero')));
//--------

function realizarsaludo(nombre = null, apellido = null, edad = null) {
    if (nombre === null || apellido === null || edad === null) {
        console.log('Hola anonimo!');
    }else{
    console.log('Hola ' + nombre + ' ' + apellido + ' de ' + edad + ' años');
}
}

realizarsaludo('Jose', 'Perdomo' , 18 );
//realizarsaludo(prompt('ingresa tu nombre'), prompt('ingresa tu apellido') );

// -------- función con retorno

function sumar(num1,num2) {
    return num1 + num2;
}
console.log(sumar(20,20));

//----

function mayordeedad(edadusuario) {
    if(edadusuario >= 18){
        return true;
    }else{
        return false;
    }
}

let edade = 18

console.log(mayordeedad(edade));

//------ funcion dentro de una funcion

function permisos(edad) {
    if(mayordeedad(edad)){
        console.log('puedas ingresar');
    }else{
        console.log('no puedes ingresar');
    }
}

permisos(edade);

// crea una funcion que calcule el area de un rectangulo

function rectangulo(ancho,altura) {
    return ancho * altura;
}
console.log(rectangulo(10,5));


//------- funciones recursivas

function recursiva(num){
    if(num >= 10){
        return console.log('basta');
    }
    console.log(num);
    recursiva(num + 1);
}

recursiva(0);

//------ scope
if(true){
    var variableglobal = 'global';
    let variablelocal = 'local';
    const variableconstante = 'constante';
    console.log(variableglobal);
    console.log(variablelocal);
    console.log(variableconstante);
}
console.log(variableglobal);
//console.log(vaiablelocal);
//console.log(variableconstante);

function testScope() {
    var varVariable = 'VARIABLE GLOBAL';
    let letvariable = 'VARIABLE LOCAL';
    const constVariable = 'VARIABLE CONSTANTE';
    //console.log(varVariable);
}
//console.log(letvariable)
//console.log(varVariable);
//testScope();

//EJERCICIOS
//1-) Crear una función que reciba como parametro un número y que retorne verdadero si es par y falso si es impar

function par(num) {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(par(20));

//2-) crear una funcion que reciba como parametro dos numeros y un operador (+,-,*,/) y que retorne el rsultado de la operacion entre los dos números.

function calculadora(num1,num2,operador) {
    if(operador == '+'){
        return num1 + num2;
    }else if(operador == '-'){
        return num1 - num2;
    }else if(operador == '*'){
        return num1 * num2;
    }else if(operador == '/'){
        return num1 / num2;
    }
}
console.log(calculadora(50,25,'/'));

//---------- metodos de string --> metodos a una cadena de texto

let nombre = 'Jose Perdomo';

console.log(nombre[5]);

//lenght (longitud del texto)

console.log(nombre.length);

//indexOf (posicion de un caracter o palabra)

console.log(nombre.indexOf('P'));

//slice (extraer una parte de la cadena de texto)
console.log(nombre.slice(5));
console.log(nombre.slice(5,10));

//trim (quitar espacios en blanco)
let nombre2 = ' jose perdomo ';
console.log(nombre2.trim());

//split (convertir string en array)
let nombre3 = 'Juan Perez Lopez Jimenez';
let nombre4 = 'Futbol';
console.log(nombre3.split(' ')); //---> ['Juan', Perez', Lopez, 'Jimenez']
console.log(nombre4.split('')); //----> ['F', 'u', 't', 'b', 'o', 'l']

//replace (reemplazar parte de la cadena)
let nombre5 = 'Alberto Diaz'
console.log(nombre5.replace('Diaz', 'Perez'));

//toUpperCase (Convertir a mayuscular)
console.log(nombre5.toUpperCase());

//toLowerCase (convertir a minisculas)
let mayus = 'PERRO'
console.log(mayus.toLowerCase());

/*

EJERCICIO

Segun el siguiente string 
"La vida es como andar en bicicleta, para mantener el equilibrio, debes seguir adelante".

1-) Encontrar la posicion de la palabra "equilibrio"
2-) Encontrar la posicion de la palabra "bicicleta"
3-) Encontrar la posicion de la palabra "hola"
4-) Transformar el string en un array, separando por espacios.
5-) Transformar el string en mayusculas.
6-) Reemplzar la primera ocurrencia de "o" por "a"
7-) Concatenar a la frase lo siguiente ----> "- Albert Einst"

*/

let frase = "La vida es como andar en bicicleta, para mantener el equilibrio, debes seguir adelante";

//1
console.log(frase.indexOf('equilibrio'));
//2
console.log(frase.indexOf('bicicleta'));
//3
console.log(frase.indexOf('hola'));
//4
console.log(frase.split(' '));
//5
console.log(frase.toUpperCase());
//6
console.log(frase.replace('o','a'));
//console.log(frase.replaceAll('o', 'a'))
//7
console.log(frase + ' - Albert Einstein');

// ---------- METODOS DE ARRAYS
//cosas a saber de un array
let car1 = 'Mustang';
let car2 = 'Supra';
let car3 = 'Corvette';

let cars = ['Mustang', 'Supra', 'Corvette'];
console.log(cars[1]);

let array = [];
array[0] = 'Iphone'
array[1] = 'Samsung'
array[2] = 'Xiaomi'
console.log(array);

cars[1] = 'Toyota'
console.log(cars);

//<><><>---------------------<><><>

let frutas = ['Manzana', 'Banana', 'Pera', 'Aguacate', 'Kiwi']

//lenght (longitud de un array)
console.log(frutas.length);

//push (nos permite agregar un elemento al final del array)
frutas.push('Naranja')
console.log(frutas);

//pop (quitar un elemento al final del array)
frutas.pop()
console.log(frutas);

//unshift (agregar un elemento al Principio de array)
frutas.unshift('Naranja')
console.log(frutas);

//shift (eliminar un elemento del principio del array)
frutas.shift()
console.log(frutas);

//indexOf (encontrar la posición de un elemento)
console.log(frutas.indexOf('Pera'));

//splice (Eliminar un elemento del Array)
//console.log(frutas.splice(2,2));
//console.log(frutas.splice(posicion de inicio , cantidad de elementos a eliminar));
console.log(frutas);

//Slice (extraer una psrte del array)
console.log(frutas.slice(1,3));

//sort (ordernar un array en orden alfabetico)
console.log(frutas.sort());

//reverse (invertir orden de un array)
console.log(frutas.reverse());

//join (contertir array en string)
console.log(frutas.join(', '));

//filter (filtrar en un array)

let correos = [
    'juan@gmail.com',  //-----> me lo devuelve
    'carlos@hotmail.com', //-----> no me lo devuelve
    'raul@yahoo.com', //-----> no me lo devuelve
    'luis@gmail.com' //-----> me lo devuelve
]

let correos_gmail = correos.filter(
    function (correo) {
        return correo.includes('@gmail.com');
    }
)

console.log(correos_gmail);

//Filtrar solo los numeros pares
let numeros_array = [1,2,3,4,5,6,7,8,9];

const numerosPares = numeros_array.filter(function(num){
    return num % 2 === 0;
})

console.log(numerosPares);

/*
Ejercicios

dado el siguiente array de ciudades = ["Paris", "Marsella", "Lyon", "Toulose, "Niza"]

1) Agregar dos ciudades mas al final del array.
2) Encontrar la posicion de la ciudad "Niza".
3) Eliminar la ciudad de "Niza".
4) Agregar la ciudad de "Burdeos" al principio del array.
5) Encontrar la posicion de la ciudad "Burdeos".
6) Encontrar todas las ciudades que tengan la letra "M".
7) Encontrar todas las ciudades que contengan la letra "P" o "N".
8) Encontrar todas las ciudades que contengan mas de 6 letras.
9) Encontrar todas las ciudades que contengan menos de 6 letras.

*/
//-----------------------------------------------------------
let ciudades = ['Paris', 'Marsella', 'Lyon', 'Toulose', 'Niza']
//1
ciudades.push('Caracas', 'Bogota');
console.log(ciudades);
//2
console.log(ciudades.indexOf('Niza'));
//3
ciudades.splice(4,1);
console.log(ciudades);
//4
ciudades.unshift('Burdeos')
console.log(ciudades);
//5
console.log(ciudades.indexOf('Burdeos'));
//6
let ciudadesm = ciudades.filter( function (ciudad) {
    return ciudad.includes('M');
})
console.log(ciudadesm);
//7
let ciudadespm = ciudades.filter( function (ciudad) {
    return ciudad.includes('P') || ciudad.includes('N');
})
console.log(ciudadespm);
//8
let ciudades7 = ciudades.filter(function (ciudad) {
    return ciudad.length > 6;
})
console.log(ciudades7);
//9
let ciudades5 = ciudades.filter(function (ciudad) {
    return ciudad.length < 6;
})
console.log(ciudades5);
//----------------------------------------------------

//---------- OBJETOS Y METODOS (programación orientada a objetos)

let carro = {
    marca:'Ford',
    modelo:'Fiesta',
    año: 2020,
    color: 'Rojo',
    encender: function () {
        console.log('el carro está encendido');
    }
} 

console.log(carro);
carro.encender();

//objeto que representa un libro

const libro = {
    titulo:'La sombra del viento',
    autor: 'Alberto Diaz',
    genero: 'Novela',
    paginas: 600,
    disponible: true,
    prestar: function () {
        if(this.disponible){
            this.disponible = false;
            console.log('el libro ha sido prestado');
        }else{
            console.log('el libro ya esta prestado!');
        }
    },
    devolver: function () {
        if(!this.disponible){
            this.disponible = true;
            console.log('El libro ha sido devuelto');
        }else{
            console.log('el libro ya esta disponible, no puede ser devuelto');
        }
    }
}

console.log(libro);
libro.prestar();
libro.prestar();
libro.devolver();
libro.devolver();

const libros = {
    titulo:'La sombra del viento',
    autor: 'Alberto Diaz',
    genero: 'Novela',
    paginas: 600,
    disponible: 5,
    prestar: function () {
        if(this.disponible > 0){
            this.disponible -= 1;
            console.log('un libro ha sido prestado, quedan ' + this.disponible);
        }else{
            console.log('los libros ya estan prestados!');
        }
    },
    devolver: function () {
        if(this.disponible < 5){
            this.disponible += 1;
            console.log('Un libro ha sido devuelto, quedan ' + this.disponible);
        }else{
            console.log('todos los libros estan disponible, no puede ser devueltos');
        }
    }
}

libros.prestar();
libros.prestar();
libros.prestar();
libros.prestar();
libros.prestar();
libros.prestar();
libros.devolver();
libros.devolver();
libros.devolver();
libros.devolver();
libros.devolver();
libros.devolver();
libros.prestar();

//------------------------- Constructores

let juego1 = {
    plataforma:'xbox',
    nombre: 'Grand Theft Auto V',
    creador: 'Rockstar Games'
}
let juego2 = {
    plataforma:'ps4',
    nombre: 'fortnite',
    creador: 'Epic Games'
}

function Juegos(plataforma, nombre, creador) {
    this.plataforma = plataforma;
    this.nombre = nombre;
    this.creador = creador;

    this.mostrarInformacion = function () {
        console.log(this.nombre);
    }
}

let juego3 = new Juegos('PC', 'FIFA', 'EA')

console.log(juego3);
juego3.mostrarInformacion()
console.log(juego2);