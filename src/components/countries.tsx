import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../context/theme.context";
import type { Country } from "../types";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../utils";
import { Link } from "react-router-dom";

type CountriesProp = {
  countries: Country[];
};

const Countries = ({ countries }: CountriesProp) => {
  const { isDark } = useContext(ThemeContext) as ThemeContextType;

  console.log(countries);
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12"
    >
      {countries.map((country: Country, index: number) => (
        <Link key={country.name.common + index} to={`/country/${country.ccn3}`}>
          <motion.div
            variants={itemVariants}
            className={`rounded-md ${
              isDark ? "bg-[#2B3743] text-white" : "bg-white text-[#242527]"
            } overflow-hidden shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg`}
          >
            <img
              src={country.flags.svg}
              alt={`${country.name.common}-flag`}
              className="h-44 object-cover w-full"
            />
            <article className="pt-6 pb-12 px-4">
              <h2 className="font-bold text-2xl">{country.name.common}</h2>
              <div className="mt-5">
                <span className="capitalize">population</span>:{" "}
                <span className="font-light opacity-80">
                  {country.population}
                </span>
              </div>
              <div>
                <span>Region</span>:{" "}
                <span className="font-light opacity-80">{country.region}</span>
              </div>
              <div>
                <span>Capital</span>:{" "}
                <span className="font-light opacity-80">{country.capital}</span>
              </div>
            </article>
          </motion.div>
        </Link>
      ))}
    </motion.section>
  );
};

export default Countries;
