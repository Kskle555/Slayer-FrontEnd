import logo from './logo.svg';
import './App.css';
import AddAnime from './Components/AdminPanel/AddAnime/AddAnime'
import Navbar from "./Components/Navbar/Navbar"
import Carousell from "./Components/Carousel/Carousell"
import Cardd from './Components/Card/Cardd';
import Footerr from './Components/Footerr.js/Footerr';
import Anime from './Components/WatchAnime/Anime';
import Details from './Components/AnimeDetails/Details';
import Paginationn from './Components/Pagination/Paginationn';
import Login from './Components/Login/Login';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import Recruitment from './Components/Recruitment/Recruitment';
import Search from './Components/Search/Search';
import Searchapi from './Components/Search/Searchapi';
import Navbar2 from './Components/AdminPanel/SideNavbar/Navbar2';
import Selector from './Components/AdminPanel/DeleteAnime/Selector';

function App() {
  return (
    <Routes> 
    <Route path="/" element={<> <Navbar/> <Carousell/> <Cardd/><Paginationn/><Footerr/> </>}/>
    <Route path="/anime" element={<><Navbar/><Anime/><Footerr/></>}/>
   <Route path="/Details" element={<><Navbar/><Details/><Footerr/></>}/>
   <Route path="/Details" element={<><Navbar/><Details/><Footerr/></>}/>
   <Route path="/Login" element={<><Navbar/><Login/><Footerr/></> }/>
   <Route path="/SignUp" element={<><Navbar/><SignUp/><Footerr/></>}/>
   <Route path="/Ekip-alimlari" element={<><Navbar/><Recruitment/><Footerr/></>}/>
   <Route path="/Search" element={<><Navbar/><Search/><Footerr/></>}/>
   <Route path="/Api" element={<><Navbar/><Searchapi/><Footerr/></>}/>
   <Route path="/Animeler" element={<><Navbar/><Search/><Footerr/></>}/>
   <Route path="/Panel" element={<><Navbar2/></>}/>
   <Route path="/AddAnime" element={<><Navbar2/><AddAnime/></> }/>
   <Route path="/DeleteAnime" element={<><Navbar2/><Selector/></> }/>

 </Routes>
  );
}

export default App;
