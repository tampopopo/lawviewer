<template>
	<div class="mokujibox" v-if="isVisible">
		<p class="mokuji-title">目次</p>
		<ol v-if="!isSelectLawTitle">
			<li v-for="(item, key) in Object.keys(mokuji)" @click="changeLaw(item)" :key="key">
				{{ mokuji[item] }}
			</li>
		</ol>
		<div v-if="isSelectLawTitle">
			<button @click="changeLaw()" class="modoru">← 税法選択に戻る</button>
			<ol>
				<li v-for="(item, key) in mokuji" @click="selectLaw(item)" :key="key">
					{{ item }}
				</li>
			</ol>
		</div>
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
    this.mokuji = this.$store.state.lawTitleList
	},
	methods: {
		selectLaw: function (title) {
			this.$emit('pGetLaw', title)
		},
    changeLaw: function (title = '') {
      this.$store.commit('changeLaw', {
        'title': title 
      })
      if (this.lawTitle != '') {
        this.mokuji = require('../' + this.lawTitle + '/mokuji.json')
      } else {
        this.mokuji = this.lawTitleList
      }
    }
	},
	computed: {
    lawTitle: function () {
      return this.$store.state.lawTitle
    },
    lawTitleList: function () {
      return this.$store.state.lawTitleList
    },
    isSelectLawTitle: function () {
      if (this.lawTitle == '') {
        return false
      } else {
        return true
      }
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

li:last-child {
  margin-bottom: 100px;
}

.modoru {
	position: absolute;
	top: 0px;
	left: 5vw;
	z-index: 5;
	border: 0;
	border-radius: 3px;
	padding: 10px;
	background: #fff;
	cursor: pointer;
}

.modoru:hover {
	background: #ccc;
}
</style>