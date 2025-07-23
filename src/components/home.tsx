import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import Header from "./header";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import type { Country } from "../types";
import Countries from "./countries";
const Home = () => {
  const [query, setQuery] = useState("");
  const { isPending, error, data } = useQuery({
    queryKey: ["countryData"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/independent?status=true").then(
        (res) => res.json()
      ),
  });

  const debouncedSearch = useDebounce(query);

  const filteredResult =
    query.length > 0
      ? data.filter((country: Country) =>
          country.name.common
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase())
        )
      : data;

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  console.log({ filteredResult });
  return (
    <>
      <Header />
      <section className="px-4 mt-8">
        <section className="max-w-7xl mx-auto flex justify-between items-center">
          <div className=" w-xl shadow-md flex gap-2 items-center py-3 px-4 bg-white rounded-md">
            <FaSearch />
            <input
              className="outline-none flex-1"
              placeholder="Search for a country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            aria-label="filter region"
            className="w-48 shadow-md py-3 px-4 flex items-center gap-4 rounded-md cursor-pointer"
          >
            Filter by Region <MdKeyboardArrowUp />
          </button>
        </section>
        {debouncedSearch && !filteredResult.length ? (
          <p>Oops! No result found...</p>
        ) : (
          <Countries countries={filteredResult} />
        )}
      </section>
    </>
  );
};

export default Home;
