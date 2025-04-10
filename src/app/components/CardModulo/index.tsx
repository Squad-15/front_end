// components/CardModulo/index.jsx
import React from "react";

const CardModulo = ({ image, category, title, subTitle, description, link }) => {
  return (
    <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row mb-8">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 font-sans text-[18px] antialiased font-extrabold leading-relaxed tracking-normal text-black-700 uppercase">
          {category}
        </h6>
        <h4 className="block mb-2 font-sans text-[16px] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>
        <p className="block mb-5 font-sans text-[13px] antialiased font-normal leading-relaxed text-gray-800">
          {subTitle}
        </p>
        <hr className="my-2 border-t-1 border-black w-50" />
        <p className="block mb-8 font-sans text-[13px] antialiased font-normal leading-relaxed text-gray-700">
          {description}
        </p>
        <a href={link} className="inline-block">
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-[15px] font-semibold
            text-center text-white-600 align-middle transition-transform duration-300 transform rounded-full bg-red-700 text-white hover:scale-105 "
            type="button"
          >
            Iniciar
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardModulo;
