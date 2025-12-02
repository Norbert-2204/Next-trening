"use client";

import React from "react";
import { NewCar } from "../_types/cars";

const AddCar = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const newCar: NewCar = {
      brand: formData.get("brand") as string,
      model: formData.get("model") as string,
      year: Number(formData.get("year")),
    };

    await fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCar),
    });

    form.reset();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Samochody</h1>
      <form
        className="flex flex-col gap-5 justify-center items-center p-4 "
        onSubmit={handleSubmit}
      >
        <input
          className="border border-grey-300 rounded p-1"
          type="text"
          name="brand"
          placeholder="Marka pojazdu"
        />
        <input
          className="border border-grey-300 rounded p-1"
          type="number"
          name="model"
          placeholder="Model"
        />
        <input
          className="border border-grey-300 rounded p-1"
          type="number"
          name="year"
          placeholder="Rok produkcji"
        />
        <button
          className="bg-blue-600 p-2 rounded cursor-pointer"
          type="submit"
        >
          Dodaj produkt
        </button>
      </form>
    </div>
  );
};

export default AddCar;
