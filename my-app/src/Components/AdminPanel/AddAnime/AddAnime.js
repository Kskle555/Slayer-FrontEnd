import React, { useState,useEffect } from 'react';
import axios from "axios";
function AddAnime() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [number,setnumber] = useState("");
  const apiEndPoint = "https://api.jikan.moe/v4/anime/" + number +"/full";
 
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  },);
   
  const sshowForm = () => {
    setShowForm(true);
  }
console.log(posts)
console.log(number)
  return (
    <div className="h-fit w-full bg-slate-500">
      <div className="flex pt-1 justify-center ">
        <input  type="number" placeholder='MyAnimeList ID giriniz.' className="rounded-full" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
        <button className="text-center pl-3 text-white font-normal text-xl " onClick={sshowForm}>Anime Getir</button>
        </div>
      {showForm && (
        <form className="grid mt-3 justify-center ">
          <input className="w-96 rounded" type="image" src={posts.data.images.jpg.image_url}></input><br/>
      <input className="w-96 rounded-full" type="text"  value={posts.data.title}></input><br/>
      <textarea className="rounded-sm h-28">{posts.data.synopsis}</textarea><br/>
      <input className="w-96 rounded-full " type="text" value={posts.data.year}></input><br/>
      <input className="w-96 rounded-full" type="text" value={posts.data.episodes}></input><br/>
      <input className="w-96 rounded-full" type="text" value={posts.data.status}></input>
        </form>
      )}
      <div className="flex justify-center pt-2 ">
      <button type="submit" className=" rounded-full text-center font w-28 bg-green-800 text-2xl text-white">Ekle</button>
      </div>
    </div>
  )
}
export default AddAnime;