<template>
  <ol>
    <li v-for="(item, key) in kou" :key="key" :value="key" class="v-kou">
      <h3>{{ key }}</h3>
      <Content :content="item.text"/>
      <Gou :gou="item.gou"/>
    </li>
  </ol>
</template>

<script>

import Gou from './Gou.vue'
import Content from './Content.vue'

export default {
  name: 'Kou',
  components: {
    Gou,
    Content
  },  
  props: {
    kou: Object
  },
  computed: {
    lawTitle: function () {
      return this.$store.state.lawTitle
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ol {
  margin: 0;
}

.v-kou {
  width: calc(100% - 21px);
  list-style-type: none;
  margin: 5px;
  padding: 5px;
  border-left: 1px solid #444;
}

</style>
