import Link from "next/link";
import React from "react";

interface Props {
  naslovButtona: string;
}

const Button = ({ naslovButtona }: Props) => {
  return (
    <div>
      <Link href={"/brendovi"}>
      <button className="px-8 py-3 border-zinc-800 border-2 bg-zinc-950 text-lg text-slate-50 rounded-md hover:bg-zinc-900 duration-200 flex items-center m-auto mb-20">
        {naslovButtona}
      </button>
      </Link>
    </div>
  );
};

export default Button;

//#2D2B31