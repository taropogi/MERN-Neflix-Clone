import axios from "axios";

export async function getTrendingContent(contentType) {
  try {
    const res = await axios.get(`/api/v1/${contentType}/trending`);

    return res.data.content;
  } catch (error) {
    console.error("error dito boy");
    throw new Error(error.message || "Trending Content not found.");
  }
}
