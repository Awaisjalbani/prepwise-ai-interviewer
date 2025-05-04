import { isAuthenticated } from "@/lib/action/auth.action";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const Authlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect("/");

  return <div>{children}</div>;
};

export default Authlayout;
