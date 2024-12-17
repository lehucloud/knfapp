
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <>
          <div className="header bg-transparent">
            <div className="page-width flex justify-between">
              <Logo />

              <div className="flex justify-end items-center mr-4 w-full"> 
                <div className="main-menu  hidden md:block">
                  <ul className="nav flex space-x-10 text-2xl font-blod justify-content-center">
                    {/* {items.map((i, index) => (
                      <li className="nav-item" key={index}>
                        <a className="nav-link hover:underline" href={i.url}>
                          {i.name}
                        </a>
                      </li>
                    ))} */}
                    <li className="nav-item">
                      <a className="nav-link hover:underline" href={"/"}>
                      首页
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link hover:underline" href={"/tickets"}>
                      车票
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link hover:underline" href={"/promotion"}>
                      推广
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link hover:underline" href={"/workorder"}>
                      工单
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Header;

// export const layout = {
//   areaId: "header",
//   sortOrder: 1,
// };

