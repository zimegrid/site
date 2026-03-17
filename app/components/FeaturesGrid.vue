<template>
  <section class="py-10 md:py-20 bg-white" id="features">
    <div class="container mx-auto px-4 md:px-16">
      <div class="mb-10 md:mb-16 text-center">
        <p class="text-[14px] font-semibold tracking-[2.1px] uppercase text-[#0057e2] mb-4">Feature Highlights</p>
        <h2 class="text-[32px] md:text-[48px] font-semibold leading-tight mb-4 md:mb-6 text-[#0c130f]">Why We’re the Trusted<br />Choice for Your Success</h2>
        <p class="text-base md:text-[18px] text-[#5c615e]">Excellence, tailored solutions, and expert guidance for your financial goals</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="(feature, index) in features" :key="index" class="flex flex-col gap-6 overflow-hidden reveal" :style="{ transitionDelay: `${index * 0.1}s` }">
          <div class="w-16 h-16 bg-[#0057e2] rounded-full flex items-center justify-center border border-[#8f9292]/25">
            <img :src="feature.icon" :alt="feature.title" class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-lg md:text-[20px] font-semibold mb-4 text-[#0c130f]">{{ feature.title }}</h3>
            <p class="text-sm md:text-[14px] text-[#5c615e] leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Loyalty Programs',
    description: 'Configure points or stamps; define tiers; set eligibility and expiry; automate redemption logic',
    icon: '/images/highlights/loyalty.svg'
  },
  {
    title: 'QR Scanning & Redemption',
    description: 'Fast in‑store validation with scannable codes for staff and customers',
    icon: '/images/highlights/qr.svg'
  },
  {
    title: 'Customer Management',
    description: 'Centralized profiles, preferences, segments, and complete transaction history',
    icon: '/images/highlights/customer.svg'
  },
  {
    title: 'Menu Management',
    description: 'Manage categories, items, pricing, availability, and featured promotions',
    icon: '/images/highlights/menu.svg'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Visits, redemptions, active customers, cohort trends, and top‑performing rewards/items',
    icon: '/images/highlights/analytics.svg'
  },
  {
    title: 'Role‑Based Access',
    description: 'Super Admin, Merchant, Staff, and Customer flows with fine‑grained permissions',
    icon: '/images/highlights/role.svg'
  }
]
</script>
