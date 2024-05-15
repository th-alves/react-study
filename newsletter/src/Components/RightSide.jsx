import React from "react";
import DesktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import MobileImage from "../assets/images/illustration-sign-up-mobile.svg";

function RightSide() {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={DesktopImage}
        type="image/png"
      />
      <img
        src={MobileImage}
        alt="Illustration signup image"
        className="w-[430px]"
      />
    </picture>
  );
}

export default RightSide;
