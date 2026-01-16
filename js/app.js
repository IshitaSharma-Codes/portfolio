let navLinks = document.querySelectorAll('.ul-list li a');
let sections = document.querySelectorAll('section');

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    let targetId = link.getAttribute('href').substring(1);
    let targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80, 
      behavior: 'smooth'
    });

    removeActive();
    link.parentElement.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      removeActive();
      let activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
      if (activeLink) activeLink.parentElement.classList.add('active');
    }
  });

  if(window.scrollY > 500){
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }

  revealElements.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let revealPoint = 150;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active-reveal');
    }
  });
});

let revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .services-container, .contact-content');
revealElements.forEach(el => el.classList.add('reveal'));

let backToTop = document.createElement('div');
backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
backToTop.id = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #474af0;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

let cards = document.querySelectorAll('.project-card, .c1, .service-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.05)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});

let typingElement = document.querySelector('.info-home h3'); 
let words = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast", "React Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    let currentWord = words[wordIndex];
    let displayedText = currentWord.substring(0, charIndex);
    
    typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', type);

document.addEventListener("DOMContentLoaded", () => {
  let loadingText = document.getElementById("loading-text");
  let mainIcon = document.querySelector(".main-icon");
  let subIcons = document.querySelectorAll(".sub-icons i");
  let designerText = document.getElementById("designer-text");
  let mainPage = document.getElementById("main-page");
  let loadingScreen = document.getElementById("loading-screen");

  function showElement(element, delay=0){
    setTimeout(() => {
      element.classList.remove("hidden");
      element.classList.add("fall");
    }, delay);
  }

  showElement(loadingText, 0);          
  showElement(mainIcon, 800);         
  subIcons.forEach((icon, idx) => {
    showElement(icon, 1600 + idx*400);  
  });
  showElement(designerText, 2800);    

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.style.display='none', 500);
    mainPage.classList.add("visible");
  }, 4000);
});
let buttonElement=document.querySelector("#btn1")
let modelDiv=document.querySelector(".model")
let closebtn=document.querySelector(".model span")

buttonElement.addEventListener("click", ()=>{
    modelDiv.style.top="20px"
})

closebtn.addEventListener("click", ()=>{
    modelDiv.style.top="-1000%"
})

// ---------Faq-----

let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  let header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {

    // Close all others
    accordionItems.forEach(otherItem => {
      if(otherItem !== item){
        otherItem.classList.remove('active');
      }
    });

    // Toggle current
    item.classList.toggle('active');
  });
});


  let ToggleBtnClick=document.querySelector('.TogleBtn')
    let UlMenue=document.querySelector(' nav>ul')
    
    ToggleBtnClick.addEventListener('click',()=>{
        ToggleBtnClick.classList.toggle('active');
        UlMenue.classList.toggle('active');
    })


    let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slide');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dotsContainer = document.querySelector('.dots');

let index = 0;

/* Create dots */
slide.forEach((_, i)=>{
  let dot = document.createElement('span');
  dot.classList.add('dot');
  if(i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', ()=> moveSlide(i));
});

let dots = document.querySelectorAll('.dot');

function moveSlide(i){
  index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
  updateDots();
}

function updateDots(){
  dots.forEach(dot=>dot.classList.remove('active'));
  dots[index].classList.add('active');
}

next.addEventListener('click', ()=>{
  index = (index + 1) % slide.length;
  moveSlide(index);
});

prev.addEventListener('click', ()=>{
  index = (index - 1 + slide.length) % slide.length;
  moveSlide(index);
});

/* Auto Slide */
setInterval(()=>{
  index = (index + 1) % slide.length;
  moveSlide(index);
}, 4000);


// Set countdown duration (in seconds)
    let countdownSeconds = 6000; // example: 10 seconds

    function updateCountdown() {
      const countdownElement = document.getElementById("countdown");

      // Calculate minutes and seconds
      let minutes = Math.floor(countdownSeconds / 60);
      let seconds = countdownSeconds % 60;

      // Format with leading zeros
      let displayMinutes = String(minutes).padStart(2, "0");
      let displaySeconds = String(seconds).padStart(2, "0");

      countdownElement.textContent = `00:${displayMinutes}:${displaySeconds}`;

      // Stop when countdown reaches zero
      if (countdownSeconds <= 0) {
        clearInterval(timer);
        countdownElement.textContent = "TIME UP!";
      }

      countdownSeconds--;
    }

    // Run immediately and then every second
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

