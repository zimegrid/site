<template>
  <section class="py-10 bg-[#0c130f] reveal overflow-hidden">
    <div class="container mx-auto px-4 md:px-16 flex flex-col items-center">
      
      <div class="relative w-full overflow-hidden">
        <div class="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] gap-10 md:gap-20 py-8">
          <!-- First set of logos -->
          <div class="flex shrink-0 items-center gap-10 md:gap-20 h-20">
            <img v-for="logo in logos" :key="`a-${logo}`" :src="`/images/company/${logo}`" alt="Partner Logo" class="h-14 w-auto grayscale invert opacity-70 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-300" />
          </div>
          <!-- Second set of logos for seamless loop -->
          <div class="flex shrink-0 items-center gap-10 md:gap-20 h-20">
            <img v-for="logo in logos" :key="`b-${logo}`" :src="`/images/company/${logo}`" alt="Partner Logo" class="h-14 w-auto grayscale invert opacity-70 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-300" />
          </div>
          <!-- Third set for extra smoothness on large screens -->
          <div class="flex shrink-0 items-center gap-10 md:gap-20 h-20">
            <img v-for="logo in logos" :key="`c-${logo}`" :src="`/images/company/${logo}`" alt="Partner Logo" class="h-14 w-auto grayscale invert opacity-70 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
        
        <!-- Gradient fades for smooth edges -->
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0c130f] to-transparent pointer-events-none z-10"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0c130f] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  'mobilefood.svg',
  'rozana.svg',
  'tequilas-logo.svg'
]
</script>
