<script setup lang="ts">
import { onMounted, watch } from 'vue'
const route = useRoute()

const initObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  initObserver()
})

// Re-initialize observer on route change
watch(() => route.path, () => {
  setTimeout(() => {
    initObserver()
  }, 100)
})
</script>

<template>
  <div class="app-layout">
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
    <ContactDialog />
    <OnboardingDialog />
    <CookieConsent />
  </div>
</template>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
