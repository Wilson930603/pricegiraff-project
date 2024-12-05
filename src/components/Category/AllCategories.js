import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';
import { classNames } from 'helpers';
import CategoryService from 'services/category';

export default function AllCategories({ categories = [], selected = null }) {
  const categorySvc = new CategoryService();
  const defaultCategory = { id: 0, name: 'All Categories' };
  const [allCategories, setAllCategories] = useState([defaultCategory]);
  const [selectedCategory, setSelectedCategory] = useState(
    selected || defaultCategory
  );

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await categorySvc.fetchAll();
        setAllCategories([defaultCategory, ...categories]);
      } catch (err) {
        setSelectedCategory(defaultCategory);
      }
    }

    if (!categories.length) {
      fetchCategories();
    }
  }, []);

  function onSelect(category) {
    setSelectedCategory(category);

    if (category.id) {
      window.location.href = `/categories/${category.id}`;
    }
  }

  return (
    <Listbox value={selectedCategory} onChange={onSelect}>
      <div className="relative inline-block min-w-240px">
        <Listbox.Button className="relative w-full bg-white border border-grey-border rounded-md py-2.5 pl-12 pr-10">
          <span className="absolute inset-y-0 left-4 flex items-center">
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="block truncate font-medium tex-14px leading-5 text-left">
            {selectedCategory.name}
          </span>
          <span className="absolute inset-y-0 right-3 flex items-center">
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white max-h-96 rounded-md py-1 overflow-auto text-13px shadow-lg">
            {allCategories.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  classNames(
                    active ? 'text-white bg-secondary' : '',
                    'select-none relative py-3 pl-14px pr-10'
                  )
                }
              >
                {({ selected, active }) => (
                  <span
                    className={classNames(
                      selected ? 'font-semibold' : 'font-normal',
                      'block truncate'
                    )}
                  >
                    {item.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
