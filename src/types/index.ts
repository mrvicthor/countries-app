export type Country = {
  name: CountryName;
  population: number;
  region: string;
  capital: string[];
  borders: string[];
  continents: string[];
  flags: Flag;
  ccn3: string;
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      symbol: string;
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
};

type CountryName = {
  common: string;
  nativeName: NativeName;
  official: string;
};

type Flag = {
  alt: string;
  png: string;
  svg: string;
};

type NativeName = {
  official: string;
};

export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "All";
