<template>
<div class="tabbar">
  <ul>
    <li v-for="(item,index) in itemName"
        @click="tabItemClic(index)"
        :class="{active:currentIndex === index}">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "TabBar",
  data(){
    return{
      itemName:['发现音乐','视频','朋友','直播','私人FM'],
      currentIndex:0
    }
  },
  methods:{
    tabItemClic(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.tabbar {
  width: 250px;
  height: 100%;
  min-width: 200px;
  border-right: 2px solid #E1E1E1;
}
.tabbar ul {
  padding: 10px 15px 0 15px;
  height: calc(100vh - 70px)
}
.tabbar li {
  padding-left: 10px;
  font-size: 17px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  margin-bottom: 4px;
}
.tabbar li:hover {
  background-color: #F6F6F7;
}
.tabbar .active {
  font-weight: 700;
  background-color: #F6F6F7;
}
</style>
