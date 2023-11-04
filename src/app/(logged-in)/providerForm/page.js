import ProviderForm from "@/partials/ProviderForm";

const Page = () => {
    const data = {
        name: "Ana",
        rut: "23232332",
        email: "test@test.com",
        address: "direcc 1223",
        questions: [
            {
                question: "pregunta 1",
            },
            {
                question: "pregunta 2",
            },
            {
                question: "pregunta 3",
            }
        ]
    }

    return (
        <ProviderForm defaultData={data}/>
    );
};

export default Page;
