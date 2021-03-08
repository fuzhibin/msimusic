<template>
<div class="search-page">
  <div class="best-fit">
    <h4>最佳匹配</h4>
    <div class="fit-box">
      <div class="fit-item"
           @click="songerClic"
           v-if="artist" >
        <img :src="artist.picUrl" alt="">
        <div class="item-desc">{{artist.occupation}}:{{artist.name}}</div>
      </div>
      <div class="fit-item" v-if="album">
        <img :src="album.picUrl" alt="">
        <div class="item-desc">{{album.type}}:{{album.name}}({{album.alias[0]}})<span>{{album.artist.name}}</span></div>
      </div>
    </div>
  </div>
  <new-cuboid-item
    class="songes-item"
    v-for="(item,index) in songsList"
    :rank-num="index+1"
    :is-show="true"
    :is-flag="false"
    :new-info-show="item"/>
</div>
</template>

<script>
import NewCuboidItem from "components/content/cuboiditem/NewCuboidItem";
export default {
  name: "SearchPage",
  data(){
    return {
    }
  },
  methods:{
    songerClic(){
      const id=this.artist.id
      this.$router.push({
        path:'/songerdetail',
        query:{
          songerId:id
        }
      })
    }
  },
  components:{
    NewCuboidItem
  },
  computed:{
    serachInfo(){
      return JSON.parse(decodeURIComponent(this.$route.query.info));
    },
    album(){
      console.log(this.serachInfo[1].album[0]);
      return this.serachInfo[1].album[0];
    },
    artist(){
      console.log(this.serachInfo[1].artist[0]);
      return this.serachInfo[1].artist[0];
    },
    songsList(){
      console.log(this.serachInfo[0].songs);
      return this.serachInfo[0].songs;
    }
  }
}
</script>

<style scoped>
.search-page {
  padding-left: 25px;
  width: 100%;
  height: calc(100vh - 70px - 70px);
  overflow-y: scroll;
}
.fit-box {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 1000px){
  .fit-item {
    width: 300px !important;
  }
}
.songes-item {
  height: 50px;
  width: 100%;
}
.spongs-list {
  margin: 10px 0;
}
.fit-item {
  width: 30%;
  display: flex;
  background-color: #BCBCBD;
  border-radius: 5px;
  height: 100px;
}

.fit-item img {
  height: 100%;
  width: 100px;
  border-radius: 5px;
}
.item-desc {
  flex: 1;
  position: relative;
  line-height: 100px;
 padding-left: 25px;
}
.item-desc span {
  position: absolute;
  line-height: 10px;
  left: 10px;
  bottom: 10px;
}
</style>
