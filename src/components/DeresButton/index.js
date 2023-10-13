'use client'

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import LoadingButton from '@mui/lab/LoadingButton';

const DeresButton = ({ text, url, onClick, variant, animated, bold, loading, ...props }) => {
  const router = useRouter();

  const onClickMethod = () => {
    if (onClick) {
      return onClick();
    }
    if (url) {
      return router.push(url);
    }
    return null;
  }

  return (
    <LoadingButton loading={loading} onClick={onClickMethod} variant={variant} {...props}>
      <Typography fontWeight={bold ? 700 : 400}>
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default DeresButton;