
interface HeroServisProps {
  titleNaHomePage: string;
  opisNaHomePage: string;
}

const HeroServis : React.FC<HeroServisProps> = ({titleNaHomePage, opisNaHomePage}) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-servis-page text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className='left-0 w-full z-[2]'>
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-6xl mb-2 font-medium">{titleNaHomePage}</h1>
          <h2 className="text-xl">
           {opisNaHomePage}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroServis;