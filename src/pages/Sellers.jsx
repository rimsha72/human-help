import Header from "../layouts/partials/header";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function Sellers() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("allSellers");
  const navigate = useNavigate();
  const [sellersData, setSellersData] = useState([
    {
      name: "Luqman Sardar",
      email: "luqmansardarakadesigner@gmail.com",
      phone: "+414893743747",
      account: "02430438408304",
      city: "Paris",
      score: "100%",
      lastActive: "2024-07-25",
      time: "2:04 AM",
      totalProducts: 20,
      sales: 15,
      vacationMode: true,
    },
    {
      name: "John Doe",
      email: "johndoe79@gmail.com",
      phone: "+412903028801",
      account: "12430438408304",
      city: "Paris",
      score: "80%",
      lastActive: "2024-07-20",
      time: "9:34 PM",
      totalProducts: 10,
      sales: 5,
      vacationMode: false,
    },
    {
      name: "Mickel",
      email: "mickel41@gmail.com",
      phone: "+410283028388",
      account: "32430438408304",
      city: "Paris",
      score: "90%",
      lastActive: "2024-07-18",
      time: "12:18 AM",
      totalProducts: 15,
      sales: 12,
      vacationMode: true,
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+411234567890",
      account: "92430438408304",
      city: "Berlin",
      score: "85%",
      lastActive: "2024-07-28",
      time: "06:53 PM",
      totalProducts: 25,
      sales: 20,
      vacationMode: false,
    },
    {
      name: "Emma Brown",
      email: "emmabrown@example.com",
      phone: "+419876543210",
      account: "72430438408304",
      city: "London",
      score: "92%",
      lastActive: "2024-07-21",
      time: "2:04 AM",
      totalProducts: 30,
      sales: 25,
      vacationMode: false,
    },
    {
      name: "Olivia Johnson",
      email: "oliviajohnson@example.com",
      phone: "+414567890123",
      account: "62430438408304",
      city: "New York",
      score: "88%",
      lastActive: "2024-07-22",
      time: "9:24 AM",
      totalProducts: 18,
      sales: 14,
      vacationMode: true,
    },
    {
      name: "Daniel Harris",
      email: "danielharris@example.com",
      phone: "+417654321098",
      account: "52430438408304",
      city: "Amsterdam",
      score: "95%",
      lastActive: "2024-07-26",
      totalProducts: 22,
      sales: 17,
      vacationMode: false,
    },
    {
      name: "Sophia Martinez",
      email: "sophiamartinez@example.com",
      phone: "+418765432109",
      account: "82430438408304",
      city: "Barcelona",
      score: "89%",
      lastActive: "2024-07-24",
      totalProducts: 20,
      sales: 16,
      vacationMode: false,
    },
  ]);

  const [deletedSellersData, setDeletedSellersData] = useState([
    {
      name: "Alex Johnson",
      email: "alexjohnson@example.com",
      phone: "+419876543211",
      account: "62430438408305",
      city: "Madrid",
      score: "75%",
      lastActive: "2024-06-15",
      time: "10:24 AM",
      totalProducts: 12,
      sales: 8,
      vacationMode: false,
    },
    {
      name: "Nina Brown",
      email: "ninabrown@example.com",
      phone: "+415678901234",
      account: "72430438408305",
      city: "Rome",
      score: "82%",
      lastActive: "2024-05-30",
      time: "11:11 AM",
      totalProducts: 5,
      sales: 3,
      vacationMode: true,
    },
  ]);

  const handleDelete = (index) => {
    const deletedSeller = sellersData[index];
    setDeletedSellersData([...deletedSellersData, deletedSeller]);
    const updatedSellers = sellersData.filter((_, i) => i !== index);
    setSellersData(updatedSellers);
    toast.success("Seller deleted successfully");
  };


  const renderTableData = (data) => {
    return data.map((seller, index) => (
      <tr key={index} className="bg-white border-b hover:bg-orange-150/30">
        <td className="px-2 py-4">{seller.name}</td>
        <td className="px-2 py-4">{seller.email}</td>
        <td className="px-2 py-4">{seller.phone}</td>
        <td className="px-2 py-4">{seller.account}</td>
        <td className="px-2 py-4">{seller.lastActive} ({seller.time})</td>
        <td className="px-2 py-4 text-center">{seller.totalProducts}</td>
        <td className="px-2 py-4 text-center">{seller.sales}</td>
        <td className="px-2 py-4 flex items-center gap-2">
          <MdEdit
            className="h-4 w-4 text-blue-700 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          {seller.score}
        </td>
        <td className="px-10 py-4">
          <p
            className={`px-2 py-1 text-xs text-center font-medium rounded-lg ${seller.vacationMode ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
              }`}
          >
            {seller.vacationMode ? "On" : "Off"}
          </p>
        </td>
        <td className="px-2 py-4">
          <div className="flex gap-2">
            <IoEyeSharp
              className="h-6 w-6 text-green-700 cursor-pointer"
              onClick={() => navigate(`/sellers/${seller.name}`)}
            />
            <MdDelete
              className="h-6 w-6 text-red-700 cursor-pointer"
              onClick={() => handleDelete(index)}
            />
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <Header header={"Manage Sellers"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 pt-8">
          <Toaster />

          <div className="flex flex-wrap gap-4 justify-end">
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search ..."
                  required
                />
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
            <li className="mr-2">
              <a
                href="#"
                aria-current="page"
                className={`inline-block p-4 rounded-t-lg ${activeTab === "allSellers"
                    ? "text-black font-medium bg-gray-200"
                    : "hover:text-gray-600 hover:bg-gray-50"
                  }`}
                onClick={() => setActiveTab("allSellers")}
              >
                All Sellers
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 rounded-t-lg ${activeTab === "deletedAccounts"
                    ? "text-black font-medium bg-gray-200"

                    : "hover:text-gray-600 hover:bg-gray-50"
                  }`}
                onClick={() => setActiveTab("deletedAccounts")}
              >
                Deleted Accounts
              </a>
            </li>
          </ul>

          <div className="my-10">
            <div className="relative overflow-x-auto drop-shadow-sm bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-black text-sm border-b-2 bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Phone no.</th>
                    <th scope="col" className="px-6 py-3">Account no.</th>
                    <th scope="col" className="px-6 py-3">Last active</th>
                    <th scope="col" className="px-6 py-3">Total Products</th>
                    <th scope="col" className="px-6 py-3">Sales</th>
                    <th scope="col" className="px-6 py-3">Score</th>
                    <th scope="col" className="px-6 py-3">Vacation Mode</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === "allSellers"
                    ? renderTableData(sellersData)
                    : renderTableData(deletedSellersData)}
                </tbody>
              </table>
            </div>
          </div>

          {
            isOpen && (
              <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden text-black fixed flex bg-black/50 z-50 justify-center items-center w-full md:inset-0 max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                  <div class="relative bg-white rounded-lg shadow">
                    <div class="flex items-center justify-between p-4 md:p-5 rounded-t ">
                      <h3 class="text-xl font-semibold text-gray-900 ">
                        Edit Score
                      </h3>
                      <button type="button" onClick={() => setIsOpen(false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div class="px-4 space-y-4">
                      <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Enter Score</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" placeholder="" required />
                      </div>
                    </div>
                    <div class="flex items-center p-4 md:p-5 justify-end">
                      <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
