<template>
  <li class="swiper-li"><slot></slot></li>
</template>

<script>
export default {
  name: "SwiperItem"
}
</script>

<style>
.swiper-li img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.swiper-li {
  position: absolute;
  width: 200px;
  height: 100%;
  left: 200px;
  transition-duration: 1s;
}

</style>
