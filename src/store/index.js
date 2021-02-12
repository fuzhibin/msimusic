import { createStore } from 'vuex'

export default createStore({
  state: {
    audioInfo:{},
  },
  getters:{
    // getAlyric(state) {
    //   return function (index) {
    //     return state.audioInfo.musicIyrics[index].time;
    //   }

  },
  mutations: {
    updataCurrentTime(state,value){
      state.audioInfo.musicCurrentTime=value;
    },
    //修改controlBar的内容<当前已选音乐的信息>
    updateAudioInfo(state,value){
      if(state.audioInfo.musicId!=value.musicId){
        state.audioInfo=value
      }
    },
    //当前已选音乐的信息的播放状态
    updateAudioAction(state){
      state.audioInfo.musicActive=!state.audioInfo.musicActive;
    },
    //更新已选音乐的歌词加入仓库
    updataIyrics(state,value){
      state.audioInfo.musicIyrics=value;
    }


  },
  actions: {
  },
  modules: {
  }
})
