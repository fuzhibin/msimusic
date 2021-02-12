<template>
  <div class="new-song">
    <new-song-nav @newSongIndex="newSongIndex"/>
    <new-song-item
      v-for="(item,index) in newMusics"
      :rank-num="index+1"
      :new-info-show="item"></new-song-item>
  </div>
</template>

<script>

import NewSongNav from "@/views/findmusic/contents/NewSongNav";
import {getNewSongs} from "@/network/findmusic";
import NewSongItem from "@/views/findmusic/contents/NewSongItem";

export default {
  name: "NewSong",
  components: {NewSongItem, NewSongNav},
  data() {
    return {
      songNavArea:0,
      newMusics:[]
    }
  },
  created() {
    this.getNewSongInfo(this.songNavArea);
  },
  methods: {
    //获取新歌数据
    getNewSongInfo(num) {
      getNewSongs(num).then(res => {
        this.newMusics.push(...res.data)
      })
    },
    newSongIndex(index) {
      this.songNavArea=index;
      this.newMusics=[];
      this.getNewSongInfo(index);
    }
  }
}
</script>

<style scoped>
.new-song {
  padding: 10px 25px 50px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
