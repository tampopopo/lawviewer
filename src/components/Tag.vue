<template>
  <div class="tagbox" v-if="isVisible">
		<div v-if="!visibleLawList" class="taglist">
			<input v-model="searchTagTitle"/>
			<p>タグ一覧</p>
			<div class="tag" v-for="(tag, key) in tagList" :key="key" @click="selectTag(tag)">
				{{ tag }}
			</div>
		</div>
		<div v-if="visibleLawList" class="lawlist">
			<div class="tag">
				{{ tagTitle }}
				<button @click="closeLawList">×</button>
			</div>
			<p class="ol-title">関連する条文</p>
			<ol>
				<li v-for="(item, key) in tagJson[tagTitle]" @click="selectLaw(item)" :key="key">
					{{ item }}
				</li>
			</ol>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Tag',
  props: {
		isVisible: Boolean
  },
  data () {
    return {
      tagTitle: '',
      visibleLawList: false,
      searchTagTitle: ''
    }
  },
	methods: {
		selectLaw: function (title) {
			this.$emit('pGetLaw', title)
		},
		selectTag: function (tag) {
			this.tagTitle = tag
			this.visibleLawList = true
		},
		closeLawList: function () {
			this.tagTitle = ''
			this.visibleLawList = false
		}
	},
	computed: {
		tagJson: function () {
			return require('../' + this.lawTitle + '/tag.json')
		},
		tagList: function () {
			let matchList = Object.keys(this.tagJson).filter((item) => {
				if ((item).indexOf(this.searchTagTitle) >= 0) return true
			})
			return matchList
		},
    lawTitle: function () {
      return this.$store.state.lawTitle
    }		
	}
}

</script>

<style scoped>
div {
	margin: 0;
	padding: 0;
}

.tagbox {
	position: fixed;
	top: 50px;
	left: 0;
	z-index: 1;
	margin: 0;
	padding: 0;
	width: 100vw;
	min-height: calc(100vh - 50px);
	background-color: #eee;
}

.taglist {
	width: 100vw;
	height: calc(100vh - 50px);
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;	
}

input {
	display: block;
	width: 40vw;
	height: 30px;
	margin-left: 30vw;
	margin-top: 20px;
	margin-bottom: 20px;
}

.tag {
	padding: 10px;
	margin: 5px;
	height: 20px;
	background: #ABCAE8;
	text-align: center;
	display: inline-block;
	cursor: pointer;
	border-radius: 3px;
}
.tag:hover {
	background: #9FBCDF; 
}
.tag button {
	background: none;
	border: 0;
	cursor: pointer;
}

.lawlist {
	width: 100vw;
	height: calc(100vh - 50px);
}

.ol-title {
	position: absolute;
	top: 60px;
	left: 0;
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 30px;
	text-align: center;
}

ol {
	color: #000;
	position: absolute;
	top: 90px;
	left: 0;
	width: 100vw;
	height: calc(100vh - 90px);
	list-style: none;
	margin: 0;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;	
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
</style>