"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export type Props = {
  updateFilters: (key: "region" | "searchTerm", val: string) => void;
  region?: string;
  searchTerm?: string;
};

const SearchInput = ({ updateFilters, searchTerm }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    updateFilters("searchTerm", event.target.value);
  };

  return (
    <div className="relative w-full md:w-1/3 rounded-sm focus:ring-0 focus:ring-offset-0 outline-none focus:outline-none bg-card ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Search className=" h-4 w-6 text-muted-foreground" />
      </span>
      <Input
        type="search"
        value={searchTerm || inputValue}
        onChange={handleSearchChange}
        placeholder="Search for a country..."
        className="p-6 pl-16  rounded-sm focus:ring-0 focus:ring-offset-0 outline-none focus:outline-none bg-card"
      />
    </div>
  );
};

export default SearchInput;
