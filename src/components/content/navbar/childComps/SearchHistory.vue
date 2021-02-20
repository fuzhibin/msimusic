<template>
  <div class="search-history">
    <div class="search-title">
      <h5>搜索历史 <i @click="">&#xe615;</i></h5>
     <span class="search-delete" >
        <span @click="showAll=!showAll">查看全部历史记录</span>
     </span>
    </div>
    <div class="search-body">
      <span v-for="(item,index) in searchHistorys">{{item}}
        <span class="item-delete" @click.stop="itemDelete(index)">x</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "SearchHistory",
  data(){
    return{
      showAll:false
    }
  },
  computed:{
    searchHistorys(){
      if(this.showAll){
        return this.$store.getters.getLastRecords()
      }else{
        return this.$store.getters.getLastRecords(7);
      }
    }
  },
  methods:{
    itemDelete(index){
      this.$store.commit('deleteOneSearchRecord',index)
    }
  }
}
</script>

<style scoped>
.search-history {
  padding-left: 12px;
}
.search-title {
  position: relative;
}
.search-delete {
  position: absolute;
  font-size: 13px;
  color: #CFCFCF;
  top: 10px;
  right: 20px;
}
.search-title i {
  font-size: 17px;
  font-family:'iconfont';
  color: #373737;
}
.search-title h5{
  line-height: 40px;
}

.search-body>span {
  position: relative;
  display:inline-block;
  border-radius: 22px;
  height: 22px;
  font-size: 12px;
  box-sizing: content-box;
  line-height:22px;
  border: 2px solid #CFCFCF;
  padding: 0 12px;
  margin:0 8px 10px 6px;
}
.item-delete {
  position: absolute;
  display: none;
  top: 0;
  font-size: 13px;
  right: 4px;
}
.search-body>span:hover .item-delete {
  display: block;
}
.search-history span:hover {
  background-color: #F2F3F3;
}
</style>
