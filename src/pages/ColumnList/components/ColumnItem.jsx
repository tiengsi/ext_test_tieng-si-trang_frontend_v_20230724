/* eslint-disable react/prop-types */
import cx from "classnames"

const ColumnItem = ({ className, item}) => {
  return (
    <div className={cx("w-[234px] h-[222px]", className)}>
      <div className="relative w-full h-[145px]">
        <img src={item.url} alt={item.label} loading="lazy" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 w-[144px] h-8 overflow-hidden bg-primary-300 flex items-center px-2">
          <span className="text-light font-inter text-[15px] leading-[18px] tracking-[.15px]">{item.label}</span>
        </div>
      </div>
      <div className="line-clamp-2 mt-2 text-dark-500 font-noto text-[15px] font-light leading-[22px] tracking-[.075px]">{item.description}</div>
      <div className="truncate mt-1 text-primary-400 font-noto text-[12px] font-light leading-[22px] tracking-[.06px]">{item.keywords}</div>
    </div>
  )
}

export default ColumnItem