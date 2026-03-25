<template>
    <nav class="absolute top-0 left-1/2 w-full h-[80px] md:h-[122px] flex items-center justify-center z-[100] px-4 md:px-[64px] max-w-[1440px] -translate-x-1/2">
    <div class="flex justify-between items-center w-full relative ">
      <!-- Logo (Left) -->
      <div class="h-8 md:h-12 flex-shrink-0 z-[101]">
        <img src="/images/logo1.svg" alt="Table Perks" class="h-full object-contain" />
      </div>
      
      <!-- Desktop Navigation Links (Centered) -->
      <div class="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
        <div class="flex gap-x-10 items-center pointer-events-auto">
          <!-- <a href="#company" class="text-white font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Company</a> -->
          <a href="#features" class="text-white font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Features</a>
          <!-- <a href="#pricing" class="text-white font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Pricing</a> -->
          <a href="#resources" class="text-white font-medium text-base opacity-90 hover:opacity-100 transition-opacity">Resources</a>
        </div>
      </div>

      <!-- Desktop Action Buttons (Right) -->
      <div class="hidden lg:flex items-center gap-3 z-[101]">
        <a target="_blank" href="https://console.tableperks.com/login" class="bg-white text-[#02327e] text-[14px] px-6 py-2.5 rounded-full font-semibold">Log In</a>
        <!-- <a href="#register" class="bg-transparent text-white border border-white text-[14px] px-6 py-2.5 rounded-full font-semibold">Register</a> -->
      </div>
      
      <!-- Mobile Menu Toggle Button -->
      <button class="flex lg:hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer z-[102]" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <span class="w-6 h-0.5 bg-white rounded-sm transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
        <span class="w-6 h-0.5 bg-white rounded-sm transition-all duration-300" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
        <span class="w-6 h-0.5 bg-white rounded-sm transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
      </button>

      <!-- Mobile Navigation Drawer -->
      <div 
        class="fixed top-0 left-0 h-screen bg-[#0a4d9c] flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out z-[100] lg:hidden"
        :class="isMobileMenuOpen ? 'translate-x-0 w-full opacity-100' : 'translate-x-full w-0 opacity-0'"
      >
        <!-- <a href="#company" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Company</a> -->
        <a href="#features" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Features</a>
        <!-- <a href="#pricing" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Pricing</a> -->
        <a href="#resources" class="text-white font-medium text-2xl opacity-90 hover:opacity-100 transition-opacity" @click="closeMobileMenu">Resources</a>
        
        <div class="flex flex-col items-center gap-4 mt-4">
          <a target="_blank" href="https://console.tableperks.com/login" class="bg-white text-[#02327e] text-[18px] px-10 py-3 rounded-full font-semibold" @click="closeMobileMenu">Log In</a>
          <!-- <a href="#register" class="bg-transparent text-white border border-white text-[18px] px-10 py-3 rounded-full font-semibold" @click="closeMobileMenu">Register</a> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
