const elements = document.getElementsByClassName("typewrite");
const loadingScreen = document.getElementById("loadingScreen");
const body = document.querySelector("body");

/* navbar */
const homeNav = document.querySelector("#homeNav");
const aboutNav = document.querySelector("#aboutNav");
const contactNav = document.querySelector("#contactNav");
const projectsNav = document.querySelector("#projectsNav");

/*About Section */
const aboutSeb = document.querySelector("#aboutSeb");
const aboutSeb2 = document.querySelector("#aboutSeb2");

const titleweb = document.querySelector("#titleweb");
const staticTitle = document.querySelector("#staticTitle");
const staticText = document.querySelector("#staticText");

const galleryTitle = document.querySelector("#galleryTitle");
const galleryText = document.querySelector("#galleryText");

const shopTitle = document.querySelector("#shopTitle");
const shopText = document.querySelector("#shopText");

const abouttitleweb = document.querySelector("#abouttitleweb");

const detailTitle = document.querySelector("#detailTitle");
const detailText = document.querySelector("#detailText");

const priceTitle = document.querySelector("#priceTitle");
const priceText = document.querySelector("#priceText");

const effectivenessTitle = document.querySelector("#effectivenessTitle");
const effectivenessText = document.querySelector("#effectivenessText");

const timeTitle = document.querySelector("#timeTitle");
const timeText = document.querySelector("#timeText");

const paso1 = document.querySelector("#paso1");
const paso2 = document.querySelector("#paso2");
const paso3 = document.querySelector("#paso3");
const paso4 = document.querySelector("#paso4");

const projectsTitle = document.querySelector("#projectsTitle");
const projectssubTitle = document.querySelector("#projectssubTitle");
const projectsText = document.querySelector("#projectsText");

const contactTitle = document.querySelector("#contactTitle");
const labelHelp = document.querySelector("#labelHelp");
const textAreaText = document.querySelector("#textAreaText");
const formBtn = document.querySelector("#formBtn");

