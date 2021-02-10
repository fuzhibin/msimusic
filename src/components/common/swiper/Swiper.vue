<template>
  <div class="swiper">
    <div class="box-contain"
         @mouseleave="swiperLeave"
         @mouseenter="swiperEnter">
      <div class="container" ref="container">
        <slot></slot>
        <i class="pre_icon" @click="pre_carousel">&lt;</i>
        <i class="next_icon" @click="next_carousel">&gt;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props:{
      swiperDelay:{
        type:Number,
        default:4000
      }
  },
  data() {
    return {
      items: [],
      itemLength: 0,
      timer:null
    }
  },
  mounted() {
    this.items.push(...this.$refs.container.querySelectorAll('div'));
    console.log(this.items);
    this.itemLength = this.items.length;
    for (let i = 0; i < this.itemLength; i++) {
      this.items[i].style.zIndex = i;
      this.items[i].className = 'swiper-item other'
    }
    this.items[this.itemLength - 1].className = 'swiper-item right';
    this.items[this.itemLength - 2].className = 'swiper-item center';
    this.items[this.itemLength - 2].style.zIndex = this.itemLength + 1;
    this.items[this.itemLength - 3].className = 'swiper-item left';
    this.timer=setInterval(this.next_carousel, this.swiperDelay);
  },
  methods: {
    swiperLeave(){
      clearInterval(this.timer);
    },
    swiperEnter(){
      setInterval(this.next_carousel, this.swiperDelay);
    },
    pre_carousel(){
      const last_item = this.items.shift();
      this.items.push(last_item);
      for (let i = 0; i < this.itemLength; i++) {
        this.items[i].style.zIndex = i;
        this.items[i].className = 'swiper-item other'
      }
      this.items[0].className = 'swiper-item right';
      this.items[1].className = 'swiper-item center';
      this.items[1].style.zIndex = this.itemLength + 1;
      this.items[2].className = 'swiper-item left';
    },
    next_carousel() {
      const last_item = this.items.pop();
      this.items.unshift(last_item);
      for (let i = 0; i < this.itemLength; i++) {
        this.items[i].style.zIndex = i;
        this.items[i].className = 'swiper-item other'
      }
      this.items[this.itemLength - 1].className = 'swiper-item right';
      this.items[this.itemLength - 2].className = 'swiper-item center';
      this.items[this.itemLength - 2].style.zIndex = this.itemLength + 1;
      this.items[this.itemLength - 3].className = 'swiper-item left';
    }
  }
}
</script>

<style>
.swiper {
  height: 200px;
  text-align: center;
}
.container {
  position: relative;
  width: 300px;
  height: 150px;
  margin:auto;
}
.box-contain {
  display: inline;
  cursor: pointer;
}
.container .left {
  left: -150px;
}
.container .center {
  transform: scale(1.3);
  left: 0px;
}
.container .right {
  left: 150px;
}
.container .other {
  left: 0px;
}
.pre_icon,
.next_icon{
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-style: normal;
  position: absolute;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,.4);
  color: #fff;
}
.pre_icon {
  left: -200px;
}
.next_icon{
  right: -200px;
}

</style>
