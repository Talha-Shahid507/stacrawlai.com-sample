// ─── MOBILE MENU ───
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!hamburger || !menu) return;
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (menu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// ─── ACTIVE NAV ───
function setActiveNav() {
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const page = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── URL BAR DEMO ───
function initURLDemo() {
  const btn = document.querySelector('.url-btn');
  const input = document.querySelector('.url-input');
  if (!btn || !input) return;
  const demos = [
    'https://example.com', 'https://shop.mysite.com/products',
    'https://news.site.com/articles', 'https://docs.api.com'
  ];
  btn.addEventListener('click', () => {
    btn.textContent = '⟳ Crawling...';
    btn.disabled = true;
    setTimeout(() => {
      showToast('✅ Crawl started! 847 pages queued.');
      btn.textContent = 'Crawl';
      btn.disabled = false;
    }, 1500);
  });
  let di = 0;
  setInterval(() => {
    if (document.activeElement !== input) {
      di = (di + 1) % demos.length;
      input.value = demos[di];
    }
  }, 3000);
}

// ─── TOAST ───
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = `
      position:fixed;bottom:2rem;right:2rem;
      background:#0d0d14;border:1px solid rgba(0,245,160,0.3);
      color:#e8e8f0;padding:0.875rem 1.25rem;border-radius:12px;
      font-size:0.875rem;z-index:9999;
      box-shadow:0 8px 32px rgba(0,0,0,0.4);
      transform:translateY(80px);opacity:0;
      transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
      font-family:'Inter',sans-serif;
    `;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  setTimeout(() => { t.style.transform = 'translateY(0)'; t.style.opacity = '1'; }, 10);
  setTimeout(() => { t.style.transform = 'translateY(80px)'; t.style.opacity = '0'; }, 3000);
}

// ─── TABS ───
function initTabs() {
  document.querySelectorAll('.tabs').forEach(group => {
    const tabs = group.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(c => {
          c.style.display = c.dataset.tab === target ? 'block' : 'none';
        });
      });
    });
  });
}

// ─── COUNTER ANIMATION ───
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();
        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  });
  counters.forEach(c => observer.observe(c));
}

// ─── SCROLL REVEAL ───
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ─── PRICING TOGGLE ───
function initPricingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;
  toggle.addEventListener('change', () => {
    const isAnnual = toggle.checked;
    document.querySelectorAll('.price-monthly').forEach(el => {
      el.style.display = isAnnual ? 'none' : 'inline';
    });
    document.querySelectorAll('.price-annual').forEach(el => {
      el.style.display = isAnnual ? 'inline' : 'none';
    });
  });
}

// ─── COPY CODE ───
function initCopyCode() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const block = btn.closest('.code-block');
      const code = block ? block.querySelector('.code-body').innerText : '';
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✓ Copied!';
        setTimeout(() => btn.textContent = 'Copy', 2000);
      });
    });
  });
}

// ─── CONTACT FORM ───
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      showToast('✅ Message sent! We\'ll reply within 24 hours.');
      form.reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }, 1500);
  });
}

// ─── DOCS SIDEBAR ACTIVE ───
function initDocsSidebar() {
  const links = document.querySelectorAll('.docs-nav-section a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// ─── INIT ALL ───
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNav();
  initURLDemo();
  initTabs();
  animateCounters();
  initScrollReveal();
  initPricingToggle();
  initCopyCode();
  initContactForm();
  initDocsSidebar();
});
