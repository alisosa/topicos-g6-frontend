'use client'
import { getOffset } from "@/helpers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const { Pagination } = require("@mui/material");

const DeresPagination = ({ currentUrl, ...props }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (_e, value) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('offset', getOffset(value));
    router.push(`${pathname}?${newSearchParams}`)
  };

  return (
    <Pagination
      {...props}
      sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }}
      onChange={handleChange}
    />
  );
};

export default DeresPagination;