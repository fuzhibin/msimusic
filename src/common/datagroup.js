export class AudioInfo{
  constructor(data,newInfoShow) {
    this.musicId = data.id;
    this.musicActive=false;
    this.musicUrl= data.url;
    this.imgUrl = newInfoShow.album.picUrl;
    this.musicName=newInfoShow.name;
    this.musicFrom=newInfoShow.alias[0];
    this.musicAutor=newInfoShow.artists[0].name;
    this.musicAllTime=newInfoShow.duration
  }
}
