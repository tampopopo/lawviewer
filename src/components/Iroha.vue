<template>
  <ol>
    <li v-for="(item, key) in iroha" :key="key" :value="item.number" class="v-iroha">
      <Content :content="item.content"/>
      <Kakko :kakko="item.kakko"/>
    </li>
  </ol>
</template>

<script>

import Kakko from './Kakko.vue'
import Content from './Content.vue'

export default {
  name: 'Iroha',
  components: {
    Kakko,
    Content
  },
  props: {
    iroha: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-iroha {
  list-style: katakana-iroha;
  list-style-position: inside;
  width: calc(100% - 21px);  
  margin: 5px;
  padding: 5px;
  border-left: 1px solid #888;
}
</style>
