
interface HeroKataloziProps {
  titleNaHomePage: string;
  opisNaHomePage: string;
}

const HeroKatalozi : React.FC<HeroKataloziProps> = ({titleNaHomePage, opisNaHomePage}) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-catalogs-page text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className='left-0 w-full z-[2]'>
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 font-medium">{titleNaHomePage}</h1>
          <h2 className="text-base sm:text-xl mb-4">
           {opisNaHomePage}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroKatalozi;