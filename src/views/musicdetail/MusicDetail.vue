<template>
  <div class="musicDetail">
    <div class="detail-hd">
      <div>
        <rotate-picture :img-roate-url="musicInfo.imgUrl"
                        :music-active="!musicInfo.musicActive"/>
      </div>
      <div class="detail-right">
        <detail-titel-info :music-name="musicInfo.musicName"
                           :music-autor="musicInfo.musicAutor"
                           :music-from="musicInfo.musicFrom"/>
        <music-lysic :music-lysic="lyricParse"
                     :current-lysic-index="currentLineNum"
                     class="music-lysic"/>
      </div>
    </div>
    <music-comments-list/>
  </div>
</template>

<script>
import RotatePicture from "@/views/musicdetail/components/RotatePicture";
import DetailTitelInfo from "@/views/musicdetail/components/DetailTitelInfo";

import lyricParser from 'lyric-parser'
import MusicLysic from "@/views/musicdetail/components/MusicLysic";
import MusicCommentsList from "@/views/commentsList/MusicCommentsList";


export default {
  name: "MusicDetail",
  data() {
    return {
      lyricParseObj: {},
      currentLineNum: 0
    }
  },
  components: {
    MusicCommentsList,
    MusicLysic,
    DetailTitelInfo,
    RotatePicture
  },
  computed: {
    musicState() {
      return this.musicInfo.musicActive;
    },
    musicInfo() {
      return this.$store.state.audioInfo
    },
    lyricParse() {
      this.lyricParseObj = new lyricParser(this.musicInfo.musicIyrics, this.handleLyparse);
      if (this.musicInfo.musicActive) {
        this.lyricParseObj.play();
      }
      return this.lyricParseObj.lines;
    }
  },
  mounted() {
    this.lyricParseObj.seek(this.musicInfo.musicCurrentTime)
  },
  methods: {
    handleLyparse({lineNum}) {
      if (lineNum > this.currentLineNum && this.musicState) {
        this.currentLineNum = lineNum;
      }
    }
  },
  watch: {
    musicState(newValue) {
      if (this.lyricParseObj) {
        this.lyricParseObj.togglePlay();
      }
      if (newValue) {
        this.lyricParseObj.seek(this.musicInfo.musicCurrentTime);
      }
    }
  }
}
</script>

<style scoped>

.musicDetail {
  position: relative;
  width: 100%;
  height: calc(100vh - 70px - 70px);
  overflow-y: scroll;
}

.detail-hd {
  display: flex;
}

.detail-right {
  margin-left: 50px;
}

.music-lysic {

  width: 400px;
  margin: 35px auto;
  height: 370px;
}
</style>
