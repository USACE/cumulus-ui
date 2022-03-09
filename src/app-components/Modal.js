/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { connect } from 'redux-bundler-react';

export default connect(
  'selectModalContent',
  'selectModalProps',
  'selectModalOnClose',
  'doModalClose',
  ({ modalContent: ModalContent, modalProps, modalOnClose, doModalClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      if (ModalContent) {
        setShow(true);
        return;
      }
      setShow(false);
    }, [ModalContent]);

    const onClose = () => {
      // Modal Fade-Out
      setShow(false);
      // onClose Callback for a specific modal
      if (modalOnClose) {
        modalOnClose();
      }
      // Allow 1s delay for smooth transition
      setTimeout(() => doModalClose(), 300);
    };

    return (
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto rounded-lg'
          onClose={onClose}
        >
          <div className='flex items-end justify-center min-h-screen text-center sm:block'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all lg:max-w-xl md:max-w-md sm:my-8 sm:align-middle sm:max-w-sm sm:w-full'>
                {ModalContent && (
                  <ModalContent onClose={onClose} {...modalProps} />
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);
