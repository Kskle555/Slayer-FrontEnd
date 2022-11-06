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
            "https://localhost:7127/api/Default");
          setPosts(response.data);
          setLoading(false);
        };
    
        loadPosts();
      }, []);
  return (
    <div className="App">
    <h3>Search Filter</h3>
    <input
      style={{ width: "30%", height: "25px" }}
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTitle(e.target.value)}
    />
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
        .map((item) => <h5 key={item.id}>{item.name}</h5>)
    )}
  </div>
  )
}
