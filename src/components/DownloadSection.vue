<script setup>
import SingInScreenshot from '../assets/images/singup.jpeg'
import loginScreenshot from '../assets/images/singin.jpeg'
</script>

<template>
  <section class="section">
    <div class="wrap">
      <div>
        <div class="download-cta">
          <div>
            <h2>Téléchargez Sotê et simplifiez votre gestion immobilière dès aujourd'hui.</h2>
            <p>Disponible gratuitement sur iOS et Android. Rejoignez les propriétaires, locataires et artisans qui utilisent déjà Sotê.</p>
            <div class="store-badges">
              <a href="#" class="store-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2d5a3d">
                  <path
                    d="M16.365 1.43c0 1.14-.462 2.14-1.152 2.87-.744.8-1.94 1.42-2.98 1.34-.126-1.1.44-2.24 1.14-2.95.76-.78 2.04-1.36 2.99-1.26zm4.28 16.6c-.34.79-.5 1.14-.94 1.85-.62 1-1.5 2.24-2.59 2.25-.97.01-1.22-.63-2.53-.62-1.31.01-1.59.63-2.56.62-1.09-.01-1.92-1.13-2.54-2.13-1.74-2.79-1.92-6.06-.85-7.8.76-1.24 1.96-1.97 3.09-1.97 1.15 0 1.87.63 2.82.63.92 0 1.48-.63 2.81-.63 1.01 0 2.08.55 2.84 1.5-2.5 1.37-2.09 4.93.45 5.9z"
                  />
                </svg>
                <span class="store-text"><span class="small">Télécharger sur l'</span><span class="big">App Store</span></span>
              </a>
              <a href="#" class="store-btn">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#00D9FF" d="M4 2.5v19l10-9.5z" />
                  <path fill="#00F076" d="M4 2.5l13 6.5-3 3z" />
                  <path fill="#FF3A44" d="M4 21.5l13-6.5-3-3z" />
                  <path fill="#FFCF00" d="M14 12l3-3 3.5 1.75c1 .5 1 1.75 0 2.25L17 15z" />
                </svg>
                <span class="store-text"><span class="small">Disponible sur</span><span class="big">Google Play</span></span>
              </a>
            </div>
          </div>

          <div class="device-real">
            <div class="device-notch"></div>
            <img class="device-screen" :src="loginScreenshot" alt="Écran de connexion Sotê" />
          </div>
          <div class="device-real">
            <div class="device-notch"></div>
            <img class="device-screen" :src="SingInScreenshot" alt="Écran de connexion Sotê" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 100%;
  height: 88vh;
  background: var(--green-dark);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap div{
  max-width: 1248px;
}

.download-cta {
  border-radius: 0px;
  color: white;
  display: grid;
  grid-template-columns: 1fr 280px 280px;
  gap: 50px;
  align-items: center;
}

.download-cta h2 {
  font-size: 34px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 14px;
}

.download-cta p {
  font-size: 15.5px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 30px;
  max-width: 420px;
}

.store-badges {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.store-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: var(--green-dark);
  padding: 12px 20px 12px 16px;
  border-radius: 14px;
  box-shadow: 0 10px 22px -10px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}

.store-text .small {
  display: block;
  font-size: 9.5px;
  color: rgba(45, 90, 61, 0.6);
  font-weight: 500;
}

.store-text .big {
  display: block;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Sora', sans-serif;
}

.device-real {
  width: 230px;
  background: #0a0f0c;
  border-radius: 32px;
  padding: 11px 11px 16px 11px;
  box-shadow: 0 40px 80px -25px rgba(0, 0, 0, 0.55);
  margin: 0 auto;
}

.device-notch {
  width: 80px;
  height: 16px;
  background: #0a0f0c;
  border-radius: 0 0 12px 12px;
  margin: 0 auto 6px auto;
}

.device-screen {
  width: 100%;
  display: block;
  border-radius: 20px;
}

@media (max-width: 900px) {
  .download-cta {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 50px 30px;
  }
  .store-badges {
    justify-content: center;
  }
  .download-cta p {
    margin-left: auto;
    margin-right: auto;
  }
}

</style>