import React, { useState } from "react";
import InputImg from "../../img/web/kopiSenyum.png";

const InputName = ({ onSubmit }) => {
  const [nama, setNama] = useState("");

  const handleSubmit = () => {
    if (nama.trim()) {
      onSubmit(nama);
    }
  };

  return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <div className="w-auto h-auto flex flex-col items-center gap-3">
          <div className="w-full h-full max-w-[150px]">
            <img src={InputImg} alt={"Input Image"} />
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-4xl myfont-Winky">{`Kopi Nusa`}</p>
            <p>{`Nama kamu`}</p>
          </div>
          <div>
            <input className="bg-transparent outline-none border-2 border-black/20 p-2 focus:border-black transition-colors duration-300" type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
          <div>
            <button onClick={handleSubmit} className="px-4 py-1">
              <span className="text-lg">
                {`Konfirmasi`}
              </span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default InputName;