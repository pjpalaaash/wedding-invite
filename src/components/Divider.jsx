import React from 'react';

const Divider = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="h-px bg-[#B8956A] w-24"></div>
      <div className="mx-4">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#B8956A]"
        >
          <path
            d="M15 5L17.5 10L22.5 7.5L20 12.5L25 15L20 17.5L22.5 22.5L17.5 20L15 25L12.5 20L7.5 22.5L10 17.5L5 15L10 12.5L7.5 7.5L12.5 10L15 5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="h-px bg-[#B8956A] w-24"></div>
    </div>
  );
};

export default Divider;
