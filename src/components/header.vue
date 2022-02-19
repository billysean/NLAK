<template>
  <Popover class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div>
        <a href="#" class="flex">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="/img/logo.png" alt="" />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <PopoverGroup as="nav" class="flex space-x-10">
          
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sel Group </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Find Us </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Media </a>

          
        </PopoverGroup>
        <!-- <div class="flex items-center md:ml-12">
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
          <a href="#" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
        </div> -->
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/img/logo.png" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-6">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Sel Group </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Find Us </a>
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Media </a>
              </nav>
            </div>
          </div>
          <!-- <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Sel Group </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Find Us </a>
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Media </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Enterprise </a>
              <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </a>
            </div>
            <div class="mt-6">
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
              </p>
            </div>
          </div> -->
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      // solutions,
      // resources,
    }
  },
}
</script>