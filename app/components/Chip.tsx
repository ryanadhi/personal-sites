import React from "react";

const Chip = (props: { text: string }) => {
  const { text } = props;
  return (
    <div className="border border-slate-200 rounded-md bg-slate-200 hover:bg-slate-100 text-slate-800 hover:text-slate-800 px-1 md:py-1 md:px-2 hover:border-slate-800 cursor-pointer" role="button">
      <span className="text-xs md:text-sm ">{text}</span>
    </div>
  );
};

export default Chip;
