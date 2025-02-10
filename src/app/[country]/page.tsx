import Image from "next/image";
import BackButton from "@/components/BackButton";
import { Card } from "@/components/ui/card";
import { countryType, languages,currency } from "@/lib/types";

const SingleCountry = async ({ params }: { params: { country: string } }) => {
  const baseUrl = "http://localhost:3000/api"
  const data = await fetch(`${baseUrl}/countries`);
  const response = await data.json();

  const country = response.countries.filter(
    (data: countryType) => data.alpha2Code === params.country
  );

  const selectedCountry = country[0];

  const getBorderCountryNames = (
    borders: string[],
    countries: countryType[]
  ) => {
    return borders?.map((borderCode) => {
      const country = countries.find((c) => c.alpha3Code === borderCode);
      return country ? country.name : borderCode;
    });
  };

  const borderCountries = getBorderCountryNames(
    selectedCountry.borders,
    response.countries
  );

  const basicDetais = [
    {
      name: "Native Name",
      value: selectedCountry.nativeName,
    },
    {
      name: "Population",
      value: selectedCountry.population,
    },
    {
      name: "Region",
      value: selectedCountry.region,
    },
    {
      name: "Sub Region",
      value: selectedCountry.subregion,
    },
    {
      name: "Capital",
      value: selectedCountry.capital,
    },
  ];

  return (
    <main className="p-10 overflow-hidden">
      <BackButton />
      <section className="flex flex-col md:flex-row pt-10 gap-5 md:gap-16 lg:gap-20 xl:gap-28">
        <Image
          src={selectedCountry.flags.png}
          height={500}
          width={500}
          blurDataURL="https://flagcdn.com/w320/ax.png"
          alt="country flag"
        />
        <div>
          <p className="mb-4 mt-8  headingFont">{selectedCountry.name}</p>
          <div className="flex flex-col  gap-5 md:gap-16 lg:gap-20 xl:gap-28 md:flex-row">
            <aside>
              {basicDetais.map((detail) => {
                return (
                  <div
                    className="flex gap-2 mb-2 subHeadingFont"
                    key={detail.name}
                  >
                    <p className="subHeadingFont">{detail.name}: </p>
                    <p className="textFont">{detail.value}</p>
                  </div>
                );
              })}
            </aside>
            <aside>
              <div className="flex gap-2 mb-2 subHeadingFont">
                Top Level Domain:{" "}
                {selectedCountry.topLevelDomain?.map((domain: string) => {
                  return (
                    <p key={domain} className="textFont">
                      {domain}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-2 mb-2 subHeadingFont">
                Currency:{" "}
                {selectedCountry.currencies?.map((currency: currency) => {
                  return (
                    <p className="textFont" key={currency.code}>
                      {currency.name},
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-2 mb-2 subHeadingFont">
                Languages:{" "}
                {selectedCountry.languages?.map((language: languages) => {
                  return (
                    <p className="textFont" key={language.nativeName}>
                      {language.name},
                    </p>
                  );
                })}
              </div>
            </aside>
          </div>
          <div>
            <div className="flex flex-col gap-2 mt-4 md:flex-row md:items-start ">
              <p className="subHeadingFont text-nowrap">Border Countries: </p>
              <div className="flex gap-2 flex-wrap">
                {borderCountries?.map((borderCountry, index) => {
                  return (
                    <Card key={index} className="p-3 h-12 rounded-sm">
                      {borderCountry}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleCountry;
