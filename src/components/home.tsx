import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useContext, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { type Region, type Country } from "../types";
import Countries from "./countries";
import { ThemeContext, type ThemeContextType } from "../context/theme.context";

const Home = () => {
  const [query, setQuery] = useState("");
  const { isDark } = useContext(ThemeContext) as ThemeContextType;
  const [region, setRegion] = useState<Region>("All");
  const [showOptions, setShowOptions] = useState(false);

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

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

  const sortedCountries =
    region === "All"
      ? filteredResult
      : filteredResult.filter((country: Country) => country.region === region);
  return (
    <>
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row space-y-12 md:space-y-0 md:justify-between md:items-center">
        <div
          className={`${
            isDark ? "text-white bg-[#2B3743]" : "text-[#989898] bg-white"
          } max-w-xl md:w-xl shadow-md flex gap-2 items-center py-4 px-4 rounded-md`}
        >
          <FaSearch className={`${isDark ? "text-white" : "text-[#989898]"}`} />
          <input
            className="outline-none flex-1"
            placeholder="Search for a country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          aria-label="filter region"
          className={`w-48 shadow-md py-4 px-4 flex items-center gap-4 rounded-md cursor-pointer ${
            isDark ? "bg-[#2B3743] text-white" : "bg-white text-[#242527]"
          }`}
          onClick={() => setShowOptions(!showOptions)}
        >
          Filter by Region <MdKeyboardArrowUp />
        </button>
        {showOptions && (
          <ul
            className={`absolute right-0 top-16 z-50 w-48 rounded-md back-box-shadow py-4 px-4 space-y-1.5 ${
              isDark ? "bg-[#2B3743] text-white" : "bg-white text-[#242527]"
            }`}
          >
            {regions.map((reg) => (
              <li
                key={reg}
                className={`cursor-pointer`}
                onClick={() => {
                  setRegion(reg as Region);
                  setShowOptions(false);
                }}
              >
                {reg}
              </li>
            ))}
          </ul>
        )}
      </section>
      {debouncedSearch && !filteredResult.length ? (
        <section className="max-w-7xl mx-auto mt-8">
          <p>Oops! No result found...</p>
        </section>
      ) : (
        <Countries countries={sortedCountries} />
      )}
    </>
  );
};

export default Home;
