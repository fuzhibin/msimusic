<template>
<div class="square-list">
  <square-list-item v-for="item in squareList"
                    @squareItemClic="squareItemClic"
                    :square-info="item"/>
</div>
</template>

<script>
import SquareListItem from "@/components/content/squarelist/SquareListItem";
export default {
  name: "SingerList",
  props:{
    squareList:{
      type:Array,
      default(){ return []}
    },
    isFlag: {
      type:Boolean,
      default:false
    }
  },
  components:{
    SquareListItem
  },
  methods: {
    squareItemClic(id){
      if (this.isFlag){
        console.log('跳转歌手详情页,歌手id：'+id)
        this.$router.push({
          path:'/songerdetail',
          query:{
            songerId:id
          }
        })
      }else {
        this.$router.push({
          path:'/sheetdetail',
          query:{
            sheetId:id
          }
        })
      }

    }
  }

}
</script>

<style scoped>
.square-list {
  margin-top: 10px;
  overflow: hidden;
}
</style>
