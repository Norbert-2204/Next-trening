"use client";

import Link from "next/link";
import type { cars } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import AddCar from "./AddCar";
import { useEffect, useState } from "react";

const GetCars = () => {
  // const data: cars[] = await prisma.cars.findMany();
  const [data, setData] = useState<cars[]>([]);

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6 items-center justify-center ">
      <Link href="/">
        <button className="bg-blue-600 rounded-xl p-1 cursor-pointer">
          Powrót na stronę główną
        </button>
      </Link>
      <AddCar />
      <div className="flex gap-6 items-center justify-center">
        {data.map((p: cars) => {
          return (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow-md w-48 flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold">Marka: {p.brand}</h3>
              <h3>Model: {p.model}</h3>
              <h3>Rok produkcji: {p.year}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GetCars;
