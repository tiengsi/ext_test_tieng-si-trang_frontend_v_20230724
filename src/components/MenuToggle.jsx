import { ReactSVG } from "react-svg";
import { useState } from "react";
import IconMenu from "@/assets/svgs/icon-menu.svg";
import IconClose from "@/assets/svgs/icon-close.svg";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import pathRouting from "@/constants/routes";

const MenuToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className="my-auto relative cursor-pointer"
      onClick={() => setIsToggled(!isToggled)}
    >
      <ReactSVG
        src={IconMenu}
        className={cx(
          "absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-300 ease-in-out",
          {
            "opacity-100": !isToggled,
            "opacity-0": isToggled,
          }
        )}
        title="Icon Menu"
      />
      <ReactSVG
        src={IconClose}
        className={cx(
          "absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-300 ease-in-out",
          {
            "opacity-100": isToggled,
            "opacity-0": !isToggled,
          }
        )}
        title="Icon Close"
      />

      {isToggled && (
        <div className="absolute top-8 -right-8 w-[280px] z-50">
          <NavLink end to={pathRouting.record}>
            <div className="bg-gray-400 h-[72px] border-b border-gray-500 flex items-center pl-8 font-noto text-[18px] font-light leading-[26px] text-light">
              自分の記録
            </div>
            </NavLink>
          <div className="bg-gray-400 h-[72px] border-t border-gray-500 flex items-center pl-8 font-noto text-[18px] font-light leading-[26px] text-light">
            体重グラフ
          </div>
          <div className="bg-gray-400 h-[72px] border-t border-gray-500 flex items-center pl-8 font-noto text-[18px] font-light leading-[26px] text-light">
            目標
          </div>
          <div className="bg-gray-400 h-[72px] border-t border-gray-500 flex items-center pl-8 font-noto text-[18px] font-light leading-[26px] text-light">
            選択中のコース
          </div>
          <NavLink end to={pathRouting.columnList}>
            <div className="bg-gray-400 h-[72px] border-t border-gray-500 flex items-center pl-8 font-noto text-[18px] font-light leading-[26px] text-light">
              コラム一覧
            </div>
          </NavLink>
          <div className="bg-gray-400 h-[72px] flex items-center pl-8 font-noto text-[18px] font-light leading-[26px] text-light">
            設定
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
