import {createRouter, createWebHistory} from 'vue-router'
//发现音乐
const FindMusic = () => import('views/findmusic/FindMusic')
const PersonalityRecommend = () => import('views/findmusic/components/PersonalityRecommend')
const SongSheet = () => import('views/findmusic/components/SongSheet');
const Singer = () => import('views/findmusic/components/Singer')
const NewSong = () => import('views/findmusic/components/NewSong')
//排行榜
const LeaderBoard = ()=> import('views/findmusic/components/LeaderBoard')
//视频
const Video = () => import('views/video/Video')

//音乐详情页面
const MusicDetail = ()=>import('views/musicdetail/MusicDetail')

//歌单详情页
const SongSheetDetail = () => import('views/sheetdetail/SongSheetDetail')

//
const SongerDetail = () => import('views/songerdetail/SongerDetail')
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
    path: 'leaderboard',
    component: LeaderBoard
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

},{
  path: '/sheetdetail',
  component: SongSheetDetail

},{
  path: '/songerdetail',
  component: SongerDetail

}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
