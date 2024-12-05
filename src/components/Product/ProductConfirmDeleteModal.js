import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import images from 'assets/images';
import { fnDefault } from 'helpers';
import { Fragment, useEffect, useState } from 'react';

export default function ProductConfirmDeleteModal({
  product = {},
  open = false,
  onClose = fnDefault,
  onConfirm = fnDefault
}) {
  let [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  function confirm() {
    closeModal();
    onConfirm();
  }

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
          <div className="inline-block sm:min-w-560px w-full max-w-md mx-4 sm:mx-0 px-7 pt-60px pb-9 sm:px-8 sm:pt-8 sm:pb-11 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-20px">
            <button
              className="absolute top-22px right-22px cursor-pointer"
              onClick={closeModal}
            >
              <XIcon className="float-right w-6 h-6" />
            </button>
            <Dialog.Title
              as="div"
              className="text-center sm:text-left font-bold text-sm sm:text-20px pr-0 sm:pr-4 mb-6 sm:mb-4"
            >
              Are you sure you want to delete?
            </Dialog.Title>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-14px">
              <div className="flex-none bg-white border border-grey-border rounded-10px">
                <img
                  src={product.thumbnail || images.Placeholder}
                  alt=""
                  className="w-160px h-160px sm:w-80px sm:h-80px rounded-10px object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-13px sm:text-sm line-clamp-2 sm:line-clamp-1 mb-10px sm:mb-3">
                  {product.product_name}
                </div>
                <div className="text-11px sm:text-sm">
                  <span className="font-semibold text-primary">
                    ${product.min_price}
                  </span>{' '}
                  to{' '}
                  <span className="font-semibold text-primary">
                    ${product.max_price}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-22px sm:mt-4 text-center sm:text-left">
              <button
                className="inline-flex items-center justify-center px-16 sm:px-10 py-3.5 sm:py-2 bg-white sm:bg-secondary text-primary sm:text-white border border-primary sm:border-secondary font-bold text-13px sm:text-15px rounded-full"
                onClick={confirm}
              >
                Delete
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
