<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  defineProps,
  defineEmits
} from 'vue'

import logo from '@/assets/images/logo.png'

const props = defineProps({
  activePage: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['navigate'])

const pages = [
  { id: 'accueil', label: 'Accueil', path: '/' },
  { id: 'profils', label: 'Profils', path: '/profils' },
  { id: 'fonctionnalites', label: 'Fonctionnalités', path: '/fonctionnalites' },
  { id: 'pourquoi', label: 'Pourquoi Sotê', path: '/pourquoi' },
  { id: 'conditions', label: 'Conditions & Confidentialité', path: '/conditions' },
]

const scrolled = ref(false)
const menuOpen = ref(false)


/* =========================================
   SCROLL
========================================= */

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})


/* =========================================
   NAVIGATION
========================================= */

function go(id) {
  menuOpen.value = false
  emit('navigate', id)
}


/* =========================================
   MENU BURGER
========================================= */

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>


<template>

  <nav :class="{ scrolled }">

    <div class="nav-inner">

      <!-- ================================= -->
      <!-- LOGO                              -->
      <!-- ================================= -->

      <a
        href="/"
        class="logo-group"
        @click.prevent="go('accueil')"
      >

        <div class="logo-mark">

          <img
            :src="logo"
            alt="Logo Sotê"
          />

        </div>

        <div class="brand">
          Sotê
        </div>

      </a>


      <!-- ================================= -->
      <!-- DESKTOP NAVIGATION                -->
      <!-- ================================= -->

      <div class="nav-links">

        <a
          v-for="p in pages"
          :key="p.id"
          :href="p.path"
          class="nav-link"
          :class="{ active: props.activePage === p.id }"
          @click.prevent="go(p.id)"
        >
          {{ p.label }}
        </a>

      </div>


      <!-- ================================= -->
      <!-- DESKTOP DOWNLOAD BUTTON           -->
      <!-- ================================= -->

      <a
        href="/telecharger"
        class="btn-solid"
        @click.prevent="go('telecharger')"
      >
        Télécharger l'app
      </a>


      <!-- ================================= -->
      <!-- BURGER BUTTON                     -->
      <!-- ================================= -->

      <button
        class="burger-btn"
        :class="{ open: menuOpen }"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Ouvrir le menu"
        @click="toggleMenu"
      >

        <span></span>
        <span></span>
        <span></span>

      </button>

    </div>


    <!-- ================================= -->
    <!-- MOBILE MENU                       -->
    <!-- ================================= -->

    <transition name="mobile-menu">

      <div
        v-if="menuOpen"
        class="mobile-menu"
      >

        <a
          v-for="p in pages"
          :key="p.id"
          :href="p.path"
          class="mobile-link"
          :class="{ active: props.activePage === p.id }"
          @click.prevent="go(p.id)"
        >
          {{ p.label }}
        </a>


        <!-- Mobile Download Button -->

        <a
          href="/telecharger"
          class="mobile-btn"
          @click.prevent="go('telecharger')"
        >
          Télécharger l'app
        </a>

      </div>

    </transition>

  </nav>

</template>


<style scoped>

/* =========================================
   NAVIGATION
========================================= */

nav {
  position: sticky;

  top: 0;

  z-index: 100;

  background:
    var(--white);

  transition:
    box-shadow 0.25s ease;
}


nav.scrolled {
  box-shadow:
    0
    4px
    20px
    rgba(
      45,
      90,
      61,
      0.08
    );
}


/* =========================================
   NAV INNER
========================================= */

.nav-inner {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  width:
    min(
      1180px,
      calc(100% - 56px)
    );

  min-height: 70px;

  margin:
    0
    auto;
}


/* =========================================
   LOGO
========================================= */

.logo-group {
  display: flex;

  align-items: center;

  gap: 10px;

  cursor: pointer;

  flex-shrink: 0;

  text-decoration: none;
}


.logo-mark {
  width: 38px;

  height: 38px;

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      #1a3a6b,
      var(--green-primary)
    );

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;
}


.logo-mark img {
  width: 100%;

  height: 100%;

  object-fit: contain;
}


