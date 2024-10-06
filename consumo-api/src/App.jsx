import React, { useEffect, useState } from "react";

const App = () => {
  const result = fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return (
    <div className="body">
      <h2>teste</h2>
      <p>title: {result.title}</p>
      <p>description: {result.description}</p>
    </div>
  );
};

export default App;
