import React, { useEffect, useState } from "react";
import { db } from "../module/firebase.js";
import { ref, set, get } from "firebase/database";

import MenuList from "../component/order/MenuList";
import OrderList from "../component/order/OrderList";
import InputNama from "../component/order/InputName";

import menuData from "../data/MenuData.json";
import WebData from "../WebData.json";

const App = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const webData = WebData.data;

  useEffect(() => {
    const data = localStorage.getItem("kopi_user");
    if (data) {
      const userData = JSON.parse(data);
      setUser(userData);
      loadOrders(userData.uid);
    }
    document.title = webData.orderTitle;
  }, []);

  const loadOrders = async (uid) => {
    const snap = await get(ref(db, "user/" + uid));
    if (snap.exists()) {
      setOrders(snap.val()?.orders || []);
    }
  };

  const saveOrders = (uid, orders) => {
    set(ref(db, "user/" + uid), { orders });
  };

  const handleNamaSubmit = (nama) => {
    const uid = Date.now().toString();
    const userData = { uid, nama };
    localStorage.setItem("kopi_user", JSON.stringify(userData));
    set(ref(db, "user/" + uid), { orders: [] });
    setUser(userData);
  };

  const handleOrder = (id) => {
    const newOrders = [...orders];
    const index = newOrders.findIndex((o) => o.id === id);
    if (index > -1) newOrders[index].jumlah++;
    else newOrders.push({ id, jumlah: 1 });
    setOrders(newOrders);
    saveOrders(user.uid, newOrders);
  };

  const handleOrderChange = (id, jumlah) => {
    let newOrders = [...orders];
    const index = newOrders.findIndex((o) => o.id === id);
    if (index > -1) {
      if (jumlah <= 0) newOrders.splice(index, 1);
      else newOrders[index].jumlah = jumlah;
    }
    setOrders(newOrders);
    saveOrders(user.uid, newOrders);
  };

  const UserLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-full h-[100dvh] p-4 flex flex-col sm:flex-row gap-4 overflow-hidden">
      {!user ? (
        <InputNama onSubmit={handleNamaSubmit} />
      ) : (
        <>
          <div className="w-full px-5 sm:px-0 sm:w-[18%] flex flex-row sm:flex-col items-center justify-between sm:justify-start sm:items-start gap-1">
            <div className="w-auto flex flex-col">
              <p className="myfont-Winky text-3xl xl:text-4xl">{`Kopi Nusa`}</p>
              <p className="text-lg xl:text-xl">{`Pemesanan`}</p>
            </div>
            <div className="w-auto flex flex-col items-end sm:items-start">
              <p className="text-lg">{`Hallo,`} {user.nama}</p>
              <button onClick={UserLogout} className="mt-2 px-4 py-1 bg-red-500 text-white rounded" >
                <span>
                  {`Logout`}
                </span>
              </button>
            </div>
          </div>

          <MenuList menu={menuData} onOrder={handleOrder} />
          <OrderList menu={menuData} orders={orders} onChange={handleOrderChange} />
        </>
      )}
    </div>
  );
};

export default App;
