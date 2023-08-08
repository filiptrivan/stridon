import TestimonCard from "./TestimonCard";
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
      <div className="max-w-[1140px] mx-auto px- sm:px-6 text-center mt-10">
        <Carousel
          ssr={true}
          className="z-[1]"
          centerMode={true}
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