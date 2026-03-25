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
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
        <div class="relative flex min-h-full items-end sm:items-center justify-center p-4">
          <div
            class="w-full max-w-[560px] rounded-[24px] bg-white shadow-2xl border border-black/10 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            @click.stop
          >
            <div class="flex items-center justify-between px-6 py-5 border-b border-black/10">
              <div>
                <h3 id="contact-dialog-title" class="text-[#0c130f] font-semibold text-xl">Contact Us</h3>
                <p class="text-[#5c615e] text-sm mt-1">Send us a message and we’ll get back soon.</p>
              </div>
              <button
                type="button"
                class="w-10 h-10 rounded-full flex items-center justify-center text-[#5c615e] hover:bg-black/5 transition-colors"
                aria-label="Close contact dialog"
                @click="close"
              >
                <span class="text-2xl leading-none">×</span>
              </button>
            </div>

            <div class="px-6 py-6">
              <div v-if="status === 'success'" class="rounded-[16px] border border-[#8f9292]/24 bg-[#fafafa] p-5">
                <h4 class="text-[#0c130f] font-semibold text-lg mb-2">Message received</h4>
                <p class="text-[#5c615e] text-sm">Thanks! We’ll reach out to you at {{ email }}.</p>
                <div class="mt-5 flex justify-end">
                  <button
                    type="button"
                    class="bg-[#0057e2] text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-95 transition-opacity"
                    @click="close"
                  >
                    Close
                  </button>
                </div>
              </div>

              <form v-else class="space-y-4" @submit.prevent="submit">
                <div v-if="status === 'error'" class="rounded-[16px] border border-red-200 bg-red-50 p-4">
                  <p class="text-sm text-red-700">{{ errorMessage }}</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-[#0c130f] mb-2" for="contact-name">Name</label>
                    <input
                      id="contact-name"
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
                    <label class="block text-sm font-semibold text-[#0c130f] mb-2" for="contact-email">Email</label>
                    <input
                      id="contact-email"
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
                  <label class="block text-sm font-semibold text-[#0c130f] mb-2" for="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    v-model="phone"
                    type="tel"
                    autocomplete="tel"
                    required
                    :disabled="status === 'submitting'"
                    class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-[#0c130f] mb-2" for="contact-company">Company</label>
                  <input
                    id="contact-company"
                    v-model="company"
                    type="text"
                    autocomplete="organization"
                    :disabled="status === 'submitting'"
                    class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-[#0c130f] mb-2" for="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    v-model="subject"
                    type="text"
                    autocomplete="off"
                    required
                    :disabled="status === 'submitting'"
                    class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-[#0c130f] mb-2" for="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    v-model="message"
                    rows="5"
                    required
                    :disabled="status === 'submitting'"
                    class="w-full rounded-[14px] border border-[#8f9292]/24 bg-white px-4 py-3 text-sm text-[#0c130f] outline-none focus:border-[#0057e2] focus:ring-4 focus:ring-[#0057e2]/15 resize-none disabled:opacity-60"
                  ></textarea>
                </div>

                <div class="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    class="px-6 py-3 rounded-full font-semibold text-sm border border-black/10 text-[#0c130f] hover:bg-black/5 transition-colors disabled:opacity-60"
                    :disabled="status === 'submitting'"
                    @click="close"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="bg-[#0057e2] text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-95 transition-opacity disabled:opacity-60"
                    :disabled="status === 'submitting'"
                  >
                    {{ status === 'submitting' ? 'Sending…' : 'Send Message' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const open = useState<boolean>('contactOpen', () => false)

const name = ref('')
const email = ref('')
const phone = ref('')
const company = ref('')
const subject = ref('')
const message = ref('')
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const nameInput = ref<HTMLInputElement | null>(null)

const resetForm = () => {
  name.value = ''
  email.value = ''
  phone.value = ''
  company.value = ''
  subject.value = ''
  message.value = ''
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
    const response = await fetch('/api/contact', {
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
      let message = 'Failed to send message'
      try {
        const data = await response.json()
        if (typeof data?.message === 'string' && data.message.trim()) message = data.message
      } catch {}
      throw new Error(message)
    }

    status.value = 'success'
  } catch (error) {
    status.value = 'error'
    errorMessage.value = error instanceof Error ? error.message : 'Failed to send message'
  }
}
</script>
