 // Función para enviar el correo electrónico
 function sendEmail() {
    // Capturar datos del formulario
    var form = document.getElementById('opinionForm');

    // Enviar el correo electrónico
    emailjs.sendForm("service_brwtbfg", "template_zag94eo", form)
        .then(function(response) {
            alert("Mensaje enviado.");
            // Puedes agregar aquí cualquier lógica adicional después de enviar el correo
        }, function(error) {
            alert("Error, no se pudo enviar el mensaje");
            // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje al usuario
        });

    // Evitar que el formulario se envíe de forma predeterminada
    return false;
}





// Agregar un event listener para el envío del formulario
document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío de formulario predeterminado
    sendEmail(); // Llamar a la función para enviar el correo electrónico
});


let imagenes = [
    {
        "url": "https://Trexpapu.github.io/photos/web_chat/1.PNG",
        "descripcion": "Chat web desarrollado con Node.js, Express.js, Socket.io"

    },
    {
        "url": "https://Trexpapu.github.io/photos/web_chat/2.PNG",
        "descripcion": "Chat web desarrollado con Node.js, Express.js, Socket.io"

    },
    {
        "url": "https://Trexpapu.github.io/photos/Pywhats/1.PNG",
        "descripcion": "Envío de mensajes automático desarrollado con python, tkinter y sqlite"

    },
    {
        "url": "https://Trexpapu.github.io/photos/Pygame/1.png",
        "descripcion": "Videojuego desarrollado con pygame"

    },
    {
        "url": "https://Trexpapu.github.io/photos/Pygame/2.png",
        "descripcion": "Videojuego desarrollado con pygame"

    },
    {
        "url": "https://Trexpapu.github.io/photos/Pygame/3.png",
        "descripcion": "Videojuego desarrollado con pygame"

    },
    {
        "url": "https://Trexpapu.github.io/photos/Juego_unity/1.PNG",
        "descripcion": "Videojuego desarrollado con unity"

    },
    {
        "url": "https://Trexpapu.github.io/photos/Juego_unity/2.PNG",
        "descripcion": "Videojuego desarrollado con unity"

    },
    {
        "url": "https://Trexpapu.github.io/photos/chatbot/1.JPG",
        "descripcion": "Chatbot desarrollado con DjangoRestFramework y HTML, CSS y JavaScript"

    },
    {
        "url": "https://Trexpapu.github.io/photos/chatbot/2.JPG",
        "descripcion": "Chatbot desarrollado con DjangoRestFramework yy HTML, CSS"

    },
    
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let texto = document.getElementById('descripcion')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="Foto" loading="lazy"></img>`
    texto.innerHTML = `
    
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="Foto" loading="lazy"></img>`
    texto.innerHTML = `
    
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}


function ShowNavBar() {
    var nav = document.getElementById("navbar");
    if(nav.classList.contains("notShowNavBar")){
        nav.classList.remove("notShowNavBar");
        nav.classList.add("showNavBar");
    }else{
        nav.classList.remove("showNavBar");
        nav.classList.add("notShowNavBar");
    }
    
}

onload = function(){
    var nav = document.getElementById("navbar");
    nav.classList.add("notShowNavBar");
}

let menu = document.getElementById("menu");
menu.addEventListener('click', function(){
    ShowNavBar()
});