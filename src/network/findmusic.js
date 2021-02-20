import {request} from "@/network/request";

//主页
export function getMusicList() {
  return request({
    url: '/homepage/block/page'
  })
}

//歌手（分类检索）,全部歌手
export function getSingerInfo(type, area, offset) {
  return request({
    url: '/artist/list',
    params: {
      type,
      area,
      offset
    }
  })
}

//获取歌手单曲
export function  getArtists(id){
  return request({
    url:'/artists',
    params:{
      id
    }
  })
}
//获取歌手 mv
export function getSongerMV(id){
  return request({
    url:'/artist/mv',
    params:{
      id
    }
  })
}

//获取歌手专辑
export function getSongerAlbum(id,offset=0){
  return request({
    url:'/artist/album',
    params:{
      id,
      offset
    }
  })
}
// 获取专辑内容 /album
export function getAlbumDet(id){
  return request({
    url:'/album',
    params:{
      id
    }
  })
}
//获取歌手详情
export function getSongerDetail(id){
  return request({
    url:'/artist/detail',
    params:{
      id
    }
  })
}
//获取相似歌手


//请求新歌
export function getNewSongs(type) {
  return request({
    url: '/top/song',
    params: {
      type
    }
  })
}

//获取歌单 ( 网友精选碟 )
export function getSongList(offset, cat = '') {
  return request({
    url: '/top/playlist',
    params: {
      offset,
      cat
    }
  })
}

//歌单上方分类  /playlist/catlist
export function getPlayCat() {
  return request({
    url: '/playlist/catlist',

  })
}

//获取歌单详情
export function getSheetDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
//推荐歌单  /personalized
export function getPersonalized(limit=10){
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}
