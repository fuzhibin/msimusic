<template>
  <div class="songer-detail">
    <songer-detail-header
      :songer-artist="songerArtist"
      :songer-identify="songerIdentify"
      :songer-detail="songerUser"
    />
    <songer-works-detail
      :hot-songs="hotSongs"
      :hot-albums="hotAlbums"/>
  </div>
</template>

<script>
import {
  getSongerAlbum,
  getSongerDetail,
  getArtists } from "@/network/findmusic";
import SongerDetailHeader from "components/content/detailheader/SongerDetailHeader";
import SongerWorksDetail from "@/views/songerdetail/childComps/SongerWorksDetail";


export default {
  name: "SongerDetail",
  components: {SongerWorksDetail, SongerDetailHeader},
  data() {
    return {
      songerArtist: {},
      songerUser: {},
      songerIdentify: {},
      hotAlbums: [],
      hotSongs:[]
    }
  },
  created() {
    //歌手热播的歌
    getArtists(this.$route.query.songerId).then(res => {
      console.log(res.hotSongs);
      this.hotSongs=res.hotSongs;
    })
    //专辑信息< 专辑id >
    getSongerAlbum(this.$route.query.songerId).then(res => {
      this.hotAlbums = res.hotAlbums
    });
    //歌手描述信息
    getSongerDetail(this.$route.query.songerId).then(res => {
      this.songerArtist = res.data.artist;
      this.songerUser = res.data.user;
      this.songerIdentify = res.data.identify;
    });

  }
}
</script>

<style scoped>
.songer-detail {
  height: calc(100vh - 70px - 70px);
  overflow-y: scroll;
  padding: 0 25px;
}

</style>
