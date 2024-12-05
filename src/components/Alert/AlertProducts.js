import { TrashIcon } from '@heroicons/react/solid';
import images from 'assets/images';
import { fnDefault, formatDateTime } from 'helpers';
import ProductPlatformLogo from 'components/Product/ProductPlatformLogo';

export default function AlertProducts({ products, onDelete = fnDefault }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto rounded-md">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-grey-border rounded-t-md">
                <tr>
                  <th
                    scope="col"
                    className="px-1.5 py-2 sm:px-18px sm:py-14px text-left font-bold text-12px text-dark"
                  >
                    ITEM
                  </th>
                  <th
                    scope="col"
                    className="px-1.5 py-2 sm:px-18px sm:py-14px text-center font-bold text-12px text-dark"
                  >
                    LAST UPDATED
                  </th>
                  <th
                    scope="col"
                    className="md:min-w-122px lg:min-w-240px px-1.5 py-2 sm:px-18px sm:py-14px text-center font-bold text-12px text-dark"
                  >
                    CURRENT LOW PRICE
                  </th>
                  <th scope="col" className="hidden sm:table-cell" />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-grey-border rounded-b-md">
                {products.map((prod, idx) => (
                  <tr
                    key={idx}
                    className="relative bg-white even:bg-primary-background"
                  >
                    <td className="px-1.5 pt-2 pb-8 sm:px-18px sm:py-14px">
                      <div className="flex items-center gap-1.5 md:gap-4 pr-2 lg:pr-0 max-w-full lg:max-w-5/6 xl:max-w-3/4">
                        <div className="flex-shrink-0 border border-grey-border rounded-10px">
                          <img
                            className="h-50px w-50px rounded-10px object-cover"
                            src={prod.thumbnail || images.Placeholder}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                          <a
                            href={`/products/${prod.id}`}
                            className="font-semibold text-sm line-clamp-2 lg:line-clamp-1 hover:underline"
                          >
                            {prod.product_name}
                          </a>
                          <ProductPlatformLogo
                            product={prod}
                            sizeClass="max-w-80px max-h-4 sm:max-h-5"
                            className="absolute bottom-2 left-1.5 sm:relative sm:bottom-0 sm:left-0 text-left"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="min-w-122px sm:min-w-160px px-1.5 pt-2 pb-8 sm:px-18px sm:py-14px lg:whitespace-nowrap">
                      <div className="font-medium text-sm text-969696 text-center">
                        {formatDateTime(prod.updated_at)}
                      </div>
                    </td>
                    <td className="px-1.5 pt-2 pb-8 sm:px-18px sm:py-14px whitespace-nowrap">
                      <div className="font-semibold text-sm text-primary text-center">
                        ${prod.min_price}
                      </div>
                      <button
                        className="absolute bottom-2 right-1.5 sm:hidden"
                        onClick={() => onDelete(prod)}
                      >
                        <TrashIcon className="w-22px h-22px text-969696" />
                      </button>
                    </td>
                    <td className="hidden sm:table-cell px-1.5 pt-2 pb-8 sm:px-18px sm:py-14px whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => onDelete(prod)}>
                        <TrashIcon className="w-22px h-22px text-969696" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
