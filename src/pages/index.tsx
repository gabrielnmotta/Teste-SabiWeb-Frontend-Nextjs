import type { NextPage } from "next";
import UserAccess from "./userAccess";

const Login: NextPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="bg-neutral-0 flex h-full">
        <UserAccess />
      </div>
    </div>
  );
};

export default Login;
