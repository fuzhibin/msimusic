import { createRouter, createWebHistory } from 'vue-router'
//发现音乐
const FindMusic = ()=>import('views/findmusic/FindMusic.vue')
const PersonalityRecommend = ()=>import('views/findmusic/components/PersonalityRecommend')
const SongSheet= ()=>import('views/findmusic/components/SongSheet');
//视频
const Video = ()=>import('views/video/Video')
const routes = [{
  path:'',
  redirect:'/findmusic'
},{
  path:'/findmusic',
  component:FindMusic,
  redirect: '/findmusic/personalityrecommend',
  children:[{
    path: 'personalityrecommend',
    component:PersonalityRecommend
  },{
    path: 'songSheet',
    component:SongSheet
  }]
},{
  path:'/video',
  component:Video
}]

const router = createRouter({

  history: createWebHistory(),
  routes
})

export default router
