<template>
  <div class="short-film">
    <nav-sort :cat-list="videoTitle" v-show="videoTitle" title-nav="全部视频"/>
  </div>
</template>

<script>
import {getVideoTitle} from "network/getvideo";

import NavSort from "components/content/navtitle/NavSort";
import VideoList from "components/content/videoList/VideoList";
export default {
  name: "ShortFilm",
  components: {VideoList, NavSort},
  data(){
    return {
      videoTitle:[]
    }
  },
  created() {
    getVideoTitle().then(res => {
      this.videoTitle=res.data;
    });

  }
}
</script>

<style scoped>
.short-film {
  margin-top: 10px;
  width: 100%;
  overflow-y: scroll;
}
</style>
