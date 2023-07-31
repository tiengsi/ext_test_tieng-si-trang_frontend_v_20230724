/* eslint-disable react/prop-types */
import { ReactSVG } from "react-svg"
import IconFilter from "@/assets/svgs/icon-filter.svg";
import IconKnife from "@/assets/svgs/icon-knife.svg";
import capitalize from "lodash/capitalize";

const FilterButton = ({ item, onChangeFilter }) => {

  const onClick = () => {
    if (onChangeFilter) {
      onChangeFilter(item?.value);
    }
  };

  return (
    <div className="relative inline-flex w-[116px] h-[134px] cursor-pointer" onClick={onClick}>
      <ReactSVG src={IconFilter} className="absolute"/>
      <ReactSVG src={item?.icon ? item.icon : IconKnife} className="absolute top-1/3 left-1/2 -translate-y-1/3 -translate-x-1/2"/>
      <h1 className="absolute top-[70%] left-1/2 -translate-y-[70%] -translate-x-1/2 text-white text-center text-[20px] leading-6">{capitalize(item.value) || ''}</h1>
    </div>
  )
}

export default FilterButton