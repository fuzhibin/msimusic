<template>
  <div class="findmusic">
    <div class="findmusic-div">
    <span v-for="(item,index) in findItemName"
          @click="findmusicItemClic(index)"
          :class="{active: currentIndex===index}">{{ item.title }}</span>
    </div>
    <router-view class="findmusic-view"/>
  </div>
</template>

<script>
export default {
  name: "FindMusic",
  data() {
    return {
      findItemName: [{
        path: '/findmusic/personalityrecommend',
        title: '个性推荐'
      }, {
        path: '/findmusic/songSheet',
        title: '歌单'
      }, {
        path: '',
        title: '主播电台'
      }, {
        path: '',
        title: '排行榜'
      }, {
        path: '/findmusic/singer',
        title: '歌手'
      }, {
        path: '/findmusic/newsong',
        title: '最新音乐'
      }],
      currentIndex: 0
    }
  },
  methods: {
    findmusicItemClic(index) {
      this.currentIndex = index
      this.$router.replace(this.findItemName[index].path)
    }
  }
}
</script>

<style scoped>

.findmusic {
  position: relative;
  min-width: 1300px;
  height: calc(100vh - 70px - 70px);
  overflow: hidden;
}

.findmusic-div {
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: #F6F6F7;
}

.findmusic-div span {
  font-size: 15px;
  padding-bottom: 3px;
  margin-left: 30px;
  transition-duration: 0.1s;
}

.findmusic-div .active {
  font-weight: 700;
  font-size: 16px;
  border-bottom: 3px solid #EC4141;
}

.findmusic-view {
  width: 100%;
  position: absolute;
  top: 43.4px;
  left: 0;
  right: 0;
  bottom: 70px;
}
</style>
