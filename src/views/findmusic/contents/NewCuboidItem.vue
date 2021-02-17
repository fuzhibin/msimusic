<template>
  <div class="new-song-item" v-if="newInfoShow">
    <span class="song-num">{{ setRankNum }}</span>
    <div class="front-cover" @click="transmitMusic(newInfoShow.id)">
      <img v-lazy="musicInfo.picUrl" alt="" v-if="isShow">
    </div>
    <span class="new-song-name">
      {{ musicInfo.name }}
      <span class="new-song-from">
        {{ musicInfo.alias }}
      </span>
    </span>
    <span class="new-song-songer">{{ musicInfo.artists }}</span>
    <span class="new-song-title">{{ musicInfo.name }}{{ musicInfo.alias }}</span>
    <span class="new-song-time">{{ newSongTime }}</span>
  </div>
</template>

<script>
import {formatDate} from "common/utils";

import {getMusicUrl} from "@/network/musicurl";

import {AudioInfo, MusicInfo} from "@/common/datagroup";

export default {
  name: "NewCuboidItem",
  props: {
    newInfoShow: {
      type: Object,
      default() {
        return null
      }
    },
    rankNum: {
      type: Number
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      musicurl: '',
      musicInfo: null
    }
  },
  computed: {
    newSongTime() {
      return formatDate(this.musicInfo.duration, "mm:ss");
    },
    setRankNum() {
      //vue同种一个组件在不同的地方如入对象，
      // 展示里边的数据在同一个地方，
      // 但属性名不同时的处理
      if (this.isShow) {
        this.musicInfo = new MusicInfo(
          this.newInfoShow.album.picUrl,
          this.newInfoShow.name,
          this.newInfoShow.alias[0],
          this.newInfoShow.artists[0].name,
          this.newInfoShow.duration);
      } else {
        this.musicInfo = new MusicInfo(
          this.newInfoShow.al.picUrl,
          this.newInfoShow.name,
          this.newInfoShow.alia[0],
          this.newInfoShow.ar[0].name,
          this.newInfoShow.dt);
      }
      return this.rankNum < 10 ? '0' + this.rankNum : this.rankNum;
    }
  },
  methods: {
    //点击图片播放音乐
    transmitMusic(id) {
      getMusicUrl(id).then(res => {
        this.$store.commit('updateAudioInfo', new AudioInfo(res.data[0], this.musicInfo, '新歌速递'));
      })
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
  text-align: center;
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
