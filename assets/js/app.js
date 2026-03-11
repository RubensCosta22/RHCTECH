/* =============================================
   INSPECTO — RHCTECH  |  app.js
   Módulos: ScrollReveal · Nav · MobileMenu
            SmoothScroll · ContactForm · ActiveNav
   ============================================= */

'use strict';

/* =============================================
   UTILITÁRIO — Detecta preferência de movimento
   ============================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/* =============================================
   MÓDULO: SCROLL REVEAL
   Anima .reveal ao entrar na viewport.
   Respeita prefers-reduced-motion.
   ============================================= */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach((el) => observer.observe(el));
}


/* =============================================
   MÓDULO: NAV SCROLL STATE
   Adiciona classe .nav--scrolled ao rolar.
   ============================================= */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const update = () => nav.classList.toggle('nav--scrolled', window.scrollY > 20);

  window.addEventListener('scroll', update, { passive: true });
  update(); // Estado inicial
}


/* =============================================
   MÓDULO: MOBILE MENU
   Acessível com ARIA (expanded, hidden, Escape).
   ============================================= */
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const open = () => {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    const first = menu.querySelector('.mobile-link');
    if (first) first.focus();
  };

  const close = () => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  // Fecha ao clicar em links internos
  menu.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', close);
  });

  // Fecha com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    const header = document.querySelector('header');
    if (header && !header.contains(e.target) && toggle.getAttribute('aria-expanded') === 'true') {
      close();
    }
  });
}


/* =============================================
   MÓDULO: SMOOTH SCROLL
   Compensação para nav fixa.
   Respeita prefers-reduced-motion.
   ============================================= */
function initSmoothScroll() {
  const nav = document.querySelector('.nav');

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      const navH   = nav ? nav.offsetHeight : 0;
      const top    = target.getBoundingClientRect().top + window.scrollY - navH - 16;

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      // Foco acessível
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}


/* =============================================
   MÓDULO: ACTIVE NAV LINK
   Destaca o link da seção visível.
   ============================================= */
function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'true');
        }
      });
    });
  }, { threshold: 0.4 });

  sections.forEach((s) => observer.observe(s));
}


/* =============================================
   MÓDULO: FORMULÁRIO DE CONTATO
   Suporte a Formspree (real) e fallback mailto.
   ============================================= */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  const btn  = document.querySelector('.contact-btn');
  if (!form || !btn) return;

  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action') || '';
    const isFormspree = action.includes('formspree.io') && !action.includes('SEU_ID_AQUI');

    // ---- Fallback: abre mailto ----
    if (!isFormspree) {
      e.preventDefault();
      const email = document.getElementById('email-input')?.value;
      if (!email) return;

      window.location.href =
        `mailto:contato@rhctech.com.br` +
        `?subject=Solicita%C3%A7%C3%A3o%20de%20Demo` +
        `&body=Ol%C3%A1%2C%20gostaria%20de%20uma%20demo%20do%20Inspecto.%0AEmail%3A%20${encodeURIComponent(email)}`;

      setButtonState(btn, 'loading');
      setTimeout(() => {
        setButtonState(btn, 'success', '✓ Redirecionado! Finalize pelo e-mail.');
        form.reset();
      }, 800);
      return;
    }

    // ---- Formspree real ----
    e.preventDefault();
    const original = btn.innerHTML;
    setButtonState(btn, 'loading');

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setButtonState(btn, 'success', '✓ Recebemos! Entraremos em contato.');
        form.reset();
      } else {
        throw new Error('server_error');
      }
    } catch {
      setButtonState(btn, 'error', 'Erro. Envie por e-mail →');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.cssText = '';
        btn.disabled = false;
      }, 3000);
    }
  });
}

/**
 * Atualiza estado visual do botão de submit.
 * @param {HTMLElement} btn
 * @param {'loading'|'success'|'error'} state
 * @param {string} [label]
 */
function setButtonState(btn, state, label) {
  const styles = {
    loading: { text: 'Enviando…', bg: '',        cursor: 'wait'    },
    success: { text: label,       bg: '#059669', cursor: 'default' },
    error:   { text: label,       bg: '#DC2626', cursor: 'default' },
  };
  const s = styles[state];
  btn.textContent = s.text;
  btn.style.background = s.bg;
  btn.style.cursor     = s.cursor;
  btn.disabled = (state !== 'loading') ? false : true;
}


/* =============================================
   INIT — Inicializa todos os módulos
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavScroll();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initContactForm();
});
