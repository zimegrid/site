<template>
  <section
    id="pricing"
    class="relative overflow-hidden bg-[#0057e2] py-6 md:py-12 text-white"
  >
    <div class="pointer-events-none absolute inset-0 opacity-30">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:72px_72px]" />
      <div class="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(143,216,255,0.28),transparent_60%)]" />
    </div>

    <div class="container relative z-10 mx-auto px-4 md:px-16">
      <div class="reveal mb-6 flex flex-col gap-3 text-left md:mb-8">
        <div class="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.8px] text-white/90">
          Pricing
        </div>
        <h2 class="max-w-[720px] text-[28px] font-semibold leading-[1.08] tracking-[-0.9px] md:text-[42px]">
          Compare plans at a glance
        </h2>
        <p class="max-w-[760px] text-[14px] leading-6 text-[#e8f6f2] md:text-[16px]">
          Run your loyalty program your way with two reward systems to choose from:
          <strong class="font-semibold text-white">Stamp-based rewards</strong> or a
          <strong class="font-semibold text-white">Points-based program</strong>.
          Table Perks helps you drive repeat visits, reward regulars, and grow customer
          retention with your own branded experience.
        </p>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:mt-6 xl:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/40 bg-white text-[#1f2a44] shadow-[0_20px_50px_rgba(4,25,84,0.22)] reveal"
          :class="plan.popular ? 'md:col-span-2 xl:col-span-1 ring-1 ring-white/25 shadow-[0_28px_70px_rgba(4,25,84,0.32)]' : ''"
        >
          <div
            v-if="plan.popular"
            class="absolute left-1/2 top-3 z-20 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-[11px] font-extrabold tracking-[0.8px] text-[#2240a5] shadow-[0_10px_25px_rgba(31,94,255,0.18)]"
          >
            MOST POPULAR
          </div>

          <div
            class="relative flex min-h-[185px] flex-col justify-end overflow-hidden px-5 pb-5 pt-14 text-white md:px-6"
            :class="plan.headerClass"
          >
            <div class="relative z-10">
              <div class="mb-1 text-[32px] font-semibold tracking-[-1px] md:text-[36px]">
                {{ plan.name }}
              </div>
              <div
                v-if="plan.note"
                class="mb-2 inline-flex rounded-xl bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#735300]"
              >
                {{ plan.note }}
              </div>
              <div class="flex flex-wrap items-end gap-2">
                <div class="text-[46px] font-bold leading-none tracking-[-2px] md:text-[56px]">
                  {{ plan.price }}
                </div>
                <div class="mb-1.5 text-base font-semibold text-white/95">
                  / Month
                </div>
              </div>
            </div>
            <div class="absolute inset-x-[-10%] bottom-[-106px] h-[126px] rounded-[100%] bg-white" />
          </div>

          <div class="flex flex-1 flex-col pb-3 pt-1">
            <div class="px-5 pb-3 md:px-6">
              <h3 class="text-[20px] font-semibold leading-[1.2] md:text-[22px]" :class="plan.titleClass">
                {{ plan.tagline }}
              </h3>
              <p class="mt-2 text-[14px] leading-5 text-[#4d5b78] md:text-[15px]">
                {{ plan.description }}
              </p>
            </div>

            <div class="mx-5 rounded-[16px] border border-[#e7ebf5] bg-[#f3f6fc] p-2.5 md:mx-6">
              <div class="mb-2 text-[11px] font-bold uppercase tracking-[0.8px] text-[#61708e]">
                Loyalty system
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="chip in plan.chips"
                  :key="chip.label"
                  class="rounded-full border px-3 py-1.5 text-xs font-semibold md:text-sm"
                  :class="chip.active ? plan.activeChipClass : 'border-[#dbe3f3] bg-white text-[#3b4a67]'"
                >
                  {{ chip.label }}
                </span>
              </div>
            </div>

            <div v-for="featureGroup in plan.featureGroups" :key="featureGroup.title" class="mt-3">
              <div class="bg-[#eef2fb] px-5 py-2.5 text-[14px] font-semibold text-[#4e63da] md:px-6">
                {{ featureGroup.title }}
              </div>
              <ul>
                <li
                  v-for="feature in featureGroup.items"
                  :key="feature.label"
                  class="flex min-h-[38px] items-center justify-between gap-3 border-t border-[#edf1f8] px-5 py-2 text-[13px] leading-5 even:bg-[#fafbfd] md:px-6 md:text-[14px]"
                >
                  <span class="pr-3">{{ feature.label }}</span>
                  <span class="shrink-0 text-right font-extrabold" :class="feature.tone">
                    {{ feature.value }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <p class="mx-auto mt-6 max-w-[980px] text-center text-sm leading-6 text-white/75 md:text-[15px]">
        All plans let merchants choose the loyalty structure that fits their business
        best: a simple digital stamp system or a flexible points-based reward model.
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
    description: 'Perfect for independent venues getting started with digital loyalty and customer rewards.',
    popular: false,
    headerClass: 'bg-[linear-gradient(180deg,#8ed6ff_0%,#2d8cff_78%)]',
    titleClass: 'text-[#1681db]',
    activeChipClass: 'border-transparent bg-[#1681db] text-white',
    chips: [
      { label: 'Choose Stamp or Points', active: true }
    ],
    featureGroups: [
      {
        title: 'Platform',
        items: [
          { label: 'Branded customer mobile app', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Merchant dashboard', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Stamp system', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Points system (slabs + rewards)', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Membership tiers', value: '✓', tone: 'text-[#1681db]' }
        ]
      },
      {
        title: 'Engagement tools',
        items: [
          { label: 'QR/customer-code issuing + redemption', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Customer management + histories', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Menu + categories', value: '✓', tone: 'text-[#1681db]' },
          { label: 'Banners', value: '✓', tone: 'text-[#1681db]' }
        ]
      },
      {
        title: 'Business growth tools',
        items: [
          { label: 'Email templates', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Email campaigns', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Branch management', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Staff management', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Roles/permissions', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Merchant care', value: 'Standard', tone: 'text-[#1681db]' }
        ]
      }
    ]
  },
  {
    name: 'Boost',
    price: '$89',
    note: 'Limited Time Offer',
    tagline: 'More engagement, more repeat visits',
    description: 'Built for venues ready to unlock customer insights and stronger loyalty campaigns.',
    popular: true,
    headerClass: 'bg-[linear-gradient(180deg,#ffd66d_0%,#ffba1f_78%)]',
    titleClass: 'text-[#d89000]',
    activeChipClass: 'border-transparent bg-[#f0aa0d] text-white',
    chips: [
      { label: 'Choose Stamp or Points', active: true },
      { label: 'Switch anytime', active: false }
    ],
    featureGroups: [
      {
        title: 'Platform',
        items: [
          { label: 'Branded customer mobile app', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Merchant dashboard', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Stamp system', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Points system (slabs + rewards)', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Membership tiers', value: '✓', tone: 'text-[#f0aa0d]' }
        ]
      },
      {
        title: 'Engagement tools',
        items: [
          { label: 'QR/customer-code issuing + redemption', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Customer management + histories', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Menu + categories', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Banners', value: '✓', tone: 'text-[#f0aa0d]' }
        ]
      },
      {
        title: 'Business growth tools',
        items: [
          { label: 'Email templates', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Email campaigns', value: '✕', tone: 'text-[#d4d9e6]' },
          { label: 'Branch management', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Staff management', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Roles/permissions', value: '✓', tone: 'text-[#f0aa0d]' },
          { label: 'Merchant care', value: 'Priority', tone: 'text-[#f0aa0d]' },
          { label: 'Campaign playbooks', value: 'Included', tone: 'text-[#f0aa0d]' }
        ]
      }
    ]
  },
  {
    name: 'Signature',
    price: '$179',
    note: '',
    tagline: 'Premium support for ambitious brands',
    description: 'Everything in Boost, plus tailored guidance and higher-touch support for growing operations.',
    popular: false,
    headerClass: 'bg-[linear-gradient(180deg,#b9b1ff_0%,#7a66ff_78%)]',
    titleClass: 'text-[#6f5cf5]',
    activeChipClass: 'border-transparent bg-[#6f5cf5] text-white',
    chips: [
      { label: 'Choose Stamp or Points', active: true },
      { label: 'Best for scaling brands', active: false }
    ],
    featureGroups: [
      {
        title: 'Platform',
        items: [
          { label: 'Branded customer mobile app', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Merchant dashboard', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Stamp system', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Points system (slabs + rewards)', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Membership tiers', value: '✓', tone: 'text-[#6f5cf5]' }
        ]
      },
      {
        title: 'Engagement tools',
        items: [
          { label: 'QR/customer-code issuing + redemption', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Customer management + histories', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Menu + categories', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Banners', value: '✓', tone: 'text-[#6f5cf5]' }
        ]
      },
      {
        title: 'Business growth tools',
        items: [
          { label: 'Email templates', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Email campaigns', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Mailchimp integration', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Branch management', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Staff management', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Roles/permissions', value: '✓', tone: 'text-[#6f5cf5]' },
          { label: 'Merchant care', value: 'VIP', tone: 'text-[#6f5cf5]' },
          { label: 'Campaign playbooks', value: 'Tailored', tone: 'text-[#e64d83]' },
          { label: 'Success partner', value: 'Included', tone: 'text-[#6f5cf5]' }
        ]
      }
    ]
  }
]
</script>
