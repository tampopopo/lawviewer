<template>
  <div>
    <Mokuji :isVisible="this.mokujiFlg" @pGetLaw="getLaw"/>
    <Tag :isVisible="this.tagFlg" @pGetLaw="getLaw" />

    <header>
      <button
       @click="changeKakkoFlg()"
       class="ryakubtn"
       :class="isKakkoFlg"
      >
        <img src="../assets/3ten.svg">
      </button>
      <button
       @click="showTag()"
       class="tagbtn"
      >
        <img src="../assets/tag.svg">
      </button>
      <button
       @click="showMokuji()"
       class="mokujibtn"
      >
        <img src="../assets/menu.svg">
      </button>
      <a href=""><h1>法人税法</h1></a>
    </header>
    <article>
      <h2>{{ articleNumber }}</h2>
      <Kou :kou="getkou"/>
    </article>
  </div>
</template>

<script>

import Kou from './Kou.vue'
import Mokuji from './Mokuji.vue'
import Tag from './Tag.vue'

export default {
  name: 'CorporateTax',
  components: {
    Tag,
    Mokuji,
    Kou
  },
  data () {
    return {
      law: [],
      articleNumber: '',
      mokujiFlg: true,
      tagFlg: false
    }
  },
  methods: {
    getLaw: function (title) {
      this.articleNumber = title
      this.law = require('../houjinzei/' + this.articleNumber + '.json')
      this.mokujiFlg = false
      this.tagFlg = false
    },
    showMokuji: function () {
      this.mokujiFlg  = !this.mokujiFlg
      if (this.mokujiFlg) {
        this.tagFlg = false
      }
    },
    showTag: function () {
      this.tagFlg  = !this.tagFlg
      if (this.tagFlg) {
        this.mokujiFlg = false
      }
    },
    changeKakkoFlg: function () {
      this.$store.commit('changeKakkoFlg')
    }
  },
  computed: {
    getkou: function () {
      let flg = Array.isArray(this.law)
      let arr = new Array()
      if(!flg) {
        arr = Array(this.law)
      } else {
        arr = this.law
      }
      return arr
    },
    isKakkoFlg: function () {
      if (this.$store.state.kakkoFlg) {
        return 'onKakkoFlg'
      } else {
        return ''
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background: #333;
  color: #fff;
}

h1 {
  position: absolute;
  top: calc((50px - 36px) / 2);
  left: 30px;
  font-size: 24px;
  text-align: center;
  width: 150px;
}

a {
  text-decoration: none;
}

a:link,
a:visited,
a:active {
  color: inherit;
}

a {
  text-decoration: none;
}


.mokujibtn {
  cursor: pointer;
  z-index: 2;
  font-size: 30px;
  color: #eee;
  width: 40px;
  height: 40px;
  position: absolute; 
  top: 5px;
  right: 5vw;
  text-align: center;
  border: 0;
  background: none;
  opacity: 0.7;
}

.mokujibtn:hover {
  opacity: 1;

}
.tagbtn {
  cursor: pointer;
  z-index: 2;
  font-size: 30px;
  color: #eee;
  width: 40px;
  height: 40px;
  position: absolute; 
  top: 5px;
  right: calc(5vw + 50px);
  text-align: center;
  border: 0;
  background: none;
  opacity: 0.7;
}

.tagbtn:hover {
  opacity: 1;

}

.ryakubtn {
  cursor: pointer;
  z-index: 2;
  font-size: 30px;
  color: #eee;
  width: 40px;
  height: 40px;
  position: absolute; 
  top: 5px;
  right: calc(5vw + 100px);
  text-align: center;
  border: 0;
  background: none;
  opacity: 0.7;
  border-radius: 5px;
}

.ryakubtn:hover {
  opacity: 1;

}

.onKakkoFlg {
  background-color: #fff;
}

button>img {
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}

article {
  display: block;
  margin-top: 60px;
  width: 95vw;
  min-height: calc(100vh - 70px);
  margin-left: 2.5vw;
  margin-right: 2.5vw;

  font-size: 16px;
  font-family: sans-serif;

  color: #333;
}


h2 {
  font-size: 24px;
}

</style>
