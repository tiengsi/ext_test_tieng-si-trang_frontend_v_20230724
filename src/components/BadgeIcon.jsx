/* eslint-disable react/prop-types */

const BadgeIcon = ({ children, count }) => {
  return (
    <div className="relative w-8 h-8 inline-flex items-center justify-center mr-[10px]">
      {children}
      <div className="absolute w-4 h-4 inline-flex items-center justify-center text-xs text-white bg-primary-500 rounded-full top-0 -right-2 font-inter text-[10px] leading-3">
        {count}
      </div>
    </div>
  );
};

export default BadgeIcon;
