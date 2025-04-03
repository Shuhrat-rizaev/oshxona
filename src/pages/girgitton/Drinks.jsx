import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { drinks } from "../../constants";
const Drinks = () => {
  const [drinks, setDrinks] = useState(
    drinks.map((item) => ({ ...item, count: 0 }))
  );

  const incr = (i) => {
    setDrinks((prevList) =>
      prevList.map((item, index) =>
        index === i ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decr = (i) => {
    setDrinks((prevList) =>
      prevList.map((item, index) =>
        index === i && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {drinks.map((item, i) => (
        <div key={i} className="rounded-lg shadow-2xl p-3">
          <img
            src={item.image} // TO'G'RILANDI
            alt={item.name}
            className="w-full h-32 object-contain"
          />
          <p className="text-center mt-2 text-2xl font-semibold">{item.name}</p>
          <div className="flex justify-center gap-3 items-center mt-2">
            <Button icon={<MinusOutlined />} onClick={() => decr(i)} />
            <span className="text-2xl font-semibold">{item.count}</span>
            <Button icon={<PlusOutlined />} onClick={() => incr(i)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
