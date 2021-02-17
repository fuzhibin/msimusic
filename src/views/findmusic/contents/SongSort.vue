<template>
  <div class="song-sort">
    <div class="highquality"><span ref="title1" @click="titleClic">{{title}}</span>
    </div>
    <div class="song-sort-box" v-show="isShow">
      <div class="box-hd">
        <span>{{title}}</span>
      </div>
      <div class="box-bd">
        <span v-for="item in catList" @click="sortClick(item.name)" >{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongSort",
  props: {
    catList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isShow:false,
      title:'全部音乐'
    }
  },
  methods: {
    titleClic(){
      this.isShow=!this.isShow;
    },
    sortClick(name) {
      this.title = name;
      this.$emit('sortId', name);
      setTimeout(this.titleClic,500)
    },

  }
}
</script>

<style scoped>
.song-sort {
  position: relative;
}

.highquality {
  font-size: 13px;
  font-weight: 700;
  line-height: 26px;
  color: rgba(0, 0, 0, .7);
  cursor: pointer;
}

.highquality span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #F9E7D9;
  border: 2px solid #9B9B9B;
}

.highquality span {
  margin-left: 10px;
}

.song-sort-box {
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
