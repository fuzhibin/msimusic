<template>
  <div class="new-song-nav">
    <span v-for="(item,index) in newSort"
          :class="{active:newSortIndex===index}"
          @click="newSortClic(index)">{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: "NewSongNav",
  data() {
    return {
      newSort: [{name: '全部', area: 0}, {name: '华语', area: 7},
        {name: '欧美', area: 96}, {name: '日本', area: 8},
        {name: '韩国', area: 16}],
      newSortIndex:0
    }
  },
  methods:{
    newSortClic(index){
      this.newSortIndex=index;
      this.$emit('newSongIndex',this.newSort[index].area);
    }
  }
}
</script>

<style scoped>
.new-song-nav {
  font-size: 15px;
  line-height: 20px;
  margin: 10px;
}
.new-song-nav span {
  padding: 0 5px;
  cursor: pointer;
  margin-right: 4px;
}

.new-song-nav .active {
  font-size: 16px;
  font-weight: 700;
}
</style>
