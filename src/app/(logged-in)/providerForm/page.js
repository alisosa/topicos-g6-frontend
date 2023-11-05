import ProviderForm from "@/partials/ProviderForm";

const Page = () => {
    const data = {
        name: "Ana",
        rut: "23232332",
        email: "test@test.com",
        address: "direcc 1223",
        questions: [
            {
                question: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fames semper conubia ullamcorper posuere, leo fusce litora vestibulum urna. Dictumst rutrum varius eu nisi, tellus scelerisque imperdiet.",
            },
            {
                question: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fames semper conubia ullamcorper posuere, leo fusce litora vestibulum urna. Dictumst rutrum varius eu nisi, tellus scelerisque imperdiet.",
            },
            {
                question: "Lorem ipsum dolor sit amet consectetur adipiscing, elit fames semper conubia ullamcorper posuere, leo fusce litora vestibulum urna. Dictumst rutrum varius eu nisi, tellus scelerisque imperdiet.",
            }
        ]
    }

    return (
        <ProviderForm defaultData={data} />
    );
};

export default Page;
