import { createStore } from 'vuex'
import vuexPersistedstate from 'vuex-plugin-persistedstate'
export default createStore({
  state: {
    msg: 'hello, world'
  },
  getters: {},
  mutations: {
    setMsg(state, payload) {
      state.msg = payload
    }
  },
  actions: {},
  modules: {
    user: {
      namespaced: true,
      state() {
        return {
          name: 'joi',
          age: '30'
        }
      },
      mutations: {
        setUser(state, payload) {
          state.name = payload.name
          state.age = payload.age
        }
      }
    }
  },
  plugins: [
    vuexPersistedstate({
      paths: ['user']
    })
  ]
})
