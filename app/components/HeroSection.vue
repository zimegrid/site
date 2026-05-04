<template>
  <section class="bg-[#0057e2] min-h-[auto] md:min-h-[900px] relative overflow-hidden rounded-b-[24px] pt-[100px] md:pt-[162px] pb-[40px] md:pb-0 text-white" id="company">
    <div class="absolute top-[50px] md:top-[136px] left-1/2 -translate-x-1/2 w-[200%] md:w-[1604px] h-full md:h-[976px] z-0 pointer-events-none">
      <!-- <img src="/images/hero_bg_1773559422433.png" alt="" class="w-full h-full object-contain" /> -->
    </div>

    <div class="container relative z-10 flex flex-col items-center text-center reveal mx-auto px-4 md:px-16">
      <div class="flex flex-col md:flex-row items-center gap-3 mb-8 md:mb-6">
        <div class="flex">
          <img src="/images/avatar_1_1773559448571.png" alt="" class="w-8 h-8 rounded-full border border-white" />
          <img src="/images/avatar_2_1773559480132.png" alt="" class="w-8 h-8 rounded-full border border-white -ml-2" />
          <img src="/images/avatar_3_1773559499745.png" alt="" class="w-8 h-8 rounded-full border border-white -ml-2" />
          <img src="/images/avatar_4_1773559565253.png" alt="" class="w-8 h-8 rounded-full border border-white -ml-2" />
        </div>
        <div class="flex flex-col items-center lg:items-start text-sm">
          <div class="flex gap-[2px] mb-1">
             <span v-for="i in 5" :key="i">⭐</span>
          </div>
          <p class="text-[#e8f6f2]">Join <strong class="font-semibold">100+ people</strong> who have already shown interest</p>
        </div>
      </div>

      <h1 class="text-[36px] md:text-[64px] font-semibold leading-tight mb-4 md:mb-6 text-white text-center">
        Turn Every Visit & Customers Into<br />
        Everlasting Loyalty
      </h1>

      <p class="text-sm md:text-lg text-[#e8f6f2] max-w-[800px] mb-8 md:mb-12">
        A complete, white‑label loyalty platform that helps restaurants drive repeat business, manage rewards across branches, and understand customer behavior in real time
      </p>

      <div class="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-6 mb-12 md:mb-20 justify-center">
        <a href="#pricing" class="bg-white text-[#0c130f] hover:bg-gray-50 px-8 py-4 text-sm rounded-full font-semibold transition-all w-full md:w-auto inline-block">See Pricing</a>
        <a href="#" class="border border-white text-white hover:bg-white/10 px-8 py-4 text-sm rounded-full font-semibold transition-all w-full md:w-auto inline-block" @click.prevent="openOnboarding">Get Started</a>
      </div>

      <div class="relative w-[90%] max-w-[800px] mt-5 mx-auto">
        <div class="banner-container">
          <img src="/images/mainbanner.png" alt="Dashboard" class="banner-image" />
        </div>
        <img src="/images/bannerfloat1.png" alt="" class="absolute w-[20%] max-w-[110px] md:w-[110px] rounded-[5px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] -left-[20px] md:-left-[85px] top-[45%] md:top-[24px] z-20" />
        <img src="/images/bannerfloat1.png" alt="" class="absolute w-[20%] max-w-[110px] md:w-[110px] rounded-[5px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] -right-[20px] md:-right-[85px] top-[45%] md:top-[50px] z-20" />
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

<style scoped>
.banner-container {
  position: relative;
}

.banner-image {
  position: absolute;
  bottom: -406px;
  right: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
}

@media (max-width: 668px) {
  .banner-container {
    height: 18vw; /* provide height so image is not cropped by overflow-hidden */
    margin-top: 30px;
   position: relative;

  }
  .banner-image {
    width: 90vw;
    bottom: auto;
    top: 0;
    right: auto;
    border-radius: 8px;
  }
}
</style>
