import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addShop(state, payload) {
      // console.log(state, payload)
      // state.list.push(payload)
      if (state.list.length === 0) {
        state.list.push(payload)
      } else {
        let obj = state.list.find(item => {
          return item.id == payload.id
        })
        obj !== undefined ? obj.count += 1 : state.list.push(payload)
      }


    },
    addCount(state, payload) {
      let res = state.list.find(item => item.id === payload.id)
      res.count = payload.count
    },
    delete(state, payload) {
      state.list = state.list.filter(item => item.id != payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
