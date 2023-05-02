import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  naslovButtona: string;
}

const Button = ({ naslovButtona }: Props) => {
  return (
    <div>
      <button className="px-8 py-3 border-zinc-800 border-2 bg-zinc-950 text-lg text-slate-50 rounded-md hover:bg-zinc-900 duration-200 flex items-center m-auto mb-20">
        {naslovButtona}
      </button>
    </div>
  );
};

export default Button;

//#2D2B31