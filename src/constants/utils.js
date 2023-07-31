import { useEffect, useRef } from "react";

export const BASE_URL = "http://localhost:5000";

export const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}