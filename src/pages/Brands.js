import { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import images from 'assets/images';
import UserProvider from 'contexts/User';
import BreadcrumbBlock from 'components/Breadcrumb/BreadcrumbBlock';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import Stacked from 'layout/Stacked';

const BRANDS = [
  'Adidas',
  'Apple',
  'ASUS',
  'Audemars Piguet',
  'Bose',
  'Braun',
  'Canon',
  'Chicco',
  'D-Link',
  'Dell',
  'Dyson',
  'Enfagrow',
  'Epson',
  'HP',
  'Huawei',
  'Hublot',
  'JBL',
  'Lenovo',
  'LG',
  'Linksys',
  'Logitech',
  'MamyPoko ',
  'Medela',
  'Microsoft',
  'Munchkin ',
  'Nike',
  'Omega',
  'Omron',
  'Pampers',
  'Philips Avent',
  'Pigeon',
  'Rolex',
  'Samsung',
  'Seagate',
  'Skip Hop',
  'Sony',
  'TAG Heuer',
  'Tefal',
  'Thermos',
  'Under Armour',
  'Western Digital',
  'Xiaomi'
].map((name) => ({
  name,
  image: require(`assets/images/brands/${name.replace(/\W/g, '')}.png`).default
}));

export default function Brands({ location }) {
  const history = useHistory();
  const [keyword, setKeyword] = useState(
    new URLSearchParams(location.search).get('keyword') || ''
  );
  const sortOptions = [
    {
      id: 'brand-a',
      name: 'Brand (A to Z)',
      value: 'asc'
    },
    {
      id: 'brand-z',
      name: 'Brand (Z to A)',
      value: 'desc'
    }
  ];
  const [sortType, setSortType] = useState(sortOptions[0].value);
  const [brands, setBrands] = useState(
    sortBrands(searchBrands(keyword), sortType)
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  function sortBrands(brands, sortType) {
    const sortFn =
      sortType === 'asc'
        ? (a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1)
        : (a, b) => (b.toLowerCase() > a.toLowerCase() ? 1 : -1);
    return brands.sort((a, b) => sortFn(a.name, b.name));
  }

  function searchBrands(keyword) {
    if (!keyword) {
      return BRANDS;
    }

    return BRANDS.filter((brand) =>
      brand.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  function onSortChange(newSortType) {
    setSortType(newSortType);
    setBrands(sortBrands(brands, newSortType));
  }

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setBrands(sortBrands(searchBrands(keyword), sortType));
    history.replace({ search: keyword ? `?keyword=${keyword}` : '' });
  }

  function onInput(value) {
    onKeywordChange(value.trim());
  }

  return (
    <UserProvider>
      <Stacked>
        <BreadcrumbBlock items={[{ name: 'Popular Brand' }]} />
        <div className="container pt-4 pb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="w-full sm:w-auto md:min-w-320px">
              <Input
                placeholder="Search your brand"
                icon={images.SearchIcon}
                value={keyword}
                onInput={onInput}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="font-semibold text-sm">Sort by:</div>
              <Select
                items={sortOptions}
                selected={sortOptions[0]}
                onSelect={onSortChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-18px">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={`/brands/${brand.name.toLowerCase()}`}
                className="aspect-w-1 aspect-h-1 border border-grey-border rounded-10px"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="object-contain p-4"
                />
              </a>
            ))}
          </div>
        </div>
      </Stacked>
    </UserProvider>
  );
}
