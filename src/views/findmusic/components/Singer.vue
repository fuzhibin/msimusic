<template>
  <div class="singer" ref="singer">
    <singer-sort @changeFilter="changeFilter"/>
    <square-list :square-list="singerList" :is-flag="true"></square-list>
    <div class="load-more"><span @click="loadMore">点击加载更多</span></div>
  </div>
</template>

<script>
import SingerSort from "views/findmusic/contents/SingerSort";
import {getSingerInfo} from "@/network/findmusic";
import SquareList from "@/components/content/squarelist/SquareList";

export default {
  name: "Songer",
  data() {
    return {
      singerList: [],
      childHeight: 0,
      type: -1,
      area: -1,
      page:0,
      offset: 0
    }
  },
  components: {
    SingerSort,
    SquareList
  },
  created() {
    this.getSingerInfos(this.type, this.area, this.offset);
  },
  methods: {
    getSingerInfos(type, area, offset) {
      getSingerInfo(type, area, offset).then(res => {
        console.log(res.artists);
        this.singerList.push(...res.artists)
      })
    },
    changeFilter(value) {
      this.singerList = [];
      this.offset = 0;
      this.type = value.classification;
      this.area = value.language;
      this.getSingerInfos(value.classification, value.language, this.offset);
    },
    loadMore() {
      console.log(this.offset)
      this.page ++;
      this.offset =this.page * 30;
      this.getSingerInfos(this.type, this.area, this.offset)
    }
  }
}
</script>

<style scoped>
.load-more {
  text-align: center;
  color: skyblue;
  font-size: 12px;
  cursor: pointer;
  height: 70px;
}

.singer {
  padding: 10px 25px 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
