<template>
  <div class="singer" ref="singer">
      <singer-sort @changeFilter="changeFilter"/>
      <singer-list :singer-list="singerList"></singer-list>
  </div>
</template>

<script>
import SingerSort from "views/findmusic/contents/SingerSort";
import SingerList from "@/components/content/singerlist/SingerList";

import {getSingerInfo} from "@/network/findmusic";

export default {
  name: "Songer",
  data() {
    return {
      singerList:[],
      childHeight:0
    }
  },
  components: {
    SingerSort,
    SingerList
  },
  created() {
    this.getSingerInfos(-1,-1);
  },
  methods:{
    getSingerInfos(type,area){
      getSingerInfo(type,area).then(res=> {
        this.singerList.push(...res.artists)
      })
    },
    changeFilter(value){
      this.singerList=[]
      this.getSingerInfos(value.classification,value.language);
    }
  }
}
</script>

<style scoped>
.singer {
 padding: 10px 25px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
