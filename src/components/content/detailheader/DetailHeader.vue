<template>
<div class="detail-header">
  <div class="left">
    <img v-lazy="detailHeader.coverImgUrl" alt="">
  </div>
  <div class="center">
    <h2>{{detailHeader.name}}</h2>
    <div class="tags-name">标签：<span v-for="item in detailHeader.tags"><a href="javascript:;" >{{item}}</a></span></div>
  </div>
  <div class="right">
      <pre>{{detailHeader.description}}</pre>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailHeader",
  props:{
    detailHeader:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-header {
  display: flex;
  padding: 40px 50px 40px 0;
}
.left {
  width: 300px;
  text-align: center;

}
.left img {
  width: 225px;
  height: 225px;
  border-radius: 10px;
}
.center {
  width: 350px;
  min-width: 320px;
}
.tags-name {
  color: #373737;
  font-size: 14px;
  margin-top: 8px;
}
.tags-name span a{
  color: #507DB6 !important;
  margin: 0 4px;
}
.right {
  width: 310px;
  min-width: 300px;
  height: 100%;

}
.right pre {
  margin-top: 30px;
  white-space: pre-wrap;
}
</style>
