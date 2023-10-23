//ejercicio 1

let numero = prompt('ingrese un numero');

if (numero % 2 === 0) {
    console.log(numero + " es par");
} else {
    console.log(numero + " es impar");
}


//ejercicio 2

let persona = {
    Nombre: prompt('ingresa tu nombre'),
    Apellido: prompt('ingresa tu apellido'),
    Edad: prompt('ingresa tu edad'),
    Cedula: prompt('ingresa tu cedula'),
    Nacionalidad: prompt('ingresa tu nacionalidad'),
    Profesion: prompt('ingresa tu profesión'),
    EstadoCivil: prompt('ingresa tu estado civil'),
    Hobbies: ['Leer', 'Caminar', 'Escuchar música']
};

if (persona.Profesion === 'Programador') {
    persona.LenguajeFavorito = 'JavaScript';
}

if (persona.EstadoCivil === 'Soltero') {
    console.log('usted se encuentra soltero');
}

persona.NombreCompleto = persona.Nombre + ' ' + persona.Apellido;

console.log(persona.NombreCompleto);
console.log(persona);


//ejercicio 3

let estudiante = {
    nombre:prompt('ingrese su nombre'),
    edad: parseInt(prompt('ingrese su edad')), 
    nota1: parseInt(prompt('ingrese su nota 1')),
    nota2: parseInt(prompt('ingrese su nota 2')), 
    nota3: parseInt(prompt('ingrese su nota 3')) 
}

estudiante.ResultadoFinal = ( estudiante.nota1 + estudiante.nota2 + estudiante.nota3 ) / 3

console.log(estudiante);

if(estudiante.ResultadoFinal === 20){
    console.log('FELICIDADES OBTUVISTE LA MÁXIMA CALIFICACIÓN (A+)');
}else if (estudiante.ResultadoFinal >= 18 && estudiante.ResultadoFinal <= 19){
    console.log('SU CALIFICACIÓN EN LETRAS ES A');
}else if (estudiante.ResultadoFinal >= 16 && estudiante.ResultadoFinal < 18){
    console.log('SU CALIFICACIÓN EN LETRAS ES B');
}else if (estudiante.ResultadoFinal >= 14 && estudiante.ResultadoFinal < 16){
    console.log('SU CALIFICACIÓN EN LETRAS ES C');
}else if (estudiante.ResultadoFinal >= 10 && estudiante.ResultadoFinal < 14){
    console.log('SU CALIFICACIÓN EN LETRAS ES D');
}else if (estudiante.ResultadoFinal < 10){
    console.log('SU CALIFICACIÓN EN LETRAS ES F');
}

if(estudiante.edad >= 18 && estudiante.ResultadoFinal >= 10){
    console.log('Aprobaste!');
}else{
    console.log('Estas desaprobado');
}