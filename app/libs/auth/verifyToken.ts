import { LoginToken } from "@/app/contracts/token/LoginToken";
import { jwtVerify } from "jose";

const getJwtSecretKey = () => {
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT_SECRET_KEY is not defined");
  }
  return new TextEncoder().encode(secretKey);
};
export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    return null;
  }
}
