<template>
<div class="work-detail">
  <div class="work-control">
    <span v-for="(item,index) in controlItem"
          @click="spaClic(index)"
          :class="{active:index===controlIndex}">{{item}}</span>
  </div>
  <div v-if="controlIndex===0">
    <new-cuboid-item  class="hot-song-item"
                      v-for="(item,index) in hotSongs"
                      :rank-num="index+1"
                      :is-show="false"
                      :new-info-show="item" />
  </div>
 <div v-if="controlIndex===1">
   <album-summary v-for="item in hotAlbums" :album-show="item"/>
 </div>
  <div v-if="controlIndex===2">

  </div>
</div>
</template>

<script>
import AlbumSummary from "@/views/songerdetail/childComps/AlbumSummary";
import NewCuboidItem from "@/components/content/cuboiditem/NewCuboidItem";
export default {
  name: "SongerWorksDetail",
  props:{
    hotAlbums:{
      type:Array,
      default(){return [] }
    },
    hotSongs:{
      type:Array,
      default(){return [] }
    }
  },
  data(){
    return{
      controlItem:['歌手热歌','专辑','MV'],
      controlIndex:0,
    }
  },
  components:{
    NewCuboidItem,
    AlbumSummary
  },
  methods:{
    spaClic(index){
      this.controlIndex = index;
    }
  }
}
</script>

<style scoped>
.work-control {
  margin-bottom: 15px;
}
.work-control span {
  padding: 10px 10px;
  margin: 0 10px;
}
.work-control .active {
  font-weight: 700;
  border-bottom: 2px solid #7DBE52;
}
.hot-song-item {
  height: 50px;
}
</style>
