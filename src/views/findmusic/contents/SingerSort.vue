<template>
<div class="singer-sort">
  <div class="language">
    语种：
    <span v-for="(item,index) in language"
          @click="languageClic(index)"
          :class="{active:languageIndex===index}">
      {{item.name}}
    </span>
  </div>
  <div class="classification">
    分类：
    <span v-for="(item,index) in classification"
          @click="classificatClic(index)"
          :class="{active:classificatIndex===index}">
      {{item.name}}
    </span>
  </div>
</div>
</template>
<script>
export default {
  name: "SingerSort",
  data(){
    return {
      language:[{name:'全部',area:-1},{name:'华语',area:7},
        {name:'欧美',area:96},{name:'日本',area:8},
        {name:'韩国',area:16},{name:'其他',area:0}],
      classification:[{name:'全部',area:-1},{name:'男歌手',area:1},
        {name:'女歌手',area:2},{name:'乐队组合',area:3}],
      languageIndex:0,
      classificatIndex:0
    }
  },
  methods:{
    languageClic(index){
      this.languageIndex=index;
      this.filterIndex();
    },
    classificatClic(index){
      this.classificatIndex=index;
      this.filterIndex();
    },
    filterIndex(){
      this.$emit('changeFilter',{
        language:this.language[this.languageIndex].area,
        classification:this.classification[this.classificatIndex].area
      })
    }
  }
}
</script>

<style scoped>
.singer-sort {
  font-size: 12px;
  line-height: 20px;
}
.classification {
  margin-top: 15px;
}
.singer-sort .active {
  background-color: pink;
}
.singer-sort span {
  display: inline-block;
  height:20px;
  border-radius: 5px;
  text-align: center;
  padding: 0 10px;
  cursor: pointer;
  margin-right: 5px;
}
</style>
