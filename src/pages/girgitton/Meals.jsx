import { Button } from "antd";
import { clints, drink, meal, salat } from "../../constants";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../store/OrderSlice";
import { useParams } from "react-router-dom";

const Meals = () => {
  const selector = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(selector);

  // OVQATLAR
  const [mealsList, setMealsList] = useState(
    meal.map((item) => ({ ...item, count: 0 }))
  );
  const incr = (i) => {
    setMealsList((oldingi) =>
      oldingi.map((item, idx) => {
        return i == idx ? { ...item, count: item?.count + 1 } : item;
      })
    );
  };
  const decr = (i) => {
    setMealsList((oldingi) =>
      oldingi.map((item, idx) =>
        idx === i && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  // ICHIMLIKLAR
  const [drinkList, setDrinkList] = useState(
    drink.map((item) => ({ ...item, count: 0 }))
  );
  const incrs = (i) => {
    setDrinkList((oldingi) =>
      oldingi.map((item, idx) => {
        return i == idx ? { ...item, count: item?.count + 1 } : item;
      })
    );
  };

  const decrs = (i) => {
    setDrinkList((oldingi) =>
      oldingi.map((item, idx) => {
        return i == idx ? { ...item, count: item?.count - 1 } : item;
      })
    );
  };

  // SALATLAR

  const [saltlist, setSalatList] = useState(
    salat.map((item) => ({ ...item, count: 0 }))
  );
  const incs = (i) => {
    setSalatList((oldingi) =>
      oldingi.map((item, idx) => {
        return i == idx ? { ...item, count: item?.count + 1 } : item;
      })
    );
  };

  const decs = (i) => {
    setSalatList((oldingi) =>
      oldingi.map((item, idx) => {
        return i == idx ? { ...item, count: item?.count - 1 } : item;
      })
    );
  };

  const setCar = () => {
    const filteredMeals = mealsList.filter((item) => item.count > 0);
    const filteredDrinks = drinkList.filter((item) => item.count > 0);
    const filteredSalats = saltlist.filter((item) => item.count > 0);

    const allOrders = [...filteredMeals, ...filteredDrinks, ...filteredSalats];

    dispatch(
      setOrder({
        client: params?.client_id,
        orders: allOrders,
      })
    );
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

      {drinkList.map((item, i) => (
        <div key={i} className="rounded-lg shadow-2xl p-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-contain"
          />
          <p className="text-center mt-2 text-2xl font-semibold">{item.name}</p>
          <div className="flex justify-center gap-3 items-center mt-2">
            <Button icon={<MinusOutlined />} onClick={() => decrs(i)} />
            <span className="text-2xl font-semibold">{item.count}</span>
            <Button icon={<PlusOutlined />} onClick={() => incrs(i)} />
          </div>
        </div>
      ))}

      {saltlist.map((item, i) => (
        <div key={i} className="rounded-lg shadow-2xl p-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-contain"
          />
          <p className="text-center mt-2 text-2xl font-semibold">{item.name}</p>
          <div className="flex justify-center gap-3 items-center mt-2">
            <Button icon={<MinusOutlined />} onClick={() => decs(i)} />
            <span className="text-2xl font-semibold">{item.count}</span>
            <Button icon={<PlusOutlined />} onClick={() => incs(i)} />
          </div>
        </div>
      ))}
      <div className="col-span-4 flex justify-center mt-5 mb-5 ">
        <Button
          type="primary"
          disabled={
            !(
              mealsList.some((i) => i.count > 0) ||
              drinkList.some((i) => i.count > 0) ||
              saltlist.some((i) => i.count > 0)
            )
          }
          onClick={setCar}
          className="flex items-center justify-center px-30 py-4 text-lg"
        >
        Tastiqlash
        </Button>
      </div>
    </div>
  );
};

export default Meals;
