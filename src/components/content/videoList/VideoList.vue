<template>
<div class="video-list">
  <video-list-item v-for="item in videoList" :video-item="item"/>
</div>
</template>

<script>

import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  components: {VideoListItem},
  props:{
    videoList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
