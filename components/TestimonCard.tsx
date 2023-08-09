import Image from "next/image";

const TestimonCard = ({ title, image, name, translate }: any) => {
  return (
    <div className=" max-w-[400px] min-h-[296px] mb-10 border shadow-lg rounded bg-slate-50 mr-4">
      <div className="sm:ml-4 mt-[-5px] w-[150px]">
        <Image src={image} alt={title} width={250} height={180} />
      </div>
      <div className="mt-[-5px]">
        <div className="text-start font-medium ml-2 sm:ml-4 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </div>
        <div className="text-start font-medium ml-2 sm:ml-4 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </div>
        <div className="pb-2 text-start mx-2 sm:mx-4 text-sm sm:text-base mb-2 font-semibold text-gray-600">
          {translate(`${title}`)}
        </div>
      </div>
    </div>
  );
};

export default TestimonCard;
