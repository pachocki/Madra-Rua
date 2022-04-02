
//Navigation
var nav = document.querySelector('nav');
var navLink = document.querySelectorAll(".nav-link")

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 20) {
    nav.classList.add('bg-warning', 'shadow');

  } else {
    nav.classList.remove('bg-warning', 'shadow');
   
  }
});
window.addEventListener("scroll" , function() {
    for(let i=0; i < navLink.length; i++){
        if (window.pageYOffset > 20) {
            navLink[i].style.color="green";
        }else{
            navLink[i].style.color="#fff";
    }
    }
});

//END OF NAVIGATION

 //Hero Section
 document.addEventListener("mousemove", function(e){
    const bg = document.querySelector('.bg');
    const bird = document.querySelector('.dog');
    const content = document.querySelector('.content-text');

    bg.style.width = 100 + e.pageX/100 + '%';
    bg.style.height = 100 + e.pageX/100 + '%';

    bird.style.right = 100 + e.pageX/2 + 'px';

    content.style.left = 100 + e.pageX/2.5 + 'px';
})
 //END OF PARALAX HERO SECTION

// CAROUSEL TESTIMONIALS

const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slid.bs.carousel', function () {
const activeItem=this.querySelector(".active")
document.querySelector(".testi-img img").src=activeItem.getAttribute("data-img");
document.querySelector(".testi-img .circle").style.backgroundColor=activeItem.getAttribute("data-color");
})

// END OF CAROUSEL TESTIMONIALS


//SCROLL TO THE TOP

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 