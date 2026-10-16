(() => {
  let currentPkgFilter = 'all';
  let testimonialIndex = 0;
  let testimonialInterval = null;

  App.renderPackages = () => {
    const grid = document.getElementById('pkgGrid');
    if (!grid) return;
    const filtered = currentPkgFilter === 'all'
      ? App.DATA.packages
      : App.DATA.packages.filter(p => p.category.includes(currentPkgFilter));

    grid.innerHTML = filtered.map(pkg => `
      <div class="pkg-card" data-category="${pkg.category.join(',')}">
        <div class="pkg-img">
          <img src="${pkg.img}" alt="${pkg.name}" loading="lazy">
        </div>
        <div class="pkg-body">
          <div class="pkg-title">${pkg.name}</div>
          <div class="pkg-duration">&#128197; ${pkg.duration}</div>
          <div class="pkg-rating">&#11088; ${pkg.rating}</div>
          <div class="pkg-activities">
            ${pkg.activities.map(a => `<span class="pkg-tag">${a}</span>`).join('')}
          </div>
          <div class="pkg-footer">
            <span class="pkg-price" data-base-price="${pkg.price}">${App.formatPrice(pkg.price)}</span>
            <button class="btn btn-primary" style="padding:8px 18px;font-size:0.85rem;" onclick="App.openPackageModal(${pkg.id})">View Details</button>
          </div>
        </div>
      </div>
    `).join('');
  };

  App.openPackageModal = (id) => {
    const pkg = App.DATA.packages.find(p => p.id === id);
    if (!pkg) return;
    const body = document.getElementById('packageModalBody');
    if (!body) return;
    body.innerHTML = `
      <img src="${pkg.img}" alt="${pkg.name}" class="modal-img">
      <h2 class="modal-title">${pkg.name}</h2>
      <div class="modal-meta">
        <span>&#128197; ${pkg.duration}</span>
        <span>&#11088; ${pkg.rating}</span>
        <span style="font-weight:700;color:var(--teal);" data-base-price="${pkg.price}">${App.formatPrice(pkg.price)} / person</span>
      </div>
      <p class="modal-desc">${pkg.desc}</p>
      <div class="modal-section">
        <h4>Day-by-Day Itinerary</h4>
        <ul class="modal-list">${pkg.itinerary.map((day, i) => `<li>Day ${i + 1}: ${day}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h4>Included Services</h4>
        <ul class="modal-list">${pkg.included.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h4>Not Included</h4>
        <ul class="modal-list excluded">${pkg.excluded.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <button class="btn btn-primary btn-full" style="margin-top:16px;" onclick="document.getElementById('planner').scrollIntoView({behavior:'smooth'});App.closeModal('packageModal');">Book Now</button>
    `;
    App.openModal('packageModal');
  };

  const renderTestimonials = () => {
    const track = document.getElementById('testimonialTrack');
    const dots = document.getElementById('carouselDots');
    if (!track || !dots) return;
    const items = App.DATA.testimonials;

    track.innerHTML = items.map(t => `
      <div class="testimonial-slide">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy">
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-name">${t.name}</div>
        <div class="testimonial-location">${t.location}</div>
        <div class="testimonial-rating">${'\u2B50'.repeat(t.rating)}</div>
      </div>
    `).join('');

    dots.innerHTML = items.map((_, i) => `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`).join('');

    const goTo = (index) => {
      testimonialIndex = ((index % items.length) + items.length) % items.length;
      track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
      dots.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === testimonialIndex));
    };

    document.getElementById('prevTestimonial')?.addEventListener('click', () => { goTo(testimonialIndex - 1); resetAutoplay(); });
    document.getElementById('nextTestimonial')?.addEventListener('click', () => { goTo(testimonialIndex + 1); resetAutoplay(); });
    dots.addEventListener('click', (e) => {
      if (e.target.classList.contains('carousel-dot')) {
        goTo(parseInt(e.target.getAttribute('data-index')));
        resetAutoplay();
      }
    });

    const startAutoplay = () => { testimonialInterval = setInterval(() => goTo(testimonialIndex + 1), 5000); };
    const resetAutoplay = () => { clearInterval(testimonialInterval); startAutoplay(); };
    startAutoplay();
  };

  const initStats = () => {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseFloat(el.getAttribute('data-target'));
            const isDecimal = el.getAttribute('data-decimal') === 'true';
            const duration = 2000;
            const start = performance.now();

            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = eased * target;
              el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  };

  const renderTips = () => {
    const grid = document.getElementById('tipsGrid');
    if (!grid) return;
    grid.innerHTML = App.DATA.tips.map((tip, i) => `
      <div class="tip-card">
        <div class="tip-img"><img src="${tip.img}" alt="${tip.title}" loading="lazy"></div>
        <div class="tip-body">
          <div class="tip-meta">
            <span class="tip-category">${tip.category}</span>
            <span>${tip.date}</span>
            <span>${tip.readTime} read</span>
          </div>
          <h3 class="tip-title">${tip.title}</h3>
          <p class="tip-desc">${tip.desc}</p>
          <button class="btn btn-primary" style="padding:8px 20px;font-size:0.85rem;" onclick="App.openArticle(${i})">Read More</button>
        </div>
      </div>
    `).join('');
  };

  App.openArticle = (index) => {
    const tip = App.DATA.tips[index];
    if (!tip) return;
    const body = document.getElementById('articleModalBody');
    if (!body) return;
    body.innerHTML = `
      <img src="${tip.img}" alt="${tip.title}" class="modal-img">
      <h2 class="modal-title">${tip.title}</h2>
      <div class="tip-meta" style="margin-bottom:20px;">
        <span class="tip-category">${tip.category}</span>
        <span>${tip.date}</span>
        <span>${tip.readTime} read</span>
      </div>
      <div class="article-content">${tip.content}</div>
    `;
    App.openModal('articleModal');
  };

  const initMap = () => {
    const markers = document.querySelectorAll('.marker');
    const tooltip = document.getElementById('mapTooltip');
    if (!tooltip) return;

    markers.forEach(marker => {
      const showTip = () => {
        const dest = marker.getAttribute('data-dest');
        const data = App.DATA.mapData[dest];
        if (!data) return;
        tooltip.innerHTML = `
          <h4>${data.name}</h4>
          <p>${data.info}</p>
          <div class="tooltip-rating">&#11088; ${data.rating} / 5</div>
          <button class="btn btn-primary" onclick="document.getElementById('destinations').scrollIntoView({behavior:'smooth'})">Explore Destination</button>
        `;
        const container = document.getElementById('mapContainer');
        const rect = container.getBoundingClientRect();
        const svgRect = container.querySelector('svg').getBoundingClientRect();
        const cx = parseFloat(marker.getAttribute('cx'));
        const cy = parseFloat(marker.getAttribute('cy'));
        const scaleX = svgRect.width / 1000;
        const scaleY = svgRect.height / 500;
        const left = (cx * scaleX) + (svgRect.left - rect.left);
        const top = (cy * scaleY) + (svgRect.top - rect.top);
        tooltip.style.left = `${left + 15}px`;
        tooltip.style.top = `${top - 20}px`;
        tooltip.classList.add('visible');
      };

      const hideTip = () => tooltip.classList.remove('visible');

      marker.addEventListener('mouseenter', showTip);
      marker.addEventListener('focus', showTip);
      marker.addEventListener('mouseleave', hideTip);
      marker.addEventListener('blur', hideTip);
      marker.addEventListener('click', showTip);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('marker') && !tooltip.contains(e.target)) {
        tooltip.classList.remove('visible');
      }
    });
  };

  const initForms = () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const phone = document.getElementById('contactPhone');
        const msg = document.getElementById('contactMsg');

        document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

        if (!name.value.trim()) {
          document.getElementById('errName').textContent = 'Name is required';
          valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          document.getElementById('errEmail').textContent = 'Valid email is required';
          valid = false;
        }

        if (phone.value) {
          const phoneRegex = /^[\+]?[\d\s\-]{7,15}$/;
          if (!phoneRegex.test(phone.value)) {
            document.getElementById('errPhone').textContent = 'Invalid phone format';
            valid = false;
          }
        }

        if (msg.value.trim().length < 10) {
          document.getElementById('errMsg').textContent = 'Message must be at least 10 characters';
          valid = false;
        }

        if (valid) {
          const success = document.getElementById('contactSuccess');
          if (success) success.classList.remove('hidden');
          contactForm.reset();
          setTimeout(() => { if (success) success.classList.add('hidden'); }, 5000);
        }
      });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletterEmail');
        const msgEl = document.getElementById('newsletterMsg');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
          if (msgEl) {
            msgEl.textContent = 'Please enter a valid email address.';
            msgEl.className = 'form-msg error';
            msgEl.classList.remove('hidden');
          }
        } else {
          if (msgEl) {
            msgEl.textContent = 'Thank you for subscribing! Check your inbox soon.';
            msgEl.className = 'form-msg success';
            msgEl.classList.remove('hidden');
          }
          emailInput.value = '';
          setTimeout(() => { if (msgEl) msgEl.classList.add('hidden'); }, 5000);
        }
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const pkgBar = document.getElementById('pkgFilterBar');
    if (pkgBar) {
      pkgBar.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
          pkgBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          currentPkgFilter = e.target.getAttribute('data-filter');
          App.renderPackages();
        }
      });
    }

    App.renderPackages();
    renderTestimonials();
    initStats();
    renderTips();
    initMap();
    initForms();
  });
})();