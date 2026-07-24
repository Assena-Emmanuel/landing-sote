<script setup>
const profiles = [
  {
    id: 1,
    title: 'Propriétaire',
    description:
      'Gérez vos biens et vos loyers, suivez les paiements en temps réel et gardez un historique complet de chaque location.',
    icon: 'home',
  },
  {
    id: 2,
    title: 'Locataire',
    description:
      'Payez votre loyer en quelques secondes, suivez votre logement et recevez automatiquement vos quittances.',
    icon: 'user',
  },
  {
    id: 3,
    title: 'Artisan / Prestataire',
    description:
      'Proposez vos services de plomberie, électricité, menuiserie et plus, et recevez des missions directement via l’application.',
    icon: 'tools',
  },
]
</script>

<template>
  <section class="section">
    <!-- BACKGROUND -->
    <div class="background" aria-hidden="true"></div>

    <div class="wrap">

      <!-- SECTION HEADER -->
      <header class="section-head">
        <span class="kicker">Trois profils, une seule plateforme</span>
        <h2>Que vous soyez propriétaire, locataire ou artisan</h2>
        <p>Sotê s’adapte à votre rôle et connecte tous les acteurs de la gestion immobilière sur une même application.</p>
      </header>

      <!-- PROFILES -->
      <div class="profiles-grid">

        <article
          v-for="profile in profiles"
          :key="profile.id"
          class="profile-card"
        >
          <!-- ICON -->
          <div class="profile-ic" aria-hidden="true">
            <!-- HOME -->
            <svg v-if="profile.icon === 'home'" viewBox="0 0 24 24">
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
            </svg>

            <!-- USER -->
            <svg v-else-if="profile.icon === 'user'" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
            </svg>

            <!-- TOOLS -->
            <svg v-else viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          </div>

          <!-- CONTENT -->
          <div class="profile-content">
            <h3>{{ profile.title }}</h3>
            <p>{{ profile.description }}</p>
          </div>

          <!-- HOVER ACCENT LINE -->
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
.section {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  padding: 120px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* =========================================
   BACKGROUND (Dynamic Halo)
========================================= */
.background {
  position: absolute;
  inset: -20px;
  z-index: -2;
  background:
    radial-gradient(circle at 50% -10%, rgba(228, 241, 232, 0.25), transparent 55%),
    linear-gradient(rgba(20, 55, 35, 0.88), rgba(15, 40, 25, 0.98)),
    url("../assets/images/bg.jpg") center / cover no-repeat;
  filter: blur(6px);
  transform: scale(1.05);
}

/* =========================================
   CONTAINER
========================================= */
.wrap {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
}

/* =========================================
   HEADER
========================================= */
.section-head {
  max-width: 700px;
  margin: 0 auto 72px;
  text-align: center;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
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
  font-size: clamp(32px, 4.5vw, 46px);
  font-weight: 850;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--white);
}

.section-head p {
  max-width: 620px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(228, 241, 232, 0.8);
}

/* =========================================
   GRID
========================================= */
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

/* =========================================
   CARD (Premium Glass)
========================================= */
.profile-card {
  position: relative;
  min-height: 320px; /* Flexible height instead of fixed 390px */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 44px 36px 40px;
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

.profile-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.10);
  border-color: rgba(228, 241, 232, 0.3);
  box-shadow: 
    0 28px 60px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* =========================================
   ICON (Solid & Impactful)
========================================= */
.profile-ic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  margin-bottom: 28px;
  border-radius: 50%;
  background: var(--green-primary);
  color: var(--white);
  box-shadow: 0 10px 24px rgba(45, 90, 61, 0.4);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
}

.profile-card:hover .profile-ic {
  transform: translateY(-8px) scale(1.08);
  box-shadow: 0 16px 32px rgba(45, 90, 61, 0.5);
}

.profile-ic svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* =========================================
   CONTENT
========================================= */
.profile-content {
  z-index: 1;
}

.profile-card h3 {
  margin: 0 0 14px;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.3;
  color: var(--white);
}

.profile-card p {
  margin: 0;
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(228, 241, 232, 0.75);
}

/* =========================================
   HOVER ACCENT LINE
========================================= */
.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--green-light);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.profile-card:hover .card-accent {
  transform: scaleX(1);
}

/* =========================================
   RESPONSIVE - TABLET
========================================= */
@media (max-width: 950px) {
  .section { padding: 100px 0; }
  .profiles-grid { grid-template-columns: repeat(2, 1fr); }
  .profile-card { min-height: 280px; }
}

/* =========================================
   RESPONSIVE - MOBILE
========================================= */
@media (max-width: 650px) {
  .section { padding: 80px 0; }
  .wrap { padding: 0 20px; }
  .section-head { margin-bottom: 48px; }
  .profiles-grid { grid-template-columns: 1fr; gap: 24px; }
  
  .profile-card {
    min-height: auto;
    padding: 36px 28px 32px;
  }

  .profile-ic {
    width: 52px;
    height: 52px;
    margin-bottom: 22px;
  }

  .profile-ic svg {
    width: 24px;
    height: 24px;
  }

  .profile-card h3 {
    font-size: 20px;
  }

  .profile-card p {
    font-size: 14.5px;
  }
}

/* =========================================
   REDUCED MOTION
========================================= */
@media (prefers-reduced-motion: reduce) {
  .profile-card, .profile-ic, .card-accent { transition: none; }
}
</style>