<script setup>
import { defineEmits } from 'vue';
import logo from '@/assets/images/logo.png'
defineEmits(['navigate'])
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo-group">
            <div class="logo-mark">
              <img :src="logo" alt="Sotê" />
            </div>
            <div class="brand">Sotê</div>
          </div>
          <p>Gérer ou payer facilement vos loyers.</p>
        </div>
        <div class="footer-links">
          <a href="#" @click.prevent="$emit('navigate', 'conditions')">Mentions légales</a>
          <a href="#" @click.prevent="$emit('navigate', 'conditions')">Confidentialité</a>
          <a href="#">Contact</a>
        </div>
        <div class="social-row">
          <div class="social-ic">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </div>
          <div class="social-ic">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </div>
          <div class="social-ic">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.319-3.017c0-.276.024-.55.068-.816A9.6 9.6 0 0022 4.01z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 Sotê. Tous droits réservés.</div>
        <div>Abidjan, Côte d'Ivoire</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
}
footer {
  padding: 60px 0 34px 0;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
}
.logo-group {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-mark {
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: linear-gradient(135deg, #1a3a6b, var(--green-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.logo-mark img {
  object-fit: contain;
}
.brand {
  font-size: 20px;
  font-weight: 800;
  color: var(--green-dark);
  font-family: 'Sora', sans-serif;
}
.footer-brand p {
  font-size: 13px;
  color: var(--ink-soft);
  margin-top: 12px;
  max-width: 260px;
  line-height: 1.6;
}
.footer-links {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.footer-links a {
  font-size: 13.5px;
  color: var(--ink-soft);
  text-decoration: none;
}
.footer-links a:hover {
  color: var(--green-primary);
}
.social-row {
  display: flex;
  gap: 10px;
}
.social-ic {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--green-light);
  color: var(--green-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  font-size: 12.5px;
  color: var(--ink-soft);
  flex-wrap: wrap;
  gap: 10px;
}
</style>