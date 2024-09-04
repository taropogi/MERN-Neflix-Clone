import { useState } from "react";
import { setContentType } from "../../features/content/contentSlice";
import { useDispatch } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/StringFunctions";

export default function SearchPage() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("movie");
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);

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
              onClick={() => setActiveTab(tab)}
            >
              {`${capitalizeFirstLetter(tab)}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
