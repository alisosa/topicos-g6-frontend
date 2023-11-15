import ProviderForm from "@/partials/ProviderForm";
import axios from "axios";

const Page = async () => {
    const { data } = await axios.get('http://localhost:8080/form/questions')

    return (
        <ProviderForm defaultData={data} />
    );
};

export default Page;
