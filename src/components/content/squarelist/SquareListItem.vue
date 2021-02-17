<template>
  <div class="square-list-item">
    <img v-lazy="getImgUrl" alt="" :key="squareInfo.id"  @click="lsitItemClic(squareInfo.id)">
    <div class="square-name">{{ squareInfo.name }}</div>
  </div>
</template>

<script>
export default {
  name: "SingerListItem",
  props: {
    squareInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    getImgUrl() {
      if (this.squareInfo.picUrl) {
        return this.squareInfo.picUrl;
      } else{
        return this.squareInfo.coverImgUrl;
      }
    }
  },
  methods:{
    lsitItemClic(id){
      this.$router.push({
        path:'/sheetdetail',
        query:{
          sheetId:id
        }
      })
    }
  }
}
</script>

<style scoped>
.square-list-item {
  float: left;
  margin: 0 20px;
  width: 200px;
  height: 250px;
  text-align: center;
}

.square-list-item img {
  width: 100%;
  height: 190px;
  border-radius: 10px;
  cursor: pointer;
}
.square-name {
  text-align: left;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
