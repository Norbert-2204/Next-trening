"use client";

import React from "react";
import { NewProduct } from "../_types/product";

const AddProduct = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const newProduct: NewProduct = {
      product_name: formData.get("name") as string,
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
    };

    console.log("Dodano produkt: ", newProduct);

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    form.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Produkty</h1>
      <form
        className="flex flex-col gap-5 justify-center items-center p-4 "
        onSubmit={handleSubmit}
      >
        <input
          className="border border-grey-300 rounded p-1"
          type="text"
          name="name"
          placeholder="Nazwa produktu"
        />
        <input
          className="border border-grey-300 rounded p-1"
          type="number"
          name="price"
          placeholder="Cena"
          step="0.01"
        />
        <input
          className="border border-grey-300 rounded p-1"
          type="number"
          name="quantity"
          placeholder="Ilość"
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

export default AddProduct;
