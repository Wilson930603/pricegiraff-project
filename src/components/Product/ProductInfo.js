import { classNames } from 'helpers';

export default function ProductInfo({ product }) {
  function gridItem(key, value, primary = false) {
    return (
      <>
        <div className="grid grid-cols-4 gap-4 text-13px my-4">
          <div className="col-span-1 font-normal">{key}</div>
          <div
            className={classNames(
              'col-span-3 font-normal',
              primary && 'text-primary'
            )}
          >
            {value}
          </div>
        </div>
        <hr />
      </>
    );
  }

  return (
    <div className="bg-white pt-8 pb-10">
      <div className="container">
        <div className="font-bold text-14px md:text-20px mb-2 md:mb-5">Product Info</div>
        <div className="md:pl-4">
          <div className="font-normal text-sm mb-6 md:mb-4">
            Lowest price for {product.product_name} is ${product.min_price}
          </div>
          <div className="font-bold mb-1">Product</div>
          {gridItem('Product Name', product.product_name)}
          {product.brand && gridItem('Brand', product.brand, true)}
        </div>
      </div>
    </div>
  );
}
