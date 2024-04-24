function changeLanguage() {
  let home = document.getElementById('home');
  let us = document.getElementById('us');
  let contact = document.getElementById('contact');
  let rent = document.getElementById('rent');
  let title = document.getElementById('title');
  let description = document.getElementById('description');
  let features = document.getElementById('features');
  let easy = document.getElementById('easy')
  let require = document.getElementById('require');
  let license = document.getElementById('license');
  let address = document.getElementById('address');
  let pay = document.getElementById('pay');
  let confirmation = document.getElementById('confirmation');
  let offer = document.getElementById('offer');
  // let cta = document.getElementById('cta');
  let languageButton = document.getElementById('languageButton');
  let flag = document.getElementById('flag');
  let titlesform = document.getElementById('titlesform');
  let subtitleform = document.getElementById('subtitleform');

  
  if (languageButton.dataset.language === 'en') {
    languageButton.dataset.language = 'es';
    home.innerHTML = '<i class="fa fa-home"></i> Inicio';
    us.innerHTML = '<i class="fa fa-users"></i> Nosotros';
    contact.innerHTML = '<i class="fa fa-envelope"></i> Contacto';
    rent.innerHTML = '<i class="fa fa-moped"></i> Rentar Ya!';
    title.innerHTML = '<h1 id="title" class="title">Renta de scooters y atvs <br> en <strong>Tulum</strong> - México </h1>';
    description.textContent = '¡Experimenta una forma divertida y eficiente de desplazarte por la ciudad! Nuestros scooters están disponibles para alquiler por horas o días, y te brindan la flexibilidad de explorar a tu propio ritmo.';
    features.textContent = 'Con nuestros scooters de alta calidad, podrás disfrutar de un paseo suave y cómodo. Además, son ecológicos y no emiten gases contaminantes, lo que contribuye a cuidar el medio ambiente.';
    offer.textContent = 'Ya sea que necesites un scooter para un paseo turístico, para desplazarte al trabajo o simplemente para divertirte, ¡nosotros tenemos la solución perfecta para ti!';
    easy.textContent = 'Rentar un scooter nunca fue tan facil';
    require.textContent = 'Solo 3 requisitos para rentar tu scooter:'
    license.textContent = 'Foto de una licencia de conductor vigente';
    address.textContent = 'Dirección y nombre del hotel donde se hospeda';
    pay.textContent = 'Depósito';
    confirmation.innerHTML = '<p id="confirmation">Después de la confirmación de la reserva, podrá recoger el scooter usted mismo en nuestra sucursal en <strong>Selina</strong> o <strong>Aldea Zama</strong> (Tulum). O podemos entregar el scooter en la ubicación deseada <strong>sin cargo</strong>.</p>';
    titlesform.textContent = 'Rentar Ya!';
    subtitleform.textContent = 'Rentar Ya!'
   
    flag.src = 'images/eeuuflag.jpg';
  } else {
    languageButton.dataset.language = 'en';
    home.innerHTML = '<i class="fa fa-home"></i> Home';
    us.innerHTML = '<i class="fa fa-users"></i> About Us';
    contact.innerHTML = '<i class="fa fa-envelope"></i> Contact';
    rent.innerHTML = '<i class="fa fa-moped"></i> Rent Now!';
    title.innerHTML = '<h1 id="title" class="title">Rental of scooters and atvs <br> in <strong>Tulum</strong> - México </h1>';
    description.textContent = 'Experience a fun and efficient way to get around the city! Our scooters are available for rent by the hour or day, giving you the flexibility to explore at your own pace.';
    features.textContent = 'With our high-quality scooters, you can enjoy a smooth and comfortable ride. Plus, they are eco-friendly and emit no polluting gases, helping to take care of the environment.';
    offer.textContent = 'Whether you need a scooter for a sightseeing tour, commuting to work, or just for fun, we have the perfect solution for you!';
    easy.textContent = 'Renting a scooter has never been so easy';
    require.textContent = 'We require only 3 things from you to rent a scooter:'
    license.textContent = "Photo of a driver's license";
    address.textContent = 'Address and the name of your hotel';
    pay.textContent = 'Deposit';
    confirmation.textContent = "After booking confirmation you will be able to pick up the scooter by yourself at our branch in Playa Del Carmen, Tulum, Cancun. Or we can deliver the scooter to your desired location.";
    
    flag.src = 'images/mexflag.jpg';
    titlesform.textContent = 'Rent now!';
    subtitleform.textContent = 'Rent now!';

  }
}

// SLIDER

