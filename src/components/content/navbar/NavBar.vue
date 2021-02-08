<template>
  <div class="navbar">
    <div class="logo">
      <img src="~assets/img/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  height: 75px;
  background-color: #EC4141;
}
.logo {
  height: 100%;
  width: 250px;
  text-align: center;
  padding: 8px 35px;
}
.logo img {
  width: 100%;
  height: 100%;

}
</style>
