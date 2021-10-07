// JavaScript Document

/* MOSTRAR DIAPOSITIVAS */
function slideShow() {

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
	 var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
  dots[slideIndex-1].className += " active";  
}
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    // AÑADIDO POR DUPLICIDAD 
    if (slides[slideIndex-1] != undefined){
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
    }
}

/* FIN MOSTRAR DIAPOSITIVAS */
/* ------------------------------------*/
/* CAJA MODAL 1 */
function cajaModal1() {

// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 1 */
/* ------------------------------------*/
/* CAJA MODAL 2 */
function cajaModal2() {

// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 2 */
/* ------------------------------------*/
/* CAJA MODAL 3 */
function cajaModal3() {

// Get the modal
var modal = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 3 */
/* ------------------------------------*/
/* CAJA MODAL 4 */
function cajaModal4() {

// Get the modal
var modal = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 4 */
/* ------------------------------------*/
/* CAJA MODAL 5 */
function cajaModal5() {

// Get the modal
var modal = document.getElementById("myModal5");

// Get the button that opens the modal
var btn = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 5 */
/* ------------------------------------*/
/* CAJA MODAL 6 */
function cajaModal6() {

// Get the modal
var modal = document.getElementById("myModal6");

// Get the button that opens the modal
var btn = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 6 */
/* ------------------------------------*/
/* CAJA MODAL 7 */
function cajaModal7() {

// Get the modal
var modal = document.getElementById("myModal7");

// Get the button that opens the modal
var btn = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close7")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 7 */
/* ------------------------------------*/
/* CAJA MODAL 8 */
function cajaModal8() {

// Get the modal
var modal = document.getElementById("myModal8");

// Get the button that opens the modal
var btn = document.getElementById("myBtn8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close8")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 8 */
/* ------------------------------------*/
/* CAJA MODAL 9 */
function cajaModal9() {

// Get the modal
var modal = document.getElementById("myModal9");

// Get the button that opens the modal
var btn = document.getElementById("myBtn9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close9")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 9 */
/* ------------------------------------*/
/* CAJA MODAL 10 */
function cajaModal10() {

// Get the modal
var modal = document.getElementById("myModal10");

// Get the button that opens the modal
var btn = document.getElementById("myBtn10");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close10")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 10 */
/* ------------------------------------*/
/* CAJA MODAL 11 */
function cajaModal11() {

// Get the modal
var modal = document.getElementById("myModal11");

// Get the button that opens the modal
var btn = document.getElementById("myBtn11");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close11")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 11 */
/* ------------------------------------*/
/* CAJA MODAL 12 */
function cajaModal12() {

// Get the modal
var modal = document.getElementById("myModal12");

// Get the button that opens the modal
var btn = document.getElementById("myBtn12");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close12")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
    
//CAMBIADO POR DOBLIE CLICK
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    stopVideo(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo(modal);
  }
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector(".modal-content > iframe");
    currentIframe.src = currentIframe.src;
}

}
/* FIN CAJA MODAL 12 */
/* -------------------------- */
/*  PESTAÑAS */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


  
  
  


