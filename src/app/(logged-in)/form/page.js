import AdminForm from "@/partials/AdminForm";
import axios from "axios";

const Page = async () => {
  // const data = {
  //   questions: [
  // { question: 'Ejemplo de pregunta', type: 'boolean' },
  // { question: 'Ejemplo 1 de pregunta', type: 'boolean' }
  //   ]
  // }
  const { data } = await axios.get('http://localhost:8080/form/questions');

  return (
    <AdminForm defaultData={data} />
  );
};

export default Page;
