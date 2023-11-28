import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';

const ProviderCard = ({ name, rut, score, logo, category = 'textil' }) => {
  const logoUrl = logo && (logo.includes("https://") || logo.includes("http://")) ? logo : null;

  return (
    <Card>
      <Box width='100%' height={140} position='relative'>
        <Image
          alt='Logo del Provedor'
          src={logoUrl || 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000'}
          style={{ objectFit: 'contain' }}
          sizes='100%, 100%'
          fill
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant='body1'>
          RUT:
          &nbsp;
          {(
            <Typography component='span' variant='body2'>
              {rut}
            </Typography>
          )}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body1' width='fit-content'>
            Puntaje:
            &nbsp;
            {(
              <Typography component='span' variant='body2'>
                {score}
              </Typography>
            )}
          </Typography>
          <Typography variant='body1' width='fit-content'>
            Rubro:
            &nbsp;
            {(
              <Typography component='span' variant='body2'>
                {category}
              </Typography>
            )}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
