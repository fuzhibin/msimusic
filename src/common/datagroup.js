export class AudioInfo{
  constructor(data,newInfoShow,from='') {
    this.musicId = data.id;
    this.musicActive=false;
    this.musicUrl= data.url;
    this.imgUrl = newInfoShow.picUrl;
    this.musicName=newInfoShow.name;
    this.musicAlias=newInfoShow.alias;
    this.musicCurrentTime=0;
    this.musicFrom=from;
    this.musicAutor=newInfoShow.artists;
    this.musicAllTime=newInfoShow.duration;
    this.musicIyrics=[];
  }
}
//vue同种一个组件在不同的地方如入对象，
// 展示里边的数据在同一个地方，
// 但属性名不同时的处理
export class MusicInfo {
  constructor(picUrl,name,alias,artists,duration) {
    this.picUrl=picUrl;
    this.name=name;
    this.alias=alias;
    this.artists=artists;
    this.duration=duration;
  }
}
