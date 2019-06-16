<template>
	<div class="mokujibox" v-if="isVisible">
		<p class="mokuji-title">目次</p>
		<ol>
			<li v-for="(item, key) in Object.keys(mokuji)" @click="selectLaw(item)" :key="key">
				{{ item + mokuji[item] }}
			</li>
		</ol>
	</div>
</template>

<script>

export default {
  name: 'Mokuji',
  props: {
		isVisible: Boolean
  },
  data () {
    return {
      mokuji: ''
    }
  },
  created:  function () {
    this.mokuji = require('../houjinzei/mokuji.json')
	},
	methods: {
		selectLaw: function (title) {
				this.$emit('pGetLaw', title)
		}
	}
}

</script>

<style scoped>
.mokujibox {
	z-index: 1;
	margin: 0;
	padding: 0;

	position: fixed;
	top: 50px;
	left: 0;

	width: 100vw;
	height: calc(100vh - 50px);
	background-color: #eee;

}

.mokuji-title {
	padding-top: 10px;
	width: 100vw;
	height: 40px;
	text-align: center;
}

ol {
	color: #000;
	position: absolute;
	top: 40px;
	left: 0;
	width: calc(100vw - 20px);
	height: calc(100vh - 70px);
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	list-style: none;
	margin: 0;
	padding-left: 10px;
	padding-right: 10px;
}

li {
	width: 80%;
	margin: 0 auto;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #aaa;
	cursor: pointer;
}

li:hover {
	background: #efefff;
}
</style>