<template>
  <div class="swiper">
    <div class="box-contain"
         @mouseleave="swiperLeave"
         @mouseenter="swiperEnter">
      <div class="container" ref="container">
        <slot></slot>
      </div>
      <i class="pre_icon" @click="pre_carousel" ref="icon1">&lt;</i>
      <i class="next_icon" @click="next_carousel" ref="icon2">&gt;</i>
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
    this.itemLength = this.items.length;
    for (let i = 0; i < this.itemLength; i++) {
      this.items[i].style.zIndex = i;
      this.items[i].className = 'swiper-item other'
    }
    this.items[this.itemLength - 1].className = 'swiper-item right';
    this.items[this.itemLength - 2].className = 'swiper-item center';
    this.items[this.itemLength - 2].style.zIndex = this.itemLength ;
    this.items[this.itemLength - 3].className = 'swiper-item left';
    this.timer=setInterval(()=>{
      this.next_carousel()
    }, this.swiperDelay);
  },
  methods: {
    swiperLeave(){
      this.$refs.icon1.style.display='none'
      this.$refs.icon2.style.display='none'
      this.timer= setInterval(()=>{
        this.next_carousel()
      }, this.swiperDelay);
    },
    swiperEnter(){
      clearInterval(this.timer);
      this.$refs.icon1.style.display='block'
      this.$refs.icon2.style.display='block'
    },
    pre_carousel(){
      const last_item = this.items.shift();
      this.items.push(last_item);
      for (let i = 0; i < this.itemLength; i++) {
        this.items[i].style.zIndex =i;
        this.items[i].className = 'swiper-item other'
      }
      this.items[this.itemLength - 1].className = 'swiper-item right';
      this.items[this.itemLength - 2].className = 'swiper-item center';
      this.items[this.itemLength - 2].style.zIndex = this.itemLength;
      this.items[this.itemLength - 3].className = 'swiper-item left';
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
      this.items[this.itemLength - 2].style.zIndex = this.itemLength;
      this.items[this.itemLength - 3].className = 'swiper-item left';
    }
  }
}
</script>

<style>
.swiper {
  height: 200px;
}
.container {
  position: absolute;
  width: 500px;
  height: 200px;
  margin:auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.box-contain {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.container .left {
  left: -200px;
}
.container .center {
  transform: scale(1.3);
  left: 0px;
}
.container .right {
  left: 200px;
}
.container .other {
  left: 0px;
}
.pre_icon,
.next_icon{
  display: none;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-style: normal;
  position: absolute;
  z-index: 14;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,.4);
  color: #fff;
}
.pre_icon {
  left: 100px;
}
.next_icon{
  right: 100px;
}

</style>
