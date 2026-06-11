/* =============================================
   JOHN GHAZZAGH PORTFOLIO
   script.js
   ============================================= */

'use strict';

// ─── NAV SCROLL BEHAVIOR ────────────────────────────────────────────────────
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function handleNavScroll() {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// Active nav link on scroll
function updateActiveNavLink() {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  handleNavScroll();
  updateActiveNavLink();
}, { passive: true });

handleNavScroll();


// ─── MOBILE HAMBURGER ────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
  document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav on link click
navLinksContainer.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach((el) => revealObserver.observe(el));


// ─── SKILL BAR ANIMATION ────────────────────────────────────────────────────
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-fill');
        const width = entry.target.getAttribute('data-width');
        if (fill && width) {
          setTimeout(() => {
            fill.style.width = `${width}%`;
          }, 200);
        }
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

skillBars.forEach((bar) => skillObserver.observe(bar));


// ─── PORTFOLIO FILTER ────────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    // Update active button
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards
    portfolioCards.forEach((card) => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        // Trigger re-reveal animation
        card.classList.remove('visible');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.classList.add('visible');
          });
        });
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


// ─── CONTACT FORM ────────────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Please fill out all required fields.';
      formNote.style.color = '#f87171';
      return;
    }

    if (!isValidEmail(email)) {
      formNote.textContent = 'Please enter a valid email address.';
      formNote.style.color = '#f87171';
      return;
    }

    // Simulate form send (replace with real endpoint or Formspree/mailto)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      formNote.textContent = "Message sent. I'll be in touch soon.";
      formNote.style.color = '#6c63ff';
      contactForm.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 1200);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// ─── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  });
});


// ─── HERO TEXT ENTRANCE ──────────────────────────────────────────────────────
// Trigger hero reveals immediately on load (no scroll needed)
window.addEventListener('load', () => {
  const heroReveals = document.querySelectorAll('.hero .reveal');
  heroReveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 150 + i * 120);
  });
});
