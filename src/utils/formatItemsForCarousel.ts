import { breakpoints } from "~/hooks/useResponsive";

const organizeItemsByBreakpoints = () => {
  const { sm, md, lg } = breakpoints;
  if (typeof window === 'undefined') return 4

  // if (window.innerWidth < parseInt(sm)) {
  //   return ;
  if (window.innerWidth < parseInt(md)) {
    return 2;
  } else if (window.innerWidth < parseInt(lg)) {
    return 3;
  } else {
    return 4;
  }
}

export function distributeItemsInCarouselColumns<T>(products: T[]): T[][] {
  const columns: number = organizeItemsByBreakpoints();
  const chunk = (arr: T[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return chunk(products, columns);
}