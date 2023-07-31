/* eslint-disable no-unused-vars */
import cx from "classnames"
import ColumBox from "./components/ColumBox"
import ColumnItem from "./components/ColumnItem"
import { useCallback, useEffect, useState } from "react";
import { BASE_URL, fetcher } from "@/constants/utils";

const ColumnList = () => {
  const [dataHeader, setDataHeader] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [curPage, setCurPage] = useState(0);

  const getHeaderData = () => {
    const url = `${BASE_URL}/columHeader?_page=0&_limit=4`;
    fetcher(url)
      .then((res) => {
        setDataHeader(res);
      })
      .catch(() => setDataHeader([]))
  };

  const getMainData = useCallback(() => {
    const url = `${BASE_URL}/columData?_page=${curPage}&_limit=8`;
    setLoading(true);
    fetcher(url)
      .then((res) => {
        setHasMore(res.length > 0)
        setData((prev) => [...prev, ...res]);
      })
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [curPage]);

  useEffect(() => {
    getHeaderData();
    getMainData();
  }, [getMainData])

  const loadMoreOnClick = () => {
    // prevent click if the state is loading
    if (loading) return;
    setCurPage((prev) => prev + 1);
  };

  return (
    <div className="w-main mx-auto">
      <div className="flex mt-14">
      {
        dataHeader.map((item, index) => {
          return <ColumBox key={index} item={item} className="mr-8 last:mr-0" />
        })
      }
      </div>
      <div className="flex flex-wrap mt-14">
        {
          data.map((item, index) => {
            return <ColumnItem key={index} item={item} className="mr-1 last:mr-0" />
          })
        }
      </div>

      <div className="w-full flex justify-center pt-6 pb-16">
        <button
          className={cx(
            "w-[296px] h-[56px] flex justify-center items-center cursor-pointer rounded-lg ",
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
  )
}

export default ColumnList