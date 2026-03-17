<template>
  <section class="py-10 bg-white reveal overflow-hidden">
    <div class="container mx-auto px-4 md:px-16 flex flex-col items-center">
      <p class="font-semibold text-lg text-[#71717a] mb-6">Trusted by Over 1,000 Company Worldwide</p>
      
      <div class="relative w-full overflow-hidden">
        <div class="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] gap-10 md:gap-20 py-8">
          <!-- First set of logos -->
          <div class="flex shrink-0 items-center gap-10 md:gap-20 items-center h-20">
            <img v-for="i in 5" :key="`a-${i}`" src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png" alt="Partner Logo" class="h-14" />
          </div>
          <!-- Second set of logos for seamless loop -->
          <div class="flex shrink-0 items-center gap-10 md:gap-20 items-center h-20">
            <img v-for="i in 5" :key="`b-${i}`" src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png" alt="Partner Logo" class="h-14" />
          </div>
        </div>
        
        <!-- Gradient fades for smooth edges -->
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
</script>
