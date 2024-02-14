import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {

    const [pageState, setPageState] = useState("Log In");

    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPageState("Profile")
            } else {
                setPageState("Log In");
            }
        });
    }, [auth]);

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

  return (
    <div
        className="
            bg-green-400
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
                <h1
                    className="
                        cursor-pointer
                        text-blue-500
                        hover:text-blue-700
                        active:text-blue-800
                        transition duration-150 ease-in-out
                        font-extrabold
                        text-red-500
                    "
                    onClick={() => navigate("/")}
                >
                    Drinko (first draft)
                </h1>
            </div>
            <SearchBar />
            <div>
            {/* <div>
                <select
                    value="Search"
                >
                    <option
                            className={`
                                cursor-pointer
                                py-3 
                                text-sm 
                                font-semibold
                                text-black
                                border-b-[3px]
                                ${pathMatchRoute("/") && " text-black border-b-red-500"}
                            `}
                            onClick={() => navigate("/")}
                        >
                            Home
                        </option>
                        <option
                            className={`
                                cursor-pointer
                                py-3 
                                text-sm 
                                font-semibold
                                text-black
                                border-b-[3px]
                                ${pathMatchRoute("/explore-chats") && " text-black border-b-red-500"}
                            `}
                            onClick={() => navigate("/explore-chats")}
                            >
                                Explore Chats
                        </option>
                        <option
                            className={`
                                cursor-pointer
                                py-3 
                                text-sm 
                                font-semibold
                                text-black
                                border-b-[3px]
                                ${pathMatchRoute("/about") && " text-black border-b-red-500"}
                            `}
                            onClick={() => navigate("/about")}
                        >
                            About
                        </option>
                        <option
                            className={`
                                cursor-pointer
                                py-3 
                                text-sm 
                                font-semibold
                                text-black
                                border-b-[3px]
                                ${pathMatchRoute("/log-in") && " text-black border-b-red-500"}
                            `}
                            onClick={() => navigate("/log-in")}
                        >
                            Log In
                        </option>
                </select>
            </div> */}
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
                            text-black
                            border-b-[3px]
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
                            text-black
                            border-b-[3px]
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
                            text-black
                            border-b-[3px]
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
                            text-black
                            border-b-[3px]
                            ${(pathMatchRoute("/log-in") || pathMatchRoute("/profile")) && " text-black border-b-red-500"}
                        `}
                        onClick={() => navigate("/profile")}
                    >
                        {pageState}
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
