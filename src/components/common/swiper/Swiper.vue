<template>
  <div class="swiper" ref="swiper">
    <ul class="swiper-ul"
        @mouseleave="hideSmallIcon"
        @mouseenter="showSmallIcon">
      <slot></slot>
    </ul>
    <i class="left">&lt;</i>
    <i class="right">&gt;</i>
  </div>
</template>

<script >
export default {
  name: "Swiper",
  props:{
    swp_duration:{
      type:Number
    }
  },
  data() {
    return {
      i:[],
      lis:[],
      ul:{},
      timer:null,
      pr_li:[]
    }
  },
  mounted() {
    this.handleDom();
    this.get_pre();
    this.timer = setInterval(()=>{
      this.get_pre();
    },this.swp_duration=3000);
  },
  methods: {
    handleDom(){
      this.ul = this.$refs.swiper;
      this.i = this.$refs.swiper.querySelectorAll('.swiper i');
      this.lis.push(...this.ul.querySelectorAll('li'));
    },
    hideSmallIcon(){
      this.i[0].style.display = 'none'
      this.i[1].style.display = 'none'
      this.timer = setInterval(this.get_pre, this.swp_duration=3000)
    },
    showSmallIcon(){
      this.i[0].style.display = 'block'
      this.i[1].style.display = 'block'
      clearInterval(this.timer);
    },
    get_pre() {
      this.pr_li= this.lis[0];
      this.lis.shift();
      this.lis.push(this.pr_li);
      for (let i = 0; i < this.lis.length; i++) {
        this.lis[i].style.zIndex = this.lis.length - i;
        this.lis[i].style.left = '150px'
        this.lis[i].style.transform = 'scale(1)';
      }
      this.init();
    },
    init() {
      this.lis[0].style.left = '0px';
      this.lis[1].style.left = '150px'
      this.lis[1].style.zIndex = 20;
      this.lis[1].style.transform = 'scale(1.3)';
      this.lis[2].style.left = '350px'
    }
  }
}
</script>

<style scoped>
.swiper {
  position: relative;
  z-index: 1000;
  height: 150px;
}
.swiper ul {

  width: 100%;
  height: 100%;
}
.swiper i {
  display: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  z-index: 999;
  text-align: center;
  color: #fff;
  font-size: 25px;
  line-height: 50px;
  transition: 0.5s;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, .3);
}

.swiper i:nth-of-type(1) {
  left: 20px;
}

.swiper i:nth-of-type(2) {
  right: 20px;
}
</style>
