import React from "react";
import osh from "../assets/images/osh.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container w-[85%] mx-auto">
      <div className="flex justify-between items-center py-2">
        <div className="logo">
          <img src={osh} alt="osh" className="w-20 h-20 object-contain" />
        </div>

        <Link to={"/clients"}>
          <Button>Buyurtmalar</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
