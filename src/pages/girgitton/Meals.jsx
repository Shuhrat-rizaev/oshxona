import { Button } from "antd";
import { meal } from "../../constants";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const Meals = () => {
  const [mealsList, setMealsList] = useState(
    meal.map((item) => ({ ...item, count: 0 }))
  );

  const incr = (i) => {
    const current = [...mealsList];
    current[i].count += 1;
    setMealsList(current);
  };

  const decr = (i) => {
    const current = [...mealsList];
    if (current[i].count > 0) current[i].count -= 1;
    setMealsList(current);
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {mealsList.map((item, i) => (
        <div key={i} className="rounded-lg shadow-2xl p-3">
          <img
            src={item.image}
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
      {}
    </div>
  );
};

export default Meals;
