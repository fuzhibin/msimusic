<template>
  <div class="video">
    <div class="video-hd">
    <span v-for="(item,index) in videoList"
          @click="spnClic(index)"
          :class="{active:currentIndex===index}">{{ item.title }}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: "Video",
  data() {
    return {
      videoList: [{
        path: '/video/mv',
        title: 'MV'
      }],
      currentIndex: 0
    }
  },
  methods: {
    spnClic(index){
      this.currentIndex=index;
      this.$router.push(this.videoList[index].path)
    }
  }
}
</script>

<style scoped>
.video {
  width: 100%;
  height: calc(100vh - 70px - 70px);
  overflow: hidden;
}
.video-hd {
  line-height: 40px;
}
.video-hd span{
color: #373737;
  font-size: 20px;
  padding: 10px 0;
  margin-right: 20px;
}
.video-hd .active {
  color: #000;
  font-weight: 600;
  font-size: 22px;
}

</style>
