import { useState } from 'react';
import PriceAreaChart from 'components/Chart/PriceAreaChart';
import { classNames, last180, last30, last7, last90 } from 'helpers';

export default function ProductPriceHistory({
  priceHistory = [],
  platform = ''
}) {
  const [data, setData] = useState(last30(priceHistory));
  const [activeFilter, setActiveFilter] = useState('1 Month');

  function FilterButton({ text, active, onClick }) {
    return (
      <button
        className={classNames(
          'px-14px py-1.5 text-10px rounded-4px',
          text === active
            ? 'bg-primary text-white'
            : 'bg-primary-background text-black'
        )}
        onClick={() => {
          setActiveFilter(text);
          onClick();
        }}
      >
        {text}
      </button>
    );
  }

  return (
    <div className="bg-white pt-8 pb-10">
      <div className="container">
        <div className="font-bold text-14px md:text-20px mb-2 md:mb-5">
          Price History
        </div>
        <div className="md:pl-4">
          <div className="font-normal text-sm mb-6 md:mb-4">
            Average price over time
          </div>
          <div className="flex items-center gap-5 mb-4">
            <FilterButton
              active={activeFilter}
              text="1 Week"
              onClick={() => setData(last7(priceHistory))}
            />
            <FilterButton
              active={activeFilter}
              text="1 Month"
              onClick={() => setData(last30(priceHistory))}
            />
            <FilterButton
              active={activeFilter}
              text="3 Months"
              onClick={() => setData(last90(priceHistory))}
            />
            <FilterButton
              active={activeFilter}
              text="6 Months"
              onClick={() => setData(last180(priceHistory))}
            />
          </div>
          <div className="h-240px">
            <PriceAreaChart data={data} platform={platform} />
          </div>
        </div>
      </div>
    </div>
  );
}
