import { createStore } from 'vuex'

export default createStore({
  state: {
    audioInfo:{},
  },
  mutations: {

    //修改controlBar的内容<当前已选音乐的信息>
    updateAudioInfo(state,value){
      state.audioInfo=value;
    },
    //当前已选音乐的信息的播放状态
    updateAudioAction(state){
      state.audioInfo.musicActive=!state.audioInfo.musicActive;
    }

  },
  actions: {
  },
  modules: {
  }
})
