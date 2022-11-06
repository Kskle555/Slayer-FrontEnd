import React from 'react'
import {Card} from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Cardd() {
   const DUMMY_DATA = [
    {
       img: 'https://www.nautiljon.com/images/anime/00/47/hellsing_ultimate_174.jpg',
      title: 'Hellsing Ultimate',
      episode: "1.Bölüm"
     },
    {
       img: 'https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg',
      title: 'One Piece',
      episode: "2.Bölüm"
   },{
   img: 'https://c4.wallpaperflare.com/wallpaper/845/469/115/bleach-hollow-ichigo-ichigo-kurosaki-zangetsu-bleach-wallpaper-preview.jpg',
       title: 'Bleach',
       episode: "3.Bölüm"
     },{
       img: 'https://cdn.kayiprihtim.com/wp-content/uploads/2021/06/Fullmetal-Alchemist-758x403.jpg',
      title: 'Fullmetal Alchemist',
      episode: "4.Bölüm"
     },{
      img: 'https://m.media-amazon.com/images/I/518QZ4dfaML._AC_SY780_.jpg',
      title: 'Death Note',
      episode: "5.Bölüm"
    },
    {
      img: 'https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg',
      title: 'One Piece',
      episode: "123.Bölüm"
    },
    {
      img: 'https://m.media-amazon.com/images/I/518QZ4dfaML._AC_SY780_.jpg',
      title: 'Death Note',
      episode: "51.Bölüm"
    },
    {
      img: 'https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg',
      title: 'One Piece',
      episode: "61.Bölüm"
    },
    {
      img: 'https://m.media-amazon.com/images/I/518QZ4dfaML._AC_SY780_.jpg',
      title: 'Death Note',
      episode: "81.Bölüm"
    },{
      img: 'https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg',
      title: 'One Piece',
      episode: "51.Bölüm"
    },{
      img: 'https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg',
      title: 'One Piece',
      episode: "23.Bölüm"
    },
    {
      img: 'https://m.media-amazon.com/images/I/518QZ4dfaML._AC_SY780_.jpg',
      title: 'Death Note',
      episode: "81.Bölüm"
    },
    {
      img: 'https://m.media-amazon.com/images/I/518QZ4dfaML._AC_SY780_.jpg',
      title: 'Death Note',
      episode: "17.Bölüm"
    },
    {
      img:"https://c4.wallpaperflare.com/wallpaper/845/469/115/bleach-hollow-ichigo-ichigo-kurosaki-zangetsu-bleach-wallpaper-preview.jpg",
      title:"Naruto",
      episode:"327.Bölüm"
    },{
      img:"https://i.pinimg.com/originals/ec/3b/e5/ec3be5947ea6e04d527334dde99d9cd8.png",
      title:"Fairy Tail",
      episode:"125.Bölüm"
    },{
      img:"https://www.teahub.io/photos/full/179-1796740_full-hd-wallpaper-berserk.jpg",
      title:"Berserk",
      episode:"105.Bölüm"
    }, {
      img: 'https://www.nautiljon.com/images/anime/00/47/hellsing_ultimate_174.jpg',
     title: 'Hellsing Ultimate',
     episode:"15.Bölüm"
    },{
      img:"https://static.zerochan.net/BERSERK.%28Kentaro.Miura%29.full.1276592.jpg",
      title:"Berserk Golden Age",
      episode:"7.Bölüm"
    },
    {
      img:"https://static.zerochan.net/BERSERK.%28Kentaro.Miura%29.full.1276592.jpg",
      title:"Berserk Golden Age",
      episode:"7.Bölüm"
    },{
      img: 'https://www.nautiljon.com/images/anime/00/47/hellsing_ultimate_174.jpg',
     title: 'Hellsing Ultimate',
     episode:"15.Bölüm"
    },{
      img: 'https://m.media-amazon.com/images/I/518QZ4dfaML._AC_SY780_.jpg',
      title: 'Death Note',
      episode: "17.Bölüm"
    },{
      img:"https://i.pinimg.com/originals/ec/3b/e5/ec3be5947ea6e04d527334dde99d9cd8.png",
      title:"Fairy Tail",
      episode:"125.Bölüm"
    },
    {
      img: 'https://i.pinimg.com/originals/22/4a/77/224a775f80315460af88e759c753bb03.jpg',
      title: 'One Piece',
      episode: "61.Bölüm"
    },
    {
      img: 'https://cdn.kayiprihtim.com/wp-content/uploads/2021/06/Fullmetal-Alchemist-758x403.jpg',
     title: 'Fullmetal Alchemist',
     episode: "4.Bölüm"
    }, {
      img: 'https://www.nautiljon.com/images/anime/00/47/hellsing_ultimate_174.jpg',
     title: 'Hellsing Ultimate',
     episode: "1.Bölüm"
    },
    {
      img: 'https://www.nautiljon.com/images/anime/00/47/hellsing_ultimate_174.jpg',
     title: 'Hellsing Ultimate',
     episode: "1.Bölüm"
    },{
      img:"https://static.zerochan.net/BERSERK.%28Kentaro.Miura%29.full.1276592.jpg",
      title:"Berserk Golden Age",
      episode:"7.Bölüm"
    },
   ];
  return (
   <div className="pt-2 ">
    <div className="flex flex-wrap justify-center relative z-50 space-x-0.5 ">
      {DUMMY_DATA.map((deneme=>(
        <div>
        <Link to="/Anime"><img src={deneme.img} className="h-[250px] w-[190px]"></img></Link>
       <h1 className="text-center text-lg  w-[190px] bg-slate-600 text-white overflow-hidden hover:bg-purple-500 font-mono">{deneme.title}</h1>
        <p className="absolute z-0 bg-purple-500 w-20 -mt-[52px] text-center text-white ml-[110px] rounded ">{deneme.episode}</p>
    </div>
      )))}
    
    </div>
   </div>

  )
}
