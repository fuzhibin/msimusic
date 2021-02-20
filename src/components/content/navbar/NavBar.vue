<template>
  <div class="navbar">
    <div class="logo">
      <img src="~assets/img/logo.png" alt="">
    </div>
    <div class="go-to">
      <span @click="backClic">&lt;</span>
      <span @click="forwardClic">&gt;</span>
    </div>
    <div class="search">
      <i>
        <input type="text" placeholder="搜索" ref="searchIpt"
               @keyup.enter="searchClic"
               @focus="listShow"
               @blur="listHide">
        <span @click="searchClic"></span>
      </i>
      <div class="search-list" v-show="isShow" @mouseover="isShow2=false" @mouseout="listMouseLeave">
        <div class="search-list-contain" >
          <search-history/>
          <hot-search :search-hot="searchHot" @changeSearchWord="changeSearchWord"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHistory from "@/components/content/navbar/childComps/SearchHistory";
import HotSearch from "@/components/content/navbar/childComps/HotSearch";
//热搜列表(详细)
import {getSearchHot} from "@/network/musicurl";

export default {
  name: "NavBar",
  components: {SearchHistory,HotSearch},
  data(){
    return {
      isShow:false,
      isShow2:true,
      searchHot:[]
    }
  },
  created() {
    getSearchHot().then(res => {
      console.log(res);
      this.searchHot=res.data;
    })
  },
  methods: {
    listHide(){
      if(this.isShow2 && this.isShow){
        this.isShow=false
      }
    },
    listMouseLeave(){
      this.isShow2=true;
      this.$refs.searchIpt.focus();
    },
    changeSearchWord(value){
      this.$refs.searchIpt.value=value;
    },
    searchClic(){
      console.log('搜索ing......');
      console.log('进入搜索结果展示页面......');
      //把搜索词存入vuex
      const searchIpt=this.$refs.searchIpt;
      this.$store.commit('addSearchRecords',searchIpt.value);
      console.log('提交成功');
    },
    listShow(){
      this.isShow=true;
    },
    backClic() {
      this.$router.back()
    },
    forwardClic() {
      this.$router.forward()
    }
  }
}
</script>

<style scoped>
.search-list {
  position: absolute;
  top: 50px;
  left: -50px;
  width: 350px;
  height: 370px;
  z-index: 1;
  border-radius: 10px;
  border: 2px solid #999999;
  background-color: #fff;
  overflow: hidden;
}
.search-list-contain {
  width: 370px;
  height: 100%;
  overflow-y: scroll;
}

.search {
  position: relative;
}
.search i {
  position: absolute;
  top: 50%;
  width: 155px;
  transform: translateY(-50%);
  display: inline-block;
  overflow: hidden;
}
.search input {
  width: 130px;
  height: 25px;
  border: none;
  float: left;
  font-size: 12px;
  padding-left: 10px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
.search span {
  background-color: #fff;
  display: inline-block;
  width: 25px; float: left;
  height: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

.navbar {
  width: 100%;
  min-width: 100%;
  height: 70px;
  background-color: #EC4141;
  display: flex;
}

.logo {
  height: 100%;
  width: 250px;
  min-width: 250px;
  text-align: center;
  padding: 8px 35px;
}

.logo img {
  width: 100%;
  height: 100%;

}
.go-to {
  line-height: 70px;
}
.go-to span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 2px solid #C1C1C1;
  color: #F3F3F3;
  line-height: 16px;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
}
</style>
