// import { Product } from "../_types/product";
import AddProduct from "./addProduct";
import Link from "next/link";
import { prisma } from "../lib/prisma";
import type { inventory } from "../generated/prisma";

const GetProduct = async () => {
  // const response = await fetch("http://localhost:3000/api/products");
  const data: inventory[] = await prisma.inventory.findMany();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch products");
  // }
  // const data: Product[] = await response.json();
  return (
    <div className="flex flex-col gap-6 p-6 items-center justify-center ">
      <Link href="/">
        <button className="bg-blue-600 rounded-xl p-1 cursor-pointer">
          Powrót na stronę główną
        </button>
      </Link>
      <AddProduct />
      <div className="flex gap-6 items-center justify-center">
        {data.map((p: inventory) => {
          return (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow-md w-48 flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold">Nazwa: {p.product_name}</h3>
              <h3>Cena: {p.price.toString()} zł</h3>
              <h3>Dostępna ilość: {p.quantity}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GetProduct;
