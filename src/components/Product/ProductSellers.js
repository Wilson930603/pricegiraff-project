import { useEffect, useState } from 'react';
import images from 'assets/images';
import Select from 'components/Select/Select';
import ProductService from 'services/product';
import { platformInfo } from 'helpers';

export default function ProductSellers({ product }) {
  const prodSvc = new ProductService();
  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sortItems = [
    {
      id: 'price-low',
      name: 'Price (Lowest to Highest)',
      value: { sortBy: 'price', sortType: 'asc' }
    },
    {
      id: 'price-hight',
      name: 'Price (Highest to Lowest)',
      value: { sortBy: 'price', sortType: 'desc' }
    },
    {
      id: 'platform-a-z',
      name: 'Platform (A to Z)',
      value: { sortBy: 'platform', sortType: 'asc' }
    },
    {
      id: 'platform-z-a',
      name: 'Platform (Z to A)',
      value: { sortBy: 'platform', sortType: 'desc' }
    }
  ];
  const [sortValue, setSortValue] = useState(sortItems[0].value);

  useEffect(() => {
    fetchSellers(product.id);
  }, []);

  async function fetchSellers(productId) {
    setIsLoaded(false);

    try {
      const { data } = await prodSvc.fetchSellers(productId, { limit: 100 });
      setSellers(sortSellers(data.sellers));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  }

  function sortSellers(sellers) {
    return sellers.sort(sortFn());
  }

  function sortFn() {
    if (sortValue.sortBy === 'price') {
      if (sortValue.sortType === 'asc') {
        return (a, b) => a.avg_price - b.avg_price;
      }

      return (a, b) => b.avg_price - a.avg_price;
    }

    if (sortValue.sortType === 'asc') {
      return (a, b) => platformName(a) > platformName(b) ? 1 : -1;
    }

    return (a, b) => platformName(b) > platformName(a) ? 1 : -1;
  }

  function platformName(product) {
    return product.platform && product.platform.name;
  }

  function onSortChange(sortValue) {
    setSortValue(sortValue);
    setSellers(sortSellers(sellers));
  }

  function sellerItem(seller) {
    const platform = seller.platform && seller.platform.name;

    return (
      <div
        key={seller.id}
        className="bg-white py-10px md:p-10px md:rounded-lg flex items-center gap-8 md:gap-4 mb-4"
      >
        <div className="flex-none w-24 h-24 md:w-60px md:h-60px rounded-md border border-grey-border">
          <img
            src={product.thumbnail || images.Placeholder}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-grow grid grid-cols-12 items-center gap-2">
          <div className="col-span-full md:col-span-5 lg:col-span-6 line-clamp-2 font-semibold text-12px md:text-sm">
            {product.product_name}
          </div>
          <div className="col-span-full md:col-span-7 lg:col-span-6 max-w-160px md:max-w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:pl-12 lg:pl-24">
            <div className="font-bold text-primary text-12px md:text-15px">
              ${seller.avg_price}
            </div>
            <div className="max-w-80px max-h-24">
              <img src={platformInfo(product).logo} alt={platform} />
            </div>
            <div className="md:flex-none w-full md:w-auto text-right">
              <a
                href={seller.external_link}
                target="_blank"
                rel="noreferrer"
                className="block md:inline-block px-6 py-2 md:py-3 rounded md:rounded-lg bg-primary font-bold text-white text-center text-12px md:text-13px"
              >
                Visit Store
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white md:bg-grey-background pt-8 pb-14">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="font-bold text-14px md:text-20px">
            Price comparison ({product.number_sellers})
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-10px md:text-sm">Sort by:</span>
            <Select
              items={sortItems}
              selected={sortItems[0]}
              onSelect={onSortChange}
            />
          </div>
        </div>
        {sellers.map((seller) => sellerItem(seller))}
      </div>
    </div>
  );
}
