import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    kakkoFlg: false,
  },
  mutations: {
    changeKakkoFlg () {
      this.state.kakkoFlg = !this.state.kakkoFlg
    }
  }
})

export default store