<template>
  <div class="nav-sort">
    <div class="highquality"><span ref="title1" @click="titleClic">{{title}}</span>
    <div class="small-title">
      <span v-for="(item,index) in smallList" @click="sortClick(item.name,index)" :class="{active:index===currentIndex}">{{item.name}}</span>
    </div>
    </div>
    <div class="nav-sort-box" v-show="isShow">
      <div class="box-hd">
        <span>{{title}}</span>
      </div>
      <div class="box-bd">
        <span v-for="(item,index) in catList" @click="sortClick(item.name,index)">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavSort",
  props: {
    titleNav:{
      type:String,
      default:'全部音乐'
    },
    catList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed:{
    smallList(){
      return this.catList&& this.catList.slice(0,10);
    }
  },
  data() {
    return {
      isShow:false,
      title:this.titleNav,
      currentIndex:11
    }
  },
  methods: {
    titleClic(){
      this.isShow=!this.isShow;
    },
    sortClick(name,index) {
      this.title = name;
      this.currentIndex=index;
      this.$emit('sortId', name);
      if(this.isShow){
        setTimeout(this.titleClic,500)
      }
    },
  }
}
</script>

<style scoped>
.small-title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  font-size: 10px;
}
.small-title span {
  margin-left: 5px;
  padding: 3px;
  border-radius: 5px;
}
.small-title .active {
  background-color: pink;
}
.nav-sort {
  position: relative;
}

.highquality {
  position: relative;
  font-size: 13px;
  font-weight: 700;
  line-height: 26px;
  color: rgba(0, 0, 0, .7);
  cursor: pointer;
}

.highquality>span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #F9E7D9;
  border: 2px solid #9B9B9B;
  margin-left: 10px;
}

.nav-sort-box {
  position: absolute;
  top: 40px;
  margin-top: 10px;

  background-color: rgba(243, 243, 243, 0.7);
  border-radius: 5px;
}

.box-hd {
  padding: 10px;
  border-bottom: 2px solid #F6F6F7;
}

.box-hd span {
  display: inline-block;
  padding: 10px 15px;
  background-color: #F9E7D9;
  font-weight: 500;
  border-radius: 10px;
  color: rgba(221, 0, 27, 1);
}

.box-bd {
  padding: 10px;
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.box-bd span {
  width: 18%;
  margin-top: 5px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
}

.box-bd span:hover {
  background-color: #F9E7D9;
}
</style>
