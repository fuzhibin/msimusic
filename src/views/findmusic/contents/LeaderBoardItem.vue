<template>
  <div class="leader-board-item">
    <div class="item-left">
      <img @click="leaderMoreClic" v-lazy="leaderBoard.coverImgUrl" alt="">
    </div>
    <div class="item-right">
      <div class="nav-info">
        <h4>{{ leaderBoard.name }}</h4>
        <span>{{ updateTime }}</span>
      </div>
      <ul>
        <li v-for="(item,index) in showList"
            @click="playMusic(item)">
          <span class="item-rank">{{ index + 1 }}</span>
          <span class="item-name">{{ item.name }}</span>
          <span class="item-artist">{{ item.ar[0].name }}</span>
        </li>
        <li @click="leaderMoreClic">加载更多</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";
import {getSheetDetail} from "@/network/findmusic";
import {myMixin} from "@/common/mixin";
import {MusicInfo} from "@/common/datagroup";

export default {
  name: "LeaderBoardItem",
  data() {
    return {
      songListInfo: null,
      showList: [],
      musicInfo:{}
    }
  },
  props: {
    leaderBoard: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    leaderMoreClic(){
      const info=encodeURIComponent(JSON.stringify(this.songListInfo));
      this.$router.push({
        path:'/sheetdetail',
        query:{
          sheetInfo:info
        }
      })
    },
    playMusic(value){
      this.musicInfo = new MusicInfo(
        value.al.picUrl,
        value.name,
        value.alia[0],
        value.ar[0].name,
        value.dt);
      this.transmitMusic(value.id);
    }
  },
  created() {
    getSheetDetail(this.leaderBoard.id).then(res => {
      this.songListInfo = res.playlist;
      this.showList = this.songListInfo.tracks.slice(0, 5);
    })
  },
  mixins: [myMixin],
  computed: {
    updateTime() {
      return formatDate(this.leaderBoard.updateTime, 'MM月dd日更新');
    }
  }
}
</script>
<style scoped>
.item-artist {
  font-size: 12px;
  float: right;
  margin-right: 10px;
}

.item-name {

  font-size: 12px;
}

.item-rank {
  font-size: 14px;
  padding: 0 5px;
}

.leader-board-item {
  border-radius: 10px;
  display: flex;
  height: 180px;
  background-color: #F2F5F7;
}

.item-right li:nth-last-of-type(1) {
  text-align: right;
  font-size: 12px;
  color: #666666;
}

.item-right {
  flex: 1;
}

.item-right li {
  line-height: 27px;
  margin: 0 3px;
}

.nav-info {
  position: relative;
  margin-top: 5px;
  line-height: 30px;
  height: 30px;
  padding-left: 10px;
}

.nav-info span {
  position: absolute;
  top: 50%;
  color: #A8B3BB;
  font-size: 12px;
  right: 10px;
  transform: translateY(-50%);
}

.item-left {
  width: 180px;
  height: 100%;

}

.item-left img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
</style>

