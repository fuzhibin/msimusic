import {getMusicUrl} from "@/network/musicurl";
import {AudioInfo} from "@/common/datagroup";
export const myMixin={
  methods: {
    //点击图片播放音乐
    transmitMusic(id) {
      getMusicUrl(id).then(res => {
        this.$store.commit('updateAudioInfo', new AudioInfo(res.data[0], this.musicInfo, '新歌速递'));
      })
    }
  }
}
