import {request} from "@/network/request";

//获取音乐url
export function getMusicUrl(id){
  return request({
    url:'/song/url',
    params:{
      id
    }
  })
}
//热搜列表(详细)
export function getSearchHot(){
  return request({
    url:'/search/hot/detail'
  })
}
//所有榜单
export function getAllTopList(){
  return request({
    url:'/toplist'
  })
}
