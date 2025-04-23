import React from "react";

const MenuList = ({ menu, onOrder }) => {
  return (
    <>
      <div className="w-full sm:w-[60%] h-full overflow-y-auto pr-1">
        <div className="w-full h-full flex flex-wrap justify-between sm:justify-start gap-2">
          {menu.map((item) => (
            <div key={item.id} className="w-[48%] sm:w-[48%] lg:w-[30%] border-2 p-2">
              <div className=" w-full h-full flex flex-col gap-2">
                <div className="w-full h-[150px]">
                  <img src={item.gambar} className="w-full h-full object-cover" alt={item.nama} />
                </div>
                <div className="px-2">
                  <p>{item.nama}</p>
                  <p>Rp. {item.harga.toLocaleString()}</p>
                </div>
                <div className="w-full h-full flex justify-end items-end px-2 pb-2">
                  <button onClick={() => onOrder(item.id)}>
                    <span className="text-lg">{`Pesan`}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[7rem] bg-transparent sm:hidden"></div>
    </>

  );
};

export default MenuList;