<template>
  <div class="video-detail">
      <h2>MV详情</h2>
      <div class="video-box">
        <video :src="videoUrlInfo.url"
               autoplay
               ref="videCtl"
               preload="auto"/>
        <div class="menu">
          <span class="paly" @click="paly">暂停</span>
        </div>
      </div>
      <div class="author-info">
        <img :src="videoDetailInfo.cover" alt="">
        <span>{{ videoDetailInfo.artistName }}</span>
      </div>
      <h3>{{ videoDetailInfo.name }}</h3>
      <div class="video-count">
        <span>发布时间：{{ videoDetailInfo.publishTime }}</span><span>播放：{{ playCount }}</span>
      </div>
      <p>
        {{ videoDetailInfo.desc }}
      </p>
      <comments-list :hot-comments="hotComments"
                     :comments="comments"
                     @uploadMore="uploadMore"/>
  </div>
</template>

<script>
import {getVideoDeatil} from "network/getvideo";
import {formatCount} from "common/utils";

import {getMvComments} from "network/getComments";
import CommentsList from "../commentsList/CommentsList";

export default {
  name: "VideoDetail",
  components: {CommentsList},
  data() {
    return {
      hotComments: [],
      comments: [],
      videoId: 0,
      offset: 0,
      videoDetailInfo: {}
    }
  },
  computed: {
    playCount() {
      return formatCount(this.videoDetailInfo.playCount)
    },
    videoUrlInfo() {
      const info = this.$route.query.videoInfo;
      console.log(JSON.parse(decodeURIComponent(info)));
      return JSON.parse(decodeURIComponent(info))
    }
  },
  created() {
    getVideoDeatil(this.videoUrlInfo.id).then(res => {
      console.log(res);
      this.videoDetailInfo = res.data;
    })
    this.videoId = this.videoUrlInfo.id;
    this.getCommentsMore(this.videoId);
  },
  methods: {
    uploadMore(){
      this.getCommentsMore(this.videoId, this.offset * 20);
    },
    paly() {
      this.$refs.videCtl.pause();
    },
    getCommentsMore(id, offset = 0) {
      getMvComments(id, offset).then(res => {
        if (this.hotComments.length === 0) {
          this.hotComments = res.hotComments;
        }
        console.log(res);
        this.offset++;
        this.comments.push(...res.comments);
        console.log(this.comments);
      })
    }
  }
}
</script>

<style scoped>

.video-detail {
  padding-left: 25px;
  width: 100%;
  height: calc(100vh - 70px - 70px);
  overflow-y: scroll;
}
.video-detail h3 {
 margin-bottom: 10px;
}
.video-detail video {
  width: 100%;
  height: 100%;
}

.video-box {
  position: relative;
  width: 700px;
  height: 400px;
  margin: 10px 0 10px;
}

.video-box:hover .menu {
  display: block;
}
.video-count {
  font-size: 10px;
  color: #CFCFCF;
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

.paly {
  display: inline-block;
  height: 100%;
  width: 50px;
}

.author-info {
  height: 60px;
  margin-bottom: 15px;
}

.author-info span {
  margin-left: 10px;
  font-weight: 600;
  line-height: 60px;
}

.author-info img {
  height: 100%;
  width: 60px;
  border-radius: 50%;
  vertical-align: middle;
}
.video-detail p{
  margin: 5px 0;
  font-size: 13px;
  width: 800px;
}
</style>
