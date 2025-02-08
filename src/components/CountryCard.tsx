"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CountryCard = ({ props }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/${props.alpha2Code}`)}
      className="cursor-pointer max-w-[300px] h-[350px]"
    >
      <CardHeader className="relative h-44">
        <Image
          src={props.flags.png}
          fill
          style={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
          blurDataURL="https://flagcdn.com/w320/ax.png"
          alt="country flag"
        />
      </CardHeader>
      <CardContent>
        <h2 className="mt-7 mb-3 headingFont">{props.name}</h2>
        <p className="subHeadingFont">
          Population:{" "}
          <span className="textFont">{props.population}</span>
        </p>
        <p className="subHeadingFont">
          Region: <span className="textFont">{props.region}</span>
        </p>
        <p className="subHeadingFont">
          Captial: <span className="textFont">{props.capital}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
