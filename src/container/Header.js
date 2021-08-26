/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="mx-auto text-center mt-4 mb-3">
        <img
          className="logo-baucua"
          src="./images/logo-text.png"
          style={{
            filter: "drop-shadow(5px 5px 0px #00000054)",
          }}
        />
      </div>
    </div>
  );
}
