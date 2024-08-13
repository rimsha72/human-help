import { Dialog, Transition } from '@headlessui/react'
import React, { useState, useEffect, Fragment } from "react";
var a;
export default function AddAdventure({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }
  const [buttonName, setButtonName] = useState("Play audio");

  const [audio, setAudio] = useState();
  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play audio");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play audio");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play audio") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play audio");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Artist
                  </Dialog.Title>
                  <div className='flex justify-end'>
                    <button onClick={handleClick} className='bg-blue-250 text-white px-6 py-2 rounded'>{buttonName}</button>
                  </div>
                  <div className="mt-2">
                    <div>
                      <label class="block mb-2 text-sm text-gray-500">Upload Audio</label>
                      <input class="block w-full py-4 text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none " onChange={addFile} type="file" />
                    </div>
                    <div className='my-4'>
                      <div class="relative z-0">
                        <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                      </div>

                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-150 px-4 py-2 text-sm font-medium text-white hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
