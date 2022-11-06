import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Anime() {
    const [video,setvideo] = useState("");
    const [Okru, setokru] = useState("");
    const [Hdvid, setHdvid] = useState("");
    const [CloudVideo,setCloudVideo] = useState("");
    const [Mailru,setMailru] = useState("");
    const okru = () => {
      setvideo("//odnoklassniki.ru/videoembed/4303071218419")
      }
const hdvid = () =>{
    setvideo("https://hdvid.tv/embed-87aa1uvp70sq.html")
}

const cloudvideo = ()=>{
    setvideo("https://cloudvideo.tv/embed-bzyaw3lggxtx.html")
}

const mailru = ()=>{
    setvideo("https://my.mail.ru/video/embed/7763587926541206333")
}
  return (
    
    <div className="bg-black w-full relative">
      <div class="flex flex-wrap">
  <div class="justify-start"><iframe className=" max-w-full aspect-video" height="740" width="100%"  src={video} frameborder="0" allow="autoplay" allowfullscreen ></iframe>
  </div>
  <div class="ml-32"><img className="h-[250px] w-[220px]" src="https://static.zerochan.net/BERSERK.%28Kentaro.Miura%29.full.1276592.jpg"></img>
<p className="text-white text-2xl">Berserk Golden Age</p>
<Link to="/Details"><button className="bg-red-500 ml-16  text-white">Animeye Git</button></Link>

<hr className='mt-1'/>
<div class="flex flex-col h-60 overflow-scroll">
  <div className="text-white"><a href="#">1.Bölüm</a></div>
  <div className="text-white"><a href="#">2.Bölüm</a></div>
  <div className="text-white"><a href="#">3.Bölüm</a></div>
  <div className="text-white"><a href="#">4.Bölüm</a></div>
  <div className="text-white"><a href="#">5.Bölüm</a></div>
  <div className="text-white"><a href="#">6.Bölüm</a></div>
  <div className="text-white"><a href="#">7.Bölüm</a></div>
  <div className="text-white"><a href="#">8.Bölüm</a></div>
  <div className="text-white"><a href="#">9.Bölüm</a></div>
  <div className="text-white"><a href="#">10.Bölüm</a></div>
  <div className="text-white"><a href="#">11.Bölüm</a></div>
  <div className="text-white"><a href="#">12.Bölüm</a></div>
  <div className="text-white"><a href="#">13.Bölüm Final</a></div>
</div>
</div>
</div>
<div className="bg-slate-600 w-[1316px] space-x-2 max-w-full">
<button class="rounded border-solid bg-slate-600 text-white" onClick={okru}>Odnoklassniki</button>
<button class="rounded border-solid bg-slate-600 text-white" onClick={hdvid}>HDVID</button>
<button class="rounded border-solid bg-slate-600 text-white" onClick={cloudvideo}>CloudVideo</button>
<button class="rounded border-solid bg-slate-600 text-white" onClick={mailru}>Mail.ru</button>
<button class="rounded border-solid bg-slate-600 text-white">Odnoklassniki</button>
</div>

    </div>
  )
}

