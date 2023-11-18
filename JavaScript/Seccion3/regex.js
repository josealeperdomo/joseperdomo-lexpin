/*
QUE SON LAS EXPRESIONES REGULARES?
    las expresiones regulares (tambien conocida como regexp o regex) son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto con metodos de javascriot como .match(), .replace()  etc...

    se utilizan en muxchos lenguajes de programacion , incluyendo JavaScript, para verificar si una cadena de texto cumple con un determinado patron determinado. 

    las expresiones regulares esran rscritas entre barras / y pueden incluir una combinacion de caracteres literales y caracteres especiales que representan un conjunto de caracteres posibles.

    por ehenoki, la expresion regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un numero de celular en formato 111-111-11-11

    Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
    de un párrafo etc...

Sintaxis:
    • const regexp = /".e.t."/i; 
    //i = (no le importa si es mayuscula o minuscula)

Coincidencias Basicas
        .       - Cualquier Caracter, excepto nueva linea
        \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
        \d      - Cualquier Digitos (0-9)
        \D      - No es un Digito (0-9)
        \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
        \W      - No es un Caracter de Palabra.
        \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
        \S      - No es un Espacio, Tab o nueva linea.

        Limites
        \b      - Limite de Palabra
        \B      - No es un Limite de Palabra
        ^       - Inicio de una cadena de texto
        $       - Final de una cadena de texto

        Cuantificadores:
        *       - Coincide con 0 o más ocurrencias del patrón anterior.
        +       - Coincide con 1 o más ocurrencias del patrón anterior.
        ?     -  - Coincide con 0 o 1 ocurrencia del patrón anterior.
        {3}     - Numero Exacto
        {3,4}   - Rango de Numeros (Minimo, Maximo)

        Conjuntos de Caracteres
        []      - Caracteres dentro de los brackets
        [^ ]    - Caracteres que NO ESTAN dentro de los brackets

        Grupos
        ( )     - Grupo
        |       - Uno u otro


	.match(regex) (buscar)
	.test (true o false)


    probar en: http://regexr.com/77g8v
*/

/*

i = (no le importa si es mayuscula o minuscula)
g = (global) busca todas las coincidencias del text0 (de la expresión)

*/

let textoPrueba = 'Elimelech Elimelech peerro'
let regex = /elimelech/gi;
console.log(textoPrueba.match(regex));

//deteccion de patron numerico

let numero = '386 001 99 22, 552 454 85 74'
let regex2 = /\d\d\d \d\d\d \d\d \d\d/g ///\d{3} \d{3} \d{2} \d{2}/
console.log(numero.match(regex2));

// deteccion de patron numerico especifico

let regex3 = /\d{3}\s\d{3}\s\d{2}\s\d{2}/g; //\s = espacio
console.log(numero.match(regex3));

//deteccion de patron numerico especifico con guion

let numero2 = '386-554-54-55';
let regex4 = /\d{3}\-\d{3}\-\d{2}\-\d{2}/g;
console.log(numero2.match(regex4));

//deteccion de un correo electronico

let correo = 'elimelech45@gmail.com';
let regex5 = /\w+\@\w{1,7}\.com/gi;
console.log(correo.match(regex5));

//ejemplo con una cadena de texto

let texto = 'Cristiano Ronaldo cr7 y Lionel Messi m10 son los mejores jugadores del mundo';
let regex6 = /\w{1,2}\d{1,2}/gi;
console.log(texto.match(regex6));

// verificr si la exprecion encuentra gmail en el texto

let regex7 = /gmail/g;
console.log(correo.match(regex7)); 

// validacion de fechas con este formato ----> MM/DD//YYYY

let fecha = '09/31/2023';
let regex8 = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|(3[01]))\/(19|20)\d{2}$/gi;
console.log(fecha.match(regex8));

if(fecha.match(regex8)){
    console.log('Su fecha es valida :D');
}else{
    console.log('Lo siento, su fecha no es valida D:');
}

// validacion de una URL

let url = 'https://developer.mozilla.org/es/docs/Web/JavaScript'

let regex9 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/g

console.log(url.match(regex9));

//----------- > TEST

console.log(regex8.test(fecha));

//---------- > eval()

let resultado = eval('6 + 7 - 2')
console.log(resultado);