<template>
  <ol>
    <li v-for="(item, key) in kakko" :key="key" class="v-kakko">
      <h6>{{ Object.keys(item)[0] }}</h6>
      <Content :content="Object.values(item)[0].text"/>
      <Roma :roma="Object.values(item)[0].roma"/>
    </li>
  </ol>
</template>

<script>

import Roma from './Roma.vue'
import Content from './Content.vue'

export default {
  name: 'Kakko',
  components: {
    Roma,
    Content
  },
  props: {
    kakko: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-kakko{
  list-style: none;
  margin: 5px;
  padding: 5px;
  width: calc(100% - 21px);  
  border-left: 1px solid #aaa;
}


</style>
