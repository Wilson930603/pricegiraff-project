import { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import images from 'assets/images';
import UserProvider from 'contexts/User';
import AlertProducts from 'components/Alert/AlertProducts';
import BreadcrumbBlock from 'components/Breadcrumb/BreadcrumbBlock';
import Input from 'components/Input/Input';
import Pagination from 'components/Pagination/Pagination';
import ProductConfirmDeleteModal from 'components/Product/ProductConfirmDeleteModal';
import ProductSort, { ProductSortItems } from 'components/Select/ProductSort';
import Stacked from 'layout/Stacked';
import AlertService from 'services/alert';
import ProductService from 'services/product';

export default function Alerts({ location }) {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const alertSvc = new AlertService();
  const productSvc = new ProductService();
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
    fetchAlerts(params({}));
  }, []);

  async function fetchAlerts(params = {}) {
    setIsLoaded(false);

    try {
      const { data } = await alertSvc.fetchMany(params);
      setProducts(data.product_alerts);
      setTotal(data.total);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  }

  async function removeAlert(productId) {
    try {
      await productSvc.removeAlert(productId);
      setProducts(products.filter((p) => p.id !== productId));
    } catch (err) {
      alert(err.message);
    }
  }

  function onPaginate(page) {
    setCurrentPage(page);
    history.replace({ search: `?keyword=${currentKeyword}&page=${page}` });
    return fetchAlerts(params({ page }));
  }

  function onSortChange(sortParams) {
    setSortOptions(sortParams);
    return fetchAlerts(params(sortParams));
  }

  function onKeywordChange(keyword) {
    setCurrentKeyword(keyword);
    history.replace({ search: `?keyword=${keyword}&page=${currentPage}` });
    return fetchAlerts(params({ keyword }));
  }

  function onDelete(product) {
    setCurrentProduct(product);
    setOpenModal(true);
  }

  function onConfirmDelete() {
    setOpenModal(false);
    return removeAlert(currentProduct.id);
  }

  function onCloseModal() {
    setOpenModal(false);
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
            {products.length || !isLoaded ? (
              <>
                <div className="mb-4">
                  <AlertProducts
                    loading={!isLoaded}
                    products={products}
                    onDelete={onDelete}
                  />
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
        <ProductConfirmDeleteModal
          product={currentProduct}
          open={openModal}
          onClose={onCloseModal}
          onConfirm={onConfirmDelete}
        />
      </Stacked>
    </UserProvider>
  );
}
