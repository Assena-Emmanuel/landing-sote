<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits} from 'vue'
import logo from '@/assets/images/logo.png'

const props = defineProps({
  activePage: { type: String, required: true }
})
const emit = defineEmits(['navigate'])

const pages = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'profils', label: 'Profils' },
  { id: 'fonctionnalites', label: 'Fonctionnalités' },
  { id: 'pourquoi', label: 'Pourquoi Sotê' },
  { id: 'conditions', label: 'Conditions' },
]

const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 10
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function go(id) {
  emit('navigate', id)
}
</script>

<template>
  <nav :class="{ scrolled }">
    <div class="nav-inner">
      <div class="logo-group" @click="go('accueil')">
        <div class="logo-mark">
          <img :src="logo"  alt="" srcset="">
        </div>
        <div class="brand">Sotê</div>
      </div>

      <div class="nav-links">
        <a
          v-for="p in pages"
          :key="p.id"
          href="#"
          class="nav-link"
          :class="{ active: props.activePage === p.id }"
          @click.prevent="go(p.id)"
        >
          {{ p.label }}
        </a>
      </div>

      <a href="#" class="btn-solid" @click.prevent="go('telecharger')">Télécharger l'app</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  transition: box-shadow 0.25s ease;
}
nav.scrolled {
  box-shadow: 0 4px 20px rgba(45, 90, 61, 0.08);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px;
  max-width: 1180px;
  margin: 0 auto;
}
.logo-group {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo-mark {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: linear-gradient(135deg, #1a3a6b, var(--green-primary));
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand {
  font-size: 20px;
  font-weight: 800;
  color: var(--green-dark);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-link {
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink-soft);
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: color 0.15s, background 0.15s;
}
.nav-link:hover {
  color: var(--green-dark);
}
.nav-link.active {
  color: var(--green-dark);
  background: var(--green-light);
}
.btn-solid {
  background: var(--green-primary);
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 12px;
  box-shadow: 0 8px 18px -8px rgba(74, 124, 89, 0.5);
  text-decoration: none;
}
@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
}
</style>
