<template>
  <div>
    <dl class="v-datalist">
      <dt>{{ dt }}</dt>
      <dd>{{ dd }}</dd>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'ContentDatalist',
  props: {
    dt: String,
    dd: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.v-datalist dt{
  font-weight: 600;
}

</style>
