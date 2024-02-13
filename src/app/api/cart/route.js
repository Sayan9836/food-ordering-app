import mongoose from "mongoose";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { UserInfo } from "@/models/UserInfo";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const { product } = await req.json();
  console.log(product);
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  console.log("cart route =>", userEmail);

  const user = await UserInfo.findOne({ email: userEmail });

  if (!user) {
    return Response.json({
      status: "error",
      statusCode: 404,
      message: "user not found",
    });
  }

  const updatedUser = await UserInfo.findOneAndUpdate(
    { email: userEmail },
    {
      cartProducts: [...user.cartProducts, product],
    },
    {
      new: true,
    },
  );

  console.log("user ->", updatedUser.cartProducts);

  return Response.json({
    status: "sucess",
    statusCode: 200,
    products: updatedUser.cartProducts,
  });
}

export async function DELETE(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  console.log(_id);

  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const user = await UserInfo.findOneAndUpdate(
    { email },
    {
      $pull: { cartProducts: { _id: _id } },
    },
    {
      new: true,
    },
  );

  console.log("cart-remaining=> ", user.cartProducts);
  return Response.json({
    status: "success",
    statusCode: 200,
    remainings: user.cartProducts,
  });
}

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const products = await UserInfo.findOne({ email });

  console.log("cart-route=>", products);

  return Response.json({
    products: products.cartProducts,
  });
}
