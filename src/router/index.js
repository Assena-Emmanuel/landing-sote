import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '@/components/HeroSection.vue'
import ProfilesSection from '@/components/ProfilesSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import WhySection from '@/components/WhySection.vue'
import DownloadSection from '@/components/DownloadSection.vue'
import TermsSection from '@/components/TermsSection.vue'

const routes = [
  { path: '/', name: 'accueil', component: HeroSection },
  { path: '/profils', name: 'profils', component: ProfilesSection },
  { path: '/fonctionnalites', name: 'fonctionnalites', component: FeaturesSection },
  { path: '/pourquoi', name: 'pourquoi', component: WhySection },
  { path: '/conditions', name: 'conditions', component: TermsSection },
  { path: '/telecharger', name: 'telecharger', component: DownloadSection },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  },
})

export default router