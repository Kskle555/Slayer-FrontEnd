import React from 'react'
import { useState, useEffect } from 'react';
export default function Search() {
    const [profileData, setprofileData] = useState([
        {
            name: "Brian Kernighan",
            bio: "brian@test.com",
           
        },
        {
            name: "Max Kanat-Alexander",
            bio: "max@test.com",
           
        },
        {
            name: "Spruce Emmanuel",
            bio: "new@test.com",
          
        },
        {
            name: "Spruce Emmanuel",
            bio: "new@test.com",
          
        },
        {
            name: "Spruce Emmanuel",
            bio: "new@test.com",
          
        },
        {
            name: "Spruce Emmanuel",
            bio: "new@test.com",
          
        },
        {
            name: "Spruce Emmanuel",
            bio: "new@test.com",
          
        },
        {
            name: "Oğuz",
            bio: "new@test.com",
          
        }
    ]);
    const [q, setQ] = useState("");
    const [searchTerm] = useState(["bio", "name"]);

    function search(items) {
        return items.filter((item) => {
            return searchTerm.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
  return (
    <div className="bg-slate-600 w-full">
        <div className=" flex pt-1 
                    items-center justify-center">
        <input className="w-80 h-9 text-center rounded-full bg-lime-200 "
                    type="text"
                    placeholder="search..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                </div>
<div className="flex justify-center pt-4 space-y-0.5   space-x-0.5  flex-wrap ">
                {search(profileData).map((val, key) => {
                    return (
                        <div className="flex flex-wrap justify-center" key={key}>
                             <img className="w-[225px] h-[328px]" src='https://cdn.myanimelist.net/images/anime/1806/126216.jpg'></img>
                             <div className="w-96 h-[326px] break-words  space-x-0.5  overflow-x-auto  bg-teal-500">
                             <h1 className="text-center text-2xl text-white">{val.name}</h1>
                            <p className="text-white">{val.bio}</p>
                                </div>
                                {/* {val.skills.map((skill) => {
                                return <p>{skill}</p>;
                            })} */}
                        </div>
                    );
                })}
</div>
</div>
  )
}
