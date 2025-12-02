import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <h1>Sklep</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <h3>Produkty</h3>
            <Link href="/products">
              <button className="bg-blue-600 rounded-xl p-1 min-w-[150px] cursor-pointer">
                Zobacz produkty
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <h3>Samochody</h3>
            <Link href="/cars">
              <button className="bg-blue-600 rounded-xl p-1 min-w-[150px] cursor-pointer">
                Zobacz samochody
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
