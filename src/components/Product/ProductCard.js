import images from 'assets/images'
import { classNames } from 'helpers';
import ProductFavorite from './ProductFavorite';
import ProductPlatformLogo from './ProductPlatformLogo';

export default function ProductCard({ product, imageBorder = false }) {
  return (
    <a href={'/products/' + product.id}>
      <div className="relative max-w-screen-sm h-full bg-white rounded-lg">
        <div
          className={classNames(
            'aspect-w-1 aspect-h-1 bg-white',
            imageBorder
              ? 'rounded-lg border border-grey-border'
              : 'rounded-t-lg'
          )}
        >
          <img
            src={product.thumbnail || images.Placeholder}
            alt=""
            className={classNames(
              'object-cover',
              imageBorder ? 'rounded-lg' : 'rounded-t-lg'
            )}
          />
        </div>
        <div className="p-18px">
          <div className="font-semibold text-13px line-clamp-2 mb-5px">
            {product.product_name}
          </div>
          <div className="font-bold text-15px text-primary mb-21px">
            From ${product.min_price || 0}
          </div>
          <div className="flex items-center justify-between gap-2">
            {product.number_sellers && (
              <div className="flex-grow text-13px">
                Compare {product.number_sellers} Prices
              </div>
            )}
            <ProductPlatformLogo
              product={product}
              sizeClass="max-w-64px max-h-27px"
            />
          </div>
        </div>
        <ProductFavorite productId={product.id} isFavorite={product.is_favor} />
      </div>
    </a>
  );
}
