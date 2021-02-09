<template>
<div class="singer-list">
  <singer-list-item v-for="item in singerList" :singer-info="item"></singer-list-item>
</div>
</template>

<script>
import SingerListItem from "components/content/singerlist/SingerListItem";
export default {
  name: "SingerList",
  props:{
    singerList:{
      type:Array,
      default(){ return []}
    }
  },
  components:{
    SingerListItem
  },
  mounted() {
  }
}
</script>

<style scoped>
.singer-list {
  margin-top: 10px;
}
</style>
