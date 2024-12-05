import ProductCardLoading from './ProductCardLoading';

export default function ProductGridLoading({ loadingRows = 2 }) {
  const noCards = 5 * loadingRows;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-14px gap-y-5 md:gap-5 lg:gap-22px">
      {Array.from({ length: noCards }).map((_, index) => (
        <ProductCardLoading key={index} />
      ))}
    </div>
  );
}
