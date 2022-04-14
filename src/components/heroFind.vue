<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-indigo-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="/img/maps.jpg" alt="" />
      <div
        class="absolute inset-0 bg-gray-600 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1
        class="
          text-4xl
          font-extrabold
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        Our Location
      </h1>
      <p class="mt-6 text-xl text-indigo-100 max-w-3xl">
        NLAK Church is expanding in astonishing pace and we are enlarging our
        church in Jabodetabek area which you can find below.
      </p>
      <button
        @click="openRegister"
        type="button"
        class="
          mt-8
          relative
          items-center
          px-4
          py-2
          border border-transparent
          text-sm
          font-medium
          rounded-sm
          shadow-sm
          text-white
          border-white
          bg-transparent
          hover:bg-indigo-100
          hover:text-indigo-700
          hover:shadow-2xl
        "
      >
        Register Now
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["TOGGLE_REGISTER"]),

    openRegister() {
      this.TOGGLE_REGISTER();
    },
  },
};
</script>