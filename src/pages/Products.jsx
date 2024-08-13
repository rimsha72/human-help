import Header from "../layouts/partials/header";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { MdModeEditOutline, MdDelete, MdOutlinePendingActions } from "react-icons/md"; // Import vacation mode icon

export default function ProductManager() {
  const [pendingInventory, setPendingInventory] = useState([
    {
      image: "data:image/jpeg;base64,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",
      name: "Nike Air Max",
      category: "Shoes",
      price: "$120.00",
      stock: 150,
      rating: "4.5/5",
      sku: "NIKE123",
      condition: "New",
      owner: "Jane Smith",
      approvalDate: "None",
      vacationMode: false,
    },
    {
      image: "data:image/jpeg;base64,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",
      name:"Converse all star high tops",
      category: "Shoes",
      price: "$85.00",
      stock: 120,
      rating: "4.7/5",
      sku: "CSHT123",
      condition: "Used",
      owner: "Brice Johnson",
      approvalDate: "None",
      vacationMode: true,
    },
    {
      image: "data:image/jpeg;base64,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",
      name:"Puma Sneakers",
      category: "Shoes",
      price: "75.00",
      stock: 10,
      rating: "4.1/5",
      sku: "PM123",
      condition: "Used",
      owner: "Michael",
      approvalDate: "None",
      vacationMode: true,
    },

  ]);

  const [approvedInventory, setApprovedInventory] = useState([

    {
      image: "data:image/jpeg;base64,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",
      name: "Adidas Running Shoes",
      category: "Shoes",
      price: "$110.00",
      stock: 70,
      rating: "4.3/5",
      sku: "ADIDAS123",
      condition: "New",
      owner: "Bob Smith",
      approvalDate: "2024-07-01",
      vacationMode: true,
    },
  ]);

  const handleApprove = (index) => {
    const item = pendingInventory[index];
    const currentDate = new Date().toISOString().split('T')[0];
    item.approvalDate = currentDate;
    setPendingInventory(pendingInventory.filter((_, i) => i !== index));
    setApprovedInventory([...approvedInventory, item]);
    toast.success("Approved")
  };
  

  const handleDelete = (index, isPending) => {
    if (isPending) {
      setPendingInventory(pendingInventory.filter((_, i) => i !== index));
    } else {
      setApprovedInventory(approvedInventory.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <Header header={"Manage Products"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 pt-8">
          <Toaster />
          <div className="flex flex-wrap gap-4 justify-end">
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  placeholder="Search products..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="relative overflow-x-auto drop-shadow-sm sm:rounded-lg">
              <div className="flex gap-4 items-center mb-8">
                <h2 className="text-xl font-semibold">Pending Review Inventory</h2>
                <MdOutlinePendingActions className="text-blue-500 mt-1 h-6 w-6" />
              </div>
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-black text-sm border-b-2 bg-gray-200">
                  <tr>
                    <th scope="col" className="px-2 py-3">Product Image</th>
                    <th scope="col" className="px-2 py-3">Product Name</th>
                    <th scope="col" className="px-2 py-3">Category</th>
                    <th scope="col" className="px-2 py-3">Price</th>
                    <th scope="col" className="px-2 py-3">Stock</th>
                    <th scope="col" className="px-2 py-3">Rating</th>
                    <th scope="col" className="px-2 py-3">SKU</th>
                    <th scope="col" className="px-2 py-3">Condition</th>
                    <th scope="col" className="px-2 py-3">Owner</th>
                    <th scope="col" className="px-2 py-3">Approval Date</th>
                    <th scope="col" className="px-2 py-3">Vacation Mode</th>
                    <th scope="col" className="px-2 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingInventory.map((item, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-orange-150/30">
                      <td className="px-2 py-3 rounded-md"><img className="h-20 w-20 object-cover rounded-md" src={item.image} alt={item.name} /></td>
                      <td className="px-2 py-3">{item.name}</td>
                      <td className="px-2 py-3">{item.category}</td>
                      <td className="px-2 py-3">{item.price}</td>
                      <td className="px-2 py-3">{item.stock}</td>
                      <td className="px-2 py-3">{item.rating}</td>
                      <td className="px-2 py-3">{item.sku}</td>
                      <td className="px-2 py-3">{item.condition}</td>
                      <td className="px-2 py-3">{item.owner}</td>
                      <td className="px-2 py-3">{item.approvalDate === "None" ? "None" : item.approvalDate}</td>
                      <td className="px-2 py-3"><p className={`font-medium ${item.vacationMode ? "text-green-500" : "text-red-500"}`}>{item.vacationMode ? "On" : "Off"}</p></td>

                      <td>
                        <div className="flex gap-2">
                          <button onClick={() => handleApprove(index)} className="text-green-500">Approve</button>
                          <button onClick={() => handleDelete(index, true)} className="text-red-500"><MdDelete className="h-6 w-6" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-4 items-center my-8">
                <h2 className="text-lg font-semibold">Approved/Active Inventory</h2>
                <FaCheckCircle className="text-green-500 mt-1 h-5 w-5" />
              </div>
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-black text-sm border-b-2 bg-gray-200">
                  <tr>
                    <th scope="col" className="px-2 py-3">Product Image</th>
                    <th scope="col" className="px-2 py-3">Product Name</th>
                    <th scope="col" className="px-2 py-3">Category</th>
                    <th scope="col" className="px-2 py-3">Price</th>
                    <th scope="col" className="px-2 py-3">Stock</th>
                    <th scope="col" className="px-2 py-3">Rating</th>
                    <th scope="col" className="px-2 py-3">SKU</th>
                    <th scope="col" className="px-2 py-3">Condition</th>
                    <th scope="col" className="px-2 py-3">Owner</th>
                    <th scope="col" className="px-2 py-3">Approval Date</th>
                    <th scope="col" className="px-2 py-3">Vacation Mode</th>
                    <th scope="col" className="px-2 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedInventory.map((item, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-orange-150/30">
                      <td className="px-2 py-3 rounded-md"><img className="h-20 w-20 object-cover rounded-md" src={item.image} alt={item.name} /></td>
                      <td className="px-2 py-3">{item.name}</td>
                      <td className="px-2 py-3">{item.category}</td>
                      <td className="px-2 py-3">{item.price}</td>
                      <td className="px-2 py-3">{item.stock}</td>
                      <td className="px-2 py-3">{item.rating}</td>
                      <td className="px-2 py-3">{item.sku}</td>
                      <td className="px-2 py-3">{item.condition}</td>
                      <td className="px-2 py-3">{item.owner}</td>
                      <td className="px-2 py-3">{item.approvalDate}</td>
                      <td className="px-2 py-3"><p className={`font-medium ${item.vacationMode ? "text-green-500" : "text-red-500"}`}>{item.vacationMode ? "On" : "Off"}</p></td>
                      <td>
                        <div className="flex gap-2">
                          <button onClick={() => handleDelete(index, false)} className="text-red-500"><MdDelete className="h-6 w-6" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
