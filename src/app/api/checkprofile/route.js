import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/models/UserInfo";

export async function GET(req) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  console.log(email);

  const existed = await UserInfo.findOne({ email });

  console.log(existed);

  if (!existed) {
    return Response.json({
      status: "error",
      statusCode: 404,
      message: "profile not exits",
    });
  }

  return Response.json({
    status: "success",
    statusCode: 200,
    message: "Profile existed ",
  });
}
