import { useEffect, useState } from "react";
import Principal from "../components/DataComponents/Principal";

const UserAccess = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Principal />
    </>
  );
};

export default UserAccess;
