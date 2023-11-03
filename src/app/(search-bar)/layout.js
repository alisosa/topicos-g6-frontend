import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import NavBar from "@/components/NavBar";

const SearchBarLayout = async ({ children }) => {
  const { user } = await getServerSession(authOptions);

  return (
    <NavBar user={user}>
      {children}
    </NavBar>
  );
};

export default SearchBarLayout;