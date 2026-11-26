/**
 * NSS CELL UEM JAIPUR - OFFICIAL PORTAL INTERACTIVITY
 * National Service Scheme, University of Engineering & Management, Jaipur
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initGalleryMarqueeClones();
  initGalleryLightbox();
  initContactForm();
});

/**
 * 1. NAVBAR SCROLL & MOBILE DRAWER
 */
function initNavbar() {
  const navbar = document.querySelector('.site-navbar');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle & backdrop
  const backdrop = document.getElementById('navBackdrop');

  function setMobileMenu(isOpen) {
    if (!navLinks) return;
    if (isOpen) {
      navLinks.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
      if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
      document.body.style.overflow = 'hidden';
    } else {
      navLinks.classList.remove('open');
      if (backdrop) backdrop.classList.remove('active');
      if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      setMobileMenu(!isOpen);
    });

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        setMobileMenu(false);
      });
    }

    // Close when clicking nav items
    const navClickables = document.querySelectorAll('.nav-item, .nav-cta-btn');
    navClickables.forEach(item => {
      item.addEventListener('click', () => {
        setMobileMenu(false);
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('open')) {
        setMobileMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        setMobileMenu(false);
      }
    });
  }

  // Active link indicator on scroll using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}



/**
 * 4. PHOTO GALLERY MARQUEE SEAMLESS CLONING
 * Clones the items in each track so that infinite scrolling has 0 glitches
 */
function initGalleryMarqueeClones() {
  const marqueeTracks = document.querySelectorAll('.marquee-track');

  marqueeTracks.forEach(track => {
    // Clone contents once to allow continuous infinite loop
    const clone = track.cloneNode(true);
    // Append clone children to track
    Array.from(clone.children).forEach(child => {
      track.appendChild(child);
    });
  });
}

/**
 * 5. PHOTO GALLERY LIGHTBOX MODAL
 */
function initGalleryLightbox() {
  const modal = document.getElementById('galleryLightboxModal');
  const modalImg = document.getElementById('lightboxImage');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalDesc = document.getElementById('lightboxDesc');
  const closeBtn = document.querySelector('.lightbox-close-btn');

  if (!modal || !modalImg) return;

  // Delegate click on gallery items
  document.addEventListener('click', (e) => {
    const photoItem = e.target.closest('.gallery-photo-item');
    if (photoItem) {
      const img = photoItem.querySelector('img');
      const title = photoItem.getAttribute('data-title') || 'NSS CELL UEM JAIPUR Activity';
      const desc = photoItem.getAttribute('data-desc') || 'National Service Scheme, University of Engineering & Management, Jaipur';

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = title;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * 6. CONTACT FORM SUBMISSION
 */
function initContactForm() {
  const contactForm = document.getElementById('nssContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const subject = document.getElementById('contactSubject')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Friendly confirmation alert
    alert(`Thank you, ${name}! Your query regarding "${subject || 'General Inquiry'}" has been noted. Our NSS Volunteer Team will get in touch with you shortly at ${email}. You can also submit directly via our Official Google Form.`);
    contactForm.reset();
  });
}
