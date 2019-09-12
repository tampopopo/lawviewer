import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    kakkoFlg: false,
    lawTitle: '',
    lawTitleList: {
      'houjinzei' : '法人税法',
      'houjinzei-shikourei' : '法人税法施行令',
      'houjinzei-shikoukisoku' : '法人税法施行規則'
    }
  },
  mutations: {
    changeKakkoFlg (state) {
      state.kakkoFlg = !this.state.kakkoFlg
    },
    changeLaw (state, payload) {
      state.lawTitle = payload.title
    }
  }
})

export default store