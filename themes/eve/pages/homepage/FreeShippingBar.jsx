import React from "react";
import "./FreeShippingBar.scss";

function FreeShippingBar() {
  return (
    <div className="page-width -translate-y-20 z-50">
      <div className="grid  grid-cols-2 md:grid-cols-4 text-center  my-3">
        <div className="m-2 rounded border-divider overflow-hidden">
          {/* <h2>Free Shipping</h2>
          <p>Get Free Shipping on all orders over $75.</p> */}
          <img src="/index/tab1.jpg" className="rounded zoom-image" alt="Free Shipping" />
        </div>
        <div className="m-2 rounded border-divider overflow-hidden">
          {/* <h2>Best Price</h2>
          <p>We offer the best prices on all our products.</p> */}
          <img src="/index/tab2.jpg" className="rounded zoom-image" alt="Free Shipping" />
        </div>
        <div className="m-2 rounded border-divider overflow-hidden">
          {/* <h2>Great Service</h2>
          <p>Our customer service is available 24/7.</p> */}
          <img src="/index/tab3.jpg" className="rounded zoom-image" alt="Free Shipping" />
        </div>
        <div className="m-2 rounded border-divider overflow-hidden">
          {/* <h2>Great Service</h2>
          <p>Our customer service is available 24/7.</p> */}
          <img src="/index/tab4.jpg" className="rounded zoom-image" alt="Free Shipping" />
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
