import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useGetTrendingContent() {
  const [trendingContent, setTrendingContent] = useState(null);
  const { type: contentType } = useSelector((state) => state.content);

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/trending`);
      setTrendingContent(res.data.content);
    };
    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
}
