import { classNames } from 'helpers';

export default function ProductPriceBox({ text, price, active = false }) {
  return (
    <div
      className={classNames(
        'min-w-122px px-4 py-3 rounded-lg flex flex-col items-center gap-1 text-13px',
        active ? 'bg-primary' : 'bg-grey'
      )}
    >
      <div className={classNames('font-bold', active && 'text-white')}>
        {text}
      </div>
      <div
        className={classNames(
          'font-bold',
          active ? 'text-white' : 'text-primary'
        )}
      >
        {price}
      </div>
    </div>
  );
}
