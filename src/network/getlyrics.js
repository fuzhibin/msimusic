import {request} from "@/network/request";
export function getIyrics(id){
  return request({
    url:'/lyric',
    params:{
      id
    }
  })
}
