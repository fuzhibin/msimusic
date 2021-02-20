<template>
  <div class="singer" ref="singer">
    <singer-sort @changeFilter="changeFilter"/>
    <square-list :square-list="singerList" :is-flag="true"></square-list>
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
      offset: 0,
      loadFinsh:false
    }
  },
  components: {
    SingerSort,
    SquareList
  },
  mounted() {
    const mySelfHeight = this.$refs.singer;
    //节流阀操作
    mySelfHeight.addEventListener("scroll", () => {
      if(this.loadFinsh){
        if (mySelfHeight.scrollTop + mySelfHeight.offsetHeight >= mySelfHeight.scrollHeight-10) {
          this.loadFinsh=false;
          this.loadMore();
        }
      }

    })
  },
  created() {
    this.getSingerInfos(this.type, this.area, this.offset);
  },
  methods: {
    getSingerInfos(type, area, offset) {
      getSingerInfo(type, area, offset).then(res => {
        this.singerList.push(...res.artists)
        this.loadFinsh=true
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

.singer {
  padding: 10px 25px 0;
  width: 100%;
  height: calc(100vh - 70px - 70px - 40px);
  overflow-y: scroll;
}
</style>
