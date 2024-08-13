import Header from "../layouts/partials/header";
import { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD#01",
      product: "Nike Air Max",
      sku: "NIKE123",
      owner: "Jane Smith",
      ownerPhone: "123-456-7890",
      price: "$120.00",
      sellerFees: "$10.00",
      consigneePayout: "$110.00",
      pickupTime: "2024-08-02T12:30:00",
      saleTime: "2024-07-30T15:00:00",
      status: "Ongoing",
    },
    {
      id: "ORD#02",
      product: "Adidas Running Shoes",
      sku: "ADIDAS123",
      owner: "Bob Smith",
      ownerPhone: "987-654-3210",
      price: "$110.00",
      sellerFees: "$8.00",
      consigneePayout: "$102.00",
      pickupTime: "2024-08-03T14:00:00",
      saleTime: "2024-07-29T16:30:00",
      status: "Completed",
    },
    {
      id: "ORD#03",
      product: "Summer Dress",
      sku: "SUMMER123",
      owner: "Alice Doe",
      ownerPhone: "555-123-4567",
      price: "$50.00",
      sellerFees: "$5.00",
      consigneePayout: "$45.00",
      pickupTime: "None",
      saleTime: "2024-07-28T10:00:00",
      status: "Cancelled",
    },
  ]);

  const [activeTab, setActiveTab] = useState('All');

  const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  const getStatusBadgeStyle = (status) => {
    switch(status) {
      case "Ongoing": return "text-green-500 bg-green-100";
      case "Completed": return "text-blue-500 bg-blue-100";
      case "Cancelled": return "text-red-500 bg-red-100";
      default: return "text-gray-500 bg-gray-100";
    }
  };

  const filteredOrders = orders.filter(order => activeTab === 'All' || order.status === activeTab);

  return (
    <div>
      <Header header={"Manage Orders"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 pt-8">
          <div className="flex gap-4 mb-4 text-sm">
            {["All", "Ongoing", "Completed", "Cancelled"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md ${activeTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="my-10">
            <div className="relative overflow-x-auto drop-shadow-sm bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-black text-sm border-b-2 bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">Order ID</th>
                    <th scope="col" className="px-6 py-3">Product Name</th>
                    <th scope="col" className="px-6 py-3">SKU</th>
                    <th scope="col" className="px-6 py-3">Owner</th>
                    <th scope="col" className="px-6 py-3">Owner Phone</th>
                    <th scope="col" className="px-6 py-3">Sale Price</th>
                    <th scope="col" className="px-6 py-3">Seller Fees</th>
                    <th scope="col" className="px-6 py-3">Consignee Payout</th>
                    <th scope="col" className="px-6 py-3">Pickup Time</th>
                    <th scope="col" className="px-6 py-3">Sale Time</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="bg-white border-b hover:bg-orange-150/30">
                      <td className="px-3 py-4">{order.id}</td>
                      <td className="px-3 py-4">{order.product}</td>
                      <td className="px-3 py-4">{order.sku}</td>
                      <td className="px-3 py-4">{order.owner}</td>
                      <td className="px-3 py-4">{order.ownerPhone}</td>
                      <td className="px-3 py-4">{order.price}</td>
                      <td className="px-3 py-4">{order.sellerFees}</td>
                      <td className="px-3 py-4">{order.consigneePayout}</td>
                      <td className="px-3 py-4">{order.pickupTime === "None" ? "None" : new Date(order.pickupTime).toLocaleString()}</td>
                      <td className="px-3 py-4">{new Date(order.saleTime).toLocaleString()}</td>
                      <td className={`px-3 py-4`}><p className={`px-6 py-2 rounded ${getStatusBadgeStyle(order.status)}`}>{order.status}</p></td>
                      <td>
                        <div className="flex gap-2">
                          <MdModeEditOutline className="h-6 w-6 text-blue-700" />
                          <MdDelete className="h-6 w-6 text-red-700" onClick={() => handleDelete(order.id)} />
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
