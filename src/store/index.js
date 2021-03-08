import { createStore } from 'vuex'

export default createStore({
  state: {
    audioInfo:{},
    //搜索记录的保存
    searchRecords:['薛之谦','你走','富士山下','清空','起风了','消愁','爸爸妈妈'],
    //controlBar显示的标记状态
    ctlBarShow:true
  },
  getters:{
    //获取searchRecords的长度
    getRecordsLength(state){
      return state.searchRecords.length;
    },
    //从searchRecords中获取最后搜索的十条记录
    getLastRecords(state,getters){
     return function (value=getters.getRecordsLength){
        return  state.searchRecords.slice(0,value)
     }
    }
  },
  mutations: {
    changeCtlBarShow(state){
      state.ctlBarShow=!state.ctlBarShow;

    },
    //删除一条搜索记录
    deleteOneSearchRecord(state,value){
      state.searchRecords.splice(value ,1 );
    },
    //将一次搜索记录的保存 更新searchRecords的内容
    addSearchRecords(state,value){
      state.searchRecords.unshift(value);
    },

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
