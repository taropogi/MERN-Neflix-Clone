import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function useGetMovieDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const { type: contentType } = useSelector((state) => state.content);
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
        setContent(res.data.content);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent(null);
        }
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [contentType, id]);

  return { content, loading };
}
