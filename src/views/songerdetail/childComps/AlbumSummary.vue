<template>
<div class="ablum-summary">
  <div class="summary-left">
    <img v-lazy="albumShow.picUrl" alt="">
  </div>
  <div class="summary-right">
    <h3>{{albumShow.name}}</h3>
    <new-cuboid-item
      class="new-cuboid-item"
      v-for="(item,index) in AlbumMusic"
      :rank-num="index+1"
      :new-info-show="item"
      :song-name-show="false"
      :is-show="false"/>
  </div>
</div>


</template>

<script>
import NewCuboidItem from "components/content/cuboiditem/NewCuboidItem";
import {getAlbumDet} from "@/network/findmusic";

export default {
  name: "AlbumSummary",
  data(){
    return {
      AlbumMusic:[]
    }
  },
  created() {
    getAlbumDet(this.albumShow.id).then(res => {
      this.AlbumMusic=res.songs
    })
  },
  props:{
    albumShow:{
      type:Object,
      default(){ return {}}
    }
  },
  components:{
    NewCuboidItem
  }
}
</script>

<style scoped>
.ablum-summary {
  margin-top: 35px;
  display: flex;
}
.summary-left {
  width: 300px;
  text-align: center;
}
.summary-left img {
  width: 180px;
  height: 180px;
}
.summary-right {
  margin-left: 100px;

  flex: 1;
}
.summary-right h3 {
  margin-bottom: 10px;
}
.new-cuboid-item {
  height: 40px;
}
</style>
