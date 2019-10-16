<template>
  <ol>
    <li v-for="(item, key) in iroha" :key="key" class="v-iroha">
      <h5>{{ Object.keys(item)[0] }}</h5>
      <Content :content="Object.values(item)[0].text"/>
      <Kakko :kakko="Object.values(item)[0].kakko"/>
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
  list-style: none;
  margin: 5px;
  padding: 5px;
  width: calc(100% - 21px);  
  border-left: 1px solid #888;
}
</style>
