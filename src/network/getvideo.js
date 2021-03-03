import {request} from "./request";

export function getVideoTitle() {
  return request({
    url: '/video/group/list'
  })
}

export function getAllVideo() {
  return request({
    url: '/video/timeline/all'
  })
}
//推荐mv
///personalized/mv
export function getRecommendMv(){
  return request({
    url:'/personalized/mv'
  })
}

///mv/exclusive/rcmd
//网易出品mv
export function getWYRcmdMV(offset = 8) {
  return request({
    url: '/mv/exclusive/rcmd',
    params: {
      offset
    }
  })
}

///mv/url
//mv 地址
export function getMvUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}

//最新MV
export function getNewsVideo(limit=8) {
  return request({
    url: '/mv/first',
    params: {
      limit
    }
  })
}

//mv详情/mv/detail
export function getVideoDeatil(mvid){
  return request({
    url:'/mv/detail',
    params:{
      mvid
    }
  })
}
