const hamburger = document.querySelector(".hamburger");
const navLinks  = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
    manubar.style.visibility="hidden";

  });
});

//const me=document.getElementsByClassName("menu");

//function filterbtn(){
  //me.style.visibility="visible;
//}

const apf=document.querySelector(".filter_bar label");
const hor=document.querySelector(".filter_bar label:hover");
const manubar=document.querySelector(".menu");
var c=0;

apf.addEventListener('click', () => {

  if(c==0){
      manubar.style.visibility="visible";
      c=1;
  }else{
    manubar.style.visibility="hidden";
    c=c-1;

  }


});



(function ($) {
  $(window).on('scroll', function () {
  	var scroll = $(window).scrollTop();
  	if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('.navbar').fadeIn(500);
  	} else {
      $("#sticky-header").addClass("sticky");
      $('.navbar').fadeIn(500);
  	}
  });
})(jQuery);





//cards hover

$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");
    $( ".card" ).hover(
    function() {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }, function() {
      $(this).removeClass('shadow-lg');
    }
  );

});





