import { useParams } from "react-router-dom";
import img from "../../assets/images/images.png";
import { Tabs } from "antd";
import Meals from "./Meals";

const Menu = () => {
  const item = [
    {
      key: "1",
      label: "ovqatlar",
      children: <Meals />,
    },
  ];

  const params = useParams();

  return (
    <div className="container mx-auto w-[85%]">
      <span className="flex gap-3 items-center">
        <img src={img} alt="" className="w-20 h-20" />
        <span className=" text-2xl font-semibold">{params.client_id}</span>
      </span>
      <Tabs items={item} />
    </div>
  );
};

export default Menu;
