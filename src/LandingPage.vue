<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="landing">
    <AppNavbar />

    <router-view />

    <AppFooter />
  </div>
</template>

<style>
@import './styles/variables.css';
</style>