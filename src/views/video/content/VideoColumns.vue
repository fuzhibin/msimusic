<template>
<div>
  <h2>{{listTitle}}</h2>
  <video-list :video-list="sectionList"/>
</div>
</template>

<script>
import VideoList from "components/content/videoList/VideoList";
export default {
  name: "VideoColumns",
  components: {VideoList},
  props:{
    listTitle:{
      type:String,
      default:''
    },
    videoList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
    sectionList(){
      return this.videoList && this.videoList.slice(0,8);
    }
  }
}
</script>

<style scoped>
h2 {
  padding-left: 25px;
  margin-bottom: 10px;
}
</style>
