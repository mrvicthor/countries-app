export type Country = {
  name: CountryName;
  population: number;
  region: string;
  capital: string[];
  borders: string[];
  continents: string[];
  flags: Flag;
};

type CountryName = {
  common: string;
};

type Flag = {
  alt: string;
  png: string;
  svg: string;
};
