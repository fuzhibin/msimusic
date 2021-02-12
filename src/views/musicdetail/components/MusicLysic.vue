<template>
  <div class="lysic">
    <ul ref="lysicUl">
      <li v-for="(item,index) in musicLysic"
          :class="{nowText:index === currentLysicIndex}"
          class="now-lysic">{{item.txt}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MusicLysic",
  props: {
    musicLysic: {
      type: Array
    },
    currentLysicIndex:{
      type:Number,
      default:0
    }
  },
  watch:{
    currentLysicIndex(){
      if(this.currentLysicIndex>=8){
        this.$refs.lysicUl.style.transform=`translateY(-${25* (this.currentLysicIndex-8)}px)`
      }
    }
  }
}
</script>

<style scoped>
.lysic {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.lysic .now-lysic {
  text-align: center;
  line-height: 25px;
  color: #666;
  font-size: 15px;

}
.nowText {
  color: #000;
  font-size: 17px;
  font-weight: 700;
}

</style>
