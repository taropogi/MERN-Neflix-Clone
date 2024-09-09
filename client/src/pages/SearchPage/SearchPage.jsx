import { useState } from "react";
import { useDispatch } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/StringFunctions";
import SearchForm from "./SearchForm";
import axios from "axios";
import toast from "react-hot-toast";
import PersonLinkImage from "./PersonLinkImage";
import { Link } from "react-router-dom";
import { SMALL_IMAGE_BASE_URL } from "../../utils/constants";
import { setContentType } from "../../features/content/contentSlice";

export default function SearchPage() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  function handleTabClick(tab) {
    setActiveTab(tab);
    setResults([]);
  }

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const res = await axios.get(`/api/v1/search/${activeTab}/${searchTerm}`);
      setResults(res.data.content);
      console.log(res.data.content);
    } catch (error) {
      toast.error("Walang nakita sa sinenearch mo!");
    }
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex justify-center gap-3 mb-4 ">
          {["movie", "tv", "person"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded ${
                activeTab === tab ? "bg-red-600" : "bg-gray-600"
              } hover:bg-red-700`}
              onClick={() => handleTabClick(tab)}
            >
              {`${capitalizeFirstLetter(tab)}`}
            </button>
          ))}
        </div>

        <SearchForm
          activeTab={activeTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((result) => {
            if (!result.poster_path && !result.profile_path) return null;

            return (
              <div className="bg-gray-800 p-4 rounded" key={result.id}>
                {activeTab === "person" ? (
                  <PersonLinkImage item={result} />
                ) : (
                  <Link
                    key={result.id}
                    to={`/watch/${result.id}`}
                    className="w-52 flex-none"
                    onClick={() => dispatch(setContentType(activeTab))}
                  >
                    <img
                      src={SMALL_IMAGE_BASE_URL + result.poster_path}
                      alt="Poster Image"
                      className="w-full h-auto rounded-md"
                    />
                    <h4 className="mt-2 text-lg font-semibold">
                      {result?.title || result?.name}
                    </h4>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
