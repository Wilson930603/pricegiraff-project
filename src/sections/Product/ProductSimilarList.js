import { useEffect, useState } from 'react';
import ProductGrid from 'components/Product/ProductGrid';
import ProductService from 'services/product';

export default function ProductSimilarList({ productId }) {
  const prodSvc = new ProductService();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchSimilar(productId);
  }, []);

  async function fetchSimilar(productId) {
    setIsLoaded(false);

    try {
      const { data } = await prodSvc.fetchSimilar(productId, { limit: 5 });
      setProducts(data.similar_products);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoaded(true);
    }
  }

  if (error || (isLoaded && !products.length)) {
    return '';
  }

  return (
    <div className="bg-white">
      <div className="container pt-12 pb-12">
        <div className="font-bold text-20px mb-3">Similar Products</div>
        <ProductGrid
          loading={!isLoaded}
          products={products}
          imageBorder={true}
          loadingRows={1}
        />
      </div>
    </div>
  );
}
