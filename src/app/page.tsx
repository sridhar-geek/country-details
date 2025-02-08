"use client";
import { Suspense, useEffect, useState } from "react";
import CountryCard from "@/components/CountryCard";
import Filters from "@/components/Filters";
import SearchInput from "@/components/SearchInput";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  const params = useSearchParams();
  const router = useRouter();

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState(params.get("region") || "none");
  const [searchTerm, setSearchTerm] = useState(params.get("search") || "");

  // Fetch the countries when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
      const data = await fetch(`${baseUrl}/countries`);
      const response = await data.json();
      setCountries(response.countries);
      setFilteredCountries(response.countries);
    };
    fetchCountries();
  }, []);

  // Filter the countries by region or search term
  useEffect(() => {
    let filtered = countries;

    // Apply region filter
    if (region && region !== "none") {
      filtered = filtered.filter((country) => country.region === region);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, searchTerm, countries]);

  return (
    <main>
      <section className="flex flex-col justify-start items-start gap-10 p-10 md:flex-row md:justify-between md:items-center">
        <SearchInput setSearchTerm={setSearchTerm} />
        <Filters setRegion={setRegion} />
      </section>
      <Suspense fallback={<Loading />}>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 rounded-md p-10 pl-20 sm:pl-10">
          {filteredCountries.map((country, index) => (
            <CountryCard key={index} props={country} />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
