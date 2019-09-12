<template>
  <ol>
    <li v-for="(item, key) in gou" :key="key" class="v-gou">
    <h4>{{ Object.keys(item)[0] }}</h4>
      <Content :content="Object.values(item)[0].text"/>
      <Iroha :iroha="Object.values(item)[0].iroha"/>
    </li>
  </ol>
</template>

<script>

import Iroha from './Iroha.vue'
import Content from './Content.vue'

export default {
  name: 'Gou',
  components: {
    Iroha,
    Content
  },  
  props: {
    gou: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-gou {
  width: calc(100% - 21px);  
  list-style-type: none;
  margin: 5px;
  padding: 5px;
  border-left: 1px solid #666;
}

</style>
