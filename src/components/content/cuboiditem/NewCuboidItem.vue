<template>
  <div class="new-cuboid-item" v-if="newInfoShow">
    <span class="cuboid-num">{{ setRankNum }}</span>
    <div class="front-cover">
      <div class="front-icon" v-if="!isShow"><span
        @click="transmitMusic(newInfoShow.id)">&#xe852;</span><span>&#xe69a;</span></div>
      <img v-lazy="musicInfo.picUrl" alt="" v-if="isShow" @click="transmitMusic(newInfoShow.id)">
    </div>
    <span class="new-cuboid-name" >
      {{ musicInfo.name }}
      <span class="new-cuboid-from" >
        {{ musicInfo.alias }}
      </span>
    </span>
    <span class="new-cuboid-songer" v-if="songNameShow">{{ musicInfo.artists }}</span>
    <span class="new-cuboid-title" >{{ musicInfo.alias }}</span>
    <span class="new-cuboid-time">{{ newSongTime }}</span>
  </div>
</template>

<script>
import {formatDate} from "common/utils";
import {myMixin} from "@/common/mixin";

import { MusicInfo} from "@/common/datagroup";

export default {
  name: "NewCuboidItem",
  props: {
    songNameShow: {
      type: Boolean,
      default: true
    },
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
  mixins:[myMixin]
}
</script>

<style scoped>
.front-icon {
  font-family: 'iconfont';
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 100%;
}

.front-icon span {
  margin: 0 6px;
}

.cuboid-num {
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

.new-cuboid-name {
  padding-left: 15px;
  width: 27%;
}

.new-cuboid-songer {
  text-align: center;
  width: 20%;
  color: #9B9B9B;
}

.new-cuboid-title {
  width: 23%;
  color: #9B9B9B;
}

.new-cuboid-time {
  width: 15%;
  color: #9B9B9B;
  text-align: right;
  padding-right:30px;
}

.new-cuboid-item {
  min-width:600px;
  display: flex;
  align-items: center;
  height: 100px;
  font-size: 14px;
  cursor: pointer;
}


.new-cuboid-item:nth-of-type(even) {
  background-color: #F9F9F9;
}
</style>
