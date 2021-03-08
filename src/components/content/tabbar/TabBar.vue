<template>
<div class="tabbar">
  <ul>
    <li v-for="(item,index) in itemName"
        @click="tabItemClic(index)"
        :class="{active:currentIndex === index}">{{item.title}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "TabBar",
  data(){
    return{
      itemName:[{
        title:'发现音乐',
        path:'/findmusic'
      },{
        title:'MV',
        path:'/video'
      }],
    //   , {
    //   title:'朋友',
    //   path:'/friend'
    // }, {
    //   title:'直播',
    //   path: '/livebroadcast'
    // }, {
    //   title:'私人FM',
    //   path: 'myfm'
    // }
      currentIndex:0
    }
  },
  methods:{
    tabItemClic(index){
      this.currentIndex = index;
      this.$router.replace(this.itemName[index].path);
    }
  }
}
</script>

<style scoped>
.tabbar {
  width: 175px;
  height: 100%;
  min-width:175px;
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
  cursor: pointer;
}
.tabbar li:hover {
  background-color: #F6F6F7;
}
.tabbar .active {
  font-weight: 700;
  background-color: #F6F6F7;
}
</style>
