import { Dialog, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { fnDefault } from 'helpers';
import { Fragment, useEffect, useState } from 'react';

export default function AlertLimitModal({ open = false, onClose = fnDefault }) {
  let [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  function closeModal() {
    setIsOpen(false);
    onClose();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex flex-col items-center w-full max-w-sm mx-4 sm:mx-0 px-7 pt-18px pb-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-20px">
            <div className="w-50px h-50px bg-primary rounded-full inline-flex items-center justify-center mb-3">
              <BellIcon className="w-8 h-8 text-white" />
            </div>
            <span className="max-w-200px font-bold text-sm mb-4">
              You have reached your price alert limit.
            </span>
            <button
              className="inline-flex items-center justify-center px-16 py-3.5 sm:py-2 bg-white text-primary border border-primary font-bold text-13px sm:text-15px rounded-full"
              onClick={closeModal}
            >
              Done
            </button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
