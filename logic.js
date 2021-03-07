const collapsebtn = document.getElementById("collapseBtn");
document.querySelector('video').playbackRate = 0.75;
const navbarDiv = document.getElementById("navbar-div");
const navbarSocials = document.getElementById("navbar-socials");
const nav = document.getElementById("nav");
let collapsed = false;

collapsebtn.addEventListener("click", () => {
  if (collapsed) {
    nav.style.height = "320px";
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
  if ($(window).width() > 900) {
    nav.style.height = "42.9px";
    navbarDiv.style.visibility = "visible";
    navbarSocials.style.visibility = "visible";

  } else {
    if (!collapsed) {
      nav.style.height = "320px";
      navbarDiv.style.visibility = "visible";
      navbarSocials.style.visibility = "visible";
    }else{
        nav.style.height = "62px";
    navbarDiv.style.visibility = "hidden";
    navbarSocials.style.visibility = "hidden";
    }
  }
});
// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 0) {
//     $('.navbar').css('background','red');
//     } else {
//     $('.navbar').css('background','transparent');
//     }
//     });


// INICIO , SOBRE MI, PROYECTOS, CONTACTO
//SOBRE MI Hola, soy Seb. Soy un desarrollador web junior, de Costa Rica, buscan por una oportunidad para empezar mi carrera en programación. Me apasiona la tecnología y aprender.

//Habilidades HTML CSS JS TS Tailwind LCSS SCSS Angular React Node PHP 

//Habilidades blandas, trabajo en equipo, manejo del tiempo, comunicación, servicio al cliente

// Proyectos, he presentado 

// 