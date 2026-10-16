(() => {
  let currentFilter = 'all';
  let filteredImages = [];
  let currentIndex = 0;

  App.renderGallery = () => {
    const grid = document.getElementById('galGrid');
    if (!grid) return;
    filteredImages = currentFilter === 'all'
      ? App.DATA.gallery
      : App.DATA.gallery.filter(img => img.cat === currentFilter);

    grid.innerHTML = filteredImages.map((img, i) => `
      <div class="masonry-item" data-index="${i}" tabindex="0" role="button" aria-label="View ${img.alt}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
      </div>
    `).join('');

    grid.querySelectorAll('.masonry-item').forEach(item => {
      item.addEventListener('click', () => openLightbox(parseInt(item.getAttribute('data-index'))));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openLightbox(parseInt(item.getAttribute('data-index')));
      });
    });
  };

  const openLightbox = (index) => {
    currentIndex = index;
    updateLightbox();
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  App.closeLightbox = () => {
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  const updateLightbox = () => {
    const img = document.getElementById('lbImg');
    const counter = document.getElementById('lbCounter');
    if (img && filteredImages[currentIndex]) {
      img.src = filteredImages[currentIndex].src.replace('w=600', 'w=1200');
      img.alt = filteredImages[currentIndex].alt;
    }
    if (counter) counter.textContent = `${currentIndex + 1} / ${filteredImages.length}`;
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightbox();
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % filteredImages.length;
    updateLightbox();
  };

  document.addEventListener('DOMContentLoaded', () => {
    const filterBar = document.getElementById('galFilterBar');
    if (filterBar) {
      filterBar.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
          filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          currentFilter = e.target.getAttribute('data-filter');
          App.renderGallery();
        }
      });
    }

    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.querySelector('.lb-close')?.addEventListener('click', App.closeLightbox);
      lb.querySelector('.lb-prev')?.addEventListener('click', prevImage);
      lb.querySelector('.lb-next')?.addEventListener('click', nextImage);
      lb.addEventListener('click', (e) => {
        if (e.target === lb) App.closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (!lb || !lb.classList.contains('open')) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });

    App.renderGallery();
  });
})();