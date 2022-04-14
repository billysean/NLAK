<script setup>
import headerVue from "./components/header.vue";
import footerVue from "./components/footer.vue";
import registrationModalVue from "./components/registrationModal.vue";
import { mapState } from 'vuex';
</script>

<template>
  <transition name="modal">
    <registrationModalVue v-if="registerModal" />
  </transition>
  <headerVue />
  <router-view />
  <footerVue />
</template>

<script>

export default {
  computed:{
    ...mapState(['registerModal'])
  }
};
</script>


<style lang='scss'>
// Animated Invoice
.modal-enter-active,
.modal-leave-active {
  transition: 1s ease all;
}
.modal-enter-from,
.modal-leave-to {
  transform: translateX(-1000px);
}
</style>