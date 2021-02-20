<template>
  <div class="find-recommend">
    <recommend-swiper :carousel-list="carouselList"/>
    <div class="recommend-list">
      <h2 @click="recommendMoreSheet">推荐歌单   ></h2>
      <square-list :is-flag="false" :square-list="recommendSheet"/>
    </div>
  </div>
</template>

<script>
import {getMusicList,getPersonalized} from "@/network/findmusic";
import RecommendSwiper from "@/views/findmusic/contents/RecommendSwiper";
import SquareList from "@/components/content/squarelist/SquareList";
export default {
  name: "PersonalityRecommend",
  components: {RecommendSwiper,SquareList},
  data() {
    return {
      carouselList: [],
      recommendSheet:[]
    }
  },
  created() {
    getMusicList().then(res => {
      let data = res.data;
      this.carouselList=data.blocks[0].extInfo.banners;
    });
    getPersonalized().then(res => {
      console.log(res.result);
      this.recommendSheet=res.result;
    })
  },
  methods:{
    recommendMoreSheet(){
      this.$router.push('/findmusic/songSheet')
    }
  }
}
</script>

<style scoped>
.find-recommend {
  width: 100%;
  height: calc(100vh - 70px - 70px - 40px);
  padding-bottom: 30px;
  overflow-y: scroll;
}
.recommend-list {
  margin-top: 60px;
  padding-left: 25px;
}
.recommend-list h2 {
  padding-left: 20px;
}

</style>
