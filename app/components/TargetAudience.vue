<template>
  <section class="py-10 md:py-20 bg-white" id="target-audience">
    <div class="container mx-auto px-4 md:px-16">
      <div class="mb-10 md:mb-16 text-center">
        <h2 class="text-[32px] md:text-[48px] font-semibold text-[#0c130f] leading-tight mb-4 text-center">Who Table Perks is for</h2>
        <p class="text-base md:text-[18px] text-[#5c615e]">
          Our platform is designed to serve every stakeholder in the loyalty ecosystem.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
        <div 
          v-for="(item, index) in audience" 
          :key="index" 
          class="flex flex-col md:pr-6 md:border-r border-[#3d4142]/10 last:border-none pb-8 md:pb-0 border-b md:border-b-0 last:border-b-0"
        >
          <div class="w-full h-[134px] rounded-[12px] overflow-hidden mb-6 border border-[#8f9292]/24">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <div>
            <h3 class="text-xl md:text-[24px] font-semibold mb-3 text-[#0c130f] text-center">{{ item.title }}</h3>
            <p class="text-sm md:text-[16px] text-[#5c615e] leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const audience = [
  {
    title: 'Owners',
    description: 'Consolidated dashboard across locations, program strategy controls, and high‑level analytics',
    image: '/images/towho/owner.png'
  },
  {
    title: 'Managers',
    description: 'Branch performance insights, staffing tools, local campaigns, and inventory‑aligned promos',
    image: '/images/towho/manager.png'
  },
  {
    title: 'Staff',
    description: 'Simple stamp/point issuance and redemption checks that work on any device',
    image: '/images/towho/staff.png'
  },
  {
    title: 'Customers',
    description: 'Clear progress, reward eligibility, menu browsing, and profile management in a branded app',
    image: '/images/towho/customers.png'
  }
]
</script>
