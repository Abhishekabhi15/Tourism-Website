(() => {
  const STORAGE_KEY = 'wv_wishlist';

  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  };

  const save = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

  const updateCount = () => {
    const el = document.getElementById('wishlistCount');
    if (el) el.textContent = load().length;
  };

  App.Wishlist = {
    has: (id) => load().includes(id),

    toggle: (id) => {
      let items = load();
      if (items.includes(id)) {
        items = items.filter(i => i !== id);
      } else {
        items.push(id);
      }
      save(items);
      updateCount();
      refreshButtons();
      if (typeof App.renderDestinations === 'function') App.renderDestinations();
      if (typeof App.renderExplorer === 'function') App.renderExplorer();
    },

    remove: (id) => {
      const items = load().filter(i => i !== id);
      save(items);
      updateCount();
      refreshButtons();
      renderWishlistModal();
      if (typeof App.renderDestinations === 'function') App.renderDestinations();
      if (typeof App.renderExplorer === 'function') App.renderExplorer();
    },

    getAll: () => load()
  };

  const refreshButtons = () => {
    document.querySelectorAll('.dest-wishlist').forEach(btn => {
      const id = btn.getAttribute('data-dest-id');
      const wished = App.Wishlist.has(id);
      btn.classList.toggle('active', wished);
      btn.innerHTML = wished ? '&#10084;' : '&#9825;';
    });
  };

  const renderWishlistModal = () => {
    const content = document.getElementById('wishlistContent');
    if (!content) return;
    const ids = App.Wishlist.getAll();
    if (ids.length === 0) {
      content.innerHTML = '<div class="wishlist-empty"><p style="font-size:2rem;margin-bottom:12px;">&#9825;</p><p>Your wishlist is empty</p><p style="font-size:0.85rem;margin-top:8px;">Click the heart icon on destinations to add them here.</p></div>';
      return;
    }
    const dests = App.DATA.destinations.filter(d => ids.includes(d.id));
    content.innerHTML = dests.map(d => `
      <div class="wishlist-item">
        <img src="${d.img}" alt="${d.name}">
        <div class="wishlist-item-info">
          <div class="wishlist-item-name">${d.name}, ${d.country}</div>
          <div style="font-size:0.8rem;color:var(--text-muted);">&#11088; ${d.rating}</div>
        </div>
        <button class="wishlist-item-remove" data-remove-id="${d.id}" aria-label="Remove from wishlist">&times;</button>
      </div>
    `).join('');

    content.querySelectorAll('.wishlist-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        App.Wishlist.remove(btn.getAttribute('data-remove-id'));
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    updateCount();

    const wishlistToggle = document.getElementById('wishlistToggle');
    if (wishlistToggle) {
      wishlistToggle.addEventListener('click', () => {
        renderWishlistModal();
        App.openModal('wishlistModal');
      });
    }
  });
})();