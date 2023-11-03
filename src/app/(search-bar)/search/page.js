import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ProviderCard from "@/components/ProviderCard";
import DeresPagination from "@/components/DeresPagination";
import { fromOffsetToPageNum } from "@/helpers";
import axios from "axios";

const Page = async ({ searchParams }) => {
  // const {data} = await axios.get(`http://localhost:8080/search?${new URLSearchParams(searchParams)}`)
  //   console.log("resultado: ", data )
  const data = [
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' },
    { name: 'holi', rut: '431', score: '23', logo: 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000' }
  ]
  return (
    <Stack gap={4} width='100%'>
      <Grid container spacing={2}>
        {data.map((props, index) => (
          <Grid key={`provedor-${index}`} xs={4}>
            <ProviderCard {...props} />
          </Grid>
        ))}
      </Grid>
      <DeresPagination count={11} page={fromOffsetToPageNum(searchParams.offset)} />
    </Stack>
  );
};

export default Page;
