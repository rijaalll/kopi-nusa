import React, { useEffect, useState } from "react";

const OrderList = ({ menu, orders, onChange }) => {
  const [ showOrder, setShowOrder ] = useState(false);
  const getItem = (id) => menu.find((item) => item.id === id);

  const total = orders.reduce((sum, o) => {
    const item = getItem(o.id);
    return sum + (item?.harga || 0) * o.jumlah;
  }, 0);

  return (
    <div className={`w-full sm:w-[22%] h-auto bg-slate-200 sm:bg-transparent rounded-t-2xl sm:rounded-none fixed bottom-0 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:h-full sm:bg-transparentsm:py-0 py-4`}>
      <div className="w-full sm:w-full flex justify-center sm:justify-start">
        <div className="w-[85%] sm:w-full flex flex-col items-start gap-5">
          
          <div className="w-full flex justify-between items-center">
            <p id="order-title" className={`text-xl`}>{`Pesanan`}</p>
            <button onClick={() => setShowOrder(!showOrder)}>
              <span className={`${showOrder ? 'bi-chevron-down' : 'bi-chevron-up'} bi sm:hidden text-xl`}></span>
            </button>
          </div>
    
          {showOrder && orders.map((order) => {
            const item = getItem(order.id);
            return (
              <div key={order.id} className="sm:hidden w-full flex justify-between items-center border-b py-2">
                <div>
                  <p className="font-semibold">{item?.nama}</p>
                  <p className="text-sm text-gray-500">{`Jumlah:`} {order.jumlah}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => onChange(order.id, order.jumlah - 1)} className="px-2 bg-gray-300">{`-`}</button>
                  <button onClick={() => onChange(order.id, order.jumlah + 1)} className="px-2 bg-blue-300">{`+`}</button>
                </div>
              </div>
            );
          })}

          {orders.map((order) => {
            const item = getItem(order.id);
            return (
              <div key={order.id} className="w-full sm:flex justify-between items-center border-b py-2 hidden">
                <div>
                  <p className="font-semibold">{item?.nama}</p>
                  <p className="text-sm text-gray-500">Jumlah: {order.jumlah}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => onChange(order.id, order.jumlah - 1)} className="px-2 bg-gray-300">{`-`}</button>
                  <button onClick={() => onChange(order.id, order.jumlah + 1)} className="px-2 bg-blue-300">{`+`}</button>
                </div>
              </div>
            );
          })}

          <div className="w-full flex justify-end items-center">
            <p>{`Total: Rp`} {total.toLocaleString()}</p>
          </div>
    
        </div>
      </div>
    </div>
    

  );
};

export default OrderList;