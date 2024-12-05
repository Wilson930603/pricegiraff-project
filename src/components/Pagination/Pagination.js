import { useState } from 'react';
import { classNames, fnDefault } from 'helpers';

export default function Pagination({
  total,
  pageSize,
  currentPage = 1,
  onChange = fnDefault
}) {
  const [current, setCurrent] = useState(currentPage);
  const totalPage = Math.ceil(total / pageSize);

  const handleChange = (page) => {
    setCurrent(page);
    onChange(page);
  };

  function onPrev() {
    if (current === 1) return;
    handleChange(current - 1);
  }

  function onNext() {
    if (current === totalPage) return;
    handleChange(current + 1);
  }

  if (total <= pageSize) {
    return null;
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="text-sm">
        Page {current} / {totalPage}
      </div>
      <button
        className={classNames(
          'bg-secondary px-4 py-2 rounded-md font-bold text-13px tracking-normal text-white',
          current === 1 && 'opacity-50 cursor-default'
        )}
        onClick={onPrev}
      >
        Prev
      </button>
      <button
        className={classNames(
          'bg-secondary px-4 py-2 rounded-md font-bold text-13px tracking-normal text-white',
          current === totalPage && 'opacity-50 cursor-default'
        )}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}
