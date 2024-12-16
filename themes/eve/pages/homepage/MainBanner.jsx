import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width items-center grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left px-2 order-2 md:order-1 ">
          {/* <span className="font-bold  text-6xl mt-10
          lg:text-8xl lg:leading-[1.8] my-4 bg-clip-text text-transparent bg-gradient-to-r 
            from-[var(--c-yellow-2)] to-[var(--c-green-1)] md:to-[var(--c-yellow-2)] md:from-[var(--c-green-1)]">
              Knfapp</span> */}
          <h2 className="lg:text-6xl text-white font-bold">Unleash Your Inner Style Icon</h2>
          <p className="lg:text-3xl text-white">Discover the Latest Trends and Elevate Your Wardrobe Today</p>
          <a className="button mx-2 button-primary" href="#">
            立即购买
          </a>
          <a className="button mx-2 button-primary" href="#">
            使用教程
          </a>
        </div>
        {/* <div className="order-1 flex relative md:order-2 items-center  justify-center">
          <div className="image-bg  absolute inset-0 rounded-full
                          bg-[image:var(--hero-background-image)]  
                          blur-3xl 
                          ">
                          </div>
          <img className="aspect-w-4 aspect-h-3 object-cover relative z-30" width={400} src="/home.png" alt=""/>
        </div> */}
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
