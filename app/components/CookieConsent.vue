<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="showConsent"
      class="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 sm:pb-6"
      aria-live="polite"
    >
      <div
        class="pointer-events-auto flex w-full max-w-2xl items-center gap-4 rounded-2xl border border-black/5 bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.22)] backdrop-blur-md sm:p-5"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie settings"
      >
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f4ff]">
          <span class="text-lg">🍪</span>
        </div>

        <div class="min-w-0 flex-1 space-y-1">
          <p class="truncate text-sm font-semibold text-[#0c130f]">
            We use cookies to improve your experience.
          </p>
          <p class="text-xs text-[#5c615e]">
            You can accept all cookies or keep only essential ones.
            <br>
            <NuxtLink
              to="/cookies"
              class=" text-xs font-medium text-[#0057e2] underline-offset-2 hover:underline"
            >
            Learn more
            </NuxtLink>
          </p>
        </div>

        <div class="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            @click="decline"
            class="inline-flex items-center justify-center rounded-full border border-black/10 px-3 py-2 text-xs font-medium text-[#4b5250] transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057e2] focus-visible:ring-offset-2"
          >
            Essential only
          </button>
          <button
            type="button"
            @click="accept"
            class="inline-flex items-center justify-center rounded-full bg-[#0057e2] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#0057e2]/25 transition-transform transition-shadow hover:shadow-xl hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057e2] focus-visible:ring-offset-2 active:scale-95"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const showConsent = useState<boolean>('cookieConsentOpen', () => false)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    setTimeout(() => {
      showConsent.value = true
    }, 1000)
  }
})

const accept = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  showConsent.value = false
}

const decline = () => {
  localStorage.setItem('cookie-consent', 'essential')
  showConsent.value = false
}
</script>