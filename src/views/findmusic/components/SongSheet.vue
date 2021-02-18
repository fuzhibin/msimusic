<template>
  <div class="songsheet">
    <song-sort :cat-list="catlist" @sortId="updateList"></song-sort>
    <square-list :square-list="playlists" :is-flag="false"></square-list>
    <div class="load-more"><span @click="loadMore">点击加载更多</span></div>
  </div>
</template>

<script>
import SquareList from "components/content/squarelist/SquareList";
import {getSongList,getPlayCat} from "@/network/findmusic";
import SongSort from "views/findmusic/contents/SongSort";


export default {
  name: "SongSheet",
  data(){
    return {
      playlists:[],
      offset:0,
      catlist:[],
      cat:''
    }
  },
  components:{
    SongSort,
    SquareList
  },
  created() {
    this.getSonglistInfo(this.offset);
    this.getSongPlayTags()
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
  height: 100%;
  overflow-y: scroll;
}
.load-more {
  text-align: center;
  color: skyblue;
  font-size: 12px;
  cursor: pointer;
  height: 70px;
}

</style>
