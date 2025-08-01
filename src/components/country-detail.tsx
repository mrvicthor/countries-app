import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { ThemeContext, type ThemeContextType } from "../context/theme.context";
import { useContext } from "react";
import type { Country } from "../types";
const CountryDetail = () => {
  const { id } = useParams();
  const { isDark } = useContext(ThemeContext) as ThemeContextType;

  const { isPending, error, data } = useQuery({
    queryKey: ["countryData"],
    queryFn: () =>
      fetch(`https://restcountries.com/v3.1/alpha?codes=${id}`).then((res) =>
        res.json()
      ),
  });
  const details: Country = data[0];

  return (
    <section className="max-w-7xl mx-auto space-y-16 pb-4 md:pb-0">
      {isPending && <h2>loading.....</h2>}
      {error && <h2>Error fetching data</h2>}

      <Link
        to="/"
        className={`capitalize flex items-center justify-center py-2 gap-3 w-32 ${
          isDark
            ? "bg-[#2c3743] text-white"
            : "bg-white text-[#4F5251] back-box-shadow"
        } rounded-md`}
      >
        <BiArrowBack /> back
      </Link>
      <section className="grid md:grid-cols-2 gap-20">
        <img
          src={details.flags.svg}
          alt={`${details.name.common} flag`}
          className=""
        />{" "}
        <article className="pt-12 ">
          <h2 className="font-semibold text-lg">{details.name.common}</h2>
          <div className="flex justify-between mt-8">
            <ul className="flex flex-col gap-2">
              <li>
                <span className="capitalize font-normal">native name</span>:{" "}
                <span className="font-light opacity-70">
                  {details.name.official ?? "N/A"}
                </span>
              </li>
              <li>
                <span className="capitalize font-normal">population</span>:{" "}
                <span className="font-light opacity-70">
                  {details.population ?? "N/A"}
                </span>
              </li>
              <li>
                <span className="capitalize font-normal">region</span>:{" "}
                <span className="font-light opacity-70">
                  {details.region ?? "N/A"}
                </span>
              </li>
              <li>
                <span className="capitalize font-normal">sub region</span>:{" "}
                <span className="font-light opacity-70">
                  {details.subregion ?? "N/A"}
                </span>
              </li>
              <li>
                <span className="capitalize font-normal">capital</span>:{" "}
                <span className="font-light opacity-70">
                  {details.capital[0] ?? "N/A"}
                </span>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>
                <span className="capitalize font-normal">top level domain</span>
                : <span className="font-light opacity-70">{details.tld}</span>
              </li>
              <li>
                <span className="capitalize font-normal">currencies</span>:{" "}
                <span className="font-light opacity-70">
                  {Object.values(details.currencies)[0].name}
                </span>
              </li>
              <li>
                <span className="capitalize font-normal">languages</span>:{" "}
                <span className="font-light opacity-70">
                  {Object.values(details.languages).join(", ") ?? "N/A"}
                </span>
              </li>
            </ul>
          </div>
          {details.borders && (
            <div className="mt-6 flex gap-1 items-center">
              <p className="capitalize font-normal">border countries:</p>{" "}
              <div className="flex flex-wrap gap-2">
                {details.borders.slice(0, 3)?.map((border) => (
                  <span
                    key={border}
                    className={` rounded-md px-4 py-1 text-sm back-box-shadow ${
                      isDark
                        ? "bg-[#2c3743] text-white"
                        : "bg-white text-[#4F5251]"
                    }`}
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>
    </section>
  );
};

export default CountryDetail;
