import React, { useState } from "react";
import Records from "../blogovi.json";

const Card = () => {

  return (
    <div>
      <div className="max-w-[1140px] mx-auto p-3 place-items-center text-center ">
      <ul>
          <li>
            {/* Card */}
            <div className="flex flex-wrap justify-between">

                {/* //DataBloga */}

                {
                    Records.map( record =>{
                        return(
                            <div className="border max-w-[550px] max-h-[407px] mb-10" key={record.id}>
                            <div className=" mb-2 ">
                            <img src={record.image} alt="" className="w-full max-h-[200px] object-cover" />
                          </div>
                          <div className="text-start ml-4 mb-2 text-3xl  whitespace-nowrap overflow-hidden text-ellipsis">{record.title}</div>
                          <div className="text-start ml-4 mb-2 text-lg">{record.type}</div>
                          <div className="border-b pb-2 text-start mx-4 text-base mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                            {record.text}
                          </div>
                          <div className="text-end mr-4 text-sm mb-2">{record.date}</div>
                          </div>
                        )
                    })
                }
                </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

              {/* <div className=" mb-2 ">
                <img src="/bos.webp" alt="" className="w-full max-h-[200px] object-cover" />
              </div>
              <div className="text-start ml-4 mb-2 text-3xl">{naslovBloga}</div>
              <div className="text-start ml-4 mb-2 text-lg">{vrstaBloga}</div>
              <div className="border-b pb-2 text-start mx-4 text-base mb-2 ">
                {tekstBloga}
              </div>
              <div className="text-end mr-4 text-sm mb-2">{datumBloga}</div>
                {/* // */}
            {/* </div>
            {/* // */}
          {/* </li>
          <li>
            {/* Card */}
            {/* <div className="border max-w-[550px] mb-10">
              <div className=" mb-2 ">
                <img src="/boschlogo.png" alt="" className="w-full max-h-[200px] object-cover" />
              </div>
              <div className="text-start ml-4 mb-2 text-3xl">Bosch GSBV-AB</div>
              <div className="text-start ml-4 mb-2 text-lg">Masine</div>
              <div className="border-b pb-2 text-start mx-4 text-base mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                cum libero repudiandae, explicabo labore minima aut nesciunt
                mollitia ipsam, soluta esse recusandae magnam dolorum totam
                beatae ullam quod architecto delectus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facilis cum libero
                repudiandae, explicabo labore minima aut nesciunt mollitia
              </div>
              <div className="text-end mr-4 text-sm mb-2">April 4 2023</div>
            </div>
            {/* // */}
          {/* </li>
          <li>
            {/* Card */}
            {/* <div className="border max-w-[550px] mb-10">
              <div className=" mb-2 ">
                <img src="/bos.webp" alt="" className="w-full max-h-[200px]" />
              </div>
              <div className="text-start ml-4 mb-2 text-3xl">Bosch GSBV-AB</div>
              <div className="text-start ml-4 mb-2 text-lg">Masine</div>
              <div className="border-b pb-2 text-start mx-4 text-base mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                cum libero repudiandae, explicabo labore minima aut nesciunt
                mollitia ipsam, soluta esse recusandae magnam dolorum totam
                beatae ullam quod architecto delectus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facilis cum libero
                repudiandae, explicabo labore minima aut nesciunt mollitia
              </div>
              <div className="text-end mr-4 text-sm mb-2">April 4 2023</div>
            </div>
            */} 

