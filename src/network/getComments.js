import {request} from "@/network/request";


//获取单首歌的评论
export function getMusicComments(id,offset=0){
  return request({
    url:'/comment/music',
    params:{
      id,
      offset
    }
  })
}
//获取MV的评论
export function getMvComments(id,offset=0){
  return request({
    url:'/comment/mv',
    params:{
      id,
      offset
    }
  })
}
