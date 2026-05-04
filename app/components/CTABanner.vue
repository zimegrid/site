<template>
  <section
    id="pricing"
    class="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-[#ffffff] py-16 md:py-24 text-[#111827]"
  >
    <!-- Dynamic Background Accents -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[120px]" />
      <div class="absolute -right-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-200/20 blur-[120px]" />
    </div>

    <div class="container relative z-10 mx-auto px-4 md:px-16">
      <div class="reveal mb-16 flex flex-col items-center text-center">
        <div class="mb-5 inline-flex rounded-full bg-blue-600/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-700">
          Pricing Plans
        </div>
        <h2 class="mb-6 max-w-[800px] text-[42px] font-extrabold leading-tight tracking-tight text-[#002d72] md:text-[64px]">
          Scalable plans for <span class="text-blue-600">every business</span>
        </h2>
        <p class="max-w-[700px] text-xl leading-relaxed text-[#4b5563]">
          Whether you're a single venue or a global brand, we have the tools to help you grow customer loyalty.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="group relative flex flex-col rounded-[40px] border border-white bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,87,226,0.12)] reveal"
          :class="plan.popular ? 'ring-4 ring-blue-600/10 scale-[1.02] z-20' : 'z-10'"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-blue-600/20"
          >
            Most Popular
          </div>

          <div class="mb-10 flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-3xl font-black tracking-tight text-[#002d72]">{{ plan.name }}</h3>
              <p class="mt-3 text-[15px] font-medium leading-relaxed text-gray-500">{{ plan.description }}</p>
              <!-- Plan Chips/Badges -->
              <div v-if="plan.chips?.length" class="mt-4 flex flex-wrap gap-2">
                <span 
                  v-for="chip in plan.chips" 
                  :key="chip"
                  class="rounded-lg bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600 border border-blue-100"
                >
                  {{ chip }}
                </span>
              </div>
            </div>
          </div>

          <div class="mb-10 flex flex-col items-center justify-center rounded-3xl bg-gray-50/80 py-8">
            <div class="flex items-baseline gap-1.5">
              <span class="text-3xl font-bold text-blue-600">$</span>
              <span class="text-7xl font-black tracking-tighter text-[#002d72]">{{ plan.price.replace('$', '') }}</span>
              <span class="text-lg font-bold text-gray-400">/mo</span>
            </div>
            <div v-if="plan.note" class="mt-3 rounded-full bg-orange-100 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-orange-600">
              {{ plan.note }}
            </div>
          </div>

          <button
            class="mb-10 w-full rounded-[24px] py-5 text-base font-black tracking-wide transition-all duration-300 active:scale-95"
            :class="plan.popular ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-700/40' : 'bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 hover:border-blue-200'"
          >
            Get Started Now
          </button>

          <div class="space-y-8">
            <div v-for="featureGroup in plan.featureGroups" :key="featureGroup.title">
              <div class="mb-5 flex items-center gap-3">
                <div class="h-1 w-6 rounded-full bg-blue-600/20"></div>
                <div class="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                  {{ featureGroup.title }}
                </div>
              </div>
              <ul class="space-y-4">
                <li
                  v-for="feature in featureGroup.items"
                  :key="feature.label"
                  class="flex items-center justify-between group/item"
                >
                  <span class="text-[15px] font-semibold text-gray-700 transition-colors group-hover/item:text-[#002d72]">
                    {{ feature.label }}
                  </span>
                  <div class="flex items-center">
                    <span 
                      v-if="feature.value === '✓'"
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600"
                    >
                      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span 
                      v-else-if="feature.value === '✕'"
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-300"
                    >
                      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span v-else class="text-[13px] font-black text-blue-600">
                      {{ feature.value }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <p class="mt-20 text-center text-[15px] font-bold text-gray-400">
        Transparent pricing. No hidden fees. <span class="text-blue-600">Choose your loyalty model anytime.</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    name: 'Core',
    price: '$59',
    note: '',
    tagline: 'Simple loyalty, made easy',
    description: 'Perfect for independent venues getting started with digital loyalty.',
    popular: false,
    chips: ['Stamp or Points'],
    featureGroups: [
      {
        title: 'Platform',
        items: [
          { label: 'Branded mobile app', value: '✓' },
          { label: 'Merchant dashboard', value: '✓' },
          { label: 'Smart Loyalty Tablet', value: 'Discounted' },
          { label: 'Stamp system', value: '✓' },
          { label: 'Points system', value: '✓' },
          { label: 'Membership tiers', value: '✓' }
        ]
      },
      {
        title: 'Engagement tools',
        items: [
          { label: 'QR Code Issuing', value: '✓' },
          { label: 'Push Notifications', value: '✓' },
          { label: 'Customer management', value: '✓' },
          { label: 'Menu and Ordering', value: '✓' },
          { label: 'Banner Advertising', value: '✓' }
        ]
      },
      {
        title: 'Business growth',
        items: [
          { label: 'Email templates', value: 'Add-on' },
          { label: 'Email campaigns', value: 'Add-on' },
          { label: 'Branch management', value: '✕' },
          { label: 'Staff management', value: '✕' }
        ]
      },
      {
        title: 'Support',
        items: [
          { label: 'Email Support', value: '✓' },
          { label: 'Web Chat Support', value: '✓' },
          { label: 'Phone Support', value: '✕' }
        ]
      }
    ]
  },
  {
    name: 'Boost',
    price: '$89',
    note: 'Limited Time Offer',
    tagline: 'More engagement, more repeat visits',
    description: 'Built for venues ready to unlock customer insights and stronger campaigns.',
    popular: true,
    chips: ['Stamp or Points', 'Advanced Insights'],
    featureGroups: [
      {
        title: 'Platform',
        items: [
          { label: 'Branded mobile app', value: '✓' },
          { label: 'Merchant dashboard', value: '✓' },
          { label: 'Smart Loyalty Tablet', value: 'Free' },
          { label: 'Stamp system', value: '✓' },
          { label: 'Points system', value: '✓' },
          { label: 'Membership tiers', value: '✓' }
        ]
      },
      {
        title: 'Engagement tools',
        items: [
          { label: 'QR Code Issuing', value: '✓' },
          { label: 'Push Notifications', value: '✓' },
          { label: 'Customer management', value: '✓' },
          { label: 'Menu and Ordering', value: '✓' },
          { label: 'Banner Advertising', value: '✓' }
        ]
      },
      {
        title: 'Business growth',
        items: [
          { label: 'Email templates', value: 'Add-on' },
          { label: 'Email campaigns', value: 'Add-on' },
          { label: 'Branch management', value: '✓' },
          { label: 'Staff management', value: '✓' },
          { label: 'Campaign playbooks', value: '✓' }
        ]
      },
      {
        title: 'Support',
        items: [
          { label: 'Email Support', value: '✓' },
          { label: 'Web Chat Support', value: '✓' },
          { label: 'Phone Support', value: '✕' }
        ]
      }
    ]
  },
  {
    name: 'Signature',
    price: '$179',
    note: '',
    tagline: 'Premium support for ambitious brands',
    description: 'Everything in Boost, plus tailored guidance and higher-touch support.',
    popular: false,
    chips: ['Stamp or Points', 'Best for scaling', 'Switch anytime'],
    featureGroups: [
      {
        title: 'Platform',
        items: [
          { label: 'Branded mobile app', value: '✓' },
          { label: 'Merchant dashboard', value: '✓' },
          { label: 'Smart Loyalty Tablet', value: 'Free' },
          { label: 'Stamp system', value: '✓' },
          { label: 'Points system', value: '✓' },
          { label: 'Membership tiers', value: '✓' }
        ]
      },
      {
        title: 'Engagement tools',
        items: [
          { label: 'QR Code Issuing', value: '✓' },
          { label: 'Push Notifications', value: '✓' },
          { label: 'Customer management', value: '✓' },
          { label: 'Menu and Ordering', value: '✓' },
          { label: 'Banner Advertising', value: '✓' }
        ]
      },
      {
        title: 'Business growth',
        items: [
          { label: 'Email templates', value: '✓' },
          { label: 'Email campaigns', value: '✓' },
          { label: 'Dedicated onboarding', value: '✓' },
          { label: 'Branch management', value: '✓' },
          { label: 'Staff management', value: '✓' },
          { label: 'Success partner', value: '✓' }
        ]
      },
      {
        title: 'Support',
        items: [
          { label: 'Email Support', value: '✓' },
          { label: 'Web Chat Support', value: '✓' },
          { label: 'Phone Support', value: '✓' }
        ]
      }
    ]
  }
]
</script>
