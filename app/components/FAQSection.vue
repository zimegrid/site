<template>
  <section class="py-10 md:py-20 bg-white" id="faqs">
    <div class="container mx-auto px-4 md:px-16">
      <div class="mb-10 md:mb-16 text-center">
        <h2 class="text-[32px] md:text-[48px] font-semibold text-[#0c130f] leading-tight mb-4 text-center">Frequently Asked Questions</h2>
        <p class="text-base md:text-[18px] text-[#5c615e]">Have another question? Please contact our team!</p>
      </div>

      <div class="max-w-[880px] mx-auto flex flex-col gap-6 reveal">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="border border-[#908f92]/24 rounded-[24px] overflow-hidden transition-all duration-300"
          :class="openIndex === index ? 'bg-[#fafafa] border-[#8f9192]/25 shadow-[0_0_0_0.5px_rgba(143,145,146,0.15)]' : 'bg-white'"
        >
          <div class="p-6 md:p-6 flex justify-between items-center cursor-pointer" @click="toggleFAQ(index)">
            <h3 class="text-base md:text-[24px] font-semibold text-[#0c130f] tracking-[-0.288px]">{{ faq.question }}</h3>
            <div class="text-[#5c615e] transition-transform duration-300" :class="{ 'rotate-180': openIndex === index }">
              ▼
            </div>
          </div>
          <div 
            v-show="openIndex === index" 
            class="px-6 pb-6 text-sm md:text-[18px] text-[#5c615e] leading-relaxed transition-all"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref(0)
const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'What exactly is Table Perks?',
    answer: 'Table Perks is a loyalty reward web app designed to enhance customer engagement, streamline reward tracking, and facilitate seamless communication between businesses and their clients.'
  },
  {
    question: 'In what ways does Table Perks boost team efficiency?',
    answer: 'It automates reward issuance and redemption, provides real-time analytics for managers, and simplifies staff workflows through scannable QR codes.'
  },
  {
    question: 'Is Table Perks suitable for teams working remotely?',
    answer: 'Yes, the platform is cloud-based and accessible from anywhere, allowing owners and managers to track multi-location performance remotely.'
  },
  {
    question: 'What measures does Table Perks take to ensure user security?',
    answer: 'We use industry-standard encryption and role-based access controls to protect both business and customer data.'
  },
  {
    question: 'Can Table Perks be accessed on mobile devices?',
    answer: 'Absolutely. Table Perks is fully responsive and optimized for mobile browsers, ensuring a smooth experience for both staff and customers on the go.'
  }
]
</script>
