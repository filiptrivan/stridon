import ErrorPage from "@/pages/_error";
import Card from "./Card";

export interface Record {
  image: string;
  title: string;
  description: string;
  slug: string;
};

interface Props {
  records: Record[];
}

const CardList = ({ records }: Props) => {
    if(!records){
        return <ErrorPage/>
    }
  return (
    <div className="max-w-[1140px] mx-auto px-6 text-center mt-10">
        
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {/* naslov */}
      {records.map((record, index) => (
        <Card
          key={index}
          title={record.title}
          image={record.image}
          description={record.description}
          slug={record.slug}
        />
      ))}
    </div>
    </div>
  );
};

export default CardList;
