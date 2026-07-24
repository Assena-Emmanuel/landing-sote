<script setup>
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
</script>

<template>
  <div class="countries-block">
    <div class="countries-caption">
      <span class="dot"></span>
      Déjà présent dans {{ countries.length }} pays d'Afrique
    </div>
    <div class="countries-row-wrap">
      <div class="countries-row">
        <div v-for="c in countries" :key="c.name" class="country-item">
          <div class="country-flag">{{ c.flag }}</div>
          <div class="country-name">{{ c.name }}</div>
        </div>
      </div>
      <div class="fade-edge"></div>
    </div>
  </div>
</template>

<style scoped>
.countries-block {
  margin-bottom: 26px;
}
.countries-caption {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  color: var(--green-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 14px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green-primary);
  box-shadow: 0 0 0 4px var(--green-light);
  flex-shrink: 0;
}
.countries-row-wrap {
  position: relative;
}
.countries-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  overflow-x: auto;
  padding: 4px 28px 10px 2px;
  scrollbar-width: thin;
  scrollbar-color: var(--green-light) transparent;
}
.countries-row::-webkit-scrollbar {
  height: 5px;
}
.countries-row::-webkit-scrollbar-track {
  background: transparent;
}
.countries-row::-webkit-scrollbar-thumb {
  background: var(--green-light);
  border-radius: 999px;
}
.fade-edge {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 10px;
  width: 34px;
  /* background: linear-gradient(to right, transparent, white); */
  pointer-events: none;
}
.country-item {
  flex: 0 0 auto;
  width: 76px;
  text-align: center;
  padding: 12px 6px 10px;
  border-radius: 16px;
  background: var(--green-light);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}
.country-item:hover {
  background: white;
  transform: translateY(-3px);
  box-shadow: 0 14px 26px -12px rgba(45, 90, 61, 0.35);
}
.country-flag {
  width: 34px;
  height: 34px;
  margin: 0 auto 7px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  box-shadow: 0 2px 6px rgba(45, 90, 61, 0.15);
}
.country-name {
  font-size: 10.5px;
  color: var(--green-dark);
  font-weight: 700;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
@media (max-width: 940px) {
  .countries-caption {
    justify-content: center;
    width: 100%;
  }
  .countries-row {
    justify-content: flex-start;
  }
  .fade-edge {
    display: none;
  }
}
</style>