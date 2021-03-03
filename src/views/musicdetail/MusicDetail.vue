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
    <comments-list
      :hot-comments="hotComments"
      :comments="comments"
      @uploadMore="uploadMore"/>
  </div>
</template>

<script>
import RotatePicture from "@/views/musicdetail/components/RotatePicture";
import DetailTitelInfo from "@/views/musicdetail/components/DetailTitelInfo";

import lyricParser from 'lyric-parser'
import MusicLysic from "@/views/musicdetail/components/MusicLysic";
import CommentsList from "@/views/commentsList/CommentsList";

//请求评论
import {getMusicComments} from "@/network/getComments";

export default {
  name: "MusicDetail",
  data() {
    return {
      hotComments: [],
      comments: [],
      musicId: 0,
      offset: 0,
      lyricParseObj: {},
      currentLineNum: 0
    }
  },
  components: {
    CommentsList,
    MusicLysic,
    DetailTitelInfo,
    RotatePicture
  },
  created() {
    this.musicId = this.$store.state.audioInfo.musicId;
    this.getCommentsMore(this.musicId);
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
    uploadMore(){
      this.getCommentsMore(this.musicId, this.offset * 20);
    },
    handleLyparse({lineNum}) {
      if (lineNum > this.currentLineNum && this.musicState) {
        this.currentLineNum = lineNum;
      }
    },
    getCommentsMore(id, offset = 0) {
      getMusicComments(id, offset).then(res => {
        if (this.hotComments.length === 0) {
          this.hotComments = res.hotComments;
        }
        this.offset++;
        this.comments.push(...res.comments);
      })
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
