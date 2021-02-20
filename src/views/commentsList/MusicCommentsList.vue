<template>
  <div class="comment-list" ref="commentList">
    <h3>热门评论</h3>
    <comments-item v-for="item in hotComments" :comment-item="item"/>
    <h3>用户评论</h3>
    <comments-item v-for="item in comments" :comment-item="item"/>
  </div>
</template>

<script>
import CommentsItem from "components/content/commentsitem/CommentsItem";
//请求评论
import {getMusicComments} from "@/network/getComments";

export default {
  name: "MusicCommentsList",
  data() {
    return {
      hotComments: [],
      comments: [],
      musicId: 0,
      offset: 0,
      loadFinsh:true
    }
  },
  components: {
    CommentsItem
  },
  created() {
    this.musicId = this.$store.state.audioInfo.musicId;
    this.getCommentsMore(this.musicId);
  },
  mounted() {
    const listParent = this.$refs.commentList.parentNode;
    //节流阀操作
    listParent.addEventListener("scroll", () => {
      if(this.loadFinsh){
        if (listParent.scrollTop + listParent.offsetHeight >= listParent.scrollHeight-10) {
          this.loadFinsh=false;
          this.getCommentsMore(this.musicId, this.offset * 20);
        }
      }

    })
  },
  methods: {

    getCommentsMore(id, offset = 0) {
      getMusicComments(id, offset).then(res => {
        if (this.hotComments.length === 0) {
          this.hotComments = res.hotComments;
        }
        this.offset++;
        this.comments.push(...res.comments);
        this.loadFinsh=true
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
.comment-list {
  padding: 0 20px;
}
</style>
