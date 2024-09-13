'use client'

import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";

import handleSearch from "@/functions/handleSearch";

export default function NavBar() {
  return (
    <div className="bg-black text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center justify-between h-24 ">          
            <Image
              src="/marvelLogo.jpg"
              alt="Marvel Logo"
              className=" h-20 w-auto mt-16 z-10 mr-4"
              width={200}
              height={100}
            />         

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <input
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                className="pl-4 pr-10 py-1 w-full bg-white text-black focus:outline-none"
                placeholder="look for your favorite character"
              />             
            </div>
            <button className=" inset-y-0 right-0 flex items-center pr-3">
                <SlMagnifier className="h-6 w-6 ml-2" />
              </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-zinc-300">Comics favoritos</div>
            <div className="text-zinc-300">Usuario</div>
            <div className="h-8 w-8 rounded-full bg-zinc-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
