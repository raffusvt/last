import React from "react";
import Search from "./Search";
import Users from "./Users"; 
function Left() {
  return (
    <div className="w-[30%] bg-gray-900 text-gray-300">
      <h1 className="font-bold text-3xl p-2 px-11 flex">
        <img src="yu.png" alt="logo" className="h-12" />YUChats</h1>
    {/* <div className="w-full   bg-black text-gray-300"> */}
      <Search />
      <div
        className=" flex-1 my-8 overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
   
    </div>
  
  );
}

export default Left;
