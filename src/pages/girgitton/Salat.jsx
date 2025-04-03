import { salat } from "../../constants";
import React, { useState } from "react";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
const Salat = () => {
  const [mealsList, setMealsList] = useState(
    mealsList.map((item) => ({ ...item, count: 0 }))
  );

  const incr = (i) => {
    setMealsList((prevList) =>
      prevList.map((item, index) =>
        index === i ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decr = (i) => {
    setMealsList((prevList) =>
      prevList.map((item, index) =>
        index === i && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };
  return (
    <div className="grid grid-cols-4 gap-3">
      {mealsList.map((item, i) => (
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

export default Salat;
