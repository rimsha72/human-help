import Header from "../layouts/partials/header";
import { useState } from "react";
import event from "../assets/event.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function Sellers() {
  const navigate = useNavigate();
  
  // Categories and Events Data
  const categories = ["All", "Human", "Animal", "Nature", "Clothing"];
  const events = [
    { id: 1, image: event, name: "Find a group for animal cleaning...", date: "1st May", category: "Human", day: "Wednesday", time: "4:00PM - 9:00PM", address: "Gala Convention Center 36 Guild Street London, UK", organizer: "Katherine Sayem", participants: 19 },
    { id: 2, image: event2, name: "Student seeks help with moving", date: "10th May", category: "Animal", day: "Monday", time: "1:00PM - 2:00PM", address: "Gala Convention Center 36 Guild Street London, UK", organizer: "Katherine Sayem", participants: 4 },
    { id: 3, image: event3, name: "Lorem ipsum dolor amet", date: "15 June", category: "Nature", day: "Friday", time: "6:00PM - 7:00PM", address: "Gala Convention Center 36 Guild Street London, UK", organizer: "Katherine Sayem", participants: 31 },
    { id: 4, image: event4, name: "Lorem ipsum dolor amet", date: "25 August", category: "Human", day: "Monday", time: "8:00PM - 9:00PM", address: "Gala Convention Center 36 Guild Street London, UK", organizer: "Katherine Sayem", participants: 25 },
    { id: 5, image: event5, name: "Lorem ipsum dolor amet", date: "13 April", category: "Clothing", day: "Thursday", time: "2:00PM - 3:00PM", address: "Gala Convention Center 36 Guild Street London, UK", organizer: "Katherine Sayem", participants: 10 },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div>
      <Header header={"Manage Events"} />
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
                  placeholder="Search event"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start my-6 text-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-2 rounded-md mr-2 ${selectedCategory === category ? 'bg-blue-150 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-black text-sm border-b-2 bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Category</th>
                  <th scope="col" className="px-6 py-3">Day</th>
                  <th scope="col" className="px-6 py-3">Time</th>
                  <th scope="col" className="px-6 py-3">Address</th>
                  <th scope="col" className="px-6 py-3">Organizer name</th>
                  <th scope="col" className="px-6 py-3">No of participants</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map(event => (
                  <tr key={event.id} className="bg-white border-b hover:bg-orange-150/30">
                    <td className="px-3 py-4 h-16 w-48 rounded-md">
                      <img className="h-16 w-24 rounded-md object-cover" src={event.image} alt={event.name} />
                    </td>
                    <td className="px-3 py-4">{event.name}</td>
                    <td className="px-3 py-4">{event.date}</td>
                    <td className="px-3 py-4">{event.category}</td>
                    <td className="px-3 py-4">{event.day}</td>
                    <td className="px-3 py-4">{event.time}</td>
                    <td className="px-3 py-4">{event.address}</td>
                    <td className="px-3 py-4">{event.organizer}</td>
                    <td className="px-3 py-4">{event.participants}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
