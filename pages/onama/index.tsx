import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div>
        <div className="text-3xl sm:text-5xl font-medium text-center pb-12 pt-12">O nama</div>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui
            odit adipisci, quae eum doloribus minima tempora, placeat officia
            sequi vitae autem, aperiam sapiente expedita quis deleniti ex unde
            explicabo.quae eum doloribus minima tempora, placeat officia
            sequi vitae autem, aperiam sapiente expedita quis deleniti ex unde
            explicabo.quae eum doloribus minima tempora, placeat officia
            sequi vitae autem, aperiam sapiente expedita quis deleniti.{" "}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <p className="text-4xl font-semibold mb-3">Lorem Ipsum</p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            molestiae ab sequi obcaecati quis sint cumque in exercitationem?
            Autem eum consequatur a odit, necessitatibus in. Neque vitae
            aspernatur repudiandae magni? Quis sint cumque in exercitationem?
            Autem eum consequatur a odit, necessitatibus in. Neque vitae
            aspernatur repudiandae magni?{" "}
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
    </div>
  );
};

export default index;
