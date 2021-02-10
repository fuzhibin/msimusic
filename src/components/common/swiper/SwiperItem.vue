<template>
  <div class="swiper-item"><slot></slot></div>
</template>

<script>
export default {
  name: "SwiperItem"
}
</script>

<style>
.swiper-item {
  position: absolute;
  top: 0;
  width: 300px;
  height: 150px;
  transition-duration: 2s;
}
.swiper-item a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.swiper-item img {
  width: 100%;
  height: 100%;
}
</style>
