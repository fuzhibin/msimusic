<template>
  <div class="rot-box">
    <img class="rot-pic"
         :src="imgRoateUrl"
         :class="{rouatepause:musicActive}" alt="">
  </div>
</template>

<script>
export default {
  name: "RotatePicture",
  props:{
    imgRoateUrl:{
      type:String,
      default:'~assets/img/lazyload.png'
    },
    musicActive:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.rot-box {
  position: relative;
  width: 400px;
  height: 500px;
  text-align: center;
}

.rot-pic {
  width: 240px;
  height: 240px;
  margin-top: 50%;
  border-radius: 50%;
  box-shadow: 0 0 3px 3px rgba(0,0,0,.1);
  animation: rotate-pic 15s infinite linear;
}
.rouatepause {
  animation-play-state:paused !important;
}
@keyframes rotate-pic {
  from {
    transform:translateY(-50%)  rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>
