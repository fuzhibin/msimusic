<template>
  <div class="songsheet" ref="songsheet">
    <nav-sort :cat-list="catlist" v-show="catlist" @sortId="updateList"></nav-sort>
    <square-list :square-list="playlists" :is-flag="false"></square-list>
  </div>
</template>

<script>
import SquareList from "components/content/squarelist/SquareList";
import {getSongList,getPlayCat} from "@/network/findmusic";

import NavSort from "components/content/navtitle/NavSort";


export default {
  name: "SongSheet",
  data(){
    return {
      playlists:[],
      offset:0,
      catlist:null,
      cat:'',
      loadFinsh:true
    }
  },
  components:{
    SquareList,
    NavSort
  },
  created() {
    this.getSonglistInfo(this.offset);
    this.getSongPlayTags()
  },
  mounted() {
    const mySelfHeight = this.$refs.songsheet;
    //节流阀操作
    mySelfHeight.addEventListener("scroll", () => {
      if(this.loadFinsh){
        if (mySelfHeight.scrollTop + mySelfHeight.offsetHeight >= mySelfHeight.scrollHeight-10) {
          this.loadFinsh=false;
          this.loadMore();
        }
      }

    })
  },
  methods:{
    getSongPlayTags(){
      getPlayCat().then(res => {
        this.catlist=res.sub;
      })
    },
    getSonglistInfo(offset,cat=''){
      getSongList(offset*50,cat).then(res => {
        this.playlists.push(...res.playlists);
        this.loadFinsh=true
        console.log(this.playlists);
      })
    },
    loadMore(){
      this.offset++;
      this.getSonglistInfo(this.offset,this.cat);
    },
    updateList(value){
      this.offset=0;
      this.playlists=[];
      this.cat=value
      this.getSonglistInfo(this.offset,this.cat)
    }
  }
}
</script>
<style scoped>
.songsheet {
  padding: 10px 25px 50px;
  width: 100%;
  height: calc(100vh - 70px - 70px - 40px);
  overflow-y: scroll;
}


</style>
