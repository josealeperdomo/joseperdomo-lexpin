/*------------ SECCION 3 JAVASCRIPT ----------*/

//--------------- Funcion anonima
/*
son funciones que no tienen un nombre definido o identificacion. en lugar de ser nombradas se definen directamente en e llugar donde se ecesitan.
Son utiles en vARIAS situaciones (funciones callbacks) o cuando se utilizan en una sola ocasion
*/

let suma = function (num1, num2) {
    return num1 + num2;
}
let resultado = suma(5,15);
console.log(resultado);

//------------ Funciones flecha

/*
son una caracteristica introducida en ECMASCRIPST6 (ES6) que proporcionan una forma mas concisa y limpia de definir funciones

sintaxis basica

let nombreFuncion = (parametros) => expresion;

*/

//1) funcion flecha sin parametros

let saludar = () => {console.log('hola desde una arrow function');}
saludar();

//2) funcion flecha con parametros

let duplicar = (num) => {
    return num * 2;
}

console.log(duplicar(7));

//3) funcion flecha con varios parametros

let resta = (num1,num2) =>{
    return num1 - num2; 
}

console.log(resta(10,7));

//4) funcion flecha con una sola expresion sin return explicito 
//(SOLO SI TIENE UNA SOLA EXPRESION PUEDE OMITIR LAS LLAVES Y EL RETURN)

let cuadrado = (num) => num * num;
console.log(cuadrado(5));

let division = (num1,num2) => num1 / num2;
console.log(division(5,2));

//5) funcion con argumento de otra función (callback)
/*
las funciones flecha sonutiles para pasar funciones con argumentos a otras funciones, como en el caso de 'map' 'filter' 'reduce'
*/
/* MAP */
/*  
Esta funcion se utiliza para transformar cada elemento de un array en un nuevo elemento y luego devuelve un nuevo array con estos valores de cada uno de los elementos transformados.
*/
let numeros = [0,1,2,3,4,5];
let cuadrados = numeros.map((numero)=> numero * numero)

console.log(cuadrados);

/* FILTER */

let numerosPares = numeros.filter((numero)=> numero % 2 === 0)
console.log(numerosPares);

/*--------------CALLBACK---------*/
/*
funcion que toma un array y una funcion callback, aplica el callback a cada elemnto del array
*/

function procesarArray(array,callback){
    let resultado = [];
    for(let i = 0; i < array.length; i++){
        resultado.push(callback(array[i]));
    }
    return resultado;
}

let nums = [1,2,3,4,5,6,7,8,9]
let duplicado = procesarArray(nums,function(numero){
    return numero * 2;
})
console.log(nums);
console.log(duplicado);

//6) Funciones flecha con objetos y metodos
//this no funciona en funciones flecha dentro de un metod mientras que en las funciones anonimas si


    let persona = {
        nombre: 'Jose',
        saludar: () => console.log(`Hola ${this.nombre}`)
    }

    let persona2 = {
        nombre: 'Eilemelech',
        saludar: function(){
            console.log(`Hola ${this.nombre}`);
        }
    }


persona.saludar(); //hola undefined
persona2.saludar(); // hola eimelech

/*---------DOM (DOCUMENT OBJECT MODEL)------------*/
//DOM?
/*
El DOM es la representacion del documento HTML en forma de arbol, el cual se puede manipular en JavaScript. Podemos usar el dom para interactuar con el contenido y la estructura de una pagina web
*/

//-----------Acceder a elementos del DOM
//podemos acceder a los elementos del dom utilizando metodos y propiedades de JavaScript. Por ejemplo nosotros vamos a poder acceder aun elemento por su id, etiqueta,clase

//acceder a traves del id
//getElementById

const titulo = document.getElementById('miTitulo');
console.log(titulo.textContent);

//----  ACCEDER A TRAVES DE CLASES
//getElementsByClassName

const parrafo = document.getElementsByClassName('miclase');
for(let i = 0; i < parrafo.length; i++){
    console.log(parrafo[i].textContent);
}

