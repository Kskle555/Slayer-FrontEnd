import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
  return (
	
	<nav className="w-full bg-white shadow">
	<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
		<div>
			<div className="flex items-center justify-between py-3 md:py-5 md:block">
				<a href="javascript:void(0)">
					<Link to="/"><h2 className="text-2xl font-bold">LOGO</h2></Link>
				</a>
				<div className="md:hidden">
					<button
						className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
						onClick={() => setNavbar(!navbar)}
					>
						{navbar ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
		</div>
		<div>
			<div
				className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
					navbar ? "block" : "hidden"
				}`}
			>
				<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
					<li className="text-gray-600 hover:text-blue-600">
					<Link to="/"><a href="javascript:void(0)">Anasayfa</a></Link>
					</li>
					<li className="text-gray-600 hover:text-blue-600">
					<Link to="/Animeler"><a href="javascript:void(0)">Animeler</a></Link>
					</li>
					<li className="text-gray-600 hover:text-blue-600">
						<Link to="/Ekip-alimlari"><a href="javascript:void(0)">Ekip Alımları</a></Link>
					</li>
					<li className="text-gray-600 hover:text-blue-600">
						<a href="javascript:void(0)">İletişim</a>
					</li>
					<li className="text-black">
					<Link to="/Login"><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button></Link>
					</li>
					<li className="text-black">
					<Link to="/SignUp"><button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign İn</button></Link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
</nav>
);
}

  


export default Navbar;
