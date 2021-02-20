/***
 * 模拟代码
 */

/***
 * 模拟刚打开页面播放控制栏有音乐
 */

import {request} from "@/network/request";

const songerId=[12174057,5781,3684,2216,861777,12174057,5781,3684,2216,861777];
const index=Math.floor(Math.random()*10);;
export function getOneSong(){
  return request({
    url:'/artists',
   params:{
     id:songerId[index]
   }
  })
}


