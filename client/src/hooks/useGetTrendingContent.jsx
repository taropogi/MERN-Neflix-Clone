import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getTrendingContent } from "../services/apiMovies";

export default function useGetTrendingContent() {
  const { type: contentType } = useSelector((state) => state.content);
  // const [trendingContent, setTrendingContent] = useState(null);

  // useQuery can return more data
  const {
    data: trendingContent,
    status,
    error,
  } = useQuery({
    queryKey: ["trendingContent"],
    queryFn: () => getTrendingContent(contentType),
  });

  // console.log(data, "haha");

  // useEffect(() => {
  //   const getTrendingContent = async () => {
  //     const res = await axios.get(`/api/v1/${contentType}/trending`);
  //     setTrendingContent(res.data.content);
  //   };
  //   getTrendingContent();
  // }, [contentType]);

  // return { trendingContent };
  return { trendingContent, status, error };
}
