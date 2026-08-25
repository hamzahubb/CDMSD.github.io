/**
 * CDMSD — Core Application Controller
 * Handles Navigation, Modals, Dynamic Filters, Search,
 * Form Validation, and Accessibility micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initModals();
  initProjectFiltering();
  initResourceFiltering();
  initContactForms();
  initRosterForm();
});

/* Mobile Menu Navigation */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const overlay = document.querySelector('.mobile-overlay');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* Modals Manager */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const closeBtns = document.querySelectorAll('.modal-close, [data-modal-close]');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) closeModal(activeModal.id);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) closeModal(activeModal.id);
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const firstInput = modal.querySelector('input, select, textarea, button:not(.modal-close)');
  if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* Project Hub Filtering and Search */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  const searchInput = document.getElementById('project-search-input');
  const projectCards = document.querySelectorAll('.project-grid-item');
  const emptyState = document.getElementById('projects-empty-state');

  if (!filterBtns.length && !searchInput) return;

  let activeSector = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const cardSector = card.getAttribute('data-sector') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesSector = activeSector === 'all' || cardSector.includes(activeSector);
      const matchesSearch = !searchQuery || cardText.includes(searchQuery.toLowerCase());

      if (matchesSector && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSector = btn.getAttribute('data-project-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }
}

/* Resources Filtering */
function initResourceFiltering() {
  const resourceBtns = document.querySelectorAll('[data-resource-filter]');
  const resourceCards = document.querySelectorAll('.resource-card-item');

  if (!resourceBtns.length) return;

  resourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resourceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-resource-filter');

      resourceCards.forEach(card => {
        const itemCat = card.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Contact Form Validation and Submission */
function initContactForms() {
  const contactForm = document.getElementById('cdmsd-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const type = document.getElementById('contact-type');
    const message = document.getElementById('contact-message');

    // Simple validation
    [name, email, type, message].forEach(field => {
      if (!field) return;
      if (!field.value.trim()) {
        field.classList.add('error');
        const err = field.parentElement.querySelector('.form-error-text');
        if (err) err.classList.add('visible');
        isValid = false;
      } else {
        field.classList.remove('error');
        const err = field.parentElement.querySelector('.form-error-text');
        if (err) err.classList.remove('visible');
      }
    });

    if (isValid) {
      showToast('Thank you for reaching out. Your institutional inquiry has been recorded. Our team will respond shortly.');
      contactForm.reset();
      const modal = contactForm.closest('.modal-overlay');
      if (modal) closeModal(modal.id);
    }
  });
}

/* Consultant Roster Registration Form */
function initRosterForm() {
  const rosterForm = document.getElementById('cdmsd-roster-form');
  if (!rosterForm) return;

  rosterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Your profile has been submitted to the CDMSD Technical Consultant Roster.');
    rosterForm.reset();
    closeModal('modal-consultant-roster');
  });
}

/* Toast Notifications */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#168A8A" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 300ms ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
