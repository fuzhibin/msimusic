<template>
<div class="detail-header">
  <div class="songer-left">
    <div class="left-hd">
      <img :src="songerArtist.cover" alt="">
    </div>
    <div class="left-bd">
      <img :src="songerDetail.avatarUrl" alt="" class="user-head">
      <div>
        <span class="songer-name">{{songerArtist.name}}</span>
        <img :src="songerIdentify.imageUrl" alt="" class="small-icon">
      </div>
      <div class="productions">
        单曲数：<span>{{songerArtist.musicSize}}</span>
        专辑数：<span>{{songerArtist.albumSize}}</span>
        MV数：<span>{{songerArtist.mvSize}}</span>
      </div>
      <div class="identify">{{songerDetail.description}}</div>
      <div class="identifyTag">
        <span v-for="item in songerArtist.identifyTag">{{item}}</span>
      </div>
      <div style="text-align: center;margin-top: 10px"><button>+ 关注</button></div>
    </div>
  </div>
  <div class="songer-right">
    <h2>歌手简介</h2>
    <pre>{{songerArtist.briefDesc}}</pre>

  </div>
</div>
</template>

<script>
export default {
  name: "SongerDetailHeader",
  data(){
    return {
      introIndex:0
    }
  },
  props:{
    songerDetail:{
      type:Object,
      default(){
        return{}
      }
    },
    songerArtist:{
      type:Object,
      default(){
        return{}
      }
    },
    songerIdentify:{
      type:Object,
      default(){
        return{}
      }
    }

  }
}
</script>

<style scoped>
.detail-header {
  display: flex;
  padding: 20px 30px 20px 0;
}
.songer-right {
  flex: 1;
  min-width: 500px;
  margin-left: 50px;
  position: relative;
}
.songer-right h2 {
  text-align: left;
}
.songer-right pre {
  position: absolute;
  top: 50%;
  left: 50%;transform: translate(-50%,-50%);
  width: 500px;
  text-indent: 2em;
  white-space: pre-wrap;
}


.songer-left {
  position: relative;
  width: 380px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
}
.left-hd{
  width: 100%;
  height: 65%;
}
.left-hd img{
  width: 100%;
  height: 100%;
}
.productions {
  margin-top: 5px;
  font-size: 12px;
  color: #373737;
}
.productions span {
  color: #507DB6 !important;
}
.user-head {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  border: 3px solid #fff;
}
.left-bd {
  position: absolute;
  width: 100%;
  height:40%;
  bottom: 0px;
  border-radius: 10px;
  text-align: center;
  background-color: #7DBE52;
}
.left-bd div:nth-of-type(1) {
  margin-top: 60px;
}
.small-icon {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}
.songer-name {
  font-size: 20px;
  font-weight: 700;
}
.identify {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
.identifyTag {
  margin-top: 7px;
  font-size: 12px;
  color: #666;
}
.left-bd button {
  width: 100px;
  height: 30px;
  background-color: #EC4141;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
  border-radius: 30px;

}

</style>
