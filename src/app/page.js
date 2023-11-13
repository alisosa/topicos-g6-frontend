import { redirect } from "next/navigation";

const Home = async () => {
  return (redirect('/search'));
};

export default Home;
