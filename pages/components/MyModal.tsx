import CloseIcon from '@mui/icons-material/Close';

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
      <div className="bg-slate-50 rounded-t-md w-[320px]">
        <button onClick={onClose} className="font-black flex mb-2 mt-2 mr-2 ml-auto">
          <CloseIcon/>
        </button>
        {catalogueValues?.map((value:any, i:string)=>(
        <a href={value.rutaKataloga} target="_blank" key={i} rel="noopener noreferrer">
          <div
            className={
              value.imeKataloga != ""
                ? "py-3 hover:bg-slate-200 cursor-pointer border"
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