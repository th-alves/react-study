import React from "react";
import CheckList from "./CheckList";
import InputField from "./InputField";

function LeftSide() {
  return (
    <section className="text-slate_gray px-5 md:px-0">
      <h1 className="font-bold md:text-4xl text-3xl">Stay updated!</h1>
      <p className="mt-4">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="mt-4 text-sm">
        <CheckList text={"Product discovery and building what matters"} />
        <CheckList text={"Measuring to ensure updates are a success"} />
        <CheckList text={"And much more!"} />
      </ul>

      <InputField />
    </section>
  );
}

export default LeftSide;
