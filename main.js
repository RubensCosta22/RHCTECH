/* =============================================
   INSPECTO — RHCTECH
   main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------
     SCROLL REVEAL
     Anima elementos com classe .reveal
     ao entrarem na viewport
  ------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((el) => revealObserver.observe(el));


  /* -------------------------------------------
     SMOOTH SCROLL
     Intercepta cliques em âncoras internas
  ------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* -------------------------------------------
     NAV SHADOW ON SCROLL
     Adiciona sombra na nav ao rolar a página
  ------------------------------------------- */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 24px rgba(10,15,30,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

});
