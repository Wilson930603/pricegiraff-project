import { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import images from 'assets/images';
import UserProvider from 'contexts/User';
import BreadcrumbBlock from 'components/Breadcrumb/BreadcrumbBlock';
import Input from 'components/Input/Input';
import Pagination from 'components/Pagination/Pagination';
import ProductGrid from 'components/Product/ProductGrid';
import ProductSort, { ProductSortItems } from 'components/Select/ProductSort';
import Stacked from 'layout/Stacked';
import FavoriteService from 'services/favorite';

export default function Favorites({ location }) {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const favoriteSvc = new FavoriteService();
  const perPage = 10;
  const [currentKeyword, setCurrentKeyword] = useState(
    new URLSearchParams(location.search).get('keyword') || ''
  );
  const [currentPage, setCurrentPage] = useState(
    Number(new URLSearchParams(location.search).get('page')) || 1
  );
  const [sortOptions, setSortOptions] = useState(ProductSortItems[0].value);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    fetchFavorites(params({}));
  }, []);

  async function fetchFavorites(params = {}) {
    setIsLoaded(false);

    try {
      const { data } = await favoriteSvc.fetchMany(params);
      setProducts(
        data.product_favorites.map((prod) => ({ is_favor: true, ...prod }))
      );
      setTotal(data.total);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  }

  function onPaginate(page) {
    setCurrentPage(page);
    history.replace({ search: `?keyword=${currentKeyword}&page=${page}` });
    return fetchFavorites(params({ page }));
  }

  function onSortChange(sortParams) {
    setSortOptions(sortParams);
    return fetchFavorites(params(sortParams));
  }

  function onKeywordChange(keyword) {
    setCurrentKeyword(keyword);
    history.replace({ search: `?keyword=${keyword}&page=${currentPage}` });
    return fetchFavorites(params({ keyword }));
  }

  function params({
    keyword = currentKeyword,
    page = currentPage,
    sortBy = sortOptions.sortBy,
    sortType = sortOptions.sortType
  }) {
    return {
      keyword,
      page,
      per_page: perPage,
      sort_by: sortBy,
      sort_type: sortType
    };
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <UserProvider>
      <Stacked>
        <div className="min-h-screen bg-grey-background">
          <BreadcrumbBlock items={[{ name: 'My Favorites' }]} />
          <div className="container pt-4 pb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="w-full sm:w-auto md:min-w-320px">
                <Input
                  placeholder="Search your items"
                  icon={images.SearchIcon}
                  value={currentKeyword}
                  onChange={onKeywordChange}
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="font-semibold text-sm">Sort by:</div>
                <ProductSort onChange={onSortChange} />
              </div>
            </div>
            {products.length ? (
              <>
                <div className="mb-4">
                  <ProductGrid loading={!isLoaded} products={products} />
                </div>
                <Pagination
                  total={total}
                  pageSize={perPage}
                  currentPage={currentPage}
                  onChange={onPaginate}
                />
              </>
            ) : (
              <div className="text-center max-w-screen-sm mx-auto">
                <div className="max-w-44px mx-auto mb-2">
                  <img src={images.PriceGiraffeLogo} alt="logo" />
                </div>
                <div className="font-semibold text-20px mb-2">
                  Oops! It's empty here!
                </div>
                <div className="font-normal text-sm text-dark">
                  Fill this page with your favourite products. It’s easy: find a
                  product you like, click the heart icon and it’ll be added
                  here.
                </div>
              </div>
            )}
          </div>
        </div>
      </Stacked>
    </UserProvider>
  );
}
