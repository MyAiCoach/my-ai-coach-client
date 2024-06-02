import React from "react";
import { verifyJwtToken } from "@/app/libs/auth/verifyToken";
import Cookies from "universal-cookie";
import { LoginToken } from "@/app/contracts/token/LoginToken";
import { JWTPayload } from "jose";

const fromServer = async (): Promise<JWTPayload | null> => {
  const cookies = require("next/headers").cookies;
  const cookieStore = cookies();

  const { value: token } = cookieStore.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token ?? "");

  return verifiedToken;
};
export async function useAuth() {
  // Have also loading state to not show flickering to user
  const [auth, setAuth] = React.useState<JWTPayload | null>(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken: JWTPayload | null = await verifyJwtToken(token);

    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
