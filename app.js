  // Header scroll state
 const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('py-3.5', 'bg-charcoal/90', 'backdrop-blur-md', 'shadow-[0_1px_0_rgba(244,237,226,0.14)]');
      header.classList.remove('py-6');
    } else {
      header.classList.remove('py-3.5', 'bg-charcoal/90', 'backdrop-blur-md', 'shadow-[0_1px_0_rgba(244,237,226,0.14)]');
      header.classList.add('py-6');
    }
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }));

  // Ember particles
  const emberContainer = document.getElementById('embers');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'ember-particle';
      const left = Math.random() * 100;
      const duration = 6 + Math.random() * 8;
      const delay = Math.random() * 10;
      const size = 3 + Math.random() * 4;
      p.style.left = left + '%';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = delay + 's';
      emberContainer.appendChild(p);
    }
  }

  // Reservation form (no backend) - client-side confirmation
  const resForm = document.getElementById('resForm');
  const confirmMsg = document.getElementById('confirmMsg');
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmMsg.classList.remove('hidden');
    confirmMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    resForm.reset();
  });

  // Minimum date = today
  const dateInput = document.getElementById('resDate');
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
