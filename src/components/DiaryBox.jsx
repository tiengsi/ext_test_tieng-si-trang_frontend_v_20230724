import cx from "classnames"

/* eslint-disable react/prop-types */
const DiaryBox = ({ item, className }) => {
  return (
    <div className={cx("w-[231px] h-[231px] border-2 border-[#707070] p-4", className)}>
      <div className="mb-2">{item.date}</div>

      <div className="h-[132px] overflow-hidden">
        <p className="line-clamp-5">{item.text}</p>
      </div>
    </div>
  )
}

export default DiaryBox