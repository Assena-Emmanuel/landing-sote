<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CountriesBadge from './CountriesBadge.vue'
import dashboardScreenshot from '../assets/dashboard-screenshot.jpg'

const stats = [
  { target: 2400, suffix: '+', label: 'Utilisateurs actifs', decimals: 0 },
  { target: 980, suffix: '', label: 'Biens gérés', decimals: 0 },
  { target: 1240, suffix: '', label: 'Annonces', decimals: 0 },
  { target: 4.8, suffix: '/5', label: 'Note moyenne', decimals: 1 },
]

const displayValues = ref(stats.map(() => 0))
const statsSection = ref(null)
let hasAnimated = false
let observer = null
let rafId = null

function formatNumber(n, decimals) {
  if (decimals > 0) return n.toFixed(decimals)
  return Math.round(n).toLocaleString('fr-FR')
}

function animateStats() {
  const duration = 1600
  const start = performance.now()

  function tick(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    stats.forEach((s, i) => {
      displayValues.value[i] = s.target * eased
    })

    if (progress < 1) {
      rafId = requestAnimationFrame(tick)
    }
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          animateStats()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.35 }
  )
  if (statsSection.value) observer.observe(statsSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section class="hero">
    <div class="hero-blob-bg"></div>
    <div class="wrap hero-inner">
      <div>
        <h1>
          Gérez vos biens, vos locataires<br />
          et vos <span>prestataires</span>,<br />
          depuis votre téléphone.
        </h1>
        <p class="lead">
          Simple, fiable, pensé pour le marché africain. Suivez vos loyers, centralisez vos biens et
          faites appel à des artisans de confiance — tout dans une seule application.
        </p>
        <div class="store-badges">
          <a href="#" class="store-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path
                d="M16.365 1.43c0 1.14-.462 2.14-1.152 2.87-.744.8-1.94 1.42-2.98 1.34-.126-1.1.44-2.24 1.14-2.95.76-.78 2.04-1.36 2.99-1.26zm4.28 16.6c-.34.79-.5 1.14-.94 1.85-.62 1-1.5 2.24-2.59 2.25-.97.01-1.22-.63-2.53-.62-1.31.01-1.59.63-2.56.62-1.09-.01-1.92-1.13-2.54-2.13-1.74-2.79-1.92-6.06-.85-7.8.76-1.24 1.96-1.97 3.09-1.97 1.15 0 1.87.63 2.82.63.92 0 1.48-.63 2.81-.63 1.01 0 2.08.55 2.84 1.5-2.5 1.37-2.09 4.93.45 5.9z"
              />
            </svg>
            <span class="store-text"><span class="small">Télécharger sur l'</span><span class="big">App Store</span></span>
          </a>
          <a href="#" class="store-btn">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#00D9FF" d="M4 2.5v19l10-9.5z" />
              <path fill="#00F076" d="M4 2.5l13 6.5-3 3z" />
              <path fill="#FF3A44" d="M4 21.5l13-6.5-3-3z" />
              <path fill="#FFCF00" d="M14 12l3-3 3.5 1.75c1 .5 1 1.75 0 2.25L17 15z" />
            </svg>
            <span class="store-text"><span class="small">Disponible sur</span><span class="big">Google Play</span></span>
          </a>
        </div>
      </div>

      <div class="device-wrap">
        <div class="hero-blob"></div>
        <div class="device">
          <div class="device-notch"></div>
          <img class="device-screen" :src="dashboardScreenshot" alt="Tableau de bord Sotê" />
        </div>
        <div class="float-chip fc1">
          <div class="fc-ic">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          Paiement confirmé
        </div>
        <div class="float-chip fc2">
          <div class="fc-ic">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path
                d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
              />
            </svg>
          </div>
          Artisan disponible
        </div>
      </div>
    </div>
  </section>

  <div style="display: flex; justify-content: center; margin: 50px 0;">
    <CountriesBadge />
  </div>

  <section class="stats-strip" ref="statsSection">
    <div class="wrap stats-inner">
      <div v-for="(s, i) in stats" :key="s.label">
        <div class="stat-num">{{ formatNumber(displayValues[i], s.decimals) }}{{ s.suffix }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
}
.hero {
  padding: 90px 0 0 0;
  position: relative;
  overflow: hidden;
}
.hero-blob-bg {
  position: absolute;
  top: -160px;
  right: -160px;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--green-light) 0%, transparent 68%);
  z-index: 0;
}
.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 50px;
  align-items: center;
  text-align: left;
}
.hero h1 {
  font-size: 46px;
  font-weight: 800;
  line-height: 1.14;
  color: var(--green-dark);
  letter-spacing: -0.02em;
  margin-bottom: 22px;
}
.hero h1 span {
  color: var(--green-primary);
}
.hero p.lead {
  font-size: 16.5px;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 460px;
  margin-bottom: 32px;
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
  background: var(--ink);
  color: white;
  padding: 12px 20px 12px 16px;
  border-radius: 14px;
  box-shadow: 0 10px 22px -10px rgba(0, 0, 0, 0.35);
  text-decoration: none;
}
.store-text .small {
  display: block;
  font-size: 9.5px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}
.store-text .big {
  display: block;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Sora', sans-serif;
}

.device-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}
.hero-blob{position:absolute; width:550px; height:450px; border-radius:46% 54% 60% 40% / 45% 40% 60% 55%; background:linear-gradient(135deg,var(--green-300),var(--green-100)); opacity:0.9; top:10px; z-index:0;}
.device {
  width: 270px;
  background: #0a0f0c;
  border-radius: 38px;
  padding: 13px 13px 20px 13px;
  box-shadow: 0 50px 90px -30px rgba(45, 90, 61, 0.4);
  animation: floatDevice 5s ease-in-out infinite;
}
@keyframes floatDevice {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-16px);
  }
}
.device-notch {
  width: 95px;
  height: 18px;
  background: #0a0f0c;
  border-radius: 0 0 14px 14px;
  margin: 0 auto 6px auto;
}
.device-screen {
  width: 100%;
  display: block;
  border-radius: 22px;
}
.float-chip {
  position: absolute;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px -14px rgba(45, 90, 61, 0.3);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ink);
  z-index: 2;
}
.fc-ic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--green-light);
  color: var(--green-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fc1 {
  top: 56px;
  left: -22px;
}
.fc2 {
  bottom: 70px;
  right: -24px;
  background: var(--green-dark);
  color: white;
}
.fc2 .fc-ic {
  background: rgba(255, 255, 255, 0.18);
  color: white;
}
@media (max-width: 940px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero h1 {
    font-size: 32px;
  }
  .hero p.lead {
    margin-left: auto;
    margin-right: auto;
  }
  .store-badges {
    justify-content: center;
  }
  .device-wrap {
    order: -1;
    margin-bottom: 10px;
  }
  .float-chip {
    display: none;
  }
}

.stats-strip {
  background: var(--green-light);
  padding: 36px 0;
  margin-top: 56px;
}
.stats-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.stat-num {
  font-family: 'Sora', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: var(--green-dark);
  margin-bottom: 4px;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 13px;
  color: var(--ink-soft);
  font-weight: 600;
}
@media (max-width: 760px) {
  .stats-inner {
    justify-content: flex-start;
  }
}

@media (max-width:940px){
    .hero-inner{grid-template-columns:1fr;}
    .hero h1{font-size:40px;}
    .hero-visual{order:-1; margin-bottom:20px;}
    .float-card{display:none;}
    .hero-blob{width:300px; height:300px;}
  }
</style>