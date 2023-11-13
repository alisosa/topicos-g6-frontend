import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { roles } from "@/constants";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return (redirect('/login'));

  if (session.user.role == roles.proveedor) return (redirect('/providerForm'));

  return (redirect('/search'));
};

export default Home;
