<template>
  <section class="py-10 md:py-20 bg-white" id="industry-verticals">
    <div class="container mx-auto px-4 md:px-16 reveal">
      <div class="mb-10 md:mb-16 text-center">
        <p class="text-[14px] font-semibold tracking-[2.1px] uppercase text-[#0057e2] mb-4">Solutions by Vertical</p>
        <h2 class="text-[32px] md:text-[48px] font-semibold leading-tight text-[#0c130f] text-center">Tailored for the unique needs of<br />different business types.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div v-for="(item, index) in verticals" :key="index" class="flex flex-col gap-6">
          <div class="w-full h-[200px] md:h-[246px] rounded-[12px] overflow-hidden border border-[#8f9292]/24">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <div>
            <h3 class="text-xl md:text-[24px] font-semibold mb-4 text-[#0c130f]">{{ item.title }}</h3>
            <p class="text-sm md:text-[16px] text-[#5c615e] leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const verticals = [
  {
    title: 'Restaurants',
    description: 'Replace punch cards, menu-linked rewards like Digital loyalty cards, Menu item rewards and Table-to-reward linking',
    image: '/images/verticals/restaurent.png'
  },
  {
    title: 'Cafes & Bakeries',
    description: 'Small-ticket repeat visits, seasonal promos like Stamp card programs, Quick rewards and Seasonal campaigns',
    image: '/images/verticals/cafe.png'
  },
  {
    title: 'Salons & Spas',
    description: 'Appointment-based points, tiered perks like Service-based rewards, VIP tiers and Appointment rewards',
    image: '/images/verticals/salon.png'
  },
  {
    title: 'Grocery & Convenience',
    description: 'Multi-location scaling, basket-size promotions like Multi-branch management, Basket value rewards and Volume incentives',
    image: '/images/verticals/grocery.png'
  }
]
</script>
