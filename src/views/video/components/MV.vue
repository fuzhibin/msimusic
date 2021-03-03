<template>
  <div class="mv">
    <video-columns :video-list="myList" list-title="网页MV"/>
    <video-columns :video-list="newList" list-title="最新MV"/>
    <video-columns :video-list="recommendList" list-title="推荐MV"/>
  </div>
</template>

<script>
import {getWYRcmdMV, getNewsVideo ,getRecommendMv} from "network/getvideo";
import VideoColumns from "../content/VideoColumns";

export default {
  name: "MV",
  data() {
    return {
      myList: [],
      newList: [],
      recommendList:[]
    }
  },
  components: {VideoColumns},
  created() {
    //网易推荐
    getWYRcmdMV().then(res => {
      this.myList = res.data
    })
    //最新Mv
    getNewsVideo().then(res => {
      this.newList = res.data
    })
    //推荐mv
    getRecommendMv().then(res => {
      console.log(res);
      this.recommendList=res.result;
    })
  }


}
</script>

<style scoped>
.mv {
  width: 100%;
  height: calc(100vh - 70px - 70px - 40px);
  overflow-y: scroll;
}
</style>
