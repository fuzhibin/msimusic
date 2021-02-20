<template>
  <div class="hot-search">
    <h4>热搜榜</h4>
    <div class="item" v-for="(item,index) in searchHot" @mouseenter="getsearchWords(item.searchWord)">
      <div class="rank-num">{{index+1}}</div>
      <div class="content">
        <div class="content-hd">
          <span>{{item.searchWord}}</span>
          <img :src="item.iconUrl" v-if="item.iconUrl" alt="">
          <i>{{item.score}}</i>
        </div>
        <div class="content-bd">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotSearch",
  props: {
    searchHot: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    getsearchWords(words){
      this.$emit('changeSearchWord',words)
    }
  }
}
</script>

<style scoped>
.content-bd {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-search {
  padding:0 15px 0 5px;
}
.content-hd {
  margin-top: 3px;
}

.content-hd img {
  vertical-align: middle;
  width: 16px;
  height: 12px;
  margin-left: 20px;
}

.content-hd span {
  font-weight: 600;
  font-size: 14px;
}

.content-hd i {
  margin-left:8px;
  font-size: 12px;
  color: #ccc;
}

.item {
  height: 50px;
  display: flex;
  margin: 5px 0 3px;
}
.item:nth-of-type(odd){
  background-color: #F6F6F7;
}
.content {
  flex: 1;
}

.rank-num {
  text-align: center;
  width: 50px;
  line-height: 50px;
  height: 100%;
  color: #EC4141;
}
h4 {
  padding-left: 15px;
}
</style>
