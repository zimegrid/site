<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-[1000]">
        <div class="absolute inset-0 bg-[#021a47]/60 backdrop-blur-sm" @click="close"></div>
        <div class="relative flex min-h-full w-full items-stretch sm:items-center justify-center overflow-y-auto p-0 sm:p-4">
          <div
            class="flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[calc(100dvh-2rem)] sm:max-w-[980px] sm:rounded-[28px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="onboarding-dialog-title"
            @click.stop
          >
            <div class="flex items-center justify-between border-b border-black/10 px-4 py-4 sm:hidden">
              <div>
                <h3 id="onboarding-dialog-title" class="text-[#0c130f] text-xl font-semibold">Start onboarding</h3>
                <p class="mt-1 text-sm text-[#5c615e]">Tell us about your business and we will guide you.</p>
              </div>
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center rounded-full text-[#5c615e] transition-colors hover:bg-black/5"
                aria-label="Close onboarding dialog"
                @click="close"
              >
                <span class="text-2xl leading-none">×</span>
              </button>
            </div>

            <div class="grid min-h-0 flex-1 sm:grid-cols-[1.05fr_1fr]">
              <div class="hidden bg-[#0057e2] px-8 py-9 text-white sm:flex sm:flex-col">
                <div class="mb-6 flex items-center justify-between">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Table Perks</p>
                    <h3 id="onboarding-dialog-title" class="mt-3 text-[34px] font-semibold leading-[1.05]">
                      Launch a loyalty program that fits your business
                    </h3>
                  </div>
                  
                </div>

                <p class="max-w-[360px] text-[16px] leading-7 text-[#e8f6ff]">
                  Share a few details and our team will help you pick the right setup, plan your launch, and get your brand ready for customer loyalty.
                </p>

                <div class="mt-8 space-y-4">
                  <div class="rounded-[20px] border border-white/14 bg-white/10 p-4">
                    <p class="text-sm font-semibold">What you get</p>
                    <p class="mt-1 text-sm leading-6 text-white/80">Guidance on setup, loyalty structure, rollout, and the best plan for your venue or brand.</p>
                  </div>
                  <div class="rounded-[20px] border border-white/14 bg-white/10 p-4">
                    <p class="text-sm font-semibold">Best for</p>
                    <p class="mt-1 text-sm leading-6 text-white/80">Restaurants, cafes, multi-branch groups, and operators ready to improve repeat visits.</p>
                  </div>
                  <div class="rounded-[20px] border border-white/14 bg-white/10 p-4">
                    <p class="text-sm font-semibold">Next step</p>
                    <p class="mt-1 text-sm leading-6 text-white/80">Once submitted, we will reach out and help you start onboarding with the right flow.</p>
                  </div>
                </div>
              </div>

              <div class="flex min-h-0 flex-col bg-white">
                <div class="border-b border-black/10 px-4 py-5 sm:px-8 sm:py-7 hidden sm:block">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#0057e2]">Start onboarding</p>
                  <h4 class="mt-2 text-[28px] font-semibold leading-tight text-[#0c130f]">Tell us about your business</h4>
                  <p class="mt-2 max-w-[520px] text-sm leading-6 text-[#5c615e]">
                    Use the same details as the contact form and we will tailor the onboarding conversation around your goals.
                  </p>
                </div>

                <div class="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-8 sm:py-6">
                  <div v-if="status === 'success'" class="rounded-[20px] border border-[#8f9292]/24 bg-[#fafafa] p-5 sm:p-6">
                    <h4 class="mb-2 text-lg font-semibold text-[#0c130f]">You are on the list</h4>
                    <p class="text-sm leading-6 text-[#5c615e]">
                      Thanks for starting onboarding with Table Perks. We will reach out to {{ email }} and help you plan the best setup for your business.
                    </p>
                    <div class="mt-5 flex justify-end">
                      <button
                        type="button"
                        class="rounded-full bg-[#0057e2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95"
                        @click="close"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  <form v-else class="space-y-3" @submit.prevent="submit">
                    <div v-if="status === 'error'" class="rounded-[16px] border border-red-200 bg-red-50 p-4">
                      <p class="text-sm text-red-700">{{ errorMessage }}</p>
                    </div>

                    <div class="rounded-[18px] border border-[#d6e4ff] bg-[#f5f9ff] p-4 sm:hidden">
                      <p class="text-sm font-semibold text-[#0c130f]">What happens next</p>
                      <p class="mt-1 text-sm leading-6 text-[#5c615e]">
                        We will review your details, contact you, and guide you through the right plan and launch flow.
                      </p>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label class="mb-2 block text-sm font-semibold text-[#0c130f]" for="onboarding-name">Name</label>
                        <input
                          id="onboarding-name"
                          ref="nameInput"
                          v-model="name"
                          type="text"
                          autocomplete="name"
                          required
                          :disabled="status === 'submitting'"
                          class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                        />
                      </div>
                      <div>
                        <label class="mb-2 block text-sm font-semibold text-[#0c130f]" for="onboarding-email">Email</label>
                        <input
                          id="onboarding-email"
                          v-model="email"
                          type="email"
                          autocomplete="email"
                          required
                          :disabled="status === 'submitting'"
                          class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="mb-2 block text-sm font-semibold text-[#0c130f]" for="onboarding-phone">Phone</label>
                      <input
                        id="onboarding-phone"
                        v-model="phone"
                        type="tel"
                        autocomplete="tel"
                        required
                        :disabled="status === 'submitting'"
                        class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label class="mb-2 block text-sm font-semibold text-[#0c130f]" for="onboarding-company">Company</label>
                      <input
                        id="onboarding-company"
                        v-model="company"
                        type="text"
                        autocomplete="organization"
                        :disabled="status === 'submitting'"
                        class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                      />
                    </div>

                    <div class="hidden">
                      <label class="mb-2 block text-sm font-semibold text-[#0c130f]" for="onboarding-subject">Subject</label>
                      <input
                        id="onboarding-subject"
                        v-model="subject"
                        type="text"
                        autocomplete="off"
                        required
                        :disabled="status === 'submitting'"
                        class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label class="mb-2 block text-sm font-semibold text-[#0c130f]" for="onboarding-message">Message</label>
                      <textarea
                        id="onboarding-message"
                        v-model="message"
                        rows="5"
                        required
                        :disabled="status === 'submitting'"
                        class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 resize-none disabled:opacity-60"
                      ></textarea>
                    </div>

                    <div class="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
                      <button
                        type="button"
                        class="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#0c130f] transition-colors hover:bg-black/5 disabled:opacity-60"
                        :disabled="status === 'submitting'"
                        @click="close"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="rounded-full bg-[#0057e2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:opacity-60"
                        :disabled="status === 'submitting'"
                      >
                        {{ status === 'submitting' ? 'Starting…' : 'Start onboarding' }}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const open = useState<boolean>('onboardingOpen', () => false)

const name = ref('')
const email = ref('')
const phone = ref('')
const company = ref('')
const subject = ref('Onboarding request')
const message = ref('I would like to get started with Table Perks and understand the best setup for my business.')
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const nameInput = ref<HTMLInputElement | null>(null)

const resetForm = () => {
  name.value = ''
  email.value = ''
  phone.value = ''
  company.value = ''
  subject.value = 'Onboarding request'
  message.value = 'I would like to get started with Table Perks and understand the best setup for my business.'
  status.value = 'idle'
  errorMessage.value = ''
}

const close = () => {
  open.value = false
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

watch(open, async (isOpen) => {
  if (!import.meta.client) return

  if (isOpen) {
    resetForm()
    document.addEventListener('keydown', onKeyDown)
    document.documentElement.style.overflow = 'hidden'
    await nextTick()
    nameInput.value?.focus()
  } else {
    document.removeEventListener('keydown', onKeyDown)
    document.documentElement.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.removeEventListener('keydown', onKeyDown)
  document.documentElement.style.overflow = ''
})

const submit = async () => {
  if (status.value === 'submitting') return

  status.value = 'submitting'
  errorMessage.value = ''

  try {
    const response = await fetch('https://api.tableperks.com/api/auth/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        subject: subject.value,
        message: message.value,
      }),
    })

    if (!response.ok) {
      let message = 'Failed to start onboarding'
      try {
        const data = await response.json()
        if (typeof data?.message === 'string' && data.message.trim()) message = data.message
      } catch {}
      throw new Error(message)
    }

    status.value = 'success'
  } catch (error) {
    status.value = 'error'
    errorMessage.value = error instanceof Error ? error.message : 'Failed to start onboarding'
  }
}
</script>