.brand {
  font-size: 20px;

  font-weight: 800;

  color:
    var(--green-dark);
}


/* =========================================
   DESKTOP LINKS
========================================= */

.nav-links {
  display: flex;

  align-items: center;

  gap: 6px;

  margin-left: auto;
}


.nav-link {
  font-size: 14.5px;

  font-weight: 600;

  color:
    var(--ink-soft);

  padding:
    8px
    14px;

  border-radius: 8px;

  text-decoration: none;

  white-space: nowrap;

  transition:
    color 0.15s,
    background 0.15s;
}


.nav-link:hover {
  color:
    var(--green-dark);
}


.nav-link.active {
  color:
    var(--green-dark);

  background:
    var(--green-light);
}


/* =========================================
   DOWNLOAD BUTTON
========================================= */

.btn-solid {
  flex-shrink: 0;

  background:
    var(--green-primary);

  color:
    white;

  font-size: 14px;

  font-weight: 700;

  padding:
    12px
    22px;

  border-radius: 12px;

  box-shadow:
    0
    8px
    18px
    -8px
    rgba(
      74,
      124,
      89,
      0.5
    );

  text-decoration: none;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}


.btn-solid:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0
    12px
    24px
    -8px
    rgba(
      74,
      124,
      89,
      0.6
    );
}


/* =========================================
   BURGER BUTTON
========================================= */

.burger-btn {
  display: none;

  width: 44px;

  height: 44px;

  padding: 10px;

  border: none;

  border-radius: 10px;

  background:
    var(--green-light);

  cursor: pointer;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 5px;
}


.burger-btn span {
  display: block;

  width: 22px;

  height: 2px;

  border-radius: 2px;

  background:
    var(--green-dark);

  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
}


/* =========================================
   BURGER → X
========================================= */

.burger-btn.open span:nth-child(1) {
  transform:
    translateY(7px)
    rotate(45deg);
}


.burger-btn.open span:nth-child(2) {
  opacity: 0;
}


.burger-btn.open span:nth-child(3) {
  transform:
    translateY(-7px)
    rotate(-45deg);
}


/* =========================================
   MOBILE MENU
========================================= */

.mobile-menu {
  display: none;

  flex-direction: column;

  gap: 6px;

  padding:
    12px
    20px
    20px;

  background:
    var(--white);

  border-top:
    1px solid
    rgba(
      45,
      90,
      61,
      0.08
    );

  box-shadow:
    0
    10px
    20px
    rgba(
      45,
      90,
      61,
      0.08
    );
}


/* =========================================
   MOBILE LINKS
========================================= */

.mobile-link {
  display: block;

  width: 100%;

  box-sizing: border-box;

  padding:
    13px
    14px;

  border-radius: 10px;

  color:
    var(--ink-soft);

  font-size:
    14.5px;

  font-weight:
    600;

  text-decoration:
    none;

  transition:
    color 0.15s,
    background 0.15s;
}


.mobile-link:hover,
.mobile-link.active {
  color:
    var(--green-dark);

  background:
    var(--green-light);
}


/* =========================================
   MOBILE DOWNLOAD BUTTON
========================================= */

.mobile-btn {
  display: block;

  margin-top: 8px;

  padding:
    13px
    16px;

  border-radius: 10px;

  background:
    var(--green-primary);

  color:
    white;

  font-size:
    14px;

  font-weight:
    700;

  text-align:
    center;

  text-decoration:
    none;
}


/* =========================================
   MOBILE MENU ANIMATION
========================================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}


.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;

  transform:
    translateY(-10px);
}


/* =========================================
   TABLET / MOBILE
========================================= */

@media (max-width: 900px) {

  .nav-inner {
    width:
      calc(100% - 40px);
  }


  /* Hide desktop navigation */

  .nav-links,
  .btn-solid {
    display: none;
  }


  /* Show burger */

  .burger-btn {
    display: flex;
  }


  /* Show mobile menu */

  .mobile-menu {
    display: flex;
  }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 400px) {

  .nav-inner {
    width:
      calc(100% - 28px);
  }


  .brand {
    font-size:
      18px;
  }


  .logo-mark {
    width:
      36px;

    height:
      36px;
  }

}
</style>