function changeLang() {
  loadingScreen.style.visibility = "visible";
  let lang = localStorage.getItem("language_seb");

  let typewriter = document.getElementById("typewrite");
  let loaderTitle = document.getElementById("loading");

  if (lang == null) {
    localStorage.setItem("language_seb", "en");
    lang = "en";
  }

  if (lang == "es") {
    loaderTitle.innerText = "Cargando";
    typewriter.setAttribute(
      "data-type",
      '[ "Hola soy Sebastian. ","Soy un estudiante. ","Soy un desarrollador. ", "Estoy interesado en trabajar con usted. " ]'
    );
    homeNav.innerText = "Inicio";
    aboutNav.innerText = "Sobre";
    contactNav.innerText = "Contacto";
    projectsNav.innerText = "Proyectos";

    aboutSeb.innerText =
      "Hola, mi nombre es Sebasti??n y soy un desarrollador web junior. Actualmente busco una oportunidad para comenzar mi carrera en desarrollo. En el futuro, me encantar??a enfocarme en aplicaciones m??viles y dise??o de UI / UX.";
    aboutSeb2.innerText =
      "Tambi??n trabajo como free lancer para cualquier tipo de website que tengas en mente";

    titleweb.innerHTML =
      "??Cu??l es el sitio  de <span class='dreamtitle'> tus sue??os? </span>";

    staticTitle.innerText = "Sitio Web Est??tico";
    staticText.innerText =
      "Si necesita algo m??nimo y simple que muestre todos sus informaci??n a sus usuarios de una manera asombrosa. Simple no malo, puedo hacer el mejor sitio para ti incluso con menos herramientas.";

    galleryTitle.innerText = "Galer??a";
    galleryText.innerText =
      "Si eres un artista, es posible que necesites un sitio web para mostrar todas tus excelentes obras de arte de la manera m??s creativa posible.";

    shopTitle.innerText = "Tienda en L??nea";
    shopText.innerText =
      "Si ocupas vender productos 24/7 y que tus clientes tengan la mejor experiencia en el sitio con los mejores ,m??todos de pago";
    abouttitleweb.innerHTML =
      "??Por qu?? elegir <span class='dreamtitle'>Seb Rodriguez? </span>";
    detailText.innerText =
      "Creo firmemente que los peque??os detalles llamar??n la atenci??n del usuario que navega por la p??gina. Cada detalle del sitio web cuenta y por eso tiene que ser perfecto para ti.";
    priceTitle.innerText = "Precio";
    detailTitle.innerText = "Detalles";
    priceText.innerText =
      "Mi  objetivo es hacer lo mejor posible y que seas feliz. Un precio justo en el que ambos podamos estar de acuerdo es un elemento importante para establecer nuestros objetivos en forma clara.";

    effectivenessTitle.innerText = "Efectividad";
    effectivenessText.innerText =
      "Con los recursos y el tiempo, es mi compromiso dar el 110% en cada proyecto que acepto. Lo mejor siempre es garant??a.";

    timeTitle.innerText = "Tiempo";
    timeText.innerText =
      "Todo lleva su tiempo, sin embargo, har?? todo lo posible para ofrecer el mejor producto posible en el menor tiempo posible, para que puedas tener tu sitio web y comenzar a recibir clientes";

    paso1.innerText = "Definimos el problema con el que te afrontas. ";
    paso2.innerText = "Planeamos la soluci??n juntos";
    paso3.innerText = "Construimos tu sitio web de ensue??o";
    paso4.innerText = "Disfrutas de tu sitio web";

    projectsText.innerHTML =
      "Este proyecto fue parte de un curso universitario. Con dos de mis compa??eros, creamos una aplicaci??n en 10 semanas en Angular. <br /> El objetivo principal del juego es construir tantas pizzas como sea posible sin desperdiciar ning??n ingrediente y tener ganancias. Todas las pizzas se componen de 4 ingredientes, que se reparten equitativamente entre los compa??eros de equipo (independientemente del n??mero) una vez que se saca una pizza de la cola. <br /> Puedes preparar los ingredientes haciendo clic tres veces en ??l y luego puede mezclarlos para construir la pizza. Los resultados de cada divisi??n (en los equipos) se muestran una vez que la ronda termina en gr??ficos.";
    solasystemText.innerText =
      "Actualmente soy parte de un equipo que est?? desarrollando el sitio web para Solasystem, el cu??l ense??a varios proyectos (una nueva criptomoneda) y noticias sobre Solana y sus proyectos. Mi enfoque principal fue el front-end, hecho con Chakra UI.";

    contactTitle.innerText = "Formulario de Contacto";
    labelHelp.innerText = "??En qu?? necesitas ayuda?";
    textAreaText.setAttribute(
      "placeholder",
      "Por favor escribe cualquier detalle que crea importante."
    );
    formBtn.innerText = "Env??ar";
  } else {
    loaderTitle.innerText = "Loading";

    typewriter.setAttribute(
      "data-type",
      '[ "Hi I am Sebastian. ", "I am a student. ", "I am a developer. ", "I am interested in working with you. " ]'
    );
    homeNav.innerText = "Home";
    aboutNav.innerText = "About";
    contactNav.innerText = "Contact";
    projectsNav.innerText = "Projects";
    aboutSeb.innerText =
      "Hi, my name is Sebastian and I am a bilingual junior web developer. Currently looking for an opportunity to start my career in development. In the future, I'd love to focus on mobile apps and UI/UX design.";

    aboutSeb2.innerText =
      "I also do free lance for any kind of website you have in mind,let's talk about it.";

    titleweb.innerHTML =
      "What is<span class='dreamtitle'> your dream</span> website?";

    staticTitle.innerText = "Static Website";
    staticText.innerText =
      "If you need something minimal and simple that displays all your information to your users in an awesome way. Simple does not mean bad, I can make the best site for you even with lesser tools.";
    galleryTitle.innerText = "Gallery";
    galleryText.innerText =
      "If you are an artist, you might need a website to display all of your excellent pieces of art in the most creative way possible";
    shopTitle.innerText = "Online Shop";
    shopText.innerText =
      "If you need to sell products 24/7 and for your clients to have the best experience with the best payment methods.";
    abouttitleweb.innerHTML =
      "Why choose <span class='dreamtitle'>Seb Rodriguez? </span>";
    detailText.innerText =
      "I am a firm believer that small details will catch the attention of the user browsing the page. Every single detail in the website counts and that's why it has to be perfect for you.";
    detailTitle.innerText = "Details";
    priceTitle.innerText = "Price";
    priceText.innerText =
      "My main goal is to do the best job and for you to be happy. A fair price that we can both agree to is an important element to set our goals straight.";
    effectivenessTitle.innerText = "Effectiveness";
    effectivenessText.innerText =
      "Given the resources and the time, it's a compromise to give my 110% to every single project I accept. The best is always a guarantee.";
    timeTitle.innerText = "Time";
    timeText.innerText =
      "Everything takes time, however I will try my best to give the best product possible as quick as possible so you can start owning your website and start receiving customers.";
    paso1.innerText = "Define the problem that you are currently facing";
    paso2.innerText = "Plan the solution together";
    paso3.innerText = "Build your dream website";
    paso4.innerText = "You enjoy the results";

    projectsText.innerHTML =
      "This project was part of a college course. With two of my classmates we built an app within 10 weeks with little to no guide in Angular. <br /> The main goal of the game is to build as many pizzas as possible without wasting any ingredients and having earnings. All pizzas are made up of 4 ingredients, which are split up evenly between the teammates (regardless of the number) once a pizza is taken out of the queue.<br /> You can prepare the ingredients by clicling thrice on it and then you can mix themup to build the pizza.The results of each split (in the teams) are shown once the round ends in graphs.";
    solasystemText.innerText =
      "I am currently part of a team that is developing the website for Solasystem, which shows various projects (a new cryptocurrency) and news about Solana and her projects. My main focus was the front-end, made with Chakra UI.";
  }

  setTimeout(() => {
    loadingScreen.classList.add("animate__animated", "animate__fadeOut");
    body.classList.add("animate__animated", "animate__fadeIn");

    loadingScreen.style.visibility = "hidden";
    setTimeout(() => {
      typeWriting();
    }, 1000);
  }, 1500);
}

function setLanguage(lang) {
  localStorage.setItem("language_seb", lang);
  location.reload();
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = changeLang();

function typeWriting() {
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
}
