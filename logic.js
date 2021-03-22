const collapsebtn = document.getElementById("collapseBtn");
const navbarDiv = document.getElementById("navbar-div");
const navbarSocials = document.getElementById("navbar-socials");
const nav = document.getElementById("nav");

let collapsed = false;

collapsebtn.addEventListener("click", () => {
  if (collapsed) {
    nav.style.height = "276px";
    navbarDiv.style.visibility = "visible";
    navbarSocials.style.visibility = "visible";
  } else {
    nav.style.height = "62px";

    navbarDiv.style.visibility = "hidden";
    navbarSocials.style.visibility = "hidden";
  }

  collapsed = !collapsed;
});
window.addEventListener("resize", () => {
  if ($(window).width() > 960) {
    nav.style.height = "42.9px";
    navbarDiv.style.visibility = "visible";
    navbarSocials.style.visibility = "visible";
  } else {
    nav.style.height = "62px";
    navbarDiv.style.visibility = "hidden";
    navbarSocials.style.visibility = "hidden";
  }
});

const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const aboutTitle = document.getElementById("about-title");
const aboutText = document.getElementById("about-text");

const skillTitle = document.getElementById("skills-title");
const skillText = document.getElementById("skills-desc");

const skillProjects = document.getElementById("skills-projects");
const skillResume = document.getElementById("skills-resume");
const elements = document.getElementsByClassName("typewrite");
const loadingScreen = document.getElementById("loadingScreen");
const body = document.querySelector("body");

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
    home.innerText = "Inicio";
    about.innerText = "Sobre Mi";
    projects.innerText = "Proyectos";
    contact.innerText = "Contacto";

    // aboutTitle.innerText = "Sobre Mi";
    // aboutText.innerText = "Hola, soy Seb. Soy un desarrollo web junior, de Costa Rica, buscando por una oportunidad para empezar mi carrera en desarrollo. Me apasiona la tecnología y aprender.";

    // skillTitle.innerText = 'Habilidades';
    // skillText.innerText = "Estas son algunas de las habilidades que he usado en diferentes proyectos, sean de la universidad como personales";
    // skillProjects.innerText = "Proyectos";
    // skillResume.innerText = "Curriculum";
  } else {
    loaderTitle.innerText = "Loading";

    typewriter.setAttribute(
      "data-type",
      '[ "Hi I am Sebastian. ", "I am a student. ", "I am a developer. ", "I am interested in working with you. " ]'
    );

    home.innerText = "Home";
    about.innerText = "About Me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";

    // aboutTitle.innerText = "About Me";
    // aboutText.innerText = "Hello, I am Seb. I am a junior web developer, from Costa Rica,    looking for a chance to start my developing career. I am passionate about technology and learning.";

    // skillTitle.innerText = 'Skills';
    // skillText.innerText = 'This is a summary of some of the technologies I have used in     different projects, be it in college or personal projects.';
    // skillProjects.innerText = "Projects";
    // skillResume.innerText = "Resume";
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
