import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
// import pool from "../../lib/db";

// używanie pool

// export async function GET() {
//   try {
//     const result = await pool.query("SELECT * FROM inventory");
//     return NextResponse.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Database error" }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { product_name, price, quantity } = body;
//     const result = await pool.query(
//       "INSERT INTO inventory (product_name, price, quantity) VALUES ($1, $2, $3) RETURNING *",
//       [product_name, price, quantity]
//     );
//     return NextResponse.json(result.rows[0], { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Database error" }, { status: 500 });
//   }
// }

export async function GET() {
  try {
    const products = await prisma.inventory.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { product_name, price, quantity } = body;

    const newProduct = await prisma.inventory.create({
      data: {
        product_name,
        price,
        quantity,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
