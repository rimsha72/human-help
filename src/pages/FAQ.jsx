import React, { useState } from 'react'
import Header from '../layouts/partials/header'
import AddFAQ from '../components/AddFAQ';

export default function FAQ() {
  const[isOpen, setIsOpen]= useState(false);
  return (
    <div>
      <Header header={"Manage FAQs"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 mt-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2">
            <button className="rounded-md w-full sm:w-auto border text-sm bg-blue-150 text-white px-6 py-2 font-medium capitalize" onClick={(e)=>setIsOpen((pre)=> !pre)}>Add FAQ</button>
            <div className="flex flex-col w-full sm:flex-row sm:max-w-xs sm:items-center gap-4">
              <div className="relative w-full ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search FAQ..."
                  required
                />
              </div>
              {/* <Filterdropdown /> */}
            </div>
          </div>
          <div className='py-3'>
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Questions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Answers
                    </th>
                    <th scope="col" className="px-6 py-3 flex justify-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b hover:bg-blue-150/30">
                      <td className="px-6 py-4">
                      Sed nec facilisis velit?
                      </td>
                      <td className="px-6 py-4">
                      Integer posuere, velit sit amet aliquam posuere, odio odio mattis mi, vel dictum magna turpis vitae arcu. Sed quis ultrices neque. Vivamus ullamcorper arcu non erat laoreet, vel rhoncus quam volutpat.
                      </td>
                      <td className="px-6 py-4 space-x-2 flex justify-center">
                        <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-blue-150/30">
                      <td className="px-6 py-4">
                      Sed nec facilisis velit?
                      </td>
                      <td className="px-6 py-4">
                      Integer posuere, velit sit amet aliquam posuere, odio odio mattis mi, vel dictum magna turpis vitae arcu. Sed quis ultrices neque. Vivamus ullamcorper arcu non erat laoreet, vel rhoncus quam volutpat.
                      </td>
                      <td className="px-6 py-4 space-x-2 flex justify-center">
                        <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-blue-150/30">
                      <td className="px-6 py-4">
                      Erat laoreet, vel rhoncus quam?
                      </td>
                      <td className="px-6 py-4">
                      Integer posuere, velit sit amet aliquam posuere, odio odio mattis mi, vel dictum magna turpis vitae arcu. Sed quis ultrices neque. Vivamus ullamcorper arcu non erat laoreet, vel rhoncus quam volutpat.
                      </td>
                      <td className="px-6 py-4 space-x-2 flex justify-center">
                        <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-blue-150/30">
                      <td className="px-6 py-4">
                      Ut vel velit in velit ullamcorper facilisis?
                      </td>
                      <td className="px-6 py-4">
                      Integer posuere, velit sit amet aliquam posuere, odio odio mattis mi, vel dictum magna turpis vitae arcu. Sed quis ultrices neque. Vivamus ullamcorper arcu non erat laoreet, vel rhoncus quam volutpat.
                      </td>
                      <td className="px-6 py-4 space-x-2 flex justify-center">
                        <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddFAQ isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}