<template>
  <div class="ctrolbar">
    <div class="ctrl-left">
      <div style="position: relative">
        <img :src="nowMusicInfo.imgUrl" alt="" @click="musicDetail">
        <section>
          <span class="ctrl-title">{{ nowMusicInfo.musicName }}{{ nowMusicInfo.musicAlias }}</span>
          <span class="ctrl-songer">{{ nowMusicInfo.musicAutor }}</span>
        </section>
      </div>
    </div>
    <div class="ctrl-center">
      <div class="ctrl-hd">
        <audio :src="nowMusicInfo.musicUrl"
               class="myaudio"
               ref="myaudio"
               preload="auto"
               autostart="true"></audio>
        <span>&#xe693;</span>
        <span>&#xe68e;</span>
        <span @click="musicIsActive" v-if="!isActive">&#xe852;</span>
        <span @click="musicDisActive" v-if="isActive">&#xe690;</span>
        <span>&#xe68f;</span>
        <span>&#xe694;</span>
      </div>
      <div class="ctrl-bd">
        <span>{{musicCurrentTime}}</span>
        <span class="progress-bar" ref="pgsbar">
          <span ref="pgscont"></span>
        </span>
        <span>{{musicAllTime}}</span>
      </div>
    </div>
    <div class="ctrl-right"></div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";
import {getIyrics} from "@/network/getlyrics";
/***
 * 下面以后要删除 ---------------- 模拟刚打开页面播放控制栏有音乐
 */
import {getOneSong} from "@/tentative";
import {AudioInfo, MusicInfo} from "@/common/datagroup";
import {getMusicUrl} from "@/network/musicurl";

/***
 * 上间以后要删除 ----------------- 模拟刚打开页面播放控制栏有音乐
 */
export default {
  name: "CtrolBar",
  data() {
    return {
      playPromise:null,
      musicCurrentTime:"00:00",
      timer:null,
      progressWeight:0,
      myaudio:{},

    }
  },
  /***
   * 下面以后要删除 ---------------- 模拟刚打开页面播放控制栏有音乐
   */
  created() {
    getOneSong().then(res => {
      console.log(res.hotSongs[0]);
      const  newInfoShow=res.hotSongs[0]
      const musicInfo = new MusicInfo(
        newInfoShow.al.picUrl,
        newInfoShow.name,
        newInfoShow.alia[0],
        newInfoShow.ar[0].name,
        newInfoShow.dt);
        getMusicUrl(newInfoShow.id).then(res => {
        this.$store.commit('updateAudioInfo', new AudioInfo(res.data[0], musicInfo, '新歌速递'));
      })
    })
  },
  /***
   * 上面以后要删除 ----------------------- 模拟刚打开页面播放控制栏有音乐
   */
  mounted() {
    this.progressWeight=this.$refs.pgsbar.offsetWidth;
    this.myaudio=this.$refs.myaudio;
  },
  computed: {
    nowMusicInfo() {
      return this.$store.state.audioInfo;
    },
    musicAllTime(){
      return formatDate(this.nowMusicInfo.musicAllTime,"mm:ss")
    },
    isActive(){
      return this.nowMusicInfo.musicActive;
    }
  },
  methods: {
    //点击小图片跳转到音乐详情页面（即歌词页面）
    musicDetail(){
      getIyrics(this.nowMusicInfo.musicId).then(res => {
        this.$store.commit('updataIyrics',res.lrc.lyric);
        this.$store.commit('updataCurrentTime',this.myaudio.currentTime*1000)
        this.$router.push('/musicdetail');
      })
    },
    musicDisActive(){
      this.playPromise=this.myaudio.play();
      this.$store.commit('updateAudioAction');
      this.$store.commit('updataCurrentTime',this.myaudio.currentTime*1000);
      clearInterval(this.timer);
      if (this.myaudio.paused){
        this.myaudio.play();
      } else{
        if (this.playPromise !== undefined) {
          this.playPromise.then(() => {
            // 这里就已经开始播放了  播放UI会出现（如果控件显示的话） 此时可以安全的暂停音视频了
            this.myaudio.pause();
          }).catch(error => {
            // 无法自动播放  显示暂停的UI
          });
        }
      }
    },
    musicIsActive() {
      this.playPromise=this.myaudio.play();
      this.$store.commit('updateAudioAction');
      //监听当前播放秒数
      this.timer= setInterval(()=>{
        this.musicCurrentTime=formatDate(this.myaudio.currentTime*1000,"mm:ss");
        this.$refs.pgscont.style.width= this.progressWeight*this.myaudio.currentTime*1000/this.nowMusicInfo.musicAllTime +'px'
      },1000);
      if (!this.myaudio.paused){
        this.myaudio.play();
      } else{
        if (this.playPromise !== undefined) {
          this.playPromise.then(() => {
            // 这里就已经开始播放了
            // 播放UI会出现（如果控件显示的话）
            // 此时可以安全的暂停音视频了
            this.myaudio.pause();
          }).catch(error => {
            // 无法自动播放
            // 显示暂停的UI
          });
        }
      }
    }
  }
}
</script>

<style scoped>
.myaudio {
  position: absolute;
  display: none;
  width: 50px;
  height: 50px;
}

.ctrolbar .progress-bar {
  display: inline-block;
  text-align: left;
  width: 280px;
  margin: 0 10px;
  height: 2px;
  border-radius: 1px;
  transition: height 0.2s;
  transform: translateY(-3px);
}

.progress-bar span {
  display: inline-block;
  height: 100%;
  border-radius: 1px;
  background-color: #EC4141;
}

.ctrolbar .progress-bar:hover {
  height: 5px;
}

.ctrl-center .ctrl-hd {
  position: relative;
  text-align: center;
  margin-top: 8px;
}

.ctrl-hd span {
  margin: 0 15px;
  font-size: 27px;
}

.ctrl-hd span:nth-of-type(3) {
  font-size: 33px;
}

.ctrl-bd span {
  font-size: 10px;
  color: #BCBCBD;
}

.ctrl-center .ctrl-bd {
  width: 450px;
  text-align: center;
}

.ctrl-center,
.ctrl-right {
  font-family: 'iconfont';
  flex: 1;
}

.ctrl-title {
  width: 150px;
  position: absolute;
  top: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ctrl-songer {
  position: absolute;
  top: 37px;
}

.ctrl-left {
  flex: 1;
  padding-left: 20px;
}

.ctrl-left section {
  display: inline-block;
}

.ctrl-left img {
  margin-top: 10px;
  border-radius: 5px;
  width: 50px;
  height: 50px;
}

.ctrolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F6F6F8;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, .1);
  height: 70px;
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
}
</style>
