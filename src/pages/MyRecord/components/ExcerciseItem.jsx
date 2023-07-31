/* eslint-disable react/prop-types */
import classNames from "classnames"

const ExcerciseItem = ({ className }) => {
  return (
    <div className={classNames("w-[405px] min-h-[40px] flex justify-between border-b border-gray-400 py-1", className)}>
      <div className="flex flex-col">
        <span className="text-light font-noto font-light text-[15px] leading-[22px] tracking-[.075px]">・家事全般（立位・軽い）</span>
        <span className="text-primary-300 font-inter text-[15px] leading-[18px] tracking-[.075px]">&nbsp;&nbsp;&nbsp;&nbsp;26kcal</span>
      </div>
      <div>
        <span className="text-primary-300 font-inter text-[18px] leading-[22px] tracking-[.09px]">10 min</span>
      </div>
    </div>
  )
}

export default ExcerciseItem