 /* Sticky Navbar */
 window.onscroll = () => {
    let header = document.querySelector('.header');
  
    header.classList.toggle('sticky', window.scrollY > 100);
  ;}
/* Welcome */ 
  var r = confirm("You're welcome to LumineXis. Do well to stay connected with us.");
  if (r == true) {
      x = "You pressed OK!";
  } else {
      x = "You pressed Cancel!";
  }
  
  /* Swiper */
  document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});



/* Scroll Reveal */
ScrollReveal({ 
  reset: true, 
  distance: '50px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-img img, .services-container, .team-box, .testimonial-wrapper, .faq-list, .news-container, .contact form, .Enrollment', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-2', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-1', { origin: 'right' });
