<template>
  <div class="song-sheet-detail">
    <detail-header :detail-header="detailHeader"></detail-header>
    <div class="list-title">歌曲列表</div>
    <new-cuboid-item class="new-cuboid-item"
                     v-for="(item,index) in songList"
                     :rank-num="index+1"
                     :new-info-show="item"
                     :is-show="false" v-if="songList"/>
  </div>
</template>

<script>
import {getSheetDetail} from "@/network/findmusic";
import NewCuboidItem from "components/content/cuboiditem/NewCuboidItem";
import DetailHeader from "components/content/detailheader/DetailHeader";

export default {
  name: "SongSheetDetail",
  data() {
    return {
      leaderBoards:this.$route.query.objInfo,
      songList: null,
      detailHeader:{}
    }
  },
  components: {
    NewCuboidItem,
    DetailHeader
  },
  created() {
    const sheetId=this.$route.query.sheetId;
    if(sheetId !==undefined ){
      getSheetDetail(this.$route.query.sheetId).then(res => {
        this.songList = res.playlist.tracks;
        this.detailHeader.coverImgUrl=res.playlist.coverImgUrl;
        this.detailHeader.description=res.playlist.description;
        this.detailHeader.name=res.playlist.name;
        this.detailHeader.tags=res.playlist.tags;
      })
    }else {
       const sheetInfo=JSON.parse(decodeURIComponent(this.$route.query.sheetInfo))
       this.songList=sheetInfo.tracks;
      this.detailHeader.coverImgUrl=sheetInfo.coverImgUrl;
      this.detailHeader.description=sheetInfo.description;
      this.detailHeader.name=sheetInfo.name;
      this.detailHeader.tags=sheetInfo.tags;
    }



  }
}
</script>

<style scoped>
.song-sheet-detail {
  position: relative;
  height: calc(100vh - 70px - 70px);
  overflow-y: scroll;
  padding: 0 25px;
}

.list-title {
  font-size: 17px;
  line-height: 50px;
  font-weight: 700;
}

.new-cuboid-item {
  height: 50px;
}
</style>
