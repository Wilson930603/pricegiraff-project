import { Component } from 'react';
import ProductCard from './ProductCard';
import ProductGridLoading from './ProductGridLoading';

export default class ProductGrid extends Component {
  constructor({ imageBorder = false, loadingRows = 2 }) {
    super();
    this.imageBorder = imageBorder;
    this.loadingRows = loadingRows;
  }

  render() {
    const { loading, products } = this.props;
    const listProducts = products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        imageBorder={this.imageBorder}
      />
    ));

    if (loading) {
      return <ProductGridLoading loadingRows={this.loadingRows} />;
    }

    return (
      !!products.length && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-14px gap-y-5 md:gap-5 lg:gap-22px">
          {listProducts}
        </div>
      )
    );
  }
}
