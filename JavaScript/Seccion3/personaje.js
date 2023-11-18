let y = 0;
let x = 0;
let crecer = 0;
let tamano = 80;
let personaje = document.getElementById('personaje');
console.log(personaje);
let objeto = document.getElementById('objeto');

function movimiento(letra){
    if(letra.key == 'd'){
        x += 50;
        personaje.style.left = x + 'px';
        personaje.src = 'personaje/p-right.png';
    }else if(letra.key == 'a'){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
    }else if(letra.key == 'w'){
        y -= 50
        personaje.style.top = y + 'px';
    }else if(letra.key == 's'){
        y += 50;
        personaje.style.top = y + 'px'; 
    }

    if(letra.key === 'o'){
        crecer++;
        if(crecer === 5){
            if(tamano < 330){
                tamano += 50
                personaje.style.width = tamano + 'px'
                crecer = 0
            }
        }
    }

    if(tamano == 80){
        if(x == 400 && y == 350 || x == 400 && y == 300){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
        }else if(y == 300 && x ==450){
            y -= 100;
            personaje.style.top = y + 'px';
        }else if(x == 500 && y ==350 || x == 500 && y == 300){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-right.png';
        }else if(y == 350 && x ==450){
            y += 50;
            personaje.style.top = y + 'px';
    }}else if(tamano == 130){
        if(x == 350 && y < 351 && y > 249){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
        }else if(y == 250 && x < 451 && x > 399){
            y -= 100;
            personaje.style.top = y + 'px';
        }else if(x == 500 && y < 351 && y > 249){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-right.png';
        }else if(y == 400 && x < 451 && x > 399){
            y += 50;
            personaje.style.top = y + 'ox';
    }}else if(tamano == 180){
        if(x == 300 && y < 301 && y > 199){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
        }else if(y == 200 && x < 501 && x > 349){
            y -= 50;
            personaje.style.top = y + 'px';
        }else if(x == 500 && y < 351 && y > 199){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-right.png';
        }else if(y == 350 && x < 451 && x > 349){
            y += 50;
            personaje.style.top = y + 'px';
    }}else if(tamano == 230){
        if(x == 300 && y < 351 && y > 299 || x == 250 && y < 251 && y > 199){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
        }else if(y == 150 && x < 501 && x > 299){
            y -= 50;
            personaje.style.top = y + 'px';
        }else if(x == 450 && y < 351 && y > 299 || x ==500 && y < 251 && y > 199){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-right.png';
        }else if(y == 350 && x < 451 && x > 349){
            y += 50;
            personaje.style.top = y + 'px';
    }}else if(tamano == 280){
        if(x == 250 && y < 351 && y > 299 || x == 250 && y == 100 || x == 200 && y < 251 && y > 149){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
        }else if(y == 100 && x < 451 && x > 299){
            y -= 50;
            personaje.style.top = y + 'px';
        }else if(x == 450 && y < 351 && y > 299 || x == 450 && y == 100 || x == 500 && y < 251 && y > 149  ){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-right.png';
        }else if(y == 350 && x < 451 && x > 299){
            y += 50;
            personaje.style.top = y + 'px';
    }}else if(tamano == 330){
        if(x == 200 && y < 351 && y > 249 || x == 150 && y == 200 || x == 200 && y < 151 && y > 49){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-left.png';
        }else if(y == 50 && x < 451 && x > 249){
            y -= 50;
            personaje.style.top = y + 'px';
        }else if(x == 450 && y < 351 && y > y > 249|| x ==500 && y < 201 && y > 99){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'personaje/p-right.png';
        }else if(y == 350 && x < 451 && x > 249){
            y += 50;
            personaje.style.top = y + 'px';
        }
}
}

window.onkeydown = movimiento