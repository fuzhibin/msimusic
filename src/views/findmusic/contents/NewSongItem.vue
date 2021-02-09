<template>
  <div class="new-song-item">
    <span class="song-num">{{setRankNum}}</span>
    <div class="front-cover">
      <img v-lazy="newInfoShow.album.picUrl" alt="">
    </div>
    <span class="new-song-name">{{ newInfoShow.name }}<span class="new-song-from">{{ newInfoShow.alias[0] }}</span></span>
    <span class="new-song-songer">{{ newInfoShow.artists[0].name }}</span>
    <span class="new-song-title">{{ newInfoShow.album.name }}{{ newInfoShow.alias[0] }}</span>
    <span class="new-song-time">{{ newSongTime }}</span>
  </div>
</template>

<script>
import {formatDate} from "common/utils";

export default {
  name: "NewSongItem",
  props: {
    newInfoShow: {
      type: Object,
      default() {
        return null
      }
    },
    rankNum: {
      type: Number
    }
  },
  computed: {
    newSongTime() {
      return formatDate(this.newInfoShow.lMusic.playTime, "mm:ss");
    },
    setRankNum() {
      return this.rankNum < 10 ? '0' + this.rankNum : this.rankNum;
    }
  }
}
</script>

<style scoped>
.song-num {
  text-align: center;
  width: 5%;
  color: #9B9B9B;
}

.front-cover {
  text-align: center;
  width: 10%;
  height: 75px;
}
.front-cover img {
  width: 75px;
  height: 100%;
  border-radius: 5px;
}
.new-song-name {
  padding-left: 15px;
  width: 27%;
}

.new-song-songer {
  text-align:center;
  width: 20%;
  color: #9B9B9B;
}

.new-song-title {
  width: 23%;
  color: #9B9B9B;
}

.new-song-time {
  width: 15%;
  color: #9B9B9B;
  text-align: right;
  padding-right: 40px;
}

.new-song-item {
  display: flex;
  align-items: center;
  height: 100px;
  font-size: 14px;
  cursor: pointer;
}



.new-song-item:nth-of-type(even) {
  background-color: #F9F9F9;
}
</style>
