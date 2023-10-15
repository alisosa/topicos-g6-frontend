import { resultsPerPage } from "@/constants";

const getOffset = (pageNum = 1) => ((pageNum - 1) * resultsPerPage)

const fromOffsetToPageNum = (offset = 0) => {
  if (offset == 0) return 1
  return (offset / resultsPerPage) + 1
}

export { getOffset, fromOffsetToPageNum }