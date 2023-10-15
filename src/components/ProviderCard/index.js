import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Image from 'next/image';

const ProviderCard = ({ nombre, rut, puntaje, logo }) => {
  return (
    <Card>
      <CardActionArea>
        <Box width='100%' height={140} position='relative'>
          <Image
            alt='Logo del Provedor'
            src={logo || 'https://dynamic.brandcrowd.com/asset/logo/3cfd6b07-267e-456b-9bb7-d5029cc6bb52/logo-search-grid-1x?logoTemplateVersion=1&v=637654796499570000'}
            style={{ objectFit: 'contain' }}
            sizes='100%, 100%'
            fill
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
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
          <Typography variant='body1'>
            Score:
            &nbsp;
            {(
              <Typography component='span' variant='body2'>
                {puntaje}
              </Typography>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProviderCard;