import React from "react";

function Logo() {
  return (
    <div className="items-center flex justify-center  ">
      <a href="/">
        <img src="/eve.svg" alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 1,
};
