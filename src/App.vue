<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main">
      <tab-bar></tab-bar>
      <div class="main-right">
        <router-view/>
      </div>
    </div>
  </div>

</template>
<script>
import NavBar from "components/content/navbar/NavBar";
import TabBar from "components/content/tabbar/TabBar";
export default {
  name:'App',
  components:{
    NavBar,
    TabBar
  }

}
</script>

<style>
@import "assets/css/init.css";

.main {
  display: flex;
  height: 100%;
}
.main-right {
  flex: 1;
}


</style>
