import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserProvider from 'contexts/User';
import Stacked from 'layout/Stacked';
import BreadcrumbBlock from 'components/Breadcrumb/BreadcrumbBlock';
import Pagination from 'components/Pagination/Pagination';
import ProductGrid from 'components/Product/ProductGrid';
import ProductSort, { ProductSortItems } from 'components/Select/ProductSort';
import ProductService from 'services/product';

const Category = ({ location }) => {
  const history = useHistory();
  const { brandName } = useParams();
  const perPage = 20;
  const [currentPage, setCurrentPage] = useState(
    Number(new URLSearchParams(location.search).get('page')) || 1
  );
  const [sortOptions, setSortOptions] = useState(ProductSortItems[0].value);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const prodSvc = new ProductService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    fetchProducts(fetchProductParams({}));
  }, []);

  async function fetchProducts(params) {
    setIsLoaded(false);

    try {
      const { data } = await prodSvc.fetchMany(params);

      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoaded(true);
    }
  }

  function onSortChange(sortParams) {
    setSortOptions(sortParams);
    return fetchProducts(fetchProductParams(sortParams));
  }

  function onPaginate(page) {
    setCurrentPage(page);
    history.replace({ search: `?page=${page}` });
    return fetchProducts(fetchProductParams({ page }));
  }

  function fetchProductParams({
    page = currentPage,
    sortBy = sortOptions.sortBy,
    sortType = sortOptions.sortType
  }) {
    return {
      page,
      per_page: perPage,
      brand: brandName,
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
          <BreadcrumbBlock items={[{ name: brandName }]} />
          <div className="container pt-4 pb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="w-full sm:w-auto font-bold text-20px">
                Products ({total})
              </div>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="font-semibold text-sm">Sort by:</div>
                <ProductSort onChange={onSortChange} />
              </div>
            </div>
            <div className="mb-4">
              <ProductGrid loading={!isLoaded} products={products} />
            </div>
            <Pagination
              total={total}
              pageSize={perPage}
              currentPage={currentPage}
              onChange={onPaginate}
            />
          </div>
        </div>
      </Stacked>
    </UserProvider>
  );
};

export default Category;
