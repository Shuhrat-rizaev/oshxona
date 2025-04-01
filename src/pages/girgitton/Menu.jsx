import { useParams } from "react-router-dom";
import img from "../../assets/images/images.png";
import { Tabs } from "antd";
import Meals from "./Meals";

import Drinks from "./drinks";
import Salat from "./salat";

const Menu = () => {
  const item = [
    {
      key: "1",
      label: "ovqatlar",
      children: <Meals />,
    },
    {
      key: "2",
      label: "ichimliklar",
      children: <Drinks />,
    },
    {
      key: "3",
      label: "Salatlar",
      children: <Salat />,
    },
  ];

  const params = useParams();

  return (
    <div className="container mx-auto w-[85%]">
      <span className="flex gap-3 items-center">
        <img src={img} alt="" className="w-20 h-20" />
        <span className=" text-2xl font-semibold">{params.id}</span>
      </span>
      <Tabs items={item} />
    </div>
  );
};

export default Menu;
