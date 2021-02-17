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
import NewCuboidItem from "views/findmusic/contents/NewCuboidItem";
import DetailHeader from "components/content/detailheader/DetailHeader";

export default {
  name: "SongSheetDetail",
  data() {
    return {
      songList: null,
      detailHeader:{}
    }
  },
  components: {
    NewCuboidItem,
    DetailHeader
  },
  created() {
    getSheetDetail(this.$route.query.sheetId).then(res => {
      console.log(res.playlist);
      this.songList = res.playlist.tracks;
      this.detailHeader.coverImgUrl=res.playlist.coverImgUrl;
      this.detailHeader.description=res.playlist.description;
      this.detailHeader.name=res.playlist.name;
      this.detailHeader.tags=res.playlist.tags;
    })
  }
}
</script>

<style scoped>
.song-sheet-detail {
  position: relative;
  min-width: 1200px;
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
