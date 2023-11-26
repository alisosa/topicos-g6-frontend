import ProviderForm from "@/partials/ProviderForm";
import axios from "axios";
import {getServerSession} from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const Page = async () => {
    const { info: { accessToken } } = await getServerSession(authOptions);
    const { data } = await axios.get('http://localhost:8080/form/questions', { headers: { Authorization: accessToken } })


    return (
        <ProviderForm defaultData={data} />
    );
};

export default Page;
