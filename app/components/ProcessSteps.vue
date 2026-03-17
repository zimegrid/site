<template>
  <section class="py-10 md:py-20 bg-white" id="how-to-start">
    <div class="container mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div class="reveal-left">
        <div class="mb-8 md:mb-12 text-center md:text-left">
          <p class="text-[14px] font-semibold tracking-[2.1px] uppercase text-[#0057e2] mb-4">How to Start</p>
          <h2 class="text-[32px] md:text-[48px] font-semibold leading-tight text-[#0c130f]">Let’s Start Your Path to Loyalty in Five Steps</h2>
        </div>

        <div class="flex flex-col gap-6">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="cursor-pointer transition-all duration-300"
            :class="{ 'opacity-100': activeStep === index, 'opacity-70 hover:opacity-100': activeStep !== index }"
            @click="activeStep = index"
          >
            <div class="flex items-center gap-3 pb-4">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center text-lg md:text-xl font-semibold flex-shrink-0 transition-colors duration-300"
                :class="activeStep === index ? 'bg-[#0057e2] text-white' : 'bg-[#0c130f] text-white'"
              >
                {{ index + 1 }}
              </div>
              <h3 class="flex-1 text-lg md:text-2xl font-semibold text-[#0c130f] transition-colors" :class="{ 'text-[#0057e2]': activeStep === index }">
                {{ step.title }}
              </h3>
              <div class="text-sm text-[#8f9291]">
                <span v-if="activeStep === index" class="rotate-180 inline-block transition-transform duration-300">▼</span>
                <span v-else class="inline-block transition-transform duration-300">▼</span>
              </div>
            </div>
            
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <div v-if="activeStep === index" class="pl-0 md:pl-11 pb-6 text-sm md:text-base text-[#5c615e] leading-relaxed">
                <p>{{ step.description }}</p>
              </div>
            </Transition>
            <div class="h-px bg-[#0c12131a] w-full"></div>
          </div>
        </div>
      </div>

      <div class="order-first md:order-last reveal-right h-[300px] md:h-[700px] relative">
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 translate-x-4"
          enter-to-class="opacity-100 scale-100 translate-x-0"
          leave-active-class="transition-all duration-500 ease-in"
          leave-from-class="opacity-100 scale-100 translate-x-0"
          leave-to-class="opacity-0 scale-95 -translate-x-4"
        >
          <div :key="activeStep" class="bg-[#2b5db7] rounded-[24px] overflow-hidden w-full h-full flex items-center justify-center shadow-2xl">
            <template v-if="currentStep">
              <img :src="currentStep.image" :alt="currentStep.title" class="max-w-[120%] -translate-x-[5%] object-cover h-full w-full" />
            </template>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeStep = ref(0)
const steps = [
  {
    title: 'Get Started for Free',
    description: 'Create your loyalty program (points or stamps), add branches and staff, and import menu items',
    image: '/images/howto/Content.png'
  },
  {
    title: 'Engage Customers',
    description: 'Onboard your customers and start building relationships through personalized rewards.',
    image: '/images/howto/Content1.png'
  },
  {
    title: 'Issue Stamps/Points',
    description: 'Use our simple QR scanning tools to issue rewards instantly at the point of sale.',
    image: '/images/howto/Content2.png'
  },
  {
    title: 'Optimize and Grow',
    description: 'Track performance data and iterate on your rewards to maximize ROI.',
    image: '/images/howto/Content3.png'
  }
]

const currentStep = computed(() => steps[activeStep.value] || steps[0])
</script>
