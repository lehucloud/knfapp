import PropTypes from "prop-types";
import React from "react";

export default function Menu({ menu: { items } }) {
  return (
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
            <a className="nav-link hover:underline" href={"/page/tickets"}>
            车票
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover:underline" href={"/page/promotion"}>
            推广
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover:underline" href={"/page/submitWorkOrder"}>
            工单
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export const layout = {
  areaId: "header",
  sortOrder: 2,
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
