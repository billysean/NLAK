<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="/img/church.jpg" alt="" />
        <div class="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div class="flex">
        <div class="flex-auto w-28">
        <img src="/img/logo.png" alt="">
        </div>
        <div class="flex-auto self-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">NEW LIFE</h1>
        <h1 class="text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl">ANUGERAH KEBENARAN</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">A community driven church, addressing the kingdom of God in homes</p>
        </div>
        </div>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <!-- <h2 class="sr-only" id="contact-heading">Contact us</h2> -->
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <!-- <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a :href="link.href" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { LocationMarkerIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Stay Connected',
    href: '#',
    description:
      'Stay Connected with us by joining our Youtube Channel and Instagram Account.',
    icon: PhoneIcon,
  },
  {
    name: 'Get yourself a home',
    href: '#',
    description:
      'We are driven by community. Reach out to us and find yourself a place to call home.',
    icon: SupportIcon,
  },
  {
    name: 'Find Us',
    href: '#',
    description:
      'We are rapidly expanding our community. So keep up to date and find the nearest NLAK to you.',
    icon: LocationMarkerIcon,
  },
]

export default {
  setup() {
    return {
      supportLinks,
    }
  },
}
</script>