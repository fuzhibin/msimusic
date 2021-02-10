<template>
  <div class="find-recommend">
  </div>
</template>

<script>
import {getMusicList} from "@/network/findmusic";
export default {
  name: "PersonalityRecommend",
  data() {
    return {
      carouselList: []
    }
  },
  components: {
  },
  created() {
    getMusicList().then(res => {
      let data = res.data;
      console.log(data);
      this.carouselList=data.blocks[0].extInfo.banners;
    })
  }
}
</script>

<style scoped>
.find-recommend {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

</style>
