import {createRouter, createWebHistory} from 'vue-router'
//发现音乐
const FindMusic = () => import('views/findmusic/FindMusic.vue')
const PersonalityRecommend = () => import('views/findmusic/components/PersonalityRecommend')
const SongSheet = () => import('views/findmusic/components/SongSheet');
const Singer = () => import('views/findmusic/components/Singer')
const NewSong = () => import('views/findmusic/components/NewSong')
//视频
const Video = () => import('views/video/Video')

//音乐详情页面
const MusicDetail = ()=>import('views/musicdetail/MusicDetail')

const routes = [{
  path: '',
  redirect: '/findmusic'
}, {
  path: '/findmusic',
  component: FindMusic,
  redirect: '/findmusic/personalityrecommend',
  children: [{
    path: 'personalityrecommend',
    component: PersonalityRecommend
  }, {
    path: 'songSheet',
    component: SongSheet
  }, {
    path: 'singer',
    component: Singer
  },{
    path: 'newsong',
    component: NewSong
  }]
}, {
  path: '/video',
  component: Video
},{
  path: '/musicdetail',
  component: MusicDetail

}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
