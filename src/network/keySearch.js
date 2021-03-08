import {request} from "./request";
export function keySearchInfo(keywords){
  return request({
    url:'/search',
    params:{
      keywords
    }
  })
}
export function searchMultimatch(keywords){
  return request({
    url:'/search/multimatch',
    params:{
      keywords
    }
  })
}
