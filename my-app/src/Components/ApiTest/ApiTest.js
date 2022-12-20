import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
export default function Searchapi() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    useEffect(() => {
        const loadPosts = async () => {
          setLoading(true);
          const response = await axios.get(
            "https://localhost:7249/api/Home");
          setPosts(response.data);
          setLoading(false);
        };
    
        loadPosts();
      }, []);
  return (
    <div className="flex space-x-2 flex-wrap bg-slate-600 w-full">
       <div className=" flex pt-1 
                    items-center justify-center"></div>
    <div className=" flex pt-1 items-center justify-center">
    <input className="w-96 h-9 text-center rounded-full bg-lime-200 "
      style={{ width: "70%", height: "25px" }}
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTitle(e.target.value)}
    />
    </div>
    {loading ? (
      <h4>Loading ...</h4>
    ) : (
      posts
        .filter((value) => {
          if (searchTitle === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return value;
          }
        })
        .map((item) => <div className="flex justify-center  pt-4 space-y-0.5   space-x-0.5  " >
          <div className="flex flex-wrap justify-center" >
                             <img className="w-[225px] rounded-md h-[328px]" src='https://cdn.myanimelist.net/images/anime/1806/126216.jpg'></img>
                             <div className="w-96 rounded-md h-[326px] break-words  space-x-0.5  overflow-x-auto  bg-teal-500">
                             <h1 className="text-center text-2xl text-white">{item.name}</h1>
                            <p className="text-white">{item.description}</p>
                                </div>
                                {/* {val.skills.map((skill) => {
                                return <p>{skill}</p>;
                            })} */}
                        </div></div>)
    )}
  </div>
  )
}
