import Card from "./Card";

const CardList = ({ blogData }) => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto p-3 text-center ">
        <ul>
          <li>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {blogData.map((record, index) => {
                return (
                  <Card
                    keyy={index}
                    title={record.title}
                    text={record.description}
                    date={record.created_time}
                    image={record.main_img}
                    vrsta={record.vrsta}
                  />
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardList;
