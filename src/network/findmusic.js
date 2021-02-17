import {request} from "@/network/request";
//主页
export function getMusicList(){
  return request({
    url:'/homepage/block/page'
  })
}
//歌手（分类检索）,全部歌手
export function getSingerInfo(type,area,offset){
  return request({
    url:'/artist/list',
    params:{
      type,
      area,
      offset
    }
  })
}
//请求新歌
export function getNewSongs(type){
  return request({
    url:'/top/song',
    params:{
      type
    }
  })
}
//获取歌单 ( 网友精选碟 )
export function getSongList(offset,cat=''){
  return request({
    url:'/top/playlist',
    params:{
      offset,
      cat
    }
  })
}
//歌单上方分类  /playlist/catlist
export function getPlayCat(){
  return request({
    url:'/playlist/catlist',

  })
}
//获取歌单详情
export function getSheetDetail(id){
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}
