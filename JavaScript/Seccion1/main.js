//console.log('chao mundo');
//comentariooooo
/*holaaaaaaaaAaAAaAaAaaa*/

/* Sección 1 */
//variables: un espacio en memoria en javascript hay3 tipos

//variable global
var VariableGlobal = 'Hola'; //es una variable que se puede acceder desde cualquier parte del código

//variable local
let VariableLocal = 'que rollo'; //Es una variable que solo se puede acceder desde la funcion o bloque de código

// variable constante
const constante = 'plebe';
const PI = 3.1416;

console.log(VariableGlobal);
console.log(VariableLocal);
console.log(constante);
console.log(PI);

console.log(VariableGlobal + ', ' + VariableLocal + ', ' + constante + ' ' + PI + ' relleno');

// Tipos de datos

// String (Cadena de texto 'hola soy un texto' "hola soy un texto")
let nombre = 'jose';

//number (numero entero por ej: 10 20 40 80)
let edad = 20;

//float (numero decimal por ej: 3.1416)
let altura = 2.1;

// boolean (boleano o en este caso tmb (truw or false) verdadero o falso
let mayordeedad = false; //true / false

//null (tipo de dato nulo null)
let nada = null;

//underfined (tipo de dato indefinido)
let indefinido = undefined;

// array (lista, o arreglo)
let comprar = ['manzana', 'pera', 'sandia'];
//las posiciones de los elemntos de un array parten de 0
console.log(comprar);
console.log(comprar[0,1]);

//objeto ( { nombre:'jose', 'apellido':'perdomo' } )
let persona = {nombre:'Jose', apellido:'Perdomo', materias: ['lengua', 'matematicas']};
console.log(persona.apellido);
persona.edad = 20;
console.log(persona)

//---------reasignar variable
console.log(altura);
altura = 1.9;
console.log(altura);
console.log(PI);
/*PI = 0;
console.log(PI);*/

//operadores aritmeticos
/*
+ suma
- resta
* multiplicacion
/ division
% modulo de una division > resto de una división
++ incremento
-- decremento
*/

let ejercicio1 = (10 + 10) * 5 / (5 - 3);
let ejercicio2 = 3 + '3' / 2;
let prueba = 3 + '3';
//ejercicio1 --;
console.log(ejercicio1);
console.log(ejercicio2);
console.log(prueba);

//----------- Operadores de comparación

/*

== igual que ----> 2 == 2
=== igual valor igual tipo -----> '2' === 2 > no es exactamente igual por el tipo de dato
!= no igual ------> 2 != 3 > verdadero
!== valor no igual o tipo non igual ----> '2' !== 2 > verdadero
> mayor que
< menor que 
>= mayor o igual ---> 18 >= 18
<= menor o igual ---> 17 <= 17
? operador ternario

*/

console.log(1 == 1);
console.log(1 == '1');
console.log(23 === '23');
console.log(5 != 12);
console.log(1 !== '1');
console.log(63 > 62);
console.log(5 < 6);
console.log(18 >= 18);
console.log((2 * 5) <= 17);
console.log((2 - 5) === '-3');
console.log((5-2) != 3);

//--------- operdadores de asignación

/*

= asignación
+= incremento
-= decremento
*= multiplicacion
/= division
%= modulo

*/

let numero = 10;
numero+= 5;//numero = numero + 5;
numero-= 5; //numero = numero - 5;
numero*= 5; //numero = numero * 5;
numero/= 5; //numero = numero / 5;
numero%= 2; //numero = numero % 2
console.log(numero);
numero = 10;
console.log(numero);
numero+= (numero / 2) + 5
numero-= 20
console.log(numero);

//----------------- operadores logicos
/* 

&& and ---> TODAS las condiciones deben ser true --> 2 == 2 && 3 == 3
|| (or) ----. al menos una condicion debe ser verdaderas --> 2 == 2 || 3 == 2 
! not --> negacion

*/

probon = (2 == 2 && 3 == 3);
console.log(probon);
console.log(true && true);
console.log(true && false);
console.log(false && false);


console.log(false || (4==4));
console.log(false || false);
console.log(false || true);

console.log(!false);
console.log(!true);
console.log(!0);
console.log(!1);
console.log(!(4 == 5));

let ejercicio3 = (5 === 5) || (!true);
let ejercicio4 = (!0) || (5 < 0)
let ejercicio5 = (3 > 4) && (!0)
console.log(ejercicio5);

//------- condicionales
// son estructuras de control que nos permiten evaluar si una expreción es verdadera o falsa y ejecutas un codigo en base al resultado de esa evaluación IF, ELSE, ELSE IF

if(5 != 5 || 3 == 3){
    console.log('ESTO ES VERDADERO, HOLA DESDE UN IF');
}else if(false){
    console.log('hola perrillo');
}else if(true){
    console.log('7w7');
}else{
    console.log('soy falso prro');
}

if(false){
    console.log('if 2');
}

if(false){
    console.log('puedes entrar');
}else{
    console.log('no podes entrar');
}

let dato = parseInt(prompt('Ingresa un numero')); //dato = '1'
//let transform = parseInt(dato);  //transform = ('1') ---> 1
if(dato === 1){
    console.log('es uno');
}else{
    console.log('no es uno');
}
console.log(dato);

//OPERADOR TERNIARIO
// condición ? (valor verdedadero) : (valor falso

let valor = 3 > 4 ? 'si' : 'no';
console.log(valor);