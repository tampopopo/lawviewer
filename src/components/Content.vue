<template>
  <div>
    <ContentDatalist v-if="isDatalist" :dt="content.dt" :dd="content.dd" />
    <div v-if="!isDatalist && isArray">
      <p v-for="(text, key) in content" :key="key">
        {{ getText(text) }}
      </p>
      <button @click="changeFlg">括弧</button>
    </div>
    <p v-if="!isDatalist && !isArray">
      {{ getText(content) }}
    </p>
    <button @click="changeFlg">括弧</button>
  </div>
</template>

<script>

import ContentDatalist from './ContentDatalist.vue'

export default {
  name: 'Content',
  props: {
    content: [Object, String, Array]
  },
  components: {
    ContentDatalist
  },
  data () {
    return {
      flg: false
    }
  },
  computed: {
    isDatalist: function () {
      if (this.content.dt) {
        return true
      } else {
        return false
      }
    },
    isArray: function () {
      if (!this.isDatalist && Array.isArray(this.content)) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    getText: function (text) {
      if (this.flg) {
        let result = ''
        let cnt = 0
        for (let i = 0; i < text.length; i++) {
          let c = text.charAt(i)
          if (c == '（') {
            cnt += 1
          }
          if (cnt == 0) {
            result += c
          }
          if (c == '）') {
            cnt -= 1
          }       
        }
        return result
      } else {
        return text
      }
    },
    changeFlg () {
      this.flg = !this.flg
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
