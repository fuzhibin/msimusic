<template>
<div class="leader-board">
  <h2>排行榜</h2>
  <div class="leader-content">
    <leader-board-item
      v-for="item in leaderBoards"
      :leader-board="item"
      class="leader-item"/>
    <div class="leader-item"/>
  </div>
</div>
</template>

<script>
import LeaderBoardItem from "@/views/findmusic/contents/LeaderBoardItem";
import {getAllTopList} from "@/network/musicurl";



export default {
  name: "LeaderBoard",
  components: {LeaderBoardItem},
  data(){
    return {
      leaderBoards:[],
      musicInfo:[]
    }
  },
  created() {
    getAllTopList().then(res => {
      console.log(res.list);
      this.leaderBoards=res.list;
    })
  }
}
</script>

<style scoped>
.leader-board {
  padding: 10px 25px 50px;
  width: 100%;
  height: calc(100vh - 70px - 70px - 40px);
  overflow-y: scroll;
}
.leader-board h2 {
  margin: 10px 0 12px 10px;
}
.leader-content {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
}
.leader-item {
  width: 500px;
  min-width: 450px;
  margin: 15px 0;
}
.leader-item:nth-last-of-type(1){
  align-self: flex-start;
}
</style>
