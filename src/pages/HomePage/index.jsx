/* eslint-disable no-unused-vars */
import ImgD01 from "@/assets/images/d01.png";
import IconCircle from "@/assets/svgs/icon-circle.svg";
import FilterButton from "@/components/FilterButton";
import {
  chartData,
  filterButtons,
  mockPercentage,
  options,
} from "@/pages/HomePage/constants";
import { Line } from "react-chartjs-2";
import { ReactSVG } from "react-svg";
import { useCallback, useEffect, useRef, useState } from "react";
import PhotoComponent from "@/components/PhotoComponent";
import cx from "classnames";
import Loading from "@/components/Loading";
import moment from "moment";
import { fetcher, BASE_URL, usePrevious } from "@/constants/utils";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [filter, setFilter] = useState("morning");
  const prevFilter = usePrevious(filter);

  const getDataList = useCallback(() => {
    const url = `${BASE_URL}/foods?_page=${curPage}&_limit=8&category=${filter}`;
    setLoading(true);
    fetcher(url)
      .then((res) => {
        setHasMore(res.length > 0);
        setData((prev) => [...prev, ...res]);
        setErrorMsg("");
      })
      .catch(() => setErrorMsg("Something went wrong, Please try again later"))
      .finally(() => {
        setLoading(false)
      });
  }, [curPage, filter]);

  const loadMoreOnClick = () => {
    // prevent click if the state is loading
    if (loading) return;
    setCurPage((prev) => prev + 1);
  };

  useEffect(() => {
    getDataList();
  }, [getDataList]);

  const onChangeFilter = useCallback(
    (value) => {
      if (prevFilter !== value) {
        setFilter(value);
        setCurPage(0);
        setData([]);
      }
    },
    [prevFilter]
  );

  return (
    <div>
      {/* HERO */}
      <div className="w-full max-h-[312px] flex">
        <div className="basis-2/5 overflow-hidden">
          <div className="relative inline-block w-full h-full">
            <div className="w-full h-full">
              <img
                src={ImgD01}
                className="object-cover object-right w-full h-full"
                alt="Main image"
              />
            </div>
            <div>
              <ReactSVG
                src={IconCircle}
                className="absolute top-1/2 right-1/2 drop-shadow-[0px_0px_6px_#FC7400]"
                style={{ transform: "translate(50%, -50%)" }}
              />
              <div
                className="absolute top-1/2 right-1/2"
                style={{ transform: "translate(50%, -50%)" }}
              >
                <span className="text-light font-inter text-[18px] leading-[22px] text-center text-shadow shadow-[#FCA500]">
                  {moment().format('DD/MM')}
                </span>
                &nbsp;&nbsp;
                <span className="text-light font-inter text-[25px] leading-[30px] text-center text-shadow shadow-[#FCA500]">
                  {`${mockPercentage}%`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/5 flex justify-center bg-dark-600">
          <Line options={options} data={chartData} className="px-10 py-4" />
        </div>
      </div>

      <div className="w-main mx-auto">
        {/* FILTER */}
        <div className="w-full flex justify-evenly py-5">
          {filterButtons.map((item) => {
            return (
              <FilterButton
                key={item.key}
                item={item}
                onChangeFilter={onChangeFilter}
              />
            );
          })}
        </div>
        {/* PHOTOS */}
        <div
          className={cx("w-full flex flex-wrap relative min-h-[250px]", {
            "mb-16": !hasMore,
          })}
        >
          {loading && <Loading loadingText="Loading..." />}
          {errorMsg ? (
            <p className="error-msg">{errorMsg}</p>
          ) : (
            data.map((item, index) => {
              return (
                <PhotoComponent
                  key={index}
                  url={item.url}
                  label={item.label}
                />
              );
            })
          )}

        </div>

        <div className="w-full flex justify-center pt-6 pb-16">
          <button
            className={cx(
              "w-[296px] h-[56px] flex justify-center items-center cursor-pointer rounded-lg",
              {
                "bg-btn-disabled": !hasMore,
                "bg-btn-gradient": hasMore,
              }
            )}
            onClick={loadMoreOnClick}
            disabled={!hasMore}
          >
            <span className="text-light font-noto font-light text-[18px] leading-[26px]">
              {loading ? "読み込み中..." : "記録をもっと見る"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
