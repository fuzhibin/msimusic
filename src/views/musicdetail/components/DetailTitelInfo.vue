<template>
<div class="detail-title">
  <h2>{{musicName}}</h2>
  <div >
    <span class="name dot">专辑:<span>{{musicName}}</span></span>
    <span class="autor">歌手:<span>{{musicAutor}}</span></span>
    <span class="from">来源:<span>{{musicFrom}}</span></span>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailTitelInfo",
  data(){
    return {

    }
  },
 props:{
   musicName:{
     type:String,
     default:''
   },
   musicAutor:{
     type:String,
     default:''
   },
   musicFrom:{
     type:String,
     default:''
   }
 }
}
</script>

<style scoped>
.detail-title {
  font-size: 10px;
  margin-top: 15px;
}
.detail-title h2 {
  font-size: 25px;
  line-height: 50px;
  text-align: center;
}
.detail-title div {
  text-align: center;
}
.detail-title span {
  color: #507DAF;
}
.detail-title div>span {
  color: #666;
}
.name {
  display: inline-block;
  width: 70px;
  vertical-align: bottom;
}

.from {
  margin-left: 50px;
}
</style>
