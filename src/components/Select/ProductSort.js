import Select from './Select';

export const ProductSortItems = [
  {
    id: 'product-a-z',
    name: 'Product (A to Z)',
    value: { sortBy: 'product_name', sortType: 'asc' }
  },
  {
    id: 'product-z-a',
    name: 'Product (Z to A)',
    value: { sortBy: 'product_name', sortType: 'desc' }
  },
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
  },
  {
    id: 'seller-low',
    name: 'No of Sellers (Lowest)',
    value: { sortBy: 'number_sellers', sortType: 'asc' }
  },
  {
    id: 'seller-hight',
    name: 'No of Sellers (Highest)',
    value: { sortBy: 'number_sellers', sortType: 'desc' }
  }
];

export default function ProductSort({ onChange }) {
  return (
    <Select
      items={ProductSortItems}
      selected={ProductSortItems[0]}
      onSelect={onChange}
    />
  );
}
