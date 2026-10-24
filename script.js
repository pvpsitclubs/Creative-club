/**
 * CREATIVE CLUB — PVPSIT (CSM & CSD)
 * Interactive Script: Dynamic Rendering, Batch Switcher, Gallery Lightbox,
 * Cursor Animation, and Scroll Interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Current active states
  let currentBatch = "batch2026";
  let currentGalleryYear = "year2025";
  let currentGalleryCategory = "all";
  let lightboxItems = [];
  let currentLightboxIndex = 0;

  /* ==========================================================================
     1. CUSTOM CURSOR
     ========================================================================== */
  const initCustomCursor = () => {
    const dot = document.querySelector(".custom-cursor-dot");
    const outline = document.querySelector(".custom-cursor-outline");

    if (!dot || !outline || window.matchMedia("(pointer: coarse)").matches) return;

    window.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      outline.animate(
        { transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` },
        { duration: 180, fill: "forwards" }
      );
    });

    // Add cursor hover effect for interactive elements
    const interactiveSelectors = 'a, button, .coordinator-card, .gallery-item, .showcase-card, .tab-btn, .filter-chip';
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(interactiveSelectors)) {
        outline.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(interactiveSelectors)) {
        outline.classList.remove("cursor-hover");
      }
    });
  };

  /* ==========================================================================
     2. NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  const initNavigation = () => {
    const navbar = document.querySelector(".main-navbar");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const navLinks = document.querySelectorAll(".nav-link-item a, .mobile-nav-links a");

    // Sticky nav shadow
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    });

    // Mobile drawer toggle
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains("open");
      mobileDrawer?.classList.toggle("open", isOpen);
      mobileOverlay?.classList.toggle("active", isOpen);
      navToggle?.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    navToggle?.addEventListener("click", () => toggleMenu());
    mobileOverlay?.addEventListener("click", () => toggleMenu(false));

    // Nav smooth scroll and close drawer
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          toggleMenu(false);
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // Active Section Spy
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    });
  };

  /* ==========================================================================
     3. COORDINATORS SECTION & BATCH SWITCHER
     ========================================================================== */
  const renderCoordinators = (batchKey) => {
    const container = document.getElementById("coordinatorsGrid");
    if (!container || !clubData.coordinators[batchKey]) return;

    const list = clubData.coordinators[batchKey];
    container.innerHTML = "";

    list.forEach((coord, idx) => {
      const card = document.createElement("div");
      card.className = "coordinator-card reveal-on-scroll is-revealed";
      card.style.animationDelay = `${idx * 0.1}s`;

      card.innerHTML = `
        <div class="coordinator-media" data-photo="${coord.image}" data-name="${coord.name}" title="Click to view full portrait">
          <img src="${coord.image}" alt="${coord.name}" loading="lazy" onerror="this.src='images/branding/header.png'">
          <span class="coordinator-dept-badge">${coord.dept}</span>
          <div class="coordinator-expand-hint"><i class="fa-solid fa-expand"></i></div>
        </div>
        <div class="coordinator-body">
          <div class="coordinator-meta">
            <h4 class="coordinator-name">${coord.name}</h4>
            <p class="coordinator-role">${coord.role} ${coord.regNo ? `• <span class="coord-regno-tag">${coord.regNo}</span>` : ''}</p>
            <div class="coordinator-quote-text">"${coord.quote}"</div>
            ${coord.isPlaceholder
          ? `<span class="placeholder-notice-badge"><i class="fa-solid fa-clock"></i> ${coord.note || 'Photo Coming Soon'}</span>`
          : ''
        }
          </div>
          <div class="coordinator-footer">
            <span class="coordinator-batch-pill">${coord.batch}</span>
            <div class="coordinator-social">
              <a href="${coord.linkedin}" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn profile">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:creativeclub.csmd26@gmail.com" title="Email" aria-label="Send email">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      `;

      // Click to view full portrait in Lightbox
      card.querySelector(".coordinator-media")?.addEventListener("click", () => {
        openLightbox(0, [
          {
            src: coord.image,
            title: `${coord.name} — ${coord.role}`,
            caption: `${coord.dept} • ${coord.batch} • "${coord.quote}"`,
            year: coord.batch
          }
        ]);
      });

      container.appendChild(card);
    });
  };

  const initCoordinatorTabs = () => {
    const tabBtns = document.querySelectorAll(".coordinator-tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        tabBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        currentBatch = this.getAttribute("data-batch");
        renderCoordinators(currentBatch);
      });
    });

    // Initial render
    renderCoordinators(currentBatch);
  };

  /* ==========================================================================
     4. ACTIVITIES & WHAT WE DO SECTION (2025 vs 2026 Batch Tabs)
     ========================================================================== */
  let currentActivityYear = "year2026";

  const renderActivities = (yearKey) => {
    const container = document.getElementById("activitiesGrid");
    if (!container || !clubData.activities || !clubData.activities[yearKey]) return;

    const list = clubData.activities[yearKey];
    container.innerHTML = "";

    list.forEach((act, idx) => {
      const card = document.createElement("div");
      card.className = "activity-card reveal-on-scroll is-revealed";
      card.style.setProperty("--card-accent", act.accent);
      card.style.animationDelay = `${idx * 0.1}s`;

      card.innerHTML = `
        <div>
          <div class="activity-icon-wrap">
            <i class="fa-solid ${act.icon}"></i>
          </div>
          <p class="activity-category">${act.category}</p>
          <h3 class="activity-title">${act.title}</h3>
          <p class="activity-desc">${act.shortDesc}</p>
        </div>
        <div class="activity-tags">
          ${act.highlights.map((h) => `<span class="activity-tag-pill">${h}</span>`).join("")}
        </div>
      `;
      container.appendChild(card);
    });
  };

  const initActivityTabs = () => {
    const tabBtns = document.querySelectorAll(".activity-tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        tabBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        currentActivityYear = this.getAttribute("data-year");
        renderActivities(currentActivityYear);
      });
    });

    renderActivities(currentActivityYear);
  };

  /* ==========================================================================
     5. GALLERY SECTION & LIGHTBOX CONTROLLER
     ========================================================================== */
  const renderGallery = () => {
    const container = document.getElementById("galleryGrid");
    if (!container || !clubData.gallery[currentGalleryYear]) return;

    const allYearItems = clubData.gallery[currentGalleryYear];
    const filtered =
      currentGalleryCategory === "all"
        ? allYearItems
        : allYearItems.filter((item) => item.category === currentGalleryCategory);

    // Save for lightbox access
    lightboxItems = filtered;
    container.innerHTML = "";

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fa-solid fa-images" style="font-size: 2rem; color: var(--accent-lime); margin-bottom: 12px; display: block;"></i>
          <p>No photos in this category yet. Check back soon!</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item, idx) => {
      const el = document.createElement("div");
      // Give every 4th item a wide span for visual rhythm
      const isWide = idx % 5 === 0;
      el.className = `gallery-item ${isWide ? "span-2" : ""} reveal-on-scroll is-revealed`;
      el.setAttribute("data-index", idx);

      el.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy" onerror="this.src='images/branding/header.png'">
        <div class="gallery-item-overlay">
          <span class="gallery-top-badge">${item.tag || item.year}</span>
          <div class="gallery-bottom-info">
            <div class="gallery-title-box">
              <h4>${item.title}</h4>
              <p>${item.caption}</p>
            </div>
            <button class="gallery-expand-btn" title="View Fullscreen" aria-label="View Fullscreen">
              <i class="fa-solid fa-expand"></i>
            </button>
          </div>
        </div>
      `;

      el.addEventListener("click", () => {
        openLightbox(idx, filtered);
      });

      container.appendChild(el);
    });
  };

  const initGalleryControls = () => {
    // Year Switcher
    const yearBtns = document.querySelectorAll(".gallery-year-btn");
    yearBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        yearBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        currentGalleryYear = this.getAttribute("data-year");
        renderGallery();
      });
    });

    // Category Filter Chips
    const filterChips = document.querySelectorAll(".filter-chip");
    filterChips.forEach((chip) => {
      chip.addEventListener("click", function () {
        filterChips.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        currentGalleryCategory = this.getAttribute("data-category");
        renderGallery();
      });
    });

    // Initial render
    renderGallery();
  };



  /* ==========================================================================
     7. FULLSCREEN LIGHTBOX CONTROLLER
     ========================================================================== */
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  const openLightbox = (index, itemsArray) => {
    lightboxItems = itemsArray || lightboxItems;
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal?.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightboxModal?.classList.remove("active");
    document.body.style.overflow = "";
  };

  const updateLightboxContent = () => {
    if (!lightboxItems || lightboxItems.length === 0) return;
    const current = lightboxItems[currentLightboxIndex];
    if (!current) return;

    if (lightboxImg) {
      lightboxImg.src = current.src;
      lightboxImg.alt = current.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = current.title;
    if (lightboxCaption) lightboxCaption.textContent = current.caption;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${lightboxItems.length}`;
    }

    // Toggle navigation buttons visibility if only 1 item
    if (lightboxPrev && lightboxNext) {
      const showArrows = lightboxItems.length > 1;
      lightboxPrev.style.display = showArrows ? "flex" : "none";
      lightboxNext.style.display = showArrows ? "flex" : "none";
    }
  };

  const nextLightboxImage = () => {
    if (lightboxItems.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
    updateLightboxContent();
  };

  const prevLightboxImage = () => {
    if (lightboxItems.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    updateLightboxContent();
  };

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxNext?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextLightboxImage();
  });
  lightboxPrev?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevLightboxImage();
  });

  // Close when clicking modal backdrop
  lightboxModal?.addEventListener("click", (e) => {
    if (e.target === lightboxModal || e.target.classList.contains("lightbox-container")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!lightboxModal?.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextLightboxImage();
    if (e.key === "ArrowLeft") prevLightboxImage();
  });

  /* ==========================================================================
     8. BACK TO TOP BUTTON
     ========================================================================== */
  const initBackToTop = () => {
    const backBtn = document.getElementById("backToTopBtn");
    if (!backBtn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backBtn.classList.add("visible");
      } else {
        backBtn.classList.remove("visible");
      }
    });

    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  /* ==========================================================================
     9. SCROLL REVEAL ANIMATIONS
     ========================================================================== */
  const initScrollReveal = () => {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((el) => observer.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-revealed"));
    }
  };

  /* ==========================================================================
     9.5. EVENTS 2026 & OFFICIAL WINNERS RENDERING (Streamlined & Visual)
     ========================================================================== */
  const renderEvents2026 = () => {
    const container = document.getElementById("events2026Container");
    if (!container || !clubData.events2026) return;

    container.innerHTML = "";

    clubData.events2026.forEach((ev) => {
      const card = document.createElement("article");
      card.className = "flagship-event-card reveal-on-scroll is-revealed";
      card.id = `event-${ev.slug}`;

      // Build compact winners HTML
      let winnersHtml = "";
      ev.winners.forEach((w) => {
        const medalClass =
          w.medal === "gold" ? "first-prize" : w.medal === "silver" ? "second-prize" : "third-prize";
        const medalIcon =
          w.medal === "gold"
            ? '<i class="fa-solid fa-trophy"></i> 1st Prize'
            : w.medal === "silver"
              ? '<i class="fa-solid fa-medal"></i> 2nd Prize'
              : '<i class="fa-solid fa-award"></i> 3rd Prize';

        let membersHtml = "";
        w.team.forEach((m) => {
          membersHtml += `
            <div class="member-item">
              <h5 class="member-name">${m.name}</h5>
              <p class="member-regno"><i class="fa-solid fa-id-card"></i> ${m.regNo}</p>
              <p class="member-branch-year">${m.year} • ${m.dept}</p>
            </div>
          `;
        });

        winnersHtml += `
          <div class="winner-card ${medalClass}">
            <div class="winner-photo-wrapper" data-photo="${w.photo}" data-title="${w.title} — ${ev.title}" data-caption="${w.caption}">
              <img src="${w.photo}" alt="${w.title}" loading="lazy" onerror="this.src='images/branding/header.png'">
              <div class="winner-rank-badge">${medalIcon}</div>
              <div class="winner-expand-icon" title="View Full Portrait"><i class="fa-solid fa-expand"></i></div>
            </div>
            <div class="winner-body">
              <div class="winner-team-members">
                ${membersHtml}
              </div>
              <div class="winner-card-footer">
                <span class="verified-badge"><i class="fa-solid fa-circle-check"></i> ${w.title}</span>
                <span class="winner-event-tag">${ev.title}</span>
              </div>
            </div>
          </div>
        `;
      });

      card.innerHTML = `
        <!-- Compact Event Header (Reduced size for Pass the Plot & Beyond the Mark) -->
        <div class="event-header-compact">
          <!-- Left: Compact Event Poster with zoom preview -->
          <div class="event-poster-compact" data-photo="${ev.coverImage}" data-title="${ev.title} — Official Event Poster" data-caption="${ev.tagline}">
            <img src="${ev.coverImage}" alt="${ev.title}" loading="lazy" onerror="this.src='images/branding/header.png'">
            <div class="event-poster-pill"><i class="fa-solid fa-magnifying-glass-plus"></i> View Poster</div>
          </div>

          <!-- Right: Compact Event Information -->
          <div class="event-info-compact">
            <div class="event-meta-tags-compact">
              <span class="event-status-pill"><i class="fa-solid fa-calendar-check"></i> ${ev.date}</span>
              <span class="event-venue-pill"><i class="fa-solid fa-location-dot"></i> Room No. 247, CSE Lab</span>
              <span class="event-format-pill"><i class="fa-solid fa-users"></i> ${ev.type}</span>
              <span class="event-count-pill"><i class="fa-solid fa-user-group"></i> ${ev.participants} Participants</span>
            </div>
            <h3 class="event-title-compact">${ev.title}</h3>
            <p class="event-tagline-compact">"${ev.tagline}"</p>
            <p class="event-description-compact">${ev.description}</p>
          </div>
        </div>

        <!-- Full-Width Prominent Prize Winners Showcase -->
        <div class="winners-showcase-section">
          <div class="winners-section-heading">
            <div class="heading-title-group">
              <i class="fa-solid fa-trophy trophy-gold-glow"></i>
              <h4>Official Prize Winners &amp; Felicitations</h4>
            </div>
            <span class="winners-verified-pill"><i class="fa-solid fa-circle-check"></i> Verified Department Awards</span>
          </div>
          <div class="winners-grid-prominent">
            ${winnersHtml}
          </div>
        </div>
      `;

      // Attach click events for poster and winner photos to open in Lightbox
      card.querySelectorAll(".event-poster-compact, .winner-photo-wrapper").forEach((item) => {
        item.addEventListener("click", () => {
          const photo = item.getAttribute("data-photo");
          const title = item.getAttribute("data-title");
          const caption = item.getAttribute("data-caption");
          openLightbox(0, [
            {
              src: photo,
              title: title,
              caption: caption,
              year: "2026"
            }
          ]);
        });
      });

      container.appendChild(card);
    });
  };

  /* ==========================================================================
     9.6. 2025 EVENT HIGHLIGHTS LIGHTBOX INTERACTION
     ========================================================================== */
  const initHighlights2025 = () => {
    const items = document.querySelectorAll(".highlight-item");
    if (!items.length) return;

    const highlightsArray = Array.from(items).map((item) => ({
      src: item.getAttribute("data-photo"),
      title: item.getAttribute("data-title"),
      caption: item.getAttribute("data-caption"),
      year: "2025"
    }));

    items.forEach((item, idx) => {
      item.addEventListener("click", () => {
        openLightbox(idx, highlightsArray);
      });
    });
  };

  /* ==========================================================================
     10. INITIALIZATION
     ========================================================================== */
  initCustomCursor();
  initNavigation();
  initCoordinatorTabs();
  renderEvents2026();
  initHighlights2025();
  initActivityTabs();
  initGalleryControls();
  initBackToTop();
  initScrollReveal();
});
