import type { Country } from "../types";

type CountriesProp = {
  countries: Country[];
};

const Countries = ({ countries }: CountriesProp) => {
  console.log(countries);
  return <section>countries</section>;
};

export default Countries;
