<template>
  <ol class="v-kakko">
    <li v-for="(item, key) in kakko" :key="key" :value="item.number">
      <Content :content="item.content"/>
    </li>
  </ol>
</template>

<script>

import Content from './Content.vue'

export default {
  name: 'Kakko',
  components: {
    Content
  },
  props: {
    kakko: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol.v-kakko li{
  list-style-type: none;
  margin: 5px;
  padding: 5px;
  border-left: 1px solid #aaa;
  width: calc(100% - 21px);  
}

ol.v-kakko li {
  counter-increment: cnt;
}

ol.v-kakko li:before {
  content: '（ 'attr(value)' ）';
}

</style>
