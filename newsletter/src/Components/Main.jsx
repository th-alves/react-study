import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Main() {
  return (
    <main className=" md:flex items-center justify-center h-screen">
      <div className="bg-white rounded-3xl md:p-5 md:pl-10 md:w-[700px] flex md:flex-row flex-col-reverse  items-center gap-5">
        <LeftSide />
        <RightSide />
      </div>
    </main>
  );
}

export default Main;
