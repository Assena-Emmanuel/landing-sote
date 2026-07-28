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
    <div class="hero-inner wrap">

      <!-- LEFT CONTENT -->
      <div class="hero-text">
        <h1>
          Gérez vos biens, vos locataires<br />
          et vos <span class="gradient-text">prestataires</span>,<br />
          depuis votre téléphone.
        </h1>
        <p class="lead">
          Simple, fiable, pensé pour le marché africain. Suivez vos loyers, centralisez vos biens et
          faites appel à des artisans de confiance — tout dans une seule application.
        </p>
        <div class="store-badges">
          <!-- <a href="#" class="store-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M16.365 1.43c0 1.14-.462 2.14-1.152 2.87-.744.8-1.94 1.42-2.98 1.34-.126-1.1.44-2.24 1.14-2.95.76-.78 2.04-1.36 2.99-1.26zm4.28 16.6c-.34.79-.5 1.14-.94 1.85-.62 1-1.5 2.24-2.59 2.25-.97.01-1.22-.63-2.53-.62-1.31.01-1.59.63-2.56.62-1.09-.01-1.92-1.13-2.54-2.13-1.74-2.79-1.92-6.06-.85-7.8.76-1.24 1.96-1.97 3.09-1.97 1.15 0 1.87.63 2.82.63.92 0 1.48-.63 2.81-.63 1.01 0 2.08.55 2.84 1.5-2.5 1.37-2.09 4.93.45 5.9z"/>
            </svg>
            <span class="store-text"><span class="small">Télécharger sur l'</span><span class="big">App Store</span></span>
          </a> -->
          <a href="#" class="store-btn">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#00D9FF" d="M4 2.5v19l10-9.5z" />
              <path fill="#00F076" d="M4 2.5l13 6.5-3 3z" />
              <path fill="#FF3A44" d="M4 21.5l13-6.5-3 3z" />
              <path fill="#FFCF00" d="M14 12l3-3 3.5 1.75c1 .5 1 1.75 0 2.25L17 15z" />
            </svg>
            <span class="store-text"><span class="small">Disponible sur</span><span class="big">Google Play</span></span>
          </a>
        </div>
      </div>

      <!-- RIGHT VISUAL -->
      <div class="device-wrap">
        <div class="device-glow"></div>
        <div class="device">
          <div class="device-island"></div>
          <img class="device-screen" :src="dashboardScreenshot" alt="Tableau de bord Sotê" />
        </div>
        
        <!-- Floating Chips -->
        <div class="float-chip fc1">
          <div class="fc-ic green">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          Paiement confirmé
        </div>
        <div class="float-chip fc2">
          <div class="fc-ic dark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          Artisan disponible
        </div>
      </div>

    </div>
  </section>

  <!-- Countries Badge -->
  <div class="badge-wrapper wrap">
    <CountriesBadge />
  </div>

  <!-- STATS SECTION -->
  <section class="stats-strip" ref="statsSection">
    <div class="stats-container wrap">
      <div v-for="(s, i) in stats" :key="s.label" class="stat-item">
        <div class="stat-num">{{ formatNumber(displayValues[i], s.decimals) }}{{ s.suffix }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================
   BASE WRAPPER
========================================= */
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
}

/* =========================================
   HERO SECTION
========================================= */
.hero {
  padding: 80px 0 30px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #FCFCFC 0%, rgba(228, 241, 232, 0.4) 100%);
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 60px;
  align-items: center;
  text-align: left;
}

/* =========================================
   HERO TYPOGRAPHY
========================================= */
.hero-text {
  max-width: 520px;
}

.hero h1 {
  font-size: clamp(36px, 4.5vw, 52px);
  font-weight: 850;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--green-dark);
  margin-bottom: 24px;
}

