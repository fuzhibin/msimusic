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
