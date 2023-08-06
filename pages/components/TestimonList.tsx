import TestimonCard from "./TestimonCard";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface Record {
  image: string;
  title: string;
  description: string;
  name:string
}

interface Props {
  records: Record[];
  translate: any;
}

const TestimonList = ({ records, translate }: Props) => {
  if (!records) {
    return null;
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
 
  return (
    <div className="w-full bg-slate-100">
      <h2 className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt-16">
        {translate("Šta naši saradnici kažu o nama")}
      </h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10"> */}
      <div className="max-w-[1140px] mx-auto px- sm:px-6 text-center mt-10">
        <Carousel
          ssr={true}
          className="z-[1]"
          centerMode={true}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          infinite={true}
          draggable={false}
          responsive={responsive}
          swipeable={false}
        >
          {records.map((record, index) => (
            <TestimonCard
              key={index}
              title={record.title}
              image={record.image}
              description={record.description}
              name={record.name}
              translate={translate}
            />
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TestimonList;

// const Brendovi: React.FC<BrendoviProps> = ({ title }) => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 7,
//       slidesToSlide: 1,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5,
//       slidesToSlide: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };
//   return (
//     <div id="brands" className="max-w-[1140px] mx-auto pb-10 pt-4">
//       <h1 className="text-2xl sm:text-3xl  font-medium text-center pb-6">
//         {title}
//       </h1>
//       {/* div samo za peding od slika brendova */}
//       <div className="px-4 pt-2 py-4">
//         <Carousel
//           ssr={true}
//           className="z-[1]"
//           centerMode={true}
//           // removeArrowOnDeviceType={["tablet", "mobile"]}
//           keyBoardControl={true}
//           infinite={true}
//           draggable={false}
//           responsive={responsive}
//           swipeable={false}
//         >
//           <Link href={"/brendovi/dewalt"}>
//             <BrendoviImg brendoviImg={dewaltlogo} />
//           </Link>
//           <Link href={"/brendovi/bosch"}>
//             <BrendoviImg brendoviImg={boschlogo} />
//           </Link>
//           <Link href={"/brendovi/boschdiy"}>
//             <BrendoviImg brendoviImg={boschdiy} />
//           </Link>

//           <Link href={"/brendovi/stanley"}>
//             <BrendoviImg brendoviImg={stanley} />
//           </Link>
//           <Link href={"/brendovi/makita"}>
//             <BrendoviImg brendoviImg={makita} />
//           </Link>

//           <Link href={"/brendovi/einhell"}>
//             <BrendoviImg brendoviImg={einhell} />
//           </Link>
//           <Link href={"/brendovi/knipex"}>
//             <BrendoviImg brendoviImg={knipex} />
//           </Link>

//           <Link href={"/brendovi/gude"}>
//             <BrendoviImg brendoviImg={gude} />
//           </Link>
//           <Link href={"/brendovi/kwb"}>
//             <BrendoviImg brendoviImg={kwb} />
//           </Link>
//           <Link href={"/brendovi/hogert"}>
//             <BrendoviImg brendoviImg={hoegert} />
//           </Link>
//           <Link href={"/brendovi/karcher"}>
//             <BrendoviImg brendoviImg={karcher} />
//           </Link>
//           <Link href={"/brendovi/wolfcraft"}>
//             <BrendoviImg brendoviImg={wolfcraft} />
//           </Link>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Brendovi;
