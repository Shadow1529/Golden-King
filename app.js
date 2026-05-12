/* ════════════════════════════════════════════════════════════════════════════ */
/* KING OF GOLDS - APPLICATION LOGIC */
/* ════════════════════════════════════════════════════════════════════════════ */

// ════════════════ INITIALIZATION ════════════════
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Set up event listeners
  setupEventListeners();
  
  // Set footer year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Load leaderboard
  renderLeaderboard();
}

// ════════════════ NAVIGATION ════════════════
function setupEventListeners() {
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleHamburger);
  }

  // Leaderboard search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      filterLeaderboard(e.target.value);
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Update Discord link
  const discordLink = CONFIG.SERVER.INVITE_URL;
  document.querySelectorAll('a[href*="discord.gg"]').forEach(link => {
    link.href = discordLink;
  });
}

function show(id, btn) {
  if (btn) {
    document.querySelectorAll('.mobile-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  
  document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
  window.scrollTo(0, 0);
}

function toggleHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('mobileMenu').classList.remove('active');
}

// ════════════════ LEADERBOARD ════════════════
function renderLeaderboard() {
  const list = document.getElementById('leaderboardList');
  if (!list) return;

  list.innerHTML = CONFIG.LEADERBOARD.map((player, index) => {
    let medal = '';
    if (player.rank === 1) medal = '🥇';
    else if (player.rank === 2) medal = '🥈';
    else if (player.rank === 3) medal = '🥉';
    else medal = `#${player.rank}`;

    return `
      <div class="leaderboard-row" style="animation-delay: ${index * 0.05}s;">
        <div class="rank">${medal}</div>
        <div class="player-info">
          <div class="player-name">${player.name}</div>
          <div class="player-level">Level ${player.level}</div>
        </div>
        <div class="score">
          <div class="score-value">${player.score.toLocaleString()}</div>
          <div class="score-label">Points</div>
        </div>
      </div>
    `;
  }).join('');
}

function filterLeaderboard(query) {
  const query_lower = query.toLowerCase();
  const filtered = CONFIG.LEADERBOARD.filter(player =>
    player.name.toLowerCase().includes(query_lower)
  );

  const list = document.getElementById('leaderboardList');
  if (filtered.length === 0) {
    list.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--muted);">No players found</div>';
    return;
  }

  list.innerHTML = filtered.map((player, index) => {
    let medal = '';
    if (player.rank === 1) medal = '🥇';
    else if (player.rank === 2) medal = '🥈';
    else if (player.rank === 3) medal = '🥉';
    else medal = `#${player.rank}`;

    return `
      <div class="leaderboard-row" style="animation-delay: ${index * 0.05}s;">
        <div class="rank">${medal}</div>
        <div class="player-info">
          <div class="player-name">${player.name}</div>
          <div class="player-level">Level ${player.level}</div>
        </div>
        <div class="score">
          <div class="score-value">${player.score.toLocaleString()}</div>
          <div class="score-label">Points</div>
        </div>
      </div>
    `;
  }).join('');
}

// ════════════════ CONTACT FORM ════════════════
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
  const email = document.querySelector('input[placeholder="your@email.com"]').value.trim();
  const discord = document.querySelector('input[placeholder*="Discord"]').value.trim();
  const message = document.querySelector('textarea').value.trim();
  const status = document.getElementById('formStatus');
  const btn = document.querySelector('.submit-btn');

  if (!message) {
    showStatus(status, 'error', '❌ Please write a message');
    return;
  }

  // Since we don't have a backend, just show success
  btn.disabled = true;
  btn.textContent = 'Sending...';

  setTimeout(() => {
    showStatus(status, 'success', '✓ Message received! We\'ll get back to you soon.');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }, 1500);
}

function showStatus(element, type, message) {
  element.className = `form-status ${type}`;
  element.textContent = message;
  
  if (type === 'success') {
    setTimeout(() => {
      element.textContent = '';
      element.className = 'form-status';
    }, 4000);
  }
}

// ════════════════ SCROLL ANIMATIONS ════════════════
// Add subtle animations on scroll
document.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  
  // Parallax effect on hero background (optional)
  const hero = document.querySelector('.hero');
  if (hero && scrollTop < window.innerHeight) {
    hero.style.backgroundPosition = `0% ${scrollTop * 0.5}px`;
  }
});
