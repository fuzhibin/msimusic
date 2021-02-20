<template>
  <swiper class="recommend-swiper" v-if="carouselList.length!==0">
    <swiper-item v-for="item in carouselList">
      <a :href="item.url">
        <img :src="item.pic">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name: "RecommendSwiper",
  components: {
    Swiper,SwiperItem
  },
  props:{
    carouselList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend-swiper {
  margin-top: 50px;
}
</style>
