<template>
<div class="singer-list-item">
  <img v-lazy="singerInfo.picUrl" alt="">
  <div>{{singerInfo.name}}</div>
</div>
</template>

<script>
export default {
  name: "SingerListItem",
  props:{
    singerInfo:{
      type:Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.singer-list-item {
  float: left;
  margin: 0 20px;
  width: 200px;
  height: 250px;
  text-align: center;
}
.singer-list-item img {
  width: 100%;
  height: 190px;
  border-radius: 10px;
}
</style>