//----Acceder a traves de los nombres de etiquete (TaGnAme)
//getElementsByTagName

const tagnames = document.getElementsByTagName('a');
console.log(tagnames);


/*--------Propiedades----------*/
//=========INNER HTML  -------> podemos usar la prpiedad innerHtml para cambiar o acceder al contenido html internoo de un elemento

let elemento = document.getElementById('principal');
elemento.innerHTML = '<h2>Nuevo parrafo</h2>';
console.log(elemento);

//==========TEXT CONTENT ----->permite acceder al contenido de texto de un elemento pero tambien podemos cambiarlo

const seleccion = document.getElementsByTagName('h2');
seleccion[0].textContent = 'Esto es nuevo!!!';
console.log(seleccion[0]);

//------- Class list -------> permite agregar, eliminarr o cambiar la clases de css en un elemento

//-------agregar
seleccion[0].classList.add('nueva');
//-------eliminar
seleccion[0].classList.remove('nueva');
//-------TOGGLE --------> SWITCH (INTERRUPTOR)
seleccion[0].classList.toggle('toggle');
seleccion[0].classList.toggle('toggle');
seleccion[0].classList.toggle('toggle');

//----------- class name
seleccion[0].className = 'size';

//------podemos agregar varias clases
seleccion[0].className = 'toggle size';

//quitar una clase y remplazar
seleccion[0].className = seleccion[0].className.replace('toggle','mode');

function modo() {
    elemento.classList.toggle('modo');
}

/*-------style-------*/
//podemos acceder a la propiedad style de un elemento para cambiar estilos css directamente

seleccion[0].style.backgroundColor = 'red';
//seleccion[0].style.fontSize = '10px';

//------- create element // append child

const nuevoElemento = document.createElement('p'); //<p></p>
nuevoElemento.textContent = 'Hola desde js'//<p>hola desde js</p>

elemento.appendChild(nuevoElemento)//<main><p>hola desde js</p></main>

//--------------- remove child

//----> children = permite ver los hijos de un elemento padre

let elementoEleminar = elemento.children[0];
elemento.removeChild(elementoEleminar)

//console.log(elementoEleminar);

//------------ EVENTOS

const lista = document.getElementById('miLista')
const botonAgregar = document.getElementById('agregarElemento')
const botonEliminar = document.getElementById('eliminarElemento')

botonAgregar.addEventListener('click',function(){
    let nuevoElemento = document.createElement('li')
    nuevoElemento.textContent = 'Elemento nuevo'
    lista.appendChild(nuevoElemento)
    //console.log('Le diste click');
})

botonEliminar.addEventListener('click',function(){
    const primerElemento = lista.firstElementChild
    if(primerElemento){
        lista.removeChild(primerElemento)
    }else{
        alert('no hay mas elementos hdp')
    }
})

//---------------------------------

const miInput = document.getElementById('miInput')
const miClave = document.getElementById('miClave')

miInput.addEventListener('keydown', function(key){
    if(key.key == 'Enter'){
        alert(`Hola, ${miInput.value}. Enviaste los datos correctamente`)
    }
    //console.log(miInput.value)
    //console.log(key.key);
})

// ----> No usar en login y register (simplemente ejemplo) los archivos html, css y js son visibles al publico

miClave.addEventListener('keydown', function(key){
    if(key.key == 'Enter'){
        if(miClave.value === '123'){
            //alert('Correcta')
            //window.location.href = 'inicio.html'
            //window.open('https://www.google.com','width-800', 'height-600')
            //window.location.reload()
            //history.back()
            //history.forward()
        }else{
            alert('Incorrecta')
        }
    }
    //console.log(miInput.value)
    //console.log(key.key);
})

//----------------

const miImagen = document.getElementById('miImagen');
const cambiarImagen = document.getElementById('cambiarImagen');

miImagen.src = 'https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg';

cambiarImagen.addEventListener('click', function() {
    let url = 'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000';
    let url2 = 'https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg';

    if(miImagen.src === url){
        miImagen.src = url2;
    }else{
        miImagen.src = url;
    }
})

console.log(miImagen.src);

