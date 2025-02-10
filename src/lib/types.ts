export type languages = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type currency = {
  code: string;
  name: string;
  symbol: string;
};

export type countryType = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: number;
  flags: { svg: string; png: string };
  currencies: currency[];
  languages:languages[];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: { acronym: string; name: string };

  cioc: string;
  independent: boolean;
};
