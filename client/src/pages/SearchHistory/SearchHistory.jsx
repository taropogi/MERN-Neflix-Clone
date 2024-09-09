import axios from "axios";
import { useEffect, useState } from "react";
import { SMALL_IMAGE_BASE_URL } from "../../utils/constants";
import { formatReleaseDate } from "../../utils/DateHelper";
import { capitalizeFirstLetter } from "../../utils/StringFunctions";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState([]);
  async function handleDelete(id) {
    try {
      await axios.delete(`/api/v1/search/history/${id}`);
      setSearchHistory(searchHistory.filter((item) => item.id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(() => {
    const getSearchHistory = async () => {
      try {
        const res = await axios.get(`/api/v1/search/history`);
        setSearchHistory(res.data.content);
      } catch (error) {
        console.log(error.message);
        setSearchHistory([]);
      }
    };
    getSearchHistory();
  }, []);

  if (searchHistory.length === 0) {
    return (
      <div className="bg-black min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Search History</h1>
          <div className="flex justify-center items-center h-96">
            <p className="tex-xl">No search history</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Search History</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchHistory.map((entry) => (
            <div
              className="bg-gray-800 p-4 rounded flex items-start"
              key={`${entry.id}-${entry.createdAt}`}
            >
              <img
                className="size-16 rounded-full object-cover mr-4"
                src={`${SMALL_IMAGE_BASE_URL}${entry.image}`}
                alt="History Image"
              />
              <div className="flex flex-col">
                <span className="text-white text-lg">{entry.title}</span>
                <span className="text-gray-400 text-sm">
                  {formatReleaseDate(entry.createdAt)}
                </span>
              </div>
              <span
                className={`py-1 px-3 min-w-20 text-center rounded-full text-sm ml-auto ${
                  entry.searchType === "movie"
                    ? "bg-red-600"
                    : entry.searchType === "tv"
                    ? "bg-blue-600"
                    : "bg-green-600"
                }`}
              >
                {capitalizeFirstLetter(entry.searchType)}
              </span>
              <Trash
                className="size-5 ml-4 cursor-pointer hover:fill-red-600 hover:text-red-600"
                onClick={() => handleDelete(entry.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
