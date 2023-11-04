import AdminForm from "@/partials/AdminForm";

const Page = () => {
  const data = {
    questions: [
      // { question: 'Ejemplo de pregunta', type: 'boolean' },
      // { question: 'Ejemplo 1 de pregunta', type: 'boolean' }
    ]
  }

  return (
    <AdminForm defaultData={data} />
  );
};

export default Page;
