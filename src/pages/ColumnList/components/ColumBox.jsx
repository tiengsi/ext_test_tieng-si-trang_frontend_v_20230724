/* eslint-disable react/prop-types */
import cx from "classnames"

const ColumBox = ({ className, item }) => {
  return (
    <div className={cx("w-[216px] h-[144px] overflow-hidden bg-dark-600 flex flex-col justify-center items-center p-2", className)}>
      <div className="text-primary-300 font-inter text-[22px] leading-[27px] tracking-[0.11px] text-center uppercase">{item.text}</div>
      <div className="w-14 h-[1px] bg-light my-2" />
      <div className="text-light font-noto text-[18px] leading-[26px] font-light text-center">{item.subText}</div>
    </div>
  )
}

export default ColumBox