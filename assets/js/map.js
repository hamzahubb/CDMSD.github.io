/**
 * CDMSD — Interactive Pakistan Geographic Presence Map
 * Renders an accessible, responsive vector map of Pakistan
 * with interactive pins for documented project locations:
 * - Islamabad (SBDRM Master Trainer Training)
 * - Thar Desert, Sindh (Drought Response & Multi-sector Evaluation)
 * - Bajaur, KP (Livelihood & DRR Uplift)
 * - Mohmand, KP (Livelihood & DRR Uplift)
 * - Jhang, Punjab (Flood WASH & Loss Assessment)
 * - Azad Jammu & Kashmir (AJK Flood Assessment)
 * - Muzaffargarh, Punjab (Flood WASH & Loss Assessment)
 */

document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('pakistan-map-container');
  const locationListEl = document.getElementById('map-locations-list');
  const mapDetailCard = document.getElementById('map-detail-card');

  if (!mapContainer || !window.CDMSD_DATA) return;

  const locations = window.CDMSD_DATA.geographicLocations;

  // Custom vector coordinate mapping for Pakistan projection
  // Lat: ~23.5°N (South) to 37°N (North), Lng: 60°E (West) to 77.5°E (East)
  function projectCoordinates(lat, lng) {
    const minLat = 23.5, maxLat = 37.0;
    const minLng = 60.5, maxLng = 77.8;
    
    const x = ((lng - minLng) / (maxLng - minLng)) * 500;
    const y = 500 - ((lat - minLat) / (maxLat - minLat)) * 500;
    return { x: Math.round(x), y: Math.round(y) };
  }

  // Generate SVG Map Markup
  const svgMarkup = `
    <svg viewBox="0 0 520 520" class="pakistan-svg-map" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interactive map of Pakistan showing CDMSD documented project locations">
      <defs>
        <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#168A8A" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#168A8A" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#123047" flood-opacity="0.15"/>
        </filter>
      </defs>

      <!-- Stylized Geographic Contours of Pakistan -->
      <g class="map-boundaries" filter="url(#shadow)">
        <!-- Balochistan & South West -->
        <path class="map-region" d="M 60 380 L 110 330 L 160 310 L 220 340 L 250 420 L 210 450 L 150 440 L 90 420 Z" />
        <!-- Sindh & South East -->
        <path class="map-region" d="M 220 340 L 280 320 L 330 360 L 350 430 L 290 470 L 250 420 Z" />
        <!-- Punjab & Central Plain -->
        <path class="map-region" d="M 220 340 L 270 240 L 340 210 L 380 260 L 350 320 L 280 320 Z" />
        <!-- Khyber Pakhtunkhwa & FATA (North West) -->
        <path class="map-region" d="M 240 210 L 280 130 L 330 110 L 340 180 L 300 240 L 240 230 Z" />
        <!-- Gilgit-Baltistan & AJK (North & North East) -->
        <path class="map-region" d="M 330 110 L 390 70 L 440 90 L 410 160 L 350 170 L 340 120 Z" />
      </g>

      <!-- Province / Territory Annotations -->
      <g class="map-labels" opacity="0.4" font-size="11" font-weight="700" fill="#123047" font-family="Inter, sans-serif" pointer-events="none">
        <text x="130" y="380">BALOCHISTAN</text>
        <text x="270" y="415">SINDH</text>
        <text x="290" y="280">PUNJAB</text>
        <text x="270" y="170">KP</text>
        <text x="360" y="125">GB / AJK</text>
      </g>

      <!-- Documented Project Location Markers -->
      <g id="map-pins">
        ${locations.map((loc) => {
          const pt = projectCoordinates(loc.lat, loc.lng);
          return `
            <g class="map-pin" data-id="${loc.id}" data-name="${loc.name}" tabindex="0" role="button" aria-label="${loc.name}: ${loc.projectTitle}">
              <circle cx="${pt.x}" cy="${pt.y}" r="12" fill="url(#pinGlow)" class="map-pin-pulse" />
              <circle cx="${pt.x}" cy="${pt.y}" r="6" fill="#123047" stroke="#ffffff" stroke-width="2" />
              <circle cx="${pt.x}" cy="${pt.y}" r="3" fill="#E49A45" />
            </g>
          `;
        }).join('')}
      </g>
    </svg>
  `;

  mapContainer.innerHTML = svgMarkup;

  // Render Sidebar List of Locations
  if (locationListEl) {
    locationListEl.innerHTML = locations.map((loc, idx) => `
      <div class="location-item ${idx === 0 ? 'active' : ''}" data-id="${loc.id}">
        <div class="location-item-header">
          <span class="location-name">${loc.name}</span>
          <span class="badge-verification badge-verified">Verified</span>
        </div>
        <div class="location-project-title">${loc.projectTitle}</div>
        <div style="margin-top: 0.35rem; font-size: 0.725rem; color: var(--color-slate-muted);">
          <strong>Region:</strong> ${loc.province} &bull; <strong>Scope:</strong> ${loc.focus}
        </div>
      </div>
    `).join('');
  }

  // Update Detail Card View
  function setActiveLocation(locId) {
    const loc = locations.find(l => l.id === locId) || locations[0];

    // Highlight active pin
    document.querySelectorAll('.map-pin').forEach(pin => {
      if (pin.getAttribute('data-id') === loc.id) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });

    // Highlight active sidebar item
    document.querySelectorAll('.location-item').forEach(item => {
      if (item.getAttribute('data-id') === loc.id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update Detail Card if present
    if (mapDetailCard) {
      mapDetailCard.innerHTML = `
        <div style="padding: 1.5rem; background: var(--color-offwhite); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span class="badge-verification badge-verified">Documented Field Touchpoint</span>
            <span style="font-size: 0.75rem; color: var(--color-slate-muted); font-weight: 600;">${loc.province}</span>
          </div>
          <h3 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.5rem;">${loc.name}</h3>
          <p style="font-size: 0.875rem; color: var(--color-slate); margin-bottom: 0.75rem;">
            <strong>Documented Work:</strong> ${loc.projectTitle}
          </p>
          <p style="font-size: 0.8125rem; color: var(--color-slate-light); margin-bottom: 1rem;">
            <strong>Thematic Focus:</strong> ${loc.focus} (${loc.year})
          </p>
          <a href="/projects/${loc.projectSlug}/" class="btn btn-primary btn-sm" style="width: 100%;">
            View Documented Assignment Details &rarr;
          </a>
        </div>
      `;
    }
  }

  // Event Listeners for pins
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const locId = pin.getAttribute('data-id');
      setActiveLocation(locId);
    });
    pin.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const locId = pin.getAttribute('data-id');
        setActiveLocation(locId);
      }
    });
  });

  // Event Listeners for sidebar items
  if (locationListEl) {
    locationListEl.querySelectorAll('.location-item').forEach(item => {
      item.addEventListener('click', () => {
        const locId = item.getAttribute('data-id');
        setActiveLocation(locId);
      });
    });
  }

  // Initialize with first location
  if (locations.length > 0) {
    setActiveLocation(locations[0].id);
  }
});
