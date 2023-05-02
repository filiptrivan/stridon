import Image from "next/image";
import React from "react";

const TextoviISlike = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src="/bos.webp"
            alt=""
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <p className="text-4xl font-semibold mb-3">Lorem Ipsum</p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse
            sequi delectus eum exercitationem placeat fugiat labore est officia,
            doloribus temporibus consequatur explicabo neque dignissimos modi
            dolorem nostrum accusantium adipisci. Exercitationem a eaque
            assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam.{" "}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <p className="text-4xl font-semibold mb-3">Lorem Ipsum</p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse
            sequi delectus eum exercitationem placeat fugiat labore est officia,
            doloribus temporibus consequatur explicabo neque dignissimos modi
            dolorem nostrum accusantium adipisci. Exercitationem a eaque
            assumenda perspiciatis libero ipsam atque iste voluptatum quibusdam.{" "}
          </p>
        </div>
        <div className="max-w-full lg:max-w-[570px]">
          <Image
            src="/bos.webp"
            alt=""
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </>
  );
};

export default TextoviISlike;
