<template>
  <ol>
    <li v-for="(item, key) in roma" :key="key" class="v-roma">
      <h7>{{ Object.keys(item)[0] }}</h7>
      <Content :content="Object.values(item)[0].text"/>
    </li>
  </ol>
</template>

<script>

import Content from './Content.vue'

export default {
  name: 'Roma',
  components: {
    Content
  },
  props: {
    roma: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-roma{
  list-style: none;
  margin: 5px;
  padding: 5px;
  width: calc(100% - 21px);  
  border-left: 1px solid #ccc;
}

</style>
