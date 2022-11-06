import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import swal from 'sweetalert';
const Selector = () => {
  const [animes, setAnimes] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7127/api/Default")
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data);
      });
  }, []);
    const alert =()=>{
      swal({
        title: "Tebrikler!",
        text: "Anime Başarıyla Silindi!",
        icon: "success",
        button: "Kapat!",
      });
    }
  return (
    <div className="flex mt-2 justify-center">
    <div className="w-72 origin-center  font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-emerald-700 w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Anime"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Anime name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {animes?.map((anime) => (
          <li
            key={anime?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              anime?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              anime?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (anime?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(anime?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {anime?.name}
          </li>
        ))}
      </ul>
      <p>{selected} Gerçekten silmek istiyor musunuz ?</p>
      <button onClick={alert} className="bg-red-700 ml-24 text-white font-semibold rounded-full w-24">Anime Sil</button>
    </div>
  
    </div>
  );
};

export default Selector;