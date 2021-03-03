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


export default {
  name: "CommentsList",
  props:{
    hotComments:{
      type:Array,
      default(){
        return []
      }
    },
    comments:{
      type:Array,
      default(){
        return []
      }
    }

  },
  data() {
    return {
      loadFinsh:true
    }
  },
  components: {
    CommentsItem
  },
  created() {

  },
  mounted() {
    const listParent = this.$refs.commentList.parentNode;
    //节流阀操作
    console.log(listParent);
    listParent.addEventListener("scroll", () => {
      if(this.loadFinsh){
        if (listParent.scrollTop + listParent.offsetHeight >= listParent.scrollHeight-10) {
          this.loadFinsh=false;
          this.$emit('uploadMore');
          this.loadFinsh=true
        }
      }
    })
  }
}
</script>

<style scoped>
.comment-list {
  padding: 0 20px;
}
</style>
