<script setup>
import { ref } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProfilesSection from './components/ProfilesSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import WhySection from './components/WhySection.vue'
import DownloadSection from './components/DownloadSection.vue'
import AppFooter from './components/AppFooter.vue'
import TermsSection from './components/TermsSection.vue'

// Page active du "menu qui remplace le scroll".
// 'accueil' regroupe Hero + Stats + Profils + Fonctionnalités (le coeur de la page).
const activePage = ref('accueil')

function navigate(pageId) {
  activePage.value = pageId
  window.scrollTo({ top: 0, behavior: 'instant' })
}
</script>

<template>
  <div class="landing">
    <AppNavbar :active-page="activePage" @navigate="navigate" />

    <!-- Accueil : Hero + stats -->
    <template v-if="activePage === 'accueil'">
      <HeroSection />
    </template>

    <!-- Profils -->
    <template v-else-if="activePage === 'profils'">
      <ProfilesSection />
    </template>

    <!-- Fonctionnalités -->
    <template v-else-if="activePage === 'fonctionnalites'">
      <FeaturesSection />
    </template>

    <!-- Pourquoi Sotê -->
    <template v-else-if="activePage === 'pourquoi'">
      <WhySection />
    </template>

    <!-- Conditions & ConfidentialitÃŠ -->
    <template v-else-if="activePage === 'conditions'">
      <TermsSection />
    </template>

    <!-- Télécharger -->
    <template v-else-if="activePage === 'telecharger'">
      <DownloadSection />
    </template>

    <AppFooter />
  </div>
</template>

<style>
@import './styles/variables.css';
</style>
