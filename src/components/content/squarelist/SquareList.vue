<template>
<div class="square-list">
  <square-list-item v-for="item in squareList"
                    :square-info="item"></square-list-item>
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
    }
  },
  components:{
    SquareListItem
  }

}
</script>

<style scoped>
.square-list {
  margin-top: 10px;
  overflow: hidden;
}
</style>
