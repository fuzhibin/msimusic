<template>
<div class="findmusic">
  <div class="findmusic-div">
    <span v-for="(item,index) in findItemName"
          @click="findmusicItemClic(index)"
          :class="{active: currentIndex===index}">{{item}}</span>
  </div>
  <router-view class="findmusic-view"/>
</div>
</template>

<script>
export default {
  name: "FindMusic",
  data(){
    return {
      findItemName:['个性推荐','歌单','主播电台','排行榜','歌手','最新音乐'],
      currentIndex:0
    }
  },
  methods:{
    findmusicItemClic(index){
      this.currentIndex=index
    }
  }
}
</script>

<style scoped>
.findmusic {
  min-width: 800px;
}
.findmusic-div {
  padding-top: 15px;
  padding-bottom: 10px;

}
.findmusic-div span {
  font-size: 15px;
  padding-bottom: 3px;
  margin-left:  30px;
  transition-duration: 0.1s;
}
.findmusic-div .active {
  font-weight: 700;
  font-size: 16px;
  border-bottom: 3px solid #EC4141;
}
.findmusic-view {
  width: 100%;
}
</style>
