import React from "react";
import ChecklistIcon from "../assets/images/icon-list.svg";

function CheckList({ text }) {
  return (
    <li className="flex items-center gap-2 mb-2">
      <img src={ChecklistIcon} alt="" />
      {text}
    </li>
  );
}

export default CheckList;
