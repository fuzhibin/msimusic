<template>
  <div class="find-recommend">
  </div>
</template>

<script>
import {getMusicList} from "@/network/findmusic";

export default {
  name: "PersonalityRecommend",
  data() {
    return {
      list: null
    }
  },
  created() {
    getMusicList().then(res => {
    })
  },
  components: {}
}
</script>

<style scoped>
.find-recommend {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

</style>
