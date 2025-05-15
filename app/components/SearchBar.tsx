"use client";

import {useState } from "react";
interface SearchBarProps{
    onSearch: (city: string)=> void;
}
export default function SearchBar({ onSearch}: SearchBarProps){
    const [city, setCity] = useState(" ");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city.trim()){
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md mx-auto mt-6 ">
            <input 
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter a city ...."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
                Search
            </button>
        </form>
    );
}