<script setup>
import { computed } from 'vue'
import ci from '../assets/images/pays/ci.png'

const countries = [
  { flag: ci,name: "Côte d'Ivoire" },
]

// Condition : On active le défilement uniquement à partir de 10 pays
const shouldMarquee = computed(() => countries.length >= 10)

// Si on défile, on duplique la liste pour la boucle infinie seamless.
// Si on ne défile pas, on garde la liste simple.
const displayList = computed(() => {
  return shouldMarquee.value ? [...countries, ...countries] : countries
})
</script>

<template>
  <div class="countries-block">
    
    <!-- Premium Caption Badge -->
    <div class="countries-caption">
      <span class="dot"></span>
      Déjà présent dans {{ countries.length }} pays d'Afrique
    </div>

    <!-- Dynamic Container -->
    <div class="marquee-container" :class="{ 'static-mode': !shouldMarquee }">
      
      <div class="marquee-track" :class="{ 'static-track': !shouldMarquee }">
        <!-- 
          On utilise displayList. 
          Si shouldMarquee est true, la liste est doublée pour l'animation translateX(-50%).
          Si shouldMarquee est false, c'est la liste normale, centrée.
        -->
        <div 
          v-for="(c, index) in displayList" 
          :key="shouldMarquee ? `m-${index}` : `s-${c.name}`" 
          class="country-item"
        >
          <div class="country-flag">
            <img :src="c.flag" :alt="`Drapeau de ${c.name}`" srcset="">
          </div>
          <div class="country-name">{{ c.name }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* =========================================
   BLOCK LAYOUT
========================================= */
.countries-block {
  margin-bottom: 26px;
  padding-top: 20px;
}

/* =========================================
   CAPTION (Glass Pill Badge)
========================================= */
.countries-caption {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 7px 18px;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green-dark);
  background: rgba(228, 241, 232, 0.5);
  border: 1px solid rgba(45, 90, 61, 0.15);
  border-radius: 50px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green-primary);
  box-shadow: 0 0 0 3px rgba(45, 90, 61, 0.2);
  flex-shrink: 0;
}

/* =========================================
   MARQUEE CONTAINER (Dynamic Mode)
========================================= */
.marquee-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  
  /* Soft fade on left and right edges (Activé uniquement en mode défilant) */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

/* =========================================
   STATIC MODE (Si < 10 pays)
========================================= */
.marquee-container.static-mode {
  overflow: visible; /* On laisse le contenu respirer */
  -webkit-mask-image: none; /* Pas de fondu sur les bords */
  mask-image: none;
}

.marquee-track.static-track {
  width: 100%;
  justify-content: center; /* On centre le ou les quelques pays */
  flex-wrap: wrap; /* Permet de les aligner au centre s'il y en a plusieurs (<10) */
  animation: none; /* Pas de défilement */
}

/* =========================================
   MARQUEE TRACK (Animation - Si >= 10 pays)
========================================= */
.marquee-track {
  display: flex;
  gap: 16px;
  width: max-content;
  
  /* The Infinite Scroll Animation */
  animation: scroll 40s linear infinite;
}

/* Pause on hover for UX */
.marquee-container:not(.static-mode):hover .marquee-track {
  animation-play-state: paused;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
  /* -50% fonctionne parfaitement car displayList duplique le tableau, 
     donc la largeur du track est exactement 2x la largeur des pays. */
}

/* =========================================
   COUNTRY CARD (Premium Glass)
========================================= */
.country-item {
  flex: 0 0 auto;
  width: 82px;
  text-align: center;
  padding: 16px 8px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 20px rgba(45, 90, 61, 0.08);
  cursor: default;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, background 0.3s ease;
}

.country-item:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 16px 32px rgba(45, 90, 61, 0.18);
}

.country-flag {
  width: 38px;
  height: 38px;
  margin: 0 auto 8px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 10px rgba(45, 90, 61, 0.1);
  border: 1px solid rgba(228, 241, 232, 0.5);
}

.country-flag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.country-name {
  font-size: 11px;
  color: var(--green-dark);
  font-weight: 700;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* =========================================
   TABLET & DESKTOP
========================================= */
@media (min-width: 940px) {
  .countries-caption {
    margin-left: auto;
    margin-right: auto;
  }
  /* Slightly faster scroll on desktop */
  .marquee-track:not(.static-track) {
    animation-duration: 35s;
  }
}

/* =========================================
   MOBILE
========================================= */
@media (max-width: 600px) {
  .countries-block {
    margin-bottom: 0;
    max-width: 100%;
  }
  .countries-caption {
    font-size: 10px;
    padding: 5px 14px;
    margin-bottom: 16px;
    margin-left: 10px;
  }
  .dot {
    width: 6px;
    height: 6px;
  }
  .country-item {
    width: 74px;
    padding: 14px 6px 12px;
    border-radius: 16px;
  }
  .country-flag {
    width: 34px;
    height: 34px;
    font-size: 18px;
  }
  .country-name {
    font-size: 10px;
  }
}

/* =========================================
   REDUCED MOTION (Accessibility)
========================================= */
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none !important;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .marquee-container {
    overflow: visible;
    mask-image: none;
    -webkit-mask-image: none;
  }
}
</style>