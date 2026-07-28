```vue
<script setup>

const reasons = [
  {
    title: "Simple et intuitif",
    desc: "Une expérience pensée pour simplifier la gestion immobilière, automatiser les tâches essentielles et permettre à chacun d'être opérationnel en quelques minutes.",
    path: '<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>',
  },
  {
    title: "Une vision sans frontières",
    desc: "Une solution conçue pour s'adapter à la diversité des marchés, des usages et des réalités immobilières, où que vous soyez.",
    path: '<path d="M12 2l9 4.5v6c0 5-3.8 8.7-9 9.5-5.2-.8-9-4.5-9-9.5v-6L12 2z"/>',
  },
  {
    title: "Un écosystème unifié",
    desc: "Propriétaires, locataires, gestionnaires et prestataires réunis dans un même environnement pour connecter les acteurs, fluidifier les échanges et transformer chaque interaction.",
    path: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/>',
  },
]





</script>


<template>

  <section class="section">

    <!-- ================================= -->
    <!-- BACKGROUND                         -->
    <!-- ================================= -->

    <div
      class="background"
      aria-hidden="true"
    ></div>


    <!-- ================================= -->
    <!-- MAIN WRAPPER                       -->
    <!-- ================================= -->

    <div class="wrap">


      <!-- ================================= -->
      <!-- SECTION HEADER                    -->
      <!-- ================================= -->

      <header class="section-head">

        <span class="kicker">
          Pourquoi Sotê ?
        </span>

        <h2>
          Une application pensée pour vous
        </h2>

        <p>
          Une solution simple, locale et complète pour
          faciliter la gestion immobilière au quotidien.
        </p>

      </header>


      <!-- ================================= -->
      <!-- REASONS GRID                      -->
      <!-- ================================= -->

      <div class="why-grid">

        <article
          v-for="(r, index) in reasons"
          :key="r.title"
          class="why-card"
        >

          <!-- Number -->

          <span class="card-number">
            0{{ index + 1 }}
          </span>


          <!-- Icon -->

          <div class="why-ic">

            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="r.path"
            ></svg>

          </div>


          <!-- Content -->

          <div class="card-content">

            <h3>
              {{ r.title }}
            </h3>

            <p>
              {{ r.desc }}
            </p>

          </div>


          <!-- Bottom decoration -->

          <div class="card-line"></div>

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

  min-height: 90vh;

  display: flex;

  align-items: center;

  padding:
    100px
    0;

  overflow: hidden;
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
      rgba(20, 55, 35, 0.82),
      rgba(20, 55, 35, 0.90)
    ),
    url("../assets/images/bg.jpg")
    center / cover no-repeat;

  filter:
    blur(5px);

  transform:
    scale(1.05);
}


/* =========================================
   WRAPPER
========================================= */

.wrap {
  width:
    min(
      1180px,
      calc(100% - 56px)
    );

  margin:
    0
    auto;

  padding:
    80px
    70px
    90px;

  background:
    rgba(
      228,
      241,
      232,
      0.96
    );

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.25
    );

  border-radius:
    28px;

  box-shadow:
    0
    30px
    80px
    rgba(
      0,
      0,
      0,
      0.20
    );

  backdrop-filter:
    blur(10px);
}


/* =========================================
   SECTION HEADER
========================================= */

.section-head {
  max-width:
    680px;

  margin:
    0
    auto
    60px;

  text-align:
    center;
}


.kicker {
  display:
    inline-flex;

  align-items:
    center;

  gap:
    8px;

  margin-bottom:
    14px;

  font-size:
    12px;

  font-weight:
    800;

  letter-spacing:
    0.12em;

  text-transform:
    uppercase;

  color:
    var(--green-primary);
}


/* Small decorative line */

.kicker::before,
.kicker::after {
  content:
    "";

  width:
    22px;

  height:
    2px;

  border-radius:
    2px;

  background:
    var(--green-primary);
}


.section-head h2 {
  margin:
    0
    0
    16px;

  font-size:
    clamp(
      28px,
      4vw,
      38px
    );

  font-weight:
    800;

  line-height:
    1.2;

  letter-spacing:
    -0.02em;

  color:
    var(--green-dark);
}


.section-head p {
  max-width:
    560px;

  margin:
    0
    auto;

  font-size:
    15px;

  line-height:
    1.7;

  color:
    var(--ink-soft);
}


/* =========================================
   GRID
========================================= */

.why-grid {
  display:
    grid;

  grid-template-columns:
    repeat(
      3,
      minmax(
        0,
        1fr
      )
    );

  gap:
    24px;
}


/* =========================================
   CARD
========================================= */

.why-card {
  position:
    relative;

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  min-height:
    310px;

  padding:
    42px
    28px
    36px;

  text-align:
    center;

  background:
    rgba(
      255,
      255,
      255,
      0.82
    );

  border:
    1px solid
    rgba(
      45,
      90,
      61,
      0.10
    );

  border-radius:
    22px;

  box-shadow:
    0
    12px
    30px
    rgba(
      45,
      90,
      61,
      0.06
    );

  overflow:
    hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}


/* =========================================
   CARD HOVER
========================================= */

.why-card:hover {
  transform:
    translateY(-8px);

  border-color:
    rgba(
      74,
      124,
      89,
      0.30
    );

  box-shadow:
    0
    24px
    45px
    rgba(
      45,
      90,
      61,
      0.14
    );
}


/* =========================================
   CARD NUMBER
========================================= */

.card-number {
  position:
    absolute;

  top:
    18px;

  right:
    22px;

  font-size:
    12px;

  font-weight:
    800;

  letter-spacing:
    0.08em;

  color:
    rgba(
      45,
      90,
      61,
      0.30
    );
}


/* =========================================
   ICON
========================================= */

.why-ic {
  position:
    relative;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  width:
    72px;

  height:
    72px;

  margin:
    0
    auto
    24px;

  border-radius:
    20px;

  background:
    linear-gradient(
      135deg,
      var(--green-light),
      rgba(
        255,
        255,
        255,
        0.9
      )
    );

  color:
    var(--green-primary);

  box-shadow:
    0
    10px
    25px
    rgba(
      45,
      90,
      61,
      0.10
    );

  transition:
    transform 0.3s ease;
}


.why-card:hover .why-ic {
  transform:
    scale(1.08)
    rotate(-4deg);
}


.why-ic::after {
  content:
    "";

  position:
    absolute;

  inset:
    -6px;

  border:
    1px
    solid
    rgba(
      74,
      124,
      89,
      0.12
    );

  border-radius:
    24px;
}


/* =========================================
   CARD CONTENT
========================================= */

.card-content {
  max-width:
    300px;

  margin:
    0
    auto;
}


.why-card h3 {
  margin:
    0
    0
    12px;

  font-size:
    18px;

  font-weight:
    750;

  line-height:
    1.35;

  color:
    var(--green-dark);
}


.why-card p {
  margin:
    0;

  font-size:
    14px;

  line-height:
    1.7;

  color:
    var(--ink-soft);
}


/* =========================================
   BOTTOM LINE
========================================= */

.card-line {
  position:
    absolute;

  bottom:
    0;

  left:
    50%;

  width:
    0;

  height:
    3px;

  border-radius:
    3px;

  background:
    var(--green-primary);

  transform:
    translateX(-50%);

  transition:
    width 0.3s ease;
}


.why-card:hover .card-line {
  width:
    70px;
}


/* =========================================
   LARGE TABLET
========================================= */

@media (max-width: 1000px) {

  .section {
    padding:
      80px
      0;
  }


  .wrap {
    padding:
      65px
      45px
      75px;
  }


  .why-grid {
    grid-template-columns:
      repeat(
        2,
        minmax(
          0,
          1fr
        )
      );
  }

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 700px) {

  .section {
    min-height:
      auto;

    padding:
      60px
      0;
  }


  .wrap {
    width:
      calc(
        100% - 32px
      );

    padding:
      55px
      22px
      60px;

    border-radius:
      22px;
  }


  .section-head {
    margin-bottom:
      40px;
  }


  .section-head h2 {
    font-size:
      30px;
  }


  .section-head p {
    font-size:
      14px;
  }


  .why-grid {
    grid-template-columns:
      1fr;

    gap:
      18px;
  }


  .why-card {
    min-height:
      auto;

    padding:
      36px
      24px
      32px;
  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 480px) {

  .section {
    padding:
      45px
      0;
  }


  .wrap {
    width:
      calc(
        100% - 24px
      );

    padding:
      45px
      16px
      50px;

    border-radius:
      18px;
  }


  .section-head {
    margin-bottom:
      32px;
  }


  .kicker {
    font-size:
      10.5px;
  }


  .kicker::before,
  .kicker::after {
    width:
      15px;
  }


  .section-head h2 {
    font-size:
      26px;

    line-height:
      1.25;
  }


  .section-head p {
    font-size:
      13.5px;

    line-height:
      1.6;
  }


  .why-grid {
    gap:
      16px;
  }


  .why-card {
    padding:
      32px
      20px
      30px;

    border-radius:
      18px;
  }


  .why-ic {
    width:
      64px;

    height:
      64px;

    margin-bottom:
      20px;

    border-radius:
      18px;
  }


  .why-card h3 {
    font-size:
      17px;
  }


  .why-card p {
    font-size:
      13.5px;

    line-height:
      1.65;
  }


  .card-number {
    top:
      14px;

    right:
      16px;

    font-size:
      10px;
  }

}


/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {

  .why-card,
  .why-ic,
  .card-line {
    transition:
      none;
  }

}
</style>