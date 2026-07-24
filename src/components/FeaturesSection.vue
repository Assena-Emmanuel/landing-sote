<script setup>
const features = [
  {
    title: 'Suivi des loyers et paiements',
    desc: "Visualisez les loyers reçus, en attente ou impayés, mois par mois, en un coup d'œil.",
    icon: 'payment',
  },
  {
    title: 'Gestion des biens et locataires',
    desc: 'Centralisez toutes vos propriétés et vos locataires en un seul endroit, accessible partout.',
    icon: 'home',
  },
  {
    title: 'Tableau de bord en temps réel',
    desc: "Une vue d'ensemble claire de vos revenus, vos biens et vos locataires, mise à jour instantanément.",
    icon: 'dashboard',
  },
  {
    title: 'Transactions et historique',
    desc: 'Retrouvez tous vos paiements passés et vos quittances archivées à tout moment.',
    icon: 'history',
  },
  {
    title: 'Mise en relation avec des artisans',
    desc: 'Trouvez rapidement un plombier, un électricien ou un menuisier de confiance pour vos biens.',
    icon: 'tools',
  },
  {
    title: 'Notifications et alertes',
    desc: 'Paiement reçu, mission acceptée, réclamation ouverte — soyez informé au bon moment.',
    icon: 'notification',
  },
]
</script>

<template>
  <section class="features-section">
    <!-- Background -->
    <div class="background" aria-hidden="true"></div>

    <div class="wrap">

      <!-- Section header -->
      <header class="section-head">
        <span class="kicker">Fonctionnalités clés</span>
        <h2>Tout ce qu'il faut pour gérer une location</h2>
        <p>Une application complète, pensée pour simplifier chaque étape de la gestion immobilière.</p>
      </header>

      <!-- Features grid -->
      <div class="features-grid">

        <article
          v-for="feature in features"
          :key="feature.title"
          class="fcard"
        >
          
          <!-- Icon Container -->
          <div class="fic" aria-hidden="true">
            <!-- Payment -->
            <svg v-if="feature.icon === 'payment'" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 10h18" />
            </svg>

            <!-- Home -->
            <svg v-else-if="feature.icon === 'home'" viewBox="0 0 24 24">
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
            </svg>

            <!-- Dashboard -->
            <svg v-else-if="feature.icon === 'dashboard'" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>

            <!-- History -->
            <svg v-else-if="feature.icon === 'history'" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>

            <!-- Tools -->
            <svg v-else-if="feature.icon === 'tools'" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>

            <!-- Notification -->
            <svg v-else viewBox="0 0 24 24">
              <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>

          <!-- Text Content -->
          <div class="fcard-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>

          <!-- Hover Accent Line -->
          <div class="card-accent"></div>

        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* =========================================
   SECTION
========================================= */
.features-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 120px 0;
}

/* =========================================
   BACKGROUND (Dynamic Halo)
========================================= */
.background {
  position: absolute;
  inset: -20px;
  z-index: -1;
  background:
    radial-gradient(circle at 50% -20%, rgba(228, 241, 232, 0.25), transparent 60%),
    linear-gradient(rgba(20, 55, 35, 0.75), rgba(15, 40, 25, 0.88)),
    url("../assets/images/site_background.jpg") center / cover no-repeat;
  filter: blur(6px);
  transform: scale(1.05);
}

/* =========================================
   WRAPPER
========================================= */
.wrap {
  width: min(1180px, calc(100% - 56px));
  margin: 0 auto;
}

/* =========================================
   SECTION HEADER
========================================= */
.section-head {
  max-width: 640px;
  margin: 0 auto 64px;
  text-align: center;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 6px 18px;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-light);
  background: rgba(228, 241, 232, 0.08);
  border: 1px solid rgba(228, 241, 232, 0.2);
  border-radius: 50px;
  backdrop-filter: blur(8px);
}

.section-head h2 {
  margin: 0 0 18px;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 850;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--white);
}

.section-head p {
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(228, 241, 232, 0.8);
}

/* =========================================
   FEATURES GRID
========================================= */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

/* =========================================
   CARD (Premium Glass)
========================================= */
.fcard {
  position: relative;
  min-height: 220px; /* Flexible height instead of fixed */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 32px 36px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(16px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  cursor: default;
  transition: 
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
    box-shadow 0.3s ease, 
    border-color 0.3s ease,
    background 0.3s ease;
}

.fcard:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.10);
  border-color: rgba(228, 241, 232, 0.3);
  box-shadow: 
    0 24px 60px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* =========================================
   ICON (Solid & Impactful)
========================================= */
.fic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  margin-bottom: 24px;
  border-radius: 50%;
  background: var(--green-primary);
  color: var(--white);
  box-shadow: 0 8px 24px rgba(45, 90, 61, 0.4);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
}

.fcard:hover .fic {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 16px 32px rgba(45, 90, 61, 0.5);
}

.fic svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* =========================================
   CONTENT
========================================= */
.fcard-content {
  z-index: 1;
}

.fcard h3 {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 750;
  line-height: 1.3;
  color: var(--white);
}

.fcard p {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(228, 241, 232, 0.7);
}

/* =========================================
   HOVER ACCENT LINE
========================================= */
.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--green-light);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fcard:hover .card-accent {
  transform: scaleX(1);
}

/* =========================================
   RESPONSIVE - TABLET
========================================= */
@media (max-width: 860px) {
  .features-section { padding: 100px 0; }
  .features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .fcard { min-height: 200px; padding: 36px 28px 32px; }
}

/* =========================================
   RESPONSIVE - MOBILE
========================================= */
@media (max-width: 600px) {
  .features-section { padding: 80px 0; }
  .wrap { width: min(100% - 32px, 1180px); }
  .section-head { margin-bottom: 48px; }
  .features-grid { grid-template-columns: 1fr; gap: 20px; }
  .fcard { min-height: auto; padding: 32px 24px 28px; }
  .fic { width: 48px; height: 48px; margin-bottom: 20px; }
  .fic svg { width: 22px; height: 22px; }
  .fcard h3 { font-size: 18px; }
  .fcard p { font-size: 14px; }
}

/* =========================================
   REDUCED MOTION
========================================= */
@media (prefers-reduced-motion: reduce) {
  .fcard, .fic, .card-accent { transition: none; }
}
</style>