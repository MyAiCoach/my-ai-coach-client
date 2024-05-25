import React from "react";
import { verifyJwtToken } from "@/app/libs/auth/verifyToken";
import Cookies from "universal-cookie";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  const cookieStore = cookies();

  const { value: token } = cookieStore.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token ?? "");
  return verifiedToken;
};
export function useAuth() {
  // Have also loading state to not show flickering to user
  const [auth, setAuth] = React.useState(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken: any = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
