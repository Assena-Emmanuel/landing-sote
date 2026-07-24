```vue
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
  <section class="section features-section">
    <!-- Background -->
    <div class="background" aria-hidden="true"></div>

    <div class="wrap">

      <!-- Section header -->
      <header class="section-head">
        <span class="kicker">
          Fonctionnalités clés
        </span>

        <h2>
          Tout ce qu'il faut pour gérer une location
        </h2>

        <p>
          Une application complète, pensée pour simplifier
          chaque étape de la gestion immobilière.
        </p>
      </header>


      <!-- Features grid -->
      <div class="features-grid">

        <article
          v-for="feature in features"
          :key="feature.title"
          class="fcard"
        >

          <div class="fcard-inner">

            <!-- ============================= -->
            <!-- FRONT                           -->
            <!-- ============================= -->

            <div class="fcard-face fcard-front">

              <div class="fic" aria-hidden="true">

                <!-- Payment -->
                <svg
                  v-if="feature.icon === 'payment'"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                  />
                  <path d="M3 10h18" />
                </svg>


                <!-- Home -->
                <svg
                  v-else-if="feature.icon === 'home'"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V21h14V9.5" />
                </svg>


                <!-- Dashboard -->
                <svg
                  v-else-if="feature.icon === 'dashboard'"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>


                <!-- History -->
                <svg
                  v-else-if="feature.icon === 'history'"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />
                  <path d="M12 7v5l3 3" />
                </svg>


                <!-- Tools -->
                <svg
                  v-else-if="feature.icon === 'tools'"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                  />
                </svg>


                <!-- Notification -->
                <svg
                  v-else
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                  />
                  <path
                    d="M13.73 21a2 2 0 01-3.46 0"
                  />
                </svg>

              </div>


              <h3>
                {{ feature.title }}
              </h3>

              <p>
                {{ feature.desc }}
              </p>

            </div>


            <!-- ============================= -->
            <!-- BACK                            -->
            <!-- ============================= -->

            <div class="fcard-face fcard-back">

              <div class="fic" aria-hidden="true">

                <!-- Payment -->
                <svg
                  v-if="feature.icon === 'payment'"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                  />
                  <path d="M3 10h18" />
                </svg>


                <!-- Home -->
                <svg
                  v-else-if="feature.icon === 'home'"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V21h14V9.5" />
                </svg>


                <!-- Dashboard -->
                <svg
                  v-else-if="feature.icon === 'dashboard'"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>


                <!-- History -->
                <svg
                  v-else-if="feature.icon === 'history'"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />
                  <path d="M12 7v5l3 3" />
                </svg>


                <!-- Tools -->
                <svg
                  v-else-if="feature.icon === 'tools'"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                  />
                </svg>


                <!-- Notification -->
                <svg
                  v-else
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                  />
                  <path
                    d="M13.73 21a2 2 0 01-3.46 0"
                  />
                </svg>

              </div>


              <h3>
                {{ feature.title }}
              </h3>

              <p>
                {{ feature.desc }}
              </p>

            </div>

          </div>

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
  padding: 100px 0;
}


/* =========================================
   BACKGROUND
========================================= */

.background {
  position: absolute;
  inset: -20px;

  z-index: -1;

  background:
    linear-gradient(
      rgba(20, 55, 35, 0.48),
      rgba(20, 55, 35, 0.68)
    ),
    url("../assets/images/site_background.jpg")
    center / cover no-repeat;

  filter: blur(4px);

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
  margin: 0 auto 56px;
  text-align: center;
}


.kicker {
  display: inline-block;
  margin-bottom: 12px;

  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: var(--green-light);
}


.section-head h2 {
  margin: 0 0 14px;

  font-size: clamp(28px, 4vw, 34px);
  font-weight: 800;
  line-height: 1.25;

  color: var(--white);
}


.section-head p {
  margin: 0;

  font-size: 15.5px;
  line-height: 1.6;

  color: var(--green-light);
}


/* =========================================
   FEATURES GRID
========================================= */

.features-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 22px;
}


/* =========================================
   CARD
========================================= */

.fcard {
  height: 200px;

  perspective: 1000px;

  cursor: pointer;
}


/* =========================================
   CARD INNER
========================================= */

.fcard-inner {
  position: relative;

  width: 100%;
  height: 100%;

  transform-style: preserve-3d;

  transition:
    transform 0.7s
    cubic-bezier(0.4, 0.2, 0.2, 1);
}


/* =========================================
   CARD FLIP
========================================= */

.fcard:hover .fcard-inner {
  transform: rotateY(180deg);
}


/* =========================================
   CARD FACE
========================================= */

.fcard-face {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  padding: 28px 24px;

  border-radius: 16px;

  text-align: left;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}


/* =========================================
   FRONT
========================================= */

.fcard-front {
  background: var(--white);

  border: 1px solid var(--line);

  box-shadow:
    0 4px 18px
    rgba(45, 90, 61, 0.05);
}


/* =========================================
   BACK
========================================= */

.fcard-back {
  background: var(--green-dark);

  border: 1px solid var(--green-dark);

  color: var(--white);

  transform: rotateY(180deg);
}


/* =========================================
   ICON
========================================= */

.fic {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  flex-shrink: 0;

  margin-bottom: 18px;

  border-radius: 13px;

  background: var(--green-light);

  color: var(--green-primary);
}


.fic svg {
  width: 20px;
  height: 20px;

  fill: none;

  stroke: currentColor;

  stroke-width: 2;

  stroke-linecap: round;
  stroke-linejoin: round;
}


/* =========================================
   TITLE
========================================= */

.fcard h3 {
  margin: 0 0 8px;

  font-size: 16.5px;
  font-weight: 700;
  line-height: 1.4;

  color: var(--ink);
}


.fcard-back h3 {
  color: var(--white);
}


/* =========================================
   DESCRIPTION
========================================= */

.fcard p {
  margin: 0;

  font-size: 13.5px;
  line-height: 1.6;

  color: var(--ink-soft);
}


.fcard-back p {
  color: var(--green-100);
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 860px) {

  .features-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

  .features-section {
    padding: 70px 0;
  }


  .wrap {
    width: min(100% - 40px, 1180px);
  }


  .features-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }


  .fcard {
    height: 250px;
  }

}


/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {

  .fcard-inner {
    transition: none;
  }

}

</style>