var countDownDate = new Date("Oct 07, 2023 00:00:00").getTime();
var x = setInterval(function(){
var  now = new Date().getTime();
var distance = countDownDate - now ;

var days = Math.floor(distance / (1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
var seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML= days;
document.getElementById("hours").innerHTML= hours;
document.getElementById("minutes").innerHTML= minutes;
document.getElementById("seconds").innerHTML= seconds;

if(distance < 0){
    clearInterval(x);
    document.getElementById("days").innerHTML= "00";
    document.getElementById("hours").innerHTML= "00";
    document.getElementById("minutes").innerHTML= "00";
    document.getElementById("seconds").innerHTML= "00";
         
}


},1000);



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

function toggleActive(event) {
  const navLinks = document.querySelectorAll('.nav');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
  const clickedLink = event.target;
  clickedLink.classList.add('active');

  // Close the navbar
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
  const anchorTags = document.querySelectorAll('.nav');
  const currentPage = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  anchorTags.forEach(function(link) {
    if (link.getAttribute('href') === '#' + currentPage) {
      link.classList.add('active');
    }
    link.addEventListener('click', toggleActive); // Add event listener to each nav link
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav');

    let currentSection = null;
    let currentSectionIndex = -1;

    sections.forEach(function(section, index) {
      const sectionTop = section.offsetTop - 200; // Adjust the offset as needed

      if (window.scrollY >= sectionTop) {
        currentSection = section;
        currentSectionIndex = index;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    if (currentSection) {
      const targetLink = document.querySelector(`.nav[href="#${currentSection.getAttribute('id')}"]`);
      if (targetLink) {
        targetLink.classList.add('active');
      }
    }
  });
});

  
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
