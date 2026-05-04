<template>
    <nav 
      class="fixed top-0 left-1/2 w-full h-[80px] md:h-[122px] flex items-center justify-center z-[100] px-4 md:px-[64px] max-w-[1440px] -translate-x-1/2 transition-all duration-300"
      :class="[isHomePage ? 'absolute' : 'fixed bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5']"
    >
    <div class="flex justify-between items-center w-full relative ">
      <!-- Logo (Left) -->
      <NuxtLink to="/" class="h-8 md:h-12 flex-shrink-0 z-[101]">
        <img :src="isHomePage ? '/images/logo1.svg' : '/images/logo.svg'" alt="Table Perks" class="h-full object-contain" />
      </NuxtLink>
      
      <!-- Desktop Navigation Links (Centered) -->
      <div class="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
        <div class="flex gap-x-10 items-center pointer-events-auto">
          <!-- <NuxtLink to="/#company" :class="[isHomePage ? 'text-white' : 'text-[#0c130f]']" class="font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Company</NuxtLink> -->
          <NuxtLink to="/#features" :class="[isHomePage ? 'text-white' : 'text-[#0c130f]']" class="font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Features</NuxtLink>
          <!-- <NuxtLink to="/#pricing" :class="[isHomePage ? 'text-white' : 'text-[#0c130f]']" class="font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Pricing</NuxtLink> -->
          <NuxtLink to="/#resources" :class="[isHomePage ? 'text-white' : 'text-[#0c130f]']" class="font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Resources</NuxtLink>
        </div>
      </div>

      <!-- Desktop Action Buttons (Right) -->
      <div class="hidden lg:flex items-center gap-3 z-[101]">
        <a 
          target="_blank" 
          href="https://console.tableperks.com/login" 
          :class="[isHomePage ? 'bg-white text-[#02327e]' : 'bg-[#0057e2] text-white']"
          class="text-[14px] px-6 py-2.5 rounded-full font-semibold transition-colors hover:opacity-90"
        >
          Log In
        </a>
      </div>
      
      <!-- Mobile Menu Toggle Button -->
      <button class="flex lg:hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer z-[102]" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <span class="w-6 h-0.5 rounded-sm transition-all duration-300" :class="[isHomePage ? 'bg-white' : 'bg-[#0c130f]', { 'rotate-45 translate-y-2': isMobileMenuOpen }]"></span>
        <span class="w-6 h-0.5 rounded-sm transition-all duration-300" :class="[isHomePage ? 'bg-white' : 'bg-[#0c130f]', { 'opacity-0': isMobileMenuOpen }]"></span>
        <span class="w-6 h-0.5 rounded-sm transition-all duration-300" :class="[isHomePage ? 'bg-white' : 'bg-[#0c130f]', { '-rotate-45 -translate-y-2': isMobileMenuOpen }]"></span>
      </button>

      <!-- Mobile Navigation Drawer -->
      <div 
        class="fixed top-0 left-0 h-screen bg-[#0a4d9c] flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out z-[100] lg:hidden"
        :class="isMobileMenuOpen ? 'translate-x-0 w-full opacity-100' : 'translate-x-full w-0 opacity-0'"
      >
        <!-- <NuxtLink to="/#company" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Company</NuxtLink> -->
        <NuxtLink to="/#features" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Features</NuxtLink>
        <!-- <NuxtLink to="/#pricing" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Pricing</NuxtLink> -->
        <NuxtLink to="/#resources" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Resources</NuxtLink>
        
        <div class="flex flex-col items-center gap-4 mt-4">
          <a target="_blank" href="https://console.tableperks.com/login" class="bg-white text-[#02327e] text-[18px] px-10 py-3 rounded-full font-semibold" @click="closeMobileMenu">Log In</a>
          <!-- <a href="#register" class="bg-transparent text-white border border-white text-[18px] px-10 py-3 rounded-full font-semibold" @click="closeMobileMenu">Register</a> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isHomePage = computed(() => route.path === '/')

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
