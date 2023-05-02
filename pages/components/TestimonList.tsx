import TestimonCard from "./TestimonCard";

export interface Record {
  image: string;
  title: string;
  description: string;
}

interface Props {
  records: Record[];
}

const TestimonList = ({ records }: Props) => {
  if (!records) {
    return null;
  }
  return (
    <div className="w-full bg-slate-100">
    <div className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt-16">Testimonials</div>
    <div className="max-w-[1140px] mx-auto px-6 text-center mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
        {/* naslov */}
        {records.map((record, index) => (
          <TestimonCard
            key={index}
            title={record.title}
            image={record.image}
            description={record.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TestimonList;


