<template>
  <div>
    <dl class="v-datalist">
      <dt>{{ getText(dt, kakkoFlg) }}</dt>
      <dd>{{ getText(dd, kakkoFlg) }}</dd>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'ContentDatalist',
  props: {
    dt: String,
    dd: String
  },
  computed: {
    kakkoFlg: function () {
      return this.$store.state.kakkoFlg
    }
  },
  methods: {
    getText: function (text, flg) {
      if (flg) {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.v-datalist dt{
  font-weight: 600;
}

</style>
