import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import { classNames, fnDefault } from 'helpers';

export default function Select({ items, selected = {}, onSelect = fnDefault }) {
  const [_selected, setSelected] = useState(selected);

  function _onSelect(item) {
    setSelected(item);
    onSelect(item.value);
  }

  return (
    <Listbox value={_selected} onChange={_onSelect}>
      <div className="relative min-w-240px">
        <Listbox.Button className="relative w-full bg-white border border-grey-border rounded-md py-3 pl-14px pr-10 text-13px text-left">
          <span className="block truncate">{_selected.name}</span>
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
            {items.map((item) => (
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
                  <>
                    <span
                      className={classNames(
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate'
                      )}
                    >
                      {item.name}
                    </span>

                    {selected ? (
                      <span
                        className={classNames(
                          active ? 'text-white' : 'text-secondary',
                          'absolute inset-y-0 right-0 flex items-center pr-4'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
