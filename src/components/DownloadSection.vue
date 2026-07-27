```vue
<script setup>
import SingInScreenshot from '../assets/images/singup.jpeg'
import loginScreenshot from '../assets/images/singin.jpeg'
</script>

<template>
  <section class="section">
    <!-- Background -->
    <div
      class="background"
      aria-hidden="true"
    ></div>

    <div class="wrap">

      <div class="download-cta">

        <!-- =============================== -->
        <!-- CONTENT                          -->
        <!-- =============================== -->

        <div class="download-content">

          <h2>
            Téléchargez Sotê et simplifiez
            votre gestion immobilière
            dès aujourd'hui.
          </h2>

          <p>
            Disponible gratuitement sur iOS et Android.
            Rejoignez les propriétaires, locataires et artisans
            qui utilisent déjà Sotê.
          </p>


          <!-- =============================== -->
          <!-- STORE BUTTONS                    -->
          <!-- =============================== -->

          <div class="store-badges">

            <!-- APP STORE -->

            <a
              href="#"
              class="store-btn"
            >

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#2d5a3d"
                aria-hidden="true"
              >
                <path
                  d="M16.365 1.43c0 1.14-.462 2.14-1.152 2.87-.744.8-1.94 1.42-2.98 1.34-.126-1.1.44-2.24 1.14-2.95.76-.78 2.04-1.36 2.99-1.26zm4.28 16.6c-.34.79-.5 1.14-.94 1.85-.62 1-1.5 2.24-2.59 2.25-.97.01-1.22-.63-2.53-.62-1.31.01-1.59.63-2.56.62-1.09-.01-1.92-1.13-2.54-2.13-1.74-2.79-1.92-6.06-.85-7.8.76-1.24 1.96-1.97 3.09-1.97 1.15 0 1.87.63 2.82.63.92 0 1.48-.63 2.81-.63 1.01 0 2.08.55 2.84 1.5-2.5 1.37-2.09 4.93.45 5.9z"
                />
              </svg>

              <span class="store-text">
                <span class="small">
                  Télécharger sur l'
                </span>

                <span class="big">
                  App Store
                </span>
              </span>

            </a>


            <!-- GOOGLE PLAY -->

            <a
              href="#"
              class="store-btn"
            >

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#00D9FF"
                  d="M4 2.5v19l10-9.5z"
                />

                <path
                  fill="#00F076"
                  d="M4 2.5l13 6.5-3 3z"
                />

                <path
                  fill="#FF3A44"
                  d="M4 21.5l13-6.5-3-3z"
                />

                <path
                  fill="#FFCF00"
                  d="M14 12l3-3 3.5 1.75c1 .5 1 1.75 0 2.25L17 15z"
                />
              </svg>

              <span class="store-text">
                <span class="small">
                  Disponible sur
                </span>

                <span class="big">
                  Google Play
                </span>
              </span>

            </a>

          </div>

        </div>


        <!-- =============================== -->
        <!-- PHONES                           -->
        <!-- =============================== -->

        <div class="devices">

          <!-- PHONE 1 -->

          <div class="device-real">

            <div class="device-notch"></div>

            <img
              class="device-screen"
              :src="loginScreenshot"
              alt="Écran de connexion Sotê"
            />

          </div>


          <!-- PHONE 2 -->

          <div class="device-real">

            <div class="device-notch"></div>

            <img
              class="device-screen"
              :src="SingInScreenshot"
              alt="Écran d'inscription Sotê"
            />

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

  min-height: 88vh;

  display: flex;
  align-items: center;

  overflow: hidden;

  padding: 80px 0;
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
      rgba(20, 55, 35, 0.68),
      rgba(20, 55, 35, 0.78)
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
  width: min(
    1248px,
    calc(100% - 56px)
  );

  margin: 0 auto;
}


/* =========================================
   DOWNLOAD CTA
========================================= */

.download-cta {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  gap: 70px;

  align-items: center;
}


/* =========================================
   CONTENT
========================================= */

.download-content {
  max-width: 540px;
}


.download-content h2 {
  margin: 0 0 18px;

  font-size: clamp(
    28px,
    4vw,
    42px
  );

  font-weight: 800;

  line-height: 1.2;

  color: var(--white);
}


.download-content p {
  max-width: 480px;

  margin: 0 0 30px;

  font-size: 15.5px;

  line-height: 1.7;

  color:
    rgba(
      255,
      255,
      255,
      0.75
    );
}


/* =========================================
   STORE BADGES
========================================= */

.store-badges {
  display: flex;

  align-items: center;

  gap: 14px;

  flex-wrap: wrap;
}


.store-btn {
  display: flex;

  align-items: center;

  gap: 10px;

  min-width: 160px;

  padding:
    12px
    20px
    12px
    16px;

  border-radius: 14px;

  background: var(--white);

  color: var(--green-dark);

  text-decoration: none;

  box-shadow:
    0
    10px
    22px
    -10px
    rgba(0, 0, 0, 0.25);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}


.store-btn:hover {
  transform:
    translateY(-3px);

  box-shadow:
    0
    15px
    30px
    -10px
    rgba(0, 0, 0, 0.35);
}


.store-text {
  display: flex;

  flex-direction: column;
}


.store-text .small {
  display: block;

  font-size: 9.5px;

  line-height: 1.2;

  color:
    rgba(
      45,
      90,
      61,
      0.6
    );

  font-weight: 500;
}


.store-text .big {
  display: block;

  font-size: 15px;

  line-height: 1.3;

  font-weight: 700;

  font-family:
    'Sora',
    sans-serif;
}


/* =========================================
   DEVICES
========================================= */

.devices {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 28px;
}


/* =========================================
   PHONE
========================================= */

.device-real {
  width: 230px;

  flex-shrink: 0;

  padding:
    11px
    11px
    16px;

  background:
    #0a0f0c;

  border-radius: 32px;

  box-shadow:
    0
    40px
    80px
    -25px
    rgba(0, 0, 0, 0.55);

  transition:
    transform 0.3s ease;
}


.device-real:first-child {
  transform:
    translateY(20px);
}


.device-real:last-child {
  transform:
    translateY(-20px);
}


.device-real:hover {
  transform:
    translateY(-8px);
}


/* =========================================
   NOTCH
========================================= */

.device-notch {
  width: 100px;

  height: 18px;

  margin:
    0
    auto
    6px;

  background:
    #0a0f0c;

  border-radius:
    0
    0
    12px
    12px;
}


/* =========================================
   SCREEN
========================================= */

.device-screen {
  display: block;

  width: 100%;

  height: auto;

  border-radius: 20px;
}


/* =========================================
   LARGE TABLET
========================================= */

@media (max-width: 1100px) {

  .download-cta {
    gap: 40px;
  }


  .devices {
    gap: 18px;
  }


  .device-real {
    width: 200px;
  }

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

  .section {
    min-height: auto;

    padding:
      80px
      0;
  }


  .download-cta {
    grid-template-columns: 1fr;

    gap: 60px;

    text-align: center;
  }


  .download-content {
    max-width: 650px;

    margin:
      0
      auto;
  }


  .download-content p {
    margin-left: auto;
    margin-right: auto;
  }


  .store-badges {
    justify-content: center;
  }


  .devices {
    gap: 30px;
  }


  .device-real {
    width: 220px;
  }


  .device-real:first-child {
    transform:
      translateY(20px);
  }


  .device-real:last-child {
    transform:
      translateY(-20px);
  }

}


/* =========================================
   SMALL TABLET / LARGE MOBILE
========================================= */

@media (max-width: 600px) {

  .section {
    padding:
      65px
      0;
  }


  .wrap {
    width:
      calc(100% - 40px);
  }


  .download-cta {
    gap: 45px;
  }


  .download-content h2 {
    font-size:
      30px;

    line-height:
      1.25;
  }


  .download-content p {
    font-size:
      14px;
  }


  .store-badges {
    flex-direction:
      column;

    width:
      100%;
  }


  .store-btn {
    width:
      100%;

    max-width:
      240px;

    justify-content:
      center;

    box-sizing:
      border-box;
  }


  .devices {
    gap:
      14px;

    width:
      100%;
  }


  .device-real {
    width:
      calc(
        50% - 7px
      );

    max-width:
      190px;

    padding:
      8px
      8px
      12px;

    border-radius:
      24px;
  }


  .device-notch {
    width:
      60px;

    height:
      12px;

    border-radius:
      0
      0
      9px
      9px;
  }


  .device-screen {
    border-radius:
      16px;
  }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 400px) {

  .section {
    padding:
      55px
      0;
  }


  .download-content h2 {
    font-size:
      26px;
  }


  .download-content p {
    font-size:
      13.5px;

    line-height:
      1.6;
  }


  .devices {
    flex-direction:
      column;

    gap:
      25px;
  }


  .device-real {
    width:
      min(
        75vw,
        220px
      );
  }


  .device-real:first-child,
  .device-real:last-child {
    transform:
      none;
  }

}


/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {

  .store-btn,
  .device-real {
    transition:
      none;
  }

}
</style>
```
