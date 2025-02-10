"use client";
import { useEffect, useState } from "react";
import CountryCard from "@/components/CountryCard";
import Filters from "@/components/Filters";
import SearchInput from "@/components/SearchInput";
import { useRouter, useSearchParams } from "next/navigation";
import { countryType } from "@/lib/types";
import CountryCardSkeleton from "@/components/CountryCardSkeleton";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState({
    isLoading: false,
    region: searchParams.get("region") || "",
    searchTerm: searchParams.get("search") || "",
  });

  const [allCountries, setAllCountries] = useState<countryType[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<countryType[]>([]);

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      setFilters((prev) => ({ ...prev, isLoading: true }));
      try {
        const data = await fetch(`api/countries`);
        const response = await data.json();
        setAllCountries(response.countries); // Store the original list
        setFilteredCountries(response.countries); // Also set the filtered list initially
      } finally {
        setFilters((prev) => ({ ...prev, isLoading: false }));
      }
    };
    fetchCountries();
  }, []);

  // Apply filters when filters change
  useEffect(() => {
    let filtered = [...allCountries]; // Always start from the original list

    if (filters.region && filters.region !== "none") {
      filtered = filtered.filter(
        (country) => country.region === filters.region
      );
    }

    if (filters.searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    setFilteredCountries(filtered); // Update the filtered state
  }, [filters.region, filters.searchTerm, allCountries]); // Depend on allCountries

  // Update URL params
  const updateUrl = (filters: { region: string; searchTerm: string }) => {
    const params = new URLSearchParams();
    if (filters.searchTerm) params.set("search", filters.searchTerm);
    if (filters.region && filters.region !== "none")
      params.set("region", filters.region);
    router.push(`?${params.toString()}`);
  };

  // Update filter values
  const updateFilter = (key: "region" | "searchTerm", value: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: value };
      setTimeout(() => updateUrl(newFilters), 0);
      return newFilters;
    });
  };

  return (
    <main>
      <section className="flex flex-col justify-start items-start gap-10 p-10 md:flex-row md:justify-between md:items-center">
        <SearchInput
          updateFilters={updateFilter}
          searchTerm={filters.searchTerm}
        />
        <Filters updateFilters={updateFilter} region={filters.region} />
      </section>
      {filters.isLoading ? (
        <CountryCardSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 rounded-md p-10 pl-20 sm:pl-10">
          {filteredCountries.map((country, index) => (
            <CountryCard key={index} props={country} />
          ))}
        </div>
      )}
    </main>
  );
}
