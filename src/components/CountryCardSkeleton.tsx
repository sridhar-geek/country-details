import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";


const CountryCardSkeleton = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 rounded-md p-10 pl-20 sm:pl-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="cursor-pointer max-w-[300px] h-[350px]">
          <CardHeader className="relative h-44">
            <Skeleton className="h-full w-full object-cover" />
          </CardHeader>
          <CardContent>
            <Skeleton className="mt-7 mb-3 h-4 w-[250px]" />
            <Skeleton className="mt-7 mb-3 h-4 w-[200px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CountryCardSkeleton;