.hero h1 .gradient-text {
  background: linear-gradient(135deg, var(--green-primary), var(--green-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p.lead {
  font-size: 17px;
  color: var(--ink-soft);
  line-height: 1.7;
  margin-bottom: 36px;
}

/* =========================================
   STORE BADGES
========================================= */
.store-badges {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.store-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--ink);
  color: white;
  padding: 14px 24px 14px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease;
}

.store-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px -8px rgba(0, 0, 0, 0.5);
}

.store-text .small {
  display: block;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  line-height: 1.2;
}
.store-text .big {
  display: block;
  font-size: 16px;
  font-weight: 750;
  font-family: 'Sora', sans-serif;
  line-height: 1.2;
}

/* =========================================
   DEVICE VISUAL
========================================= */
.device-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

/* Subtle Glow behind phone */
.device-glow {
  position: absolute;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(45, 90, 61, 0.18), transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.device {
  position: relative;
  width: 280px;
  background: #0a0f0c;
  border-radius: 40px;
  padding: 14px 14px 24px 14px;
  box-shadow: 
    0 0 0 1px rgba(0,0,0,0.1),
    0 50px 100px -20px rgba(45, 90, 61, 0.5),
    0 30px 60px -10px rgba(0,0,0,0.25);
  animation: floatDevice 6s ease-in-out infinite;
  z-index: 1;
}

@keyframes floatDevice {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}

/* Dynamic Island */
.device-island {
  width: 80px;
  height: 22px;
  background: #0a0f0c;
  border-radius: 20px;
  margin: 0 auto 12px auto;
  box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
}

.device-screen {
  width: 100%;
  display: block;
  border-radius: 26px;
}

/* =========================================
   FLOATING CHIPS
========================================= */
.float-chip {
  position: absolute;
  border-radius: 16px;
  box-shadow: 0 20px 40px -10px rgba(45, 90, 61, 0.25);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  z-index: 2;
  animation: chipFloat 5s ease-in-out infinite;
}

.fc-ic {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fc-ic.green {
  background: var(--green-light);
  color: var(--green-primary);
}

.fc-ic.dark {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.fc1 {
  top: 60px;
  left: -30px;
  background: white;
  color: var(--ink);
  animation-delay: 0s;
}

.fc2 {
  bottom: 80px;
  right: -35px;
  background: var(--green-dark);
  color: white;
  animation-delay: 2s; /* offset bounce */
}

@keyframes chipFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* =========================================
   COUNTRIES BADGE WRAPPER
========================================= */
.badge-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 0 0;
}

/* =========================================
   STATS SECTION (Dark Glassmorphic)
========================================= */
.stats-strip {
  padding: 80px 0 100px;
  background: linear-gradient(180deg, rgba(228, 241, 232, 0.4) 0%, #FCFCFC 100%);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  background: rgba(20, 55, 35, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  padding: 52px 48px;
  backdrop-filter: blur(16px);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-num {
  font-family: 'Sora', sans-serif;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 850;
  color: var(--white);
  margin-bottom: 8px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 14px;
  color: rgba(228, 241, 232, 0.7);
  font-weight: 600;
  line-height: 1.4;
}

/* =========================================
   RESPONSIVE - TABLET
========================================= */
@media (max-width: 940px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  
  .hero-text {
    max-width: 100%;
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
  }

  .float-chip {
    display: none; /* Hide on tablet to avoid clutter */
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 32px;
  }
}

/* =========================================
   RESPONSIVE - MOBILE
========================================= */
@media (max-width: 600px) {
  .hero {
    padding-top: 50px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero p.lead {
    font-size: 15px;
  }

  .device {
    width: 240px;
    border-radius: 34px;
    padding: 12px 12px 20px 12px;
  }

  .device-island {
    width: 70px;
    height: 18px;
  }

  .device-screen {
    border-radius: 22px;
  }

  .badge-wrapper {
    padding: 20px 0 0;
    margin-bottom: 20px;
  }

  .stats-strip {
    padding: 60px 0;
  }

  .stats-container {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 36px 24px;
    margin: 0 10px;
    border-radius: 22px;
  }

  .stat-num {
    font-size: 26px;
  }

  .stat-label {
    font-size: 13px;
  }
}

/* =========================================
   REDUCED MOTION
========================================= */
@media (prefers-reduced-motion: reduce) {
  .device, .float-chip, .store-btn { animation: none; transition: none; }
}
</style>