function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
    let autoplayInterval; // Variable para almacenar el intervalo de autoplay
    const autoplayDelay = 3000; // Intervalo de cambio automático en milisegundos (3 segundos en este ejemplo)

    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    const nextSlide = function () {
        currentSlide++;
        if (carouselSlides.length <= currentSlide) {
            currentSlide = 0;
        }
        changeSlide(currentSlide);
        activeDot(currentSlide);
    };

    const prevSlide = function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = carouselSlides.length - 1;
        }
        changeSlide(currentSlide);
        activeDot(currentSlide);
    };

    btnNext.addEventListener('click', function () {
        nextSlide();
        clearInterval(autoplayInterval); // Detiene el autoplay cuando el usuario hace clic en "Siguiente"
    });

    btnPrev.addEventListener('click', function () {
        prevSlide();
        clearInterval(autoplayInterval); // Detiene el autoplay cuando el usuario hace clic en "Anterior"
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
            clearInterval(autoplayInterval); // Detiene el autoplay cuando el usuario hace clic en un punto
        }
    });

    // Función para iniciar el autoplay
    const startAutoplay = function () {
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
    };

    // Iniciar el autoplay al cargar la página
    startAutoplay();

    // Detener el autoplay cuando el cursor entra en el área del slider
    carouselSlides.forEach(slide => {
        slide.addEventListener('mouseenter', function () {
            clearInterval(autoplayInterval);
        });
    });

    // Reanudar el autoplay cuando el cursor sale del área del slider
    carouselSlides.forEach(slide => {
        slide.addEventListener('mouseleave', function () {
            startAutoplay();
        });
    });
}

Slider();

// GALLERY

function openPopup(imageSrc) {
  let popup = document.getElementById("popup");
  let popupImg = document.getElementById("popup-img");

  popupImg.src = imageSrc;
  popup.style.display = "block";
  currentImageIndex = imageSrc.indexOf(imageSrc);
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

// FORMULARIO
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, textarea');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s-Z0-9]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^([0-9]){1,20}$/, // Solo números
	mensaje: /^[a-zA-ZÀ-ÿ\d\S\s]{1,120}$/
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	mensaje: false,
  fecha: false
}

const grupoIncorrectoFecha = () => {
  document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-incorrecto');
  document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-correcto');
  document.querySelector(`#grupo__fecha i`).classList.add('fa-times-circle');
  document.querySelector(`#grupo__fecha i`).classList.remove('fa-check-circle');
  document.querySelector(`#grupo__fecha .formulario__input-error`).classList.add('formulario__input-error-activo');
  campos.fecha = false;
};

const validarFecha = (fecha) => {
  const fechita = fecha.value
  let fechaIngresada = new Date(`${fechita}T00:00:00`);
  let fechaActual = new Date();
 
  // Verificar si el valor ingresado no es una fecha válida o Verificar si la fecha ingresada es anterior a la fecha actual
  if (isNaN(fechaIngresada.getTime()) || (fechaIngresada < fechaActual) ) {
    grupoIncorrectoFecha();
    return false;
  };
 
  // Verificar si el mes de febrero tiene 29 días en caso de ser año bisiesto
  let año = fechaIngresada.getFullYear();
  if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    if (fechaIngresada.getMonth() === 1 && fechaIngresada.getDate() !== 29) {
      campos.fecha = false;
      return false;
    };
  };
   
  // Si pasa todas las validaciones, la fecha es válida
  document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-incorrecto');
  document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-correcto');
  document.getElementById(`grupo__fecha`).classList.remove('formulario__grupo-incorrectoo');
  document.getElementById(`grupo__fecha`).classList.add('formulario__grupo-correctoo');
  document.querySelector(`#grupo__fecha i`).classList.add('fa-check-circle');
  document.querySelector(`#grupo__fecha i`).classList.remove('fa-times-circle');
  document.querySelector(`#grupo__fecha .formulario__input-error`).classList.remove('formulario__input-error-activo');
  campos.fecha = true;
  return true;
};

const validarFormulario = (e) => {
	  
  switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
        break;
    case "fecha":
          validarFecha(e.target, 'fecha');
    break;
  };
  
};

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
   	document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrectoo');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correctoo');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
	  console.log(campos.fecha)
    campos[campo] = true;
  } else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
  }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.correo && campos.telefono && campos.mensaje && campos.fecha){
		
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

    formulario.submit();
    formulario.reset();

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);
		
	}
});
 
  // APENAS BAJA EL SCROLL PONE BACKGROUND AL MENU

window.addEventListener("scroll", function(){
  const header = document.getElementById('headerdown');
  header.classList.toggle("abajo", window.scrollY > 0);
});

//CODIGO PARA SCROLL SMOOTH CON MOVIMIENTO

$(document).ready(function(){
  $("a").on('click', function(event) {
  if (this.hash !== "") {
    
  event.preventDefault();
     
      let hash = this.hash;
       
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// MENU RESPONSIVE

const buttonMenu = document.getElementById('menu_responsive');
  buttonMenu.addEventListener('click', function(){
  const menuResponsive = document.getElementById('menu');
  menuResponsive.classList.toggle('menu_responsive');
})

/* CLICK EN MENU RESPONSIVE Y DESAPARECE */

  const funcionremove = function(){
  const nav = document.querySelector(".nav-links");
  nav.classList.remove("menu_responsive"); // Toggle Nav
};

  const aLink1 = document.querySelector(".link1");

  aLink1.addEventListener("click", () => {
    funcionremove();
  });

  const aLink2 = document.querySelector(".link2");

  aLink2.addEventListener("click", () => {
    funcionremove();
  });

  const aLink3 = document.querySelector(".link3");
  aLink3.addEventListener("click", () => {
    funcionremove();
  });

  const aLink4 = document.querySelector(".link4");
  aLink4.addEventListener("click", () => {
    funcionremove();
   
  });
