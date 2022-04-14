import { createStore } from 'vuex'

export default createStore({
  state: {
    registerModal: null,
  },
  mutations: {
    CLEAR_MODAL(state) {
      state.registerModal = null
    },
    TOGGLE_REGISTER(state) {
      state.registerModal = !state.registerModal
    },
  },
  actions: {
  },
  modules: {
  }
})
