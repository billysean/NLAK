<script setup>
import headerVue from './components/header.vue'
import footerVue from './components/footer.vue';
</script>

<template>
  <headerVue/>
  <router-view />
  <footerVue/>
</template>