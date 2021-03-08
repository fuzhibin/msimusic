<template>
<div class="video-list-item" @click="videoItemClic">
  <span class="playCount">{{playCount}}</span>
  <video :src="itemInfo.url"
         :poster="videoItem.cover"
         preload="auto"
         ref="videoBox"></video>
  <div class="txt"><div class="txt-contant"><span>{{videoItem.name }}</span><span style="margin-left: 20px">{{videoItem.artistName }}</span></div></div>
</div>
</template>

<script>
import {getMvUrl} from "network/getvideo";
import {formatCount} from "common/utils";

export default {
  name: "VideolistItem",
  props:{
    videoItem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed:{
    playCount(){
      return formatCount(this.videoItem.playCount);
    }
  },
  methods:{
    videoItemClic(){
      const videoInfo= encodeURIComponent(JSON.stringify(this.itemInfo));
      this.$router.push({
        path:'/videodetail',
        query:{
          videoInfo
        }
      })
    }
  },
  data(){
    return {
      itemInfo:{},
    }
  },
  created() {
    getMvUrl(this.videoItem.id).then(res => {
      this.itemInfo=res.data;
      console.log(res);
    })
  }

}
</script>

<style scoped>
.video-list-item {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  width: 310px;
  height: 240px;
  margin-bottom: 10px;
}
.video-list-item video {
  width: 100%;
  height: 210px;
}
.txt {
  position: relative;;
  font-size: 12px;
  width: 100%;
}
.txt-contant {
  position: absolute;
  top: 0px;
  left: 5px;
}
.playCount {
  font-size: 10px;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
