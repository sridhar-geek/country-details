"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Props } from "./SearchInput";

const Filters = ({ updateFilters,region }:Props) => {

  const handleRegionChange = (value:string) => {
    updateFilters("region", value)
  };

  return (
    <Select onValueChange={handleRegionChange} value={region}>
      <SelectTrigger className="w-[200px] p-7 rounded-sm bg-chart-5 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Filter by region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">None</SelectItem>
        <SelectItem value="Asia">Asia</SelectItem>
        <SelectItem value="Africa">Africa</SelectItem>
        <SelectItem value="Americas">Americas</SelectItem>
        <SelectItem value="Europe">Europe</SelectItem>
        <SelectItem value="Polar">Polar</SelectItem>
        <SelectItem value="Oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Filters;
