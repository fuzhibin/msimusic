<template>
  <div class="swiper">
    <div class="box-contain">
      <div class="container" ref="container">
        <slot></slot>
        <i class="pre_icon">&lt;</i>
        <i class="next_icon">&gt;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      items: [],
      itemLength: 0,
    }
  },
  mounted() {
    this.items.push(...this.$refs.container.querySelectorAll('.swiper-item'));
    this.itemLength = this.items.length
    console.log(this.itemLength);
    for (let i = 0; i < this.itemLength; i++) {
      this.items[i].style.zIndex = i;
      this.items[i].className = 'swiper-item other'
    }
    this.items[this.itemLength - 1].className = 'swiper-item right';
    this.items[this.itemLength - 2].className = 'swiper-item center';
    this.items[this.itemLength - 2].style.zIndex = this.itemLength + 1;
    this.items[this.itemLength - 3].className = 'swiper-item left';
    setInterval(this.next_carousel, 5000)
  },
  methods: {
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

<style scoped>
.swiper {
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