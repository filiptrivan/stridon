import CloseIcon from '@mui/icons-material/Close';

interface Props {
  translate: any;
  visible: boolean;
  onClose: () => void;
  catalogueValues:any;
}

const MyModal = ({
  translate,
  visible,
  onClose,
  catalogueValues,
}: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-stone-50 rounded-md w-[320px]">
        <button onClick={onClose} className="font-black flex mb-2 mt-2 mr-2 ml-auto">
          <CloseIcon/>
        </button>
        {catalogueValues?.map((value:any, i:string)=>(
        <a href={value.rutaKataloga} target="_blank" key={i} rel="noopener noreferrer">
          <div
            className={
              value.imeKataloga != ""
                ? `py-3 hover:bg-stone-200 cursor-pointer border ${i+1 === catalogueValues.length && "rounded-b-md"}`
                : "p-0"
            }
          >
            {translate(`${value.imeKataloga}`)}
          </div>
        </a>
        ))}
      </div>
    </div>
  );
};

export default MyModal;