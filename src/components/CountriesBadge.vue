<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Remplace cette liste par les vrais pays où Sotê est présent
const countries = [
  { flag: '🇨🇮', name: "Côte d'Ivoire" },
  { flag: '🇸🇳', name: 'Sénégal' },
  { flag: '🇨🇲', name: 'Cameroun' },
  { flag: '🇧🇫', name: 'Burkina Faso' },
  { flag: '🇲🇱', name: 'Mali' },
  { flag: '🇹🇬', name: 'Togo' },
  { flag: '🇧🇯', name: 'Bénin' },
  { flag: '🇬🇳', name: 'Guinée' },
  { flag: '🇳🇪', name: 'Niger' },
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇬🇦', name: 'Gabon' },
  { flag: '🇨🇩', name: 'RD Congo' },
  { flag: '🇷🇼', name: 'Rwanda' },
  { flag: '🇰🇪', name: 'Kenya' },
  { flag: '🇲🇦', name: 'Maroc' },
]

const visibleCount = 4
const visibleCountries = countries.slice(0, visibleCount)
const hiddenCount = countries.length - visibleCount

const open = ref(false)
function toggle() {
  open.value = !open.value
}
function close() {
  open.value = false
}
onMounted(() => document.addEventListener('click', close))
onUnmounted(() => document.removeEventListener('click', close))
</script>

<template>
  <div class="eyebrow" @click.stop="toggle">
    <span class="flag-group">
      <span v-for="c in visibleCountries" :key="c.name" class="flag" :title="c.name">{{ c.flag }}</span>
      <span class="flag flag-more">+{{ hiddenCount }}</span>
    </span>
    Déjà présent dans {{ countries.length }} pays d'Afrique

    <div class="countries-popover" :class="{ open }" @click.stop>
      <div class="cp-title">Sotê est disponible dans</div>
      <div class="cp-grid">
        <div v-for="c in countries" :key="c.name" class="cp-item">
          <span>{{ c.flag }}</span> {{ c.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eyebrow {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--green-light);
  color: var(--green-dark);
  font-size: 12.5px;
  font-weight: 700;
  padding: 7px 16px 7px 8px;
  border-radius: 999px;
  margin-bottom: 24px;
  cursor: pointer;
}
.flag-group {
  display: flex;
  align-items: center;
}
.flag {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: white;
  box-shadow: 0 0 0 2px var(--green-light);
  margin-left: -7px;
  overflow: hidden;
}
.flag:first-child {
  margin-left: 0;
}
.flag-more {
  background: var(--green-dark);
  color: white;
  font-size: 9.5px;
  font-weight: 800;
  font-family: 'Sora', sans-serif;
  transition: transform 0.15s;
}
.flag-more:hover {
  transform: scale(1.1);
}
.countries-popover {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  width: 300px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 24px 50px -16px rgba(45, 90, 61, 0.35);
  padding: 18px 20px;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
  cursor: default;
}
.countries-popover.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.cp-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}
.cp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px 14px;
}
.cp-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}
.cp-item span {
  font-size: 16px;
}
@media (max-width: 940px) {
  .countries-popover {
    left: 50%;
    transform: translate(-50%, -6px);
    width: 280px;
  }
  .countries-popover.open {
    transform: translate(-50%, 0);
  }
}
</style>
