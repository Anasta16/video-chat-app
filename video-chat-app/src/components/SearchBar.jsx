import React, { useState } from 'react';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar() {

    const [searchInput, setSearchInput] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    // if (searchInput.length > 0) {
    //     bars.filter((bar) => {
    //         return bar.name.match(searchInput);
    //     })
    // }

  return (
    <div
        className="
            flex
        "
    >
        <input 
            type="text"
            placeholder="Search here..."
            onChange={handleChange}
            value={searchInput}
            className="
                w-full
                bg-white
                text-black
                px-7
                py-3
                text-sm
                font-medium
                uppercase
                rounded
                shadow-md
                hover:bg-gray-300
                transition duration-150 ease-in-out
                hover:shadow-lg
                active:bg-gray-300
                sm:w-80
                pt-1
                pb-1
            "
            
        />
        <div
            className="
                bg-black
                w-20
                rounded
                text-2xl
            "
        >
            <HiOutlineMagnifyingGlass 
                className="
                    text-white
                    w-full
                    text-2xl
                "
            />
        </div>
    </div>
  )
}
