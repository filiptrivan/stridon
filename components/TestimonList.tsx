import TestimonCard from "./TestimonCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface Record {
  image: string;
  title: string;
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
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: -15,
    },
  };
 
  return (
    <div className="w-full text-center">
      <div className="max-w-[1140px] mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primaryRed">
          {translate("Šta naši saradnici kažu o nama")}
        </h2>
        <div className="text-base sm:text-lg mb-9">
          {translate('HomepageTestimonialsTextBelowTitle')}
        </div>
        <Carousel
          ssr={true}
          className="z-[1]"
          keyBoardControl={true}
          partialVisible={true}
          infinite={true}
          draggable={true}
          responsive={responsive}
          swipeable={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          pauseOnHover
          arrows={false}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
        >
          {records.map((record, index) => (
            <TestimonCard
              key={index}
              title={record.title}
              image={record.image}
              name={record.name}
              translate={translate}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonList;