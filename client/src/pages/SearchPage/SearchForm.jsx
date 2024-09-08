import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm({
  activeTab,
  onSearch,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <form
      className="flex gap-2 items-stretch mb-8 max-w-2xl mx-auto"
      onSubmit={onSearch}
    >
      <input
        type={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={`Search for ${activeTab}`}
        className="w-full p-4 rounded-full bg-gray-800 text-white"
      />
      <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
        <Search className="size-10" />
      </button>
    </form>
  );
}
