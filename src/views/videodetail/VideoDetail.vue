<template>
  <div class="video-detail">
      <div class="detail-nav">
        <div class="detail-left">
          <h2 @click="titleClic">MV详情</h2>
          <video-show
            :video-url-info="videoUrlInfo"
            class="video-show"/>
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

        </div>
        <div class="detail-right">
          <relate-recommend :relate-video="relateVideo"/>
        </div>
      </div>
    <comments-list :hot-comments="hotComments"
                   :comments="comments"
                   class="comment-list"
                   @uploadMore="uploadMore"/>
  </div>
</template>

<script>
import {getVideoDeatil,getRecommendMv} from "network/getvideo";
import {formatCount} from "common/utils";

import {getMvComments} from "network/getComments";
import CommentsList from "../commentsList/CommentsList";
import RelateRecommend from "./components/RelateRecommend";
import VideoShow from 'components/common/videoShow/VideoShow.vue';
export default {
  name: "VideoDetail",
  components: {VideoShow,RelateRecommend, CommentsList},
  data() {
    return {
      hotComments: [ ],
      comments: [],
      videoId: 0,
      offset: 0,
      videoDetailInfo: {},
      relateVideo:[],

    }
  },
  computed: {
    playCount() {
      return formatCount(this.videoDetailInfo.playCount)
    },
    videoUrlInfo() {
      const info = JSON.parse(decodeURIComponent(this.$route.query.videoInfo));
      this.getInfo(info.id);
      this.ctlFlag=true;
      return info
    }
  },
  methods: {
    getInfo(id){
      this.videoId=id;
      getVideoDeatil(this.videoId).then(res => {
        this.videoDetailInfo = res.data;
      })
      this.getCommentsMore(this.videoId);
      getRecommendMv().then(res => {
        this.relateVideo=res.result;
      })
    },
    titleClic(){
      this.$router.go(-1);
    },
    uploadMore(){
      this.getCommentsMore(this.videoId, this.offset * 20);
    },

    getCommentsMore(id, offset = 0) {
      getMvComments(id, offset).then(res => {
        if (this.hotComments.length === 0) {
          this.hotComments = res.hotComments;
        }
        this.offset++;
        this.comments.push(...res.comments);
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
.detail-nav {
  display: flex;
}
.detail-left {
  width: 750px;
}
.detail-right {
  display: inline-block;
  padding-top: 20px;
  margin-left: 50px;
}
.detail-left h3 {
 margin-bottom: 10px;
}

.video-show {
  width:700px;
  height: 400px;
  margin: 10px 0 10px;
}

.comment-list {
  width: 100%;
}

.video-count {
  font-size: 10px;
  color: #CFCFCF;
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
.detail-left p{
  margin: 5px 0;
  font-size: 13px;
  width:100%;
}
</style>
