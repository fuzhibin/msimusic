<template>
  <div class="mv" ref="mv">
    <video-columns :video-list="myList" list-title="网页MV"/>
    <video-columns :video-list="newList" list-title="最新MV"/>
    <video-columns :video-list="allMvList"
                   @sortChange="sortChange"
                   list-title="全部MV"
                   :is-show="true"/>
    <div class="all-mv">

    </div>
  </div>
</template>

<script>
import {getWYRcmdMV, getNewsVideo ,getAllVideo} from "network/getvideo";
import VideoColumns from "../content/VideoColumns";

export default {
  name: "MV",
  data() {
    return {
      myList: [],
      newList: [],
      allMvList:[],
      offset:0,
      flag:true,
      itemSelect:{
        adress:'全部',
        type:'全部',
        ordination:'上升最快'
      }

    }
  },
  components: {VideoColumns},
  mounted() {
    //监听网页滚动
    const page = this.$refs.mv;
    page.addEventListener('scroll', ()=>{
      if(this.flag){
        if (page.scrollTop + page.offsetHeight >= page.scrollHeight-10){
          this.flag=false;
          console.log('loadmore');
          this.getAllVideoList(this.itemSelect.adress,this.itemSelect.type,this.itemSelect.ordination,this.offset*20)

        }
      }
    })
  },
  created() {

    //网易推荐
    getWYRcmdMV().then(res => {
      this.myList = res.data
    })
    //最新Mv
    getNewsVideo().then(res => {
      this.newList = res.data
    })
    //全部mv
    this.getAllVideoList();
  },
  methods:{
    getAllVideoList(area='全部',type='全部',order='上升最快', offset=0){
      getAllVideo(area,type,order, offset).then(res => {
        this.offset++;
        this.allMvList.push(...res.data);
        this.flag=true;
      })
    },
    sortChange(playload){
      this.allMvList=[];
      this.itemSelect=playload;
      this.getAllVideoList(playload.adress,playload.type,playload.ordination);
      this.offset=0;
    }
  }

}
</script>

<style scoped>
.mv {
  width: 100%;
  height: calc(100vh - 70px - 70px - 40px);
  overflow-y: scroll;
}
</style>
