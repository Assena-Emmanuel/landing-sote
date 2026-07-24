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

  <section class="section alt">

    <div class="wrap">

      <!-- ================================= -->
      <!-- SECTION HEADER                     -->
      <!-- ================================= -->

      <div class="section-head">

        <div class="kicker">
          Fonctionnalités clés
        </div>

        <h2>
          Tout ce qu'il faut pour gérer une location
        </h2>

        <p>
          Une application complète, pensée pour simplifier
          chaque étape de la gestion immobilière.
        </p>

      </div>


      <!-- ================================= -->
      <!-- FEATURES GRID                     -->
      <!-- ================================= -->

      <div class="features-grid">

        <div
          v-for="feature in features"
          :key="feature.title"
          class="fcard"
        >

          <!-- ================================= -->
          <!-- CARD INNER                        -->
          <!-- ================================= -->

          <div class="fcard-inner">


            <!-- ================================= -->
            <!-- FRONT                             -->
            <!-- ================================= -->

            <div class="fcard-face fcard-front">

              <!-- ICON -->

              <div class="fic">

                <!-- PAYMENT -->
                <svg
                  v-if="feature.icon === 'payment'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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


                <!-- HOME -->
                <svg
                  v-else-if="feature.icon === 'home'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 10.5L12 3l9 7.5" />

                  <path d="M5 9.5V21h14V9.5" />
                </svg>


                <!-- DASHBOARD -->
                <svg
                  v-else-if="feature.icon === 'dashboard'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                  />

                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                  />

                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                  />

                  <rect
                    x="14"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                  />
                </svg>


                <!-- HISTORY -->
                <svg
                  v-else-if="feature.icon === 'history'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />

                  <path d="M12 7v5l3 3" />
                </svg>


                <!-- TOOLS -->
                <svg
                  v-else-if="feature.icon === 'tools'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                  />
                </svg>


                <!-- NOTIFICATION -->
                <svg
                  v-else
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                  />

                  <path
                    d="M13.73 21a2 2 0 01-3.46 0"
                  />
                </svg>

              </div>


              <!-- TITLE -->

              <h3>
                {{ feature.title }}
              </h3>


              <!-- DESCRIPTION -->

              <p>
                {{ feature.desc }}
              </p>

            </div>


            <!-- ================================= -->
            <!-- BACK                              -->
            <!-- ================================= -->

            <div class="fcard-face fcard-back">

              <!-- SAME ICON -->

              <div class="fic">

                <!-- PAYMENT -->
                <svg
                  v-if="feature.icon === 'payment'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
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


                <!-- HOME -->
                <svg
                  v-else-if="feature.icon === 'home'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 10.5L12 3l9 7.5" />

                  <path d="M5 9.5V21h14V9.5" />
                </svg>


                <!-- DASHBOARD -->
                <svg
                  v-else-if="feature.icon === 'dashboard'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                  />

                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                  />

                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                  />

                  <rect
                    x="14"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                  />
                </svg>


                <!-- HISTORY -->
                <svg
                  v-else-if="feature.icon === 'history'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />

                  <path d="M12 7v5l3 3" />
                </svg>


                <!-- TOOLS -->
                <svg
                  v-else-if="feature.icon === 'tools'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                  />
                </svg>


                <!-- NOTIFICATION -->
                <svg
                  v-else
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                  />

                  <path
                    d="M13.73 21a2 2 0 01-3.46 0"
                  />
                </svg>

              </div>


              <!-- SAME TITLE -->

              <h3>
                {{ feature.title }}
              </h3>


              <!-- SAME DESCRIPTION -->

              <p>
                {{ feature.desc }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>


<style scoped>

/* =========================================
   WRAPPER
========================================= */

.wrap {
  max-width: 1180px;

  margin: 0 auto;

  padding: 0 28px;
}


/* =========================================
   SECTION
========================================= */

.section {
  padding: 100px 0;
}


/* =========================================
   SECTION BACKGROUND
========================================= */

.section.alt {
  background:
    var(--green-light);
}


/* =========================================
   SECTION HEADER
========================================= */

.section-head {
  max-width: 640px;

  margin:
    0 auto 56px;

  text-align: center;
}


.kicker {
  margin-bottom: 12px;

  font-size: 12.5px;

  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  color:
    var(--green-primary);
}


.section-head h2 {
  margin:
    0 0 14px;

  font-size: 34px;

  font-weight: 800;

  line-height: 1.25;

  color:
    var(--green-dark);
}


.section-head p {
  font-size: 15.5px;

  line-height: 1.6;

  color:
    var(--ink-soft);
}


/* =========================================
   GRID
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
  height: 260px;

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

  transform-style:
    preserve-3d;

  transition:
    transform 0.7s
    cubic-bezier(0.4, 0.2, 0.2, 1);
}


/* =========================================
   FLIP
========================================= */

.fcard:hover .fcard-inner {
  transform:
    rotateY(180deg);
}


/* =========================================
   COMMON FACE
========================================= */

.fcard-face {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  padding:
    28px 24px;

  border-radius:
    16px;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  text-align: left;

  backface-visibility:
    hidden;

  -webkit-backface-visibility:
    hidden;
}


/* =========================================
   FRONT
========================================= */

.fcard-front {
  background:
    var(--white);

  border:
    1px solid
    var(--line);

  box-shadow:
    0 4px 18px
    rgba(45, 90, 61, 0.05);
}


/* =========================================
   BACK
========================================= */

.fcard-back {
  background:
    var(--green-dark);

  border:
    1px solid
    var(--green-dark);

  color:
    var(--white);

  transform:
    rotateY(180deg);
}


/* =========================================
   ICON
========================================= */

.fic {
  width: 46px;

  height: 46px;

  flex-shrink: 0;

  margin-bottom: 18px;

  border-radius:
    13px;

  background:
    var(--green-light);

  color:
    var(--green-primary);

  display: flex;

  align-items: center;

  justify-content: center;
}


/* =========================================
   TITLE
========================================= */

.fcard h3 {
  margin:
    0 0 8px;

  font-size:
    16.5px;

  font-weight:
    700;

  line-height:
    1.4;

  color:
    var(--ink);
}


/* BACK TITLE */

.fcard-back h3 {
  color:
    var(--white);
}


/* =========================================
   DESCRIPTION
========================================= */

.fcard p {
  margin:
    0;

  font-size:
    13.5px;

  line-height:
    1.6;

  color:
    var(--ink-soft);
}


/* BACK DESCRIPTION */

.fcard-back p {
  color:
    var(--green-100);
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

  .section {
    padding:
      70px 0;
  }

  .wrap {
    padding:
      0 20px;
  }

  .features-grid {
    grid-template-columns:
      1fr;
  }

  .fcard {
    height:
      250px;
  }

  .section-head h2 {
    font-size:
      30px;
  }

}

</style>
```
