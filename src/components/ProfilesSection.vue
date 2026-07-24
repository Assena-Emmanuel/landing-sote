```vue
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
    <div class="background"></div>

    <div class="wrap">

      <!-- SECTION HEADER -->
      <div class="section-head">

        <span class="kicker">
          Trois profils, une seule plateforme
        </span>

        <h2>
          Que vous soyez propriétaire,
          locataire ou artisan
        </h2>

        <p>
          Sotê s’adapte à votre rôle et connecte tous les acteurs
          de la gestion immobilière sur une même application.
        </p>

      </div>


      <!-- PROFILES -->
      <div class="profiles-grid">

        <div
          v-for="profile in profiles"
          :key="profile.id"
          class="profile-card"
        >

          <div class="profile-card-inner">

            <!-- ================================= -->
            <!-- FRONT                             -->
            <!-- ================================= -->

            <div class="profile-card-face profile-card-front">

              <!-- ICON -->
              <div class="profile-ic">

                <!-- HOME -->
                <svg
                  v-if="profile.icon === 'home'"
                  width="26"
                  height="26"
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


                <!-- USER -->
                <svg
                  v-else-if="profile.icon === 'user'"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
                </svg>


                <!-- TOOLS -->
                <svg
                  v-else
                  width="26"
                  height="26"
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

              </div>


              <!-- TITLE -->
              <h3>
                {{ profile.title }}
              </h3>


              <!-- DESCRIPTION -->
              <p>
                {{ profile.description }}
              </p>

            </div>


            <!-- ================================= -->
            <!-- BACK                              -->
            <!-- ================================= -->

            <div class="profile-card-face profile-card-back">

              <!-- SAME ICON -->
              <div class="profile-ic">

                <!-- HOME -->
                <svg
                  v-if="profile.icon === 'home'"
                  width="26"
                  height="26"
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


                <!-- USER -->
                <svg
                  v-else-if="profile.icon === 'user'"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
                </svg>


                <!-- TOOLS -->
                <svg
                  v-else
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                  />
                </svg>

              </div>


              <!-- SAME TITLE -->
              <h3>
                {{ profile.title }}
              </h3>


              <!-- SAME DESCRIPTION -->
              <p>
                {{ profile.description }}
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
   SECTION
========================================= */

.section {
  position: relative;
  isolation: isolate;

  min-height: 100vh;

  padding: 100px 0;

  overflow: hidden;

  display: flex;
  align-items: center;
}


/* =========================================
   BACKGROUND
========================================= */

.background {
  position: absolute;

  inset: -20px;

  background:
    linear-gradient(
      rgba(20, 55, 35, 0.78),
      rgba(20, 55, 35, 0.88)
    ),
    url("../assets/images/bg.jpg")
    center / cover no-repeat;

  filter: blur(4px);

  transform: scale(1.05);

  z-index: -2;
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

  margin: 0 auto 64px;

  text-align: center;
}


.kicker {
  display: inline-block;

  margin-bottom: 16px;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  color: var(--green-primary);
}


.section-head h2 {
  margin: 0 0 18px;

  font-size: clamp(30px, 4vw, 44px);

  font-weight: 900;

  line-height: 1.15;

  color: var(--white);
}


.section-head p {
  max-width: 620px;

  margin: 0 auto;

  font-size: 16px;

  line-height: 1.7;

  color: var(--green-100);
}


/* =========================================
   GRID
========================================= */

.profiles-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 24px;
}


/* =========================================
   CARD
========================================= */

.profile-card {
  height: 300px;

  perspective: 1200px;

  cursor: pointer;
}


/* =========================================
   CARD INNER
========================================= */

.profile-card-inner {
  position: relative;

  width: 100%;
  height: 100%;

  transition:
    transform 0.75s
    cubic-bezier(0.4, 0.2, 0.2, 1);

  transform-style: preserve-3d;
}


/* FLIP */

.profile-card:hover .profile-card-inner {
  transform: rotateY(180deg);
}


/* =========================================
   COMMON FACE
========================================= */

.profile-card-face {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  padding: 36px 30px;

  box-sizing: border-box;

  border-radius: 20px;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  text-align: left;

  backface-visibility: hidden;

  -webkit-backface-visibility: hidden;
}


/* =========================================
   FRONT
========================================= */

.profile-card-front {
  background:
    rgba(255, 255, 255, 0.06);

  border:
    1px solid
    rgba(255, 255, 255, 0.2);

  box-shadow:
    0 20px 50px
    rgba(0, 0, 0, 0.15);

  backdrop-filter:
    blur(12px);

  -webkit-backdrop-filter:
    blur(12px);
}


/* =========================================
   BACK
========================================= */

.profile-card-back {
  background:
    var(--white);

  border:
    1px solid
    rgba(255, 255, 255, 0.8);

  box-shadow:
    0 20px 50px
    rgba(0, 0, 0, 0.18);

  color:
    var(--green-dark);

  transform:
    rotateY(180deg);
}


/* =========================================
   ICON
========================================= */

.profile-ic {
  width: 60px;

  height: 60px;

  flex-shrink: 0;

  margin-bottom: 28px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 18px;

  background:
    var(--green-light);

  color:
    var(--green-primary);
}


/* =========================================
   TITLE
========================================= */

.profile-card h3 {
  margin: 0 0 14px;

  font-size: 21px;

  font-weight: 900;

  line-height: 1.3;

  color:
    var(--white);
}


/* BACK TITLE */

.profile-card-back h3 {
  color:
    var(--green-dark);
}


/* =========================================
   DESCRIPTION
========================================= */

.profile-card p {
  margin: 0;

  font-size: 14px;

  line-height: 1.7;

  color:
    var(--green-100);
}


/* BACK DESCRIPTION */

.profile-card-back p {
  color:
    var(--green-dark);

  opacity: 0.7;
}


/* =========================================
   HOVER
========================================= */

.profile-card:hover {
  transform: translateY(-6px);
}

.profile-card {
  transition:
    transform 0.3s ease;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 950px) {

  .profiles-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {

  .section {
    padding: 70px 0;
  }

  .wrap {
    padding: 0 20px;
  }

  .profiles-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    height: 360px;
  }

  .section-head {
    margin-bottom: 45px;
  }

}

</style>