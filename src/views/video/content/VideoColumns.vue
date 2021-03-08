<template>
<div>
  <div class="head-title">
    <h2>{{listTitle}}</h2>
    <div class="sort-box" v-if="isShow">
      <div>地区：<span v-for="item in adress"
                    :class="{active:item===itemSelect.adress}"
                    @click="spanClic('adress',item)">{{item}}</span></div>
      <div>类型：<span v-for="item in types"
                    :class="{active:item===itemSelect.type}"
                    @click="spanClic('type',item)">{{item}}</span></div>
      <div>排序：<span v-for="item in ordination"
                    :class="{active:item===itemSelect.ordination}"
                    @click="spanClic('ordination',item)">{{item}}</span></div>
    </div>
  </div>
  <video-list :video-list="sectionList"/>
</div>
</template>

<script>
import VideoList from "components/content/videoList/VideoList";
export default {
  name: "VideoColumns",
  components: {VideoList},
  data(){
    return {
      adress:['全部','内地','港台','欧美','日本','韩国'],
      types:['全部','官方版','原生','现场版','网易出品'],
      ordination:['上升最快','最热','最新'],
      itemSelect:{
        adress:'全部',
        type:'全部',
        ordination:'上升最快'
      }
    }
  },
  props:{
    isShow:{
      type:Boolean,
      default:false
    },
    listTitle:{
      type:String,
      default:''
    },
    videoList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
    sectionList(){
      if(this.isShow){
        return this.videoList
      }
      return this.videoList && this.videoList.slice(0,8);
    }
  },
  methods:{
    spanClic(name,item){
      this.itemSelect[name]=item;
      this.$emit('sortChange',this.itemSelect);
    }
  }
}
</script>

<style scoped>
.head-title {
  position: relative;
  height: 50px;
  padding-right: 25px;
}
.head-title h2 {
  padding-left: 25px;
 line-height: 50px;
}
.sort-box {
  position: absolute;
  font-size: 12px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.sort-box span {
  margin-right: 10px;
  line-height: 20px;
  border-radius: 5px;
}
.active {
  background-color: pink;
}
</style>
