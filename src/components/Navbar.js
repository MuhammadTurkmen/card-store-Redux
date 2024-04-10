import { CartIcon } from "../icons";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import React from "react";

const Navbar = () => {
  console.log(
    useSelector((store) => {
      console.log(store);
    })
  );
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
