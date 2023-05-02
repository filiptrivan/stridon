import React from "react";

interface Props{
    visible:boolean
  onClose: () => void
  rutaKataloga1:string
  rutaKataloga2:string
  rutaKataloga3:string
  rutaKataloga4:string
  rutaKataloga5:string
  imeKataloga1:string
  imeKataloga2:string
  imeKataloga3:string
  imeKataloga4:string
  imeKataloga5:string
}

const MyModal = ({
  visible,
  onClose,
  rutaKataloga1,
  rutaKataloga2,
  rutaKataloga3,
  rutaKataloga4,
  rutaKataloga5,
  imeKataloga1,
  imeKataloga2,
  imeKataloga3,
  imeKataloga4,
  imeKataloga5,
}: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-slate-50 rounded-t-md ">
        <button onClick={onClose} className="font-black mb-2 mt-2 ml-48">
          X
        </button>
        <div>
          <a href={rutaKataloga1} download>
            <div
              className={
                imeKataloga1 != " "
                  ? "py-3 px-20 hover:bg-slate-200 cursor-pointer border"
                  : "p-0"
              }
            >
              {imeKataloga1}
            </div>
          </a>
          <a href={rutaKataloga2} download>
            <div
              className={
                imeKataloga2 != " "
                  ? "py-3 px-20 hover:bg-slate-200 cursor-pointer border"
                  : "p-0"
              }
            >
              {imeKataloga2}
            </div>
          </a>
          <a href={rutaKataloga3} download>
            <div
              className={
                imeKataloga3 != " "
                  ? "py-3 px-20 hover:bg-slate-200 cursor-pointer border"
                  : "p-0"
              }
            >
              {imeKataloga3}
            </div>
          </a>
          <a href={rutaKataloga4} download>
            <div
              className={
                imeKataloga4 != " "
                  ? "py-3 px-20 hover:bg-slate-200 cursor-pointer border"
                  : "p-0"
              }
            >
              {imeKataloga4}
            </div>
          </a>
          <a href={rutaKataloga5} download>
            <div
              className={
                imeKataloga5 != " "
                  ? "py-3 px-20 hover:bg-slate-200 cursor-pointer border"
                  : "p-0"
              }
            >
              {imeKataloga5}
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default MyModal;

//katalog.pdf
//ime kataloga
