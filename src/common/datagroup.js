export class AudioInfo{
  constructor(data,newInfoShow,from='') {
    this.musicId = data.id;
    this.musicActive=false;
    this.musicUrl= data.url;
    this.imgUrl = newInfoShow.album.picUrl;
    this.musicName=newInfoShow.name;
    this.musicAlias=newInfoShow.alias[0];
    this.musicCurrentTime=0;
    this.musicFrom=from;
    this.musicAutor=newInfoShow.artists[0].name;
    this.musicAllTime=newInfoShow.duration;
    this.musicIyrics=[];
  }
}
