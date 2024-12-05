import { ClockIcon, XIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import images from 'assets/images';
import {
  addRecentSearch,
  classNames,
  getRecentSearch,
  removeRecentSearch
} from 'helpers';
import SearchingService from 'services/search';

export default function Search() {
  const searchSvc = new SearchingService();
  const [recentSearch, setRecentSearch] = useState(getRecentSearch());
  const [popularSearch, setPopularSearch] = useState([]);
  const [closetSearch, setClosetSearch] = useState([]);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const debouncedSearch = useCallback(debounce(search, 500), []);

  async function onFocus() {
    setActive(true);

    if (!popularSearch.length) {
      try {
        setPopularSearch(await searchSvc.fetchPopularSearch());
      } catch (err) {
        // Do nothing
      }
    }
  }

  function onBlur() {
    setActive(false);
  }

  function onSearch(value, href = '') {
    addRecentSearch(value);
    // Wait for save to complete
    setTimeout(() => {
      window.location.href = href || `/search?keyword=${value}`;
    }, 0);
  }

  function onInput(e) {
    const value = e.target.value;
    setValue(value);
    debouncedSearch(value.trim());
  }

  function onKeyPress(e) {
    if (e.key === 'Enter' && value) {
      onSearch(value);
    }
  }

  async function search(value) {
    try {
      const data = await searchSvc.search({ keyword: value });
      setClosetSearch(data);
    } catch (err) {
      // Do nothing
    }
  }

  return (
    <div className="flex items-start gap-5">
      {active && <div className="absolute inset-0 bg-secondary opacity-80" />}
      <div className="flex-grow relative">
        <div className="absolute top-4 left-4">
          <img src={images.SearchIcon} alt="" className="w-7 h-7" />
        </div>
        <input
          type="text"
          placeholder="What are you looking for today?"
          className="w-full rounded-10px border border-grey-border pl-52px py-14px pr-4 text-17px mb-2"
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          onKeyPress={onKeyPress}
        />
        {active && (
          <div className="bg-white rounded-10px py-4 pl-18px pr-4">
            {closetSearch.map((item, idx) => (
              <div
                key={idx}
                className="py-2 rounded-4px hover:bg-grey-background cursor-pointer flex items-center gap-2"
                onClick={() => onSearch(value, `/products/${item.id}`)}
              >
                <div className="flex-none">
                  <img
                    src={item.thumbnail || images.Placeholder}
                    alt=""
                    className="w-10 h-10"
                  />
                </div>
                <div className="text-13px line-clamp-1">
                  {item.product_name}
                </div>
              </div>
            ))}
            {popularSearch.length > 0 && (
              <div
                className={classNames(
                  'font-semibold text-15px',
                  closetSearch.length && 'mt-3'
                )}
              >
                Popular Search
              </div>
            )}
            {popularSearch.map((val, idx) => (
              <div
                key={idx}
                className="text-13px line-clamp-1 p-2 rounded-4px hover:bg-grey-background cursor-pointer"
                onClick={() => onSearch(val)}
              >
                {val}
              </div>
            ))}
            {recentSearch.length > 0 && (
              <div className="font-semibold text-15px mt-3">
                You recent search
              </div>
            )}
            {recentSearch.slice(0, 3).map((val, idx) => (
              <div
                key={idx}
                className="w-full text-left flex items-center gap-2 p-2 rounded-4px hover:bg-grey-background cursor-pointer"
                onClick={() => onSearch(val)}
              >
                <div className="flex-none">
                  <ClockIcon className="w-4 h-4 text-cccccc" />
                </div>
                <div className="flex-grow line-clamp-1 text-13px">{val}</div>
                <button
                  className="flex-none p-2 -m-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRecentSearch(removeRecentSearch(val));
                  }}
                >
                  <XIcon className="w-4 h-4 text-cccccc" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex-none relative">
        <button
          className="bg-primary text-white font-bold text-lg px-5 py-4 rounded-10px"
          onClick={() => onSearch(value)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
