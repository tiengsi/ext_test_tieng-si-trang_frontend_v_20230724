/* eslint-disable no-unused-vars */
import { Line } from "react-chartjs-2";
import RecordComponent from "@/components/RecordComponent";
import { chartData, options } from "@/pages/HomePage/constants";
import moment from "moment";
import ExcerciseItem from "./components/ExcerciseItem";
import DiaryBox from "@/components/DiaryBox";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL, fetcher } from "@/constants/utils";
import Loading from "@/components/Loading";

const Error = (text) => {
  return (<div className="text-red-500 font-inter text-[15px] leading-[18px] tracking-[.15px] w-full text-center p-6">{text}</div>)
};

const MyRecord = () => {

  const [dataRecord, setDataRecord] = useState([]);
  const [errorMsgRecord, setErrorMsgRecord] = useState("");
  
  const [dataDiary, setDataDiary] = useState([]);
  const [loadingDiary, setLoadingDiary] = useState(false);
  const [hasMoreDiary, setHasMoreDiary] = useState(false);
  const [curPageDiary, setCurPageDiary] = useState(0);
  const [errorMsgDiary, setErrorMsgDiary] = useState("");

  const getRecords = () => {
    const url = `${BASE_URL}/records?_page=0&_limit=3`;
    fetcher(url)
      .then((res) => {
        setDataRecord(res);
        setErrorMsgRecord("");
      })
      .catch(() => setErrorMsgRecord("Something went wrong, Please try again later"))
  };

  const getDiaries = useCallback(() => {
    const url = `${BASE_URL}/diaries?_page=${curPageDiary}&_limit=8`;
    setLoadingDiary(true);
    fetcher(url)
      .then((res) => {
        setHasMoreDiary(res.length > 0);
        setDataDiary((prev) => [...prev, ...res]);
        setErrorMsgDiary("");
      })
      .catch(() => setErrorMsgDiary("Something went wrong, Please try again later"))
      .finally(() => setLoadingDiary(false));
  }, [curPageDiary]);

  useEffect(() => {
    getRecords();
    getDiaries();
  }, [getDiaries])

  const loadMoreOnClick = () => {
    // prevent click if the state is loading
    if (loadingDiary) return;
    setCurPageDiary((prev) => prev + 1);
  };

  return (
    <div className="w-main mx-auto">
      <div className="flex justify-between">
        {errorMsgRecord !== "" ? <Error text={errorMsgRecord} /> : dataRecord.map((item) => {
          return (
            <RecordComponent
              key={item.id}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>

      <div className="min-h-[312px] flex justify-center bg-dark-500 my-6">
        <Line options={options} data={chartData} className="px-10 py-4" />
      </div>

      <div className="h-[264px] bg-dark-500 my-12 py-4 px-6">
        <div className="flex">
          <div className="inline-block uppercase w-[96px] text-light font-inter text-[15px] leading-[18px] tracking-[.15px]">My exercise</div>
          <span className="text-light font-inter text-[22px] leading-[27px] tracking-[.11px]">{moment().format('YYYY.MM.DD')}</span>
        </div>
        <div className="max-h-[192px] overflow-scroll">
          {
            Array(5).fill(null).map((item, index) => {
              return <div key={index} className="flex">
                <ExcerciseItem className="mr-4" />
                <ExcerciseItem className="ml-4"/>
              </div>
            })
          }
        </div>
      </div>

      <div className="w-full">
        <span className="text-dark-500 font-inter font-light text-[22px] leading-[27px] tracking-[.11px] uppercase" >My Diary</span>
        <div className="flex flex-wrap relative">
          {loadingDiary && <Loading loadingText="Loading..." />}
          {
            errorMsgDiary !== "" ? <Error text={errorMsgDiary} /> :
            dataDiary.map((item, index) => <DiaryBox key={index} item={item} className="mr-2 last:mr-0 my-1"/>)
          }
        </div>
      </div>

      <div className="w-full flex justify-center pt-6 pb-16">
        <button
          className={classNames(
            "w-[296px] h-[56px] flex justify-center items-center cursor-pointer rounded-lg ",
            {
              "bg-btn-disabled": !hasMoreDiary,
              "bg-btn-gradient": hasMoreDiary,
            }
          )}
          onClick={loadMoreOnClick}
          disabled={!hasMoreDiary}
        >
          <span className="text-light font-noto font-light text-[18px] leading-[26px]">
            {loadingDiary ? "読み込み中..." : "記録をもっと見る"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MyRecord;
