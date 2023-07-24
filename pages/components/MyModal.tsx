import React from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
  catalogueValues:any;
}

const MyModal = ({
  visible,
  onClose,
  catalogueValues
}: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-slate-50 rounded-t-md ">
        <button onClick={onClose} className="font-black mb-2 mt-2 ml-60">
          X
        </button>
        {catalogueValues?.map((value:any, i:string)=>(
        <a href={value.rutaKataloga} download key={i}>
          <div
            className={
              value.imeKataloga != ""
                ? "py-3 px-20 hover:bg-slate-200 cursor-pointer border"
                : "p-0"
            }
          >
            {value.imeKataloga}
          </div>
        </a>
        ))}
      </div>
    </div>
  );
};

export default MyModal;