<template>
  <section class="py-10 md:py-20">
    <div class="container mx-auto px-4 md:px-16">
      <div class="relative overflow-hidden rounded-[24px] h-[360px] md:h-[390px] bg-[#0057e2] bg-[url('/images/cross.png')] bg-cover bg-center flex items-center justify-center text-center reveal">
        <div class="relative z-[2] text-white max-w-[1120px] px-6">
          <h2 class="text-[32px] md:text-[48px] font-semibold mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent tracking-[-0.96px] leading-[1.2]">
            Ready to Build Loyalty That Lasts?
          </h2>
          <p class="text-base md:text-[18px] text-[#edf7fd] mb-12">
            See how the platform fits your branches, menu, and customers
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center bg-white text-[#0c130f] border border-black/10 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all"
            @click.prevent="openOnboarding"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isOnboardingOpen = useState<boolean>('onboardingOpen', () => false)

const openOnboarding = () => {
  isOnboardingOpen.value = true
}
</script>
