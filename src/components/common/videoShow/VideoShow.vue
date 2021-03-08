<template>
  <div ref="box" class="video-box">
     <video :src="videoUrlInfo.url"
     autoplay
            preload="auto"
     ref="videCtl"/>
     <div class="menu">
       <span class="paly" @click="paly" v-show="ctlFlag">暂停</span>
       <span class="paly" @click="paly"  v-show="!ctlFlag">继续</span>
       <span class="paly" @click="fullScreen" v-show="!isFull">全屏</span>
       <span class="paly" @click="exitFullScreen" v-show="isFull">小屏</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'VideoShow',
  props:{
    videoUrlInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      ctlFlag:true,
      status: 0, // 记录全屏状态
      isFull: false, // 是否全屏
    }
  },
  methods:{
    paly() {
      if(this.ctlFlag){
        this.$refs.videCtl.pause();
        this.ctlFlag=false;
      }else {
        this.$refs.videCtl.play();
        this.ctlFlag=true;
      }
    },
    // 进入全屏
    fullScreen(){
      var doc = this.$refs.videCtl.parentNode;
      if(doc.requestFullscreen){
        doc.requestFullscreen();//标准
      }else if(doc.mozRequestFullScreen){
        doc.mozRequestFullscreen();// 火狐
      }else if(doc.webkitRequestFullscreen){
        doc.webkitRequestFullscreen();// 谷歌
      }else if(doc.msRequestFullscreen) {
        doc.msRequestFullscreen();// IE
      }
      this.isFull = true;
      this.status = 0;
    },
    // 退出全屏
    exitFullScreen(){
      var doc = document;
      console.log(doc);
      if(doc.exitFullscreen){
        doc.exitFullscreen();
      }else if(doc.mozExitFullscreen){
        doc.mozExcitFullscreen();
      }else if(doc.webkitExitFullscreen){
        doc.webkitExitFullscreen();
      }else if(doc.msExitFullscreen){
        doc.mskitExitFullscreen();
      }
      this.isFull = false;
      this.status = 0;
    },
  }
}
</script>

<style scoped>
.video-box {
  position: relative;
}
.video-box:hover .menu {
  display: block;
}
.menu {
  display: none;
  position: absolute;
  bottom: 3px;
  vertical-align: top;
  height: 40px;
  width: 700px;
  background-color: rgba(0, 0, 0, .2);
}
.video-box video {
  width: 100%;
  height: 100%;
}

.paly {
  display: inline-block;
  height: 100%;
  width: 50px;
  color: #fff;
}
</style>>

