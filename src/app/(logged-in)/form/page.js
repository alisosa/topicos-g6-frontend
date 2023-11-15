import AdminForm from "@/partials/AdminForm";
import axios from "axios";

const Page = async () => {
  const { data } = await axios.get('http://localhost:8080/form/questions');

  return (
    <AdminForm defaultData={data} />
  );
};

export default Page;
