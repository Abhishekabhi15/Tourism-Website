(() => {
  let currentFilter = 'all';
  let explorerSearchTerm = '';
  let explorerSortBy = 'popularity';

  const createDestCard = (dest) => {
    const isWished = App.Wishlist ? App.Wishlist.has(dest.id) : false;
    return `
      <div class="dest-card" data-id="${dest.id}" data-region="${dest.region}">
        <div class="dest-card-img">
          <img src="${dest.img}" alt="${dest.name}" loading="lazy">
          <button class="dest-wishlist ${isWished ? 'active' : ''}" data-dest-id="${dest.id}" aria-label="Add to wishlist">${isWished ? '&#10084;' : '&#9825;'}</button>
        </div>
        <div class="dest-card-body">
          <div class="dest-card-top">
            <div>
              <div class="dest-name">${dest.name}</div>
              <div class="dest-country">${dest.country}</div>
            </div>
            <div class="dest-rating">&#11088; ${dest.rating}</div>
          </div>
          <p class="dest-desc">${dest.desc}</p>
          <div class="dest-meta">
            <span>&#127963; ${dest.attractions} attractions</span>
          </div>
          <div class="dest-card-footer">
            <span class="dest-price" data-base-price="${dest.price}">${App.formatPrice(dest.price)}</span>
            <button class="btn btn-primary" style="padding:8px 20px;font-size:0.85rem;" onclick="document.getElementById('planner').scrollIntoView({behavior:'smooth'})">Explore</button>
          </div>
        </div>
      </div>`;
  };

  App.renderDestinations = () => {
    const grid = document.getElementById('destGrid');
    if (!grid) return;
    const filtered = currentFilter === 'all'
      ? App.DATA.destinations
      : App.DATA.destinations.filter(d => d.region === currentFilter);
    grid.innerHTML = filtered.map(createDestCard).join('');
    bindWishlistButtons(grid);
  };

  App.renderExplorer = () => {
    const grid = document.getElementById('explorerGrid');
    const emptyMsg = document.getElementById('explorerEmpty');
    if (!grid) return;
    const searchEl = document.getElementById('explorerSearch');
    explorerSearchTerm = searchEl ? searchEl.value.toLowerCase() : '';
    const sortEl = document.getElementById('explorerSort');
    explorerSortBy = sortEl ? sortEl.value : 'popularity';

    let results = App.DATA.destinations.filter(d =>
      d.name.toLowerCase().includes(explorerSearchTerm) ||
      d.country.toLowerCase().includes(explorerSearchTerm) ||
      d.desc.toLowerCase().includes(explorerSearchTerm)
    );

    switch (explorerSortBy) {
      case 'rating': results.sort((a, b) => b.rating - a.rating); break;
      case 'price-low': results.sort((a, b) => a.price - b.price); break;
      case 'price-high': results.sort((a, b) => b.price - a.price); break;
      case 'alpha': results.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: results.sort((a, b) => b.popularity - a.popularity);
    }

    if (results.length === 0) {
      grid.innerHTML = '';
      if (emptyMsg) emptyMsg.classList.remove('hidden');
    } else {
      if (emptyMsg) emptyMsg.classList.add('hidden');
      grid.innerHTML = results.map(createDestCard).join('');
      bindWishlistButtons(grid);
    }
  };

  const bindWishlistButtons = (container) => {
    container.querySelectorAll('.dest-wishlist').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-dest-id');
        if (App.Wishlist) App.Wishlist.toggle(id);
      });
    });
  };

  const initFilters = () => {
    const destBar = document.getElementById('destFilterBar');
    if (destBar) {
      destBar.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
          destBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          currentFilter = e.target.getAttribute('data-filter');
          App.renderDestinations();
        }
      });
    }

    const searchEl = document.getElementById('explorerSearch');
    if (searchEl) searchEl.addEventListener('input', App.renderExplorer);

    const sortEl = document.getElementById('explorerSort');
    if (sortEl) sortEl.addEventListener('change', App.renderExplorer);
  };

  App.renderExperiences = () => {
    const grid = document.getElementById('expGrid');
    if (!grid) return;
    grid.innerHTML = App.DATA.experiences.map(exp => `
      <div class="exp-card">
        <img src="${exp.img}" alt="${exp.name}" loading="lazy">
        <div class="exp-overlay">
          <div class="exp-title">${exp.name}</div>
          <div class="exp-count">${exp.count} experiences</div>
          <div class="exp-desc">${exp.desc}</div>
        </div>
      </div>
    `).join('');
  };

  document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    App.renderDestinations();
    App.renderExplorer();
    App.renderExperiences();
  });
})();