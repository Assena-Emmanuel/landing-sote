<script setup>
const reasons = [
  {
    title: "Simple d'utilisation",
    desc: 'Une interface claire, pensée pour être prise en main en quelques minutes, sans formation nécessaire.',
    path: '<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>',
  },
  {
    title: 'Adapté au marché africain',
    desc: "Pensé pour les réalités locales de la gestion immobilière en Côte d'Ivoire et à travers l'Afrique.",
    path: '<path d="M12 2l9 4.5v6c0 5-3.8 8.7-9 9.5-5.2-.8-9-4.5-9-9.5v-6L12 2z"/>',
  },
  {
    title: 'Tout-en-un',
    desc: 'Propriétaires, locataires et artisans réunis sur une seule plateforme, pour une gestion sans friction.',
    path: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/>',
  },
]
</script>

<template>
  <section class="section">

    <!-- BACKGROUND -->
    <div class="background"></div>

    <div class="wrap">
      <div class="section-head">
        <div class="kicker">Pourquoi Sotê ?</div>
        <h2>Une application pensée pour vous</h2>
      </div>
      <div class="why-grid">
        <div v-for="r in reasons" :key="r.title" class="why-card">
          <div class="why-ic">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="r.path"></svg>
          </div>
          <h3>{{ r.title }}</h3>
          <p>{{ r.desc }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 100px;
  background: var(--green-light);
  border-radius: 10px;
  padding-top: 90px;
  padding-bottom: 150px;
}
.section {
  position: relative;
  isolation: isolate;

  min-height: 90vh;
  padding: 100px 0;
  overflow: hidden;
  
}

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
.section-head {
  max-width: 640px;
  margin: 0 auto 56px auto;
  text-align: center;
}
.kicker {
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green-primary);
  margin-bottom: 12px;
}
.section-head h2 {
  font-size: 34px;
  font-weight: 800;
  color: var(--green-dark);
  line-height: 1.25;
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.why-card {
  text-align: center;
  padding:20px 10px;
  border: 1px solid var(--green-primary);
  border-radius: 10px;
}
.why-ic {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--white);
  color: var(--green-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px auto;
  box-shadow: 0 8px 20px rgba(45, 90, 61, 0.08);
}
.why-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--green-dark);
  margin-bottom: 10px;
}
.why-card p {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 280px;
  margin: 0 auto;
}
@media (max-width: 860px) {
  .why-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}
</style>
