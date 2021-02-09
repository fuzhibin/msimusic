import {request} from "@/network/request";
//主页
export function getMusicList(){
  return request({
    url:'/homepage/block/page'
  })
}
//歌手（分类检索）,全部歌手
export function getSingerInfo(type,area){
  return request({
    url:'/artist/list',
    params:{
      type,
      area,
    }
  })
}
export function getNewSongs(type){
  return request({
    url:'/top/song',
    params:{
      type
    }
  })
}
