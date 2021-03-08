<template>
<div class="relate-recommend">
  <h3>相关推荐</h3>
 <div class="relate-item" v-for="item in relateVideo" @click="relateClic(item)">
   <div class="relate-img">
     <span class="play-count">{{getPlayCount(item.playCount)}}</span>
     <img :src="item.picUrl" alt="">
     <span class="play-time">{{getPlayTime(item.duration)}}</span>
   </div>
   <div class="relate-des">
     <div class="relate-txt">{{item.name}}</div>
     <span class="relate-author">by:{{item.artistName}}</span>
   </div>
 </div>
</div>
</template>

<script>
import {formatCount,formatDate} from "common/utils";
import {getMvUrl} from "network/getvideo";
export default {
  name: "RelateRecommend",
  props:{
    relateVideo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    relateClic(item){
      getMvUrl(item.id).then(res => {
        return res.data;
      }).then(res => {
        const videoInfo= encodeURIComponent(JSON.stringify(res));
        this.$router.replace({
          path:'/videodetail',
          query:{
            videoInfo
          }
        })
      })
      console.log(item);
    },
    getPlayTime(time){
      return formatDate(time,'mm:ss')
    },
    getPlayCount(count){
      return formatCount(count);
    }
  }
}
</script>

<style scoped>
.relate-recommend {
}
.relate-item {
  display: flex;
  margin-bottom: 15px;
}
.relate-img {
  position: relative;
  width: 225px;
  height:120px;
}
.play-count,
.play-time{
  position: absolute;
  font-size: 12px;
  color: #fff;
  right: 15px;
}
.play-count {
  top: 10px;
}
.play-time {
  bottom: 10px;
}
.relate-txt {
  margin-top: 5px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
.relate-author {
  position: absolute;
  bottom: 5px;
}
.relate-img img {
  width: 100%;
  height: 100%;
}
.relate-des {
  position: relative;
  width: 180px;
  height: 110px;
}
</style>
