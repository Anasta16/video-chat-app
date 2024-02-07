import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

  return (
    <div
        className="
            bg-white
            border-b
            shadow-sm
            sticky top-0
            z-50
        "
    >
        <header
            className="
                flex
                justify-between
                items-center
                px-3
                max-w-6xl
                mx-auto
            "
        >
            <div>
                {/* <img 
                    src={process.env.PUBLIC_URL + 'Chat.png'} 
                    alt="Example logo" 
                    className="
                        
                        w-full
                        cursor-pointer
                    "
                    onClick={() => navigate("/")}
                /> */}
                <h1
                    className="
                        cursor-pointer
                        text-blue-500
                        hover:text-blue-700
                        active:text-blue-800
                        transition duration-150 ease-in-out
                        font-extrabold
                    "
                    onClick={() => navigate("/")}
                >
                    Video Chat App (First Draft)
                </h1>
            </div>
            <div>
                <ul
                    className="
                        flex
                        space-x-10
                    "
                >
                    <li
                        className={`
                            cursor-pointer
                            py-3 
                            text-sm 
                            font-semibold
                            text-gray-400
                            border-b-[3px]
                            border-b-transparent
                            ${pathMatchRoute("/") && " text-black border-b-red-500"}
                        `}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </li>
                    <li
                        className={`
                            cursor-pointer
                            py-3 
                            text-sm 
                            font-semibold
                            text-gray-400
                            border-b-[3px]
                            border-b-transparent
                            ${pathMatchRoute("/explore-chats") && " text-black border-b-red-500"}
                        `}
                        onClick={() => navigate("/explore-chats")}
                    >
                        Explore Chats
                    </li>
                    <li
                        className={`
                            cursor-pointer
                            py-3 
                            text-sm 
                            font-semibold
                            text-gray-400
                            border-b-[3px]
                            border-b-transparent
                            ${pathMatchRoute("/about") && " text-black border-b-red-500"}
                        `}
                        onClick={() => navigate("/about")}
                    >
                        About
                    </li>
                    <li
                        className={`
                            cursor-pointer
                            py-3 
                            text-sm 
                            font-semibold
                            text-gray-400
                            border-b-[3px]
                            border-b-transparent
                            ${pathMatchRoute("/log-in") && " text-black border-b-red-500"}
                        `}
                        onClick={() => navigate("/log-in")}
                    >
                        Log In
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
