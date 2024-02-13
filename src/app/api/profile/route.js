import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  const data = await req.json();
  console.log("p_route_put_data =>", data);
  const { _id, name, image, ...otherUserInfo } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    filter = { email };
  }

  const user = await User.findOne(filter);
  await User.updateOne(filter, { name, image });
  await UserInfo.findOneAndUpdate({ email: user.email }, otherUserInfo, {
    upsert: true,
  });

  return Response.json(true);
}

export async function GET(req) {
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  let filterUser = {};
  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(authOptions);
    console.log("profile-route", session);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    filterUser = { email };
  }

  const user = await User.findOne(filterUser).lean();
  if (user) {
    console.log("user present=>", user);
  } else {
    console.log("no user =>", user);
  }
  const userInfo = await UserInfo.findOne({ email: user.email }).lean();

  return Response.json({ ...user, ...userInfo });
}
