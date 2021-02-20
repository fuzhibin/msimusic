<template>
<div class="comment-item" v-if="commentItem">
  <div class="item-left">
    <img :src="commentItem.user.avatarUrl" alt="" >
  </div>
  <div class="item-right">
    <div>
      <span class="user-name">{{commentItem.user.nickname}}:</span>
      <span class="user-comments">{{commentItem.content}}</span>
    </div>
    <div class="replied-item" v-if="repliedShow.length !==0&&repliedShow[0].content!= null">
      <span>@{{repliedShow[0].user.nickname}}:</span>
      <span>{{repliedShow[0].content}}</span>
    </div>
    <div class="comment-foot">
      <span>{{commentTime}}</span>
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "CommentsItem",
  props:{
    commentItem:{
      type:Object,
      default(){return {}}
    }
  },
  computed:{
    repliedShow(){
      return this.commentItem.beReplied;
    },
    commentTime(){
      return  formatDate(this.commentItem.time,"MM月dd日 hh:mm");
    }
  }
}
</script>

<style scoped>
.comment-item {
  display: flex;
  font-size: 13px;
  margin: 10px 0 20px;
  border-bottom: 1px solid #f3f3f3;
}
.item-left {
  width: 100px;
  text-align: center;
}
.item-left img {
  border-radius: 80px;
  width: 50px;
  height: 50px;
}
.item-right {
  width: 1100px;
}
.user-name,
.replied-item span:nth-of-type(1){
  color: #507DAF;
}
.user-comments {
  color: #373737;
}
.replied-item span:nth-of-type(2){
  color: #636363;
}
.replied-item {
  line-height: 30px;
  margin-top: 5px;
  background-color: #F4F4F4;

}
.comment-foot {
  position: relative;
  font-size: 12px;
  line-height: 25px;
  color: #9F9FCF;
}

</style>
