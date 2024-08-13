import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";
import { FaUsers } from "react-icons/fa";
import { BsCalendar4Event } from "react-icons/bs";
import event from "../assets/event.png"
import event2 from "../assets/event2.png"
import event3 from "../assets/event3.png"
import event4 from "../assets/event4.png"
import event5 from "../assets/event5.png"
import { TbCategory } from "react-icons/tb";
export default function Home() {
  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 2xl:gap-7">
            <Link className="w-full" to="/orders">
              <div className="rounded-xl border border-stroke bg-white py-6 px-7">
                <div className="h-10 w-10 rounded-full bg-blue-150 flex items-center justify-center">
                  <BsCalendar4Event className="text-white h-5 w-5" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <span className="font-medium text-gray-500">Total Events</span>
                  <h4 className="text-title-md font-bold text-black ">250</h4>
                </div>
              </div>
            </Link>
            <Link className="w-full" to="/products">
              <div className="rounded-xl border border-stroke bg-white py-6 px-7">
                <div className="h-10 w-10 rounded-full bg-blue-150 flex items-center justify-center">
                  <TbCategory className="text-white h-5 w-5" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <span className="font-medium text-gray-500">
                    Total Categories
                  </span>
                  <h4 className="text-title-md font-bold text-black ">5</h4>
                </div>
              </div>
            </Link>
            <Link className="w-full" to="/sellers">
              <div className="rounded-xl border border-stroke bg-white py-6 px-7">
                <div className="h-10 w-10 rounded-full bg-blue-150 flex items-center justify-center">
                  <FaUsers className="text-white h-5 w-5" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <span className="font-medium text-gray-500">
                    Total Users
                  </span>
                  <h4 className="text-title-md font-bold text-black ">58</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mx-4 sm:mx-9 my-8 rounded">
          <div className="flex justify-between items-center">
            <span className="self-center text-lg mb-8 font-bold whitespace-nowrap ">
              Recent Events
            </span>""
            <button className="text-blue-250 font-semibold"> View all</button>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-black text-sm border-b-2 bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">            
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Day</th>
                    <th scope="col" className="px-6 py-3">Time</th>
                    <th scope="col" className="px-6 py-3">Address</th>
                    <th scope="col" className="px-6 py-3">Organizer name</th>
                    <th scope="col" className="px-6 py-3">Organizer email</th>
                    <th scope="col" className="px-6 py-3">No of participants</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Shoes and Clothing Data */}
                  <tr className="bg-white border-b hover:bg-orange-150/30">
                    <td className="px-6 py-4 h-16 w-48 rounded-md"><img className="h-16 w-24 rounded-md object-cover" src={event}/></td>
                    <td className="px-6 py-4">Find a group for animal cleaning...</td>
                    <td className="px-6 py-4">1st May</td>
                    <td className="px-6 py-4">Human</td>
                    <td className="px-6 py-4">New</td>
                    <td className="px-6 py-4">$120.00</td>
                    <td className="px-6 py-4">150</td>
                    <td className="px-6 py-4">4.5/5</td>
                   
                  </tr>
                  <tr className="bg-white border-b hover:bg-orange-150/30">
                    <td className="px-6 py-4 h-16 w-48 rounded-md"><img className="h-16 w-24 rounded-md object-cover" src={event2} alt="" /></td>
                    <td className="px-6 py-4">Student seeks help with moving   </td>
                    <td className="px-6 py-4">10th May</td>
                    <td className="px-6 py-4">Animal</td>
                    <td className="px-6 py-4">ARS160</td>
                    <td className="px-6 py-4">Used</td>
                    <td className="px-6 py-4">$110.00</td>
                    <td className="px-6 py-4">70</td>
                    <td className="px-6 py-4">4.3/5</td>
                    
                  </tr>
                  <tr className="bg-white border-b hover:bg-orange-150/30">
                    <td className="px-6 py-4 h-16 w-48 rounded-md"><img className="h-16 w-24 rounded-md object-cover" src={event3} alt="" /></td>
                    <td className="px-6 py-4">Lorem ipsum dolor amet</td>
                    <td className="px-6 py-4">15 June</td>
                    <td className="px-6 py-4">Nature </td>
                    <td className="px-6 py-4">CAS652</td>
                    <td className="px-6 py-4">Used</td>
                    <td className="px-6 py-4">$85.00</td>
                    <td className="px-6 py-4">120</td>
                    <td className="px-6 py-4">4.7/5</td>
                    
                  </tr>
                  <tr className="bg-white border-b hover:bg-orange-150/30">
                    <td className="px-6 py-4 h-16 w-48 rounded-md"><img className="h-16 w-24 rounded-md object-cover" src={event4} alt="" /></td>
                    <td className="px-6 py-4">Lorem ipsum dolor amet</td>
                    <td className="px-6 py-4">25 August</td>
                    <td className="px-6 py-4">Human</td>
                    <td className="px-6 py-4">PS391</td>
                    <td className="px-6 py-4">New</td>
                    <td className="px-6 py-4">$75.00</td>
                    <td className="px-6 py-4">90</td>
                    <td className="px-6 py-4">4.1/5</td>
                   
                  </tr>
                  <tr className="bg-white border-b hover:bg-orange-150/30">
                    <td className="px-6 py-4 h-16 w-48 rounded-md"><img className="h-16 w-24 rounded-md object-cover" src={event5} alt="" /></td>
                    <td className="px-6 py-4">Lorem ipsum dolor amet</td>
                    <td className="px-6 py-4">13 April</td>
                    <td className="px-6 py-4">Clothing</td>
                    <td className="px-6 py-4">LDJ731</td>
                    <td className="px-6 py-4">Used</td>
                    <td className="px-6 py-4">$89.99</td>
                    <td className="px-6 py-4">40</td>
                    <td className="px-6 py-4">4.0/5</td>
                  
                  </tr>
                 
                
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
}
