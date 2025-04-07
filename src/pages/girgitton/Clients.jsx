import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/images/images.png";
import { Button, Empty } from "antd";
import { deleteOrder } from "../../store/OrderSlice";
const Clients = () => {
  const [order, setOrder] = useState();
  const [orderId, setOrderID] = useState();
  const [orderSum, setOrderSum] = useState(0);
  const selector = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const getOrder = (id) => {
    let finded_order = selector.value?.find((item) => item?.client == id);
    let order_sum = finded_order?.orders.reduce((sum, item) => {
      console.log(item);
      return sum + item?.price * item?.count;
    }, 0);

    setOrder(finded_order.orders);
    setOrderSum(order_sum);
    setOrderID(id);
  };

  const deleteOrderHandle = () => {
    console.log(orderId);
    dispatch(deleteOrder({ client_id: orderId }));
    setOrder(null);
    setOrderSum(null);
  };

  return (
    <div className="container mx-auto w-[85%]">
      <div className="grid grid-cols-3 gap-x-5">
        <ul className="col-span-1 border-r-2 border-gray-400">
          {selector?.value.map((item) => (
            <li
              key={item.client}
              onClick={() => getOrder(item?.client)}
              className="cursor-pointer"
            >
              <img src={img} alt="" className="w-36" />
              {item.client}
            </li>
          ))}
        </ul>
        <div className="col-span-2">
          {order?.length > 0 ? (
            <div className="bg-gray-200 min-h-20 p-5 rounded-2xl flex flex-col gap-y-5 ">
              {order?.map((item, i) => (
                <div key={i} className="flex gap-x-5 ">
                  <img src={item.image} alt="" className="w-45 rounded-2xl" />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>Soni:{item.count}</p>
                  </div>
                </div>
              ))}

              <p>Umumiy narxi:{orderSum}</p>
              <Button
                onClick={() => {
                  deleteOrderHandle();
                }}
              >
                Yakunlash
              </Button>
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};
export default Clients;
