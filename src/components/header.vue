<template>
  <Popover class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div>
        <router-link to="/" class="flex">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="/img/logo.png" alt="" />
        </router-link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <PopoverGroup as="nav" class="flex space-x-10">
          
          <router-link to="/selgroup" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sel Group </router-link>
          <router-link to="/findus" class="text-base font-medium text-gray-500 hover:text-gray-900"> Find Us </router-link>
          <router-link to="/media" class="text-base font-medium text-gray-500 hover:text-gray-900"> Media </router-link>

          
        </PopoverGroup>
        <!-- <div class="flex items-center md:ml-12">
          <router-link to="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </router-link>
          <router-link to="#" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </router-link>
        </div> -->
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <router-link to="/">
                  <img class="h-8 w-auto" src="/img/logo.png" alt="Workflow" />
                </router-link>
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
                <router-link to="/selgroup" class="text-base font-medium text-gray-900 hover:text-gray-700"> Sel Group </router-link>

              <router-link to="/findus" class="text-base font-medium text-gray-900 hover:text-gray-700"> Find Us </router-link>
              <router-link to="/media" class="text-base font-medium text-gray-900 hover:text-gray-700"> Media </router-link>
              </nav>
            </div>
          </div>
          <!-- <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <router-link to="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Sel Group </router-link>

              <router-link to="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Find Us </router-link>
              <router-link to="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Media </router-link>

              <router-link to="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Enterprise </router-link>
              <router-link v-for="item in resources" :key="item.name" :to="item.to" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </router-link>
            </div>
            <div class="mt-6">
              <router-link to="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </router-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <router-link to="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </router-link>
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