import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserProvider from 'contexts/User';
import Stacked from 'layout/Stacked';
import BreadcrumbBlock from 'components/Breadcrumb/BreadcrumbBlock';
import Pagination from 'components/Pagination/Pagination';
import ProductGrid from 'components/Product/ProductGrid';
import ProductService from 'services/product';

const Search = ({ location }) => {
  const prodSvc = new ProductService();
  const history = useHistory();
  const perPage = 20;
  const [currentPage, setCurrentPage] = useState(
    Number(new URLSearchParams(location.search).get('page')) || 1
  );
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const keyword = new URLSearchParams(location.search).get('keyword');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (!keyword) {
      setProducts([]);
      setIsLoaded(true);
      return;
    }

    fetchProducts({});
  }, []);

  async function fetchProducts({ page = currentPage }) {
    setIsLoaded(false);

    try {
      const { data } = await prodSvc.fetchMany({ keyword, page, perPage });
      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoaded(true);
    }
  }

  function onPaginate(page) {
    setCurrentPage(page);
    history.replace({ search: `?keyword=${keyword}&page=${page}` });
    return fetchProducts({ page });
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <UserProvider>
      <Stacked>
        <div className="min-h-screen bg-grey-background">
          <BreadcrumbBlock items={[{ name: 'Search' }]} />
          {keyword && (
            <div className="bg-white">
              <div className="container h-80px flex items-center">
                <div className="font-semibold text-20px">
                  You searched for "{keyword}"
                </div>
              </div>
            </div>
          )}
          <div className="">
            <div className="container py-8">
              <div className="font-bold text-20px mb-22px">
                Products ({total})
              </div>
              <div className="mb-4">
                <ProductGrid loading={!isLoaded} products={products} />
              </div>
              {total && (
                <Pagination
                  total={total}
                  pageSize={perPage}
                  currentPage={currentPage}
                  onChange={onPaginate}
                />
              )}
            </div>
          </div>
        </div>
      </Stacked>
    </UserProvider>
  );
};

export default Search;
