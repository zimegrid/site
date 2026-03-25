<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
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
})
</script>

<template>
  <div class="app-layout">
    <AppNavbar />
    <main>
      <HeroSection />
      <TrustedBy />
      <FeaturesGrid />
      <ProcessSteps />
      <CTABanner />
      <TargetAudience />
      <IndustryVerticals />
      <FAQSection />
      <FinalCTA />
    </main>
    <AppFooter />
    <ContactDialog  />
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
