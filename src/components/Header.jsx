import { NavLink, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Logo from "@/assets/svgs/logo.svg";
import IconRecord from "@/assets/svgs/icon-record.svg";
import IconChallenge from "@/assets/svgs/icon-challenge.svg";
import IconInfo from "@/assets/svgs/icon-info.svg";
import MenuToggle from "@/components/MenuToggle";
import BadgeIcon from "@/components/BadgeIcon";
import pathRouting from "@/constants/routes";
import cx from "classnames";

const items = [
  {
    key: 1,
    title: "My Record",
    route: `/${pathRouting.record}`,
    text: "自分の記録",
    icon: IconRecord,
  },
  {
    key: 2,
    title: "Challenge",
    route: `/${pathRouting.challenge}`,
    text: "チャレンジ",
    icon: IconChallenge,
  },
  {
    key: 3,
    title: "Notice",
    route: `/${pathRouting.notice}`,
    text: "お知らせ",
    icon: IconInfo,
    hasBadge: true,
    notificationCount: 1,
  },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="h-header bg-dark-500 flex justify-center">
      <div className="w-main flex">
        {/* Main Logo */}
        <NavLink end to={pathRouting.root}>
          <ReactSVG src={Logo} className="w-logo" title="Healthy" />
        </NavLink>
        {/* Links */}
        <div className="ml-auto flex items-center">
          {items.map((item) => {
            return (
              <NavLink
                key={item.key}
                exact="true"
                activeclassname="active"
                to={`${item.route}`}
                className="flex items-center min-w-[160px]"
              >
                {item.hasBadge ? (
                  <BadgeIcon count={item.notificationCount}>
                    <ReactSVG src={item.icon} title={item.title} />
                  </BadgeIcon>
                ) : (
                  <ReactSVG
                    src={item.icon}
                    title={item.title}
                    className="w-8 h-8 flex items-center justify-center mr-[10px]"
                  />
                )}

                <span
                  className={cx("font-noto text-light text-base font-light", {
                    "text-primary-400": item.route === pathname,
                  })}
                >
                  {item.text}
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Menu */}
        <MenuToggle />
      </div>
    </nav>
  );
};

export default Header;
