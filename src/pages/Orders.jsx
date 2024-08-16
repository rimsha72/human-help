import Header from "../layouts/partials/header";
import { useState } from "react";
import profile from "../assets/profile.png"

export default function UserProfiles() {
  const [users, setUsers] = useState([
    {
      id: 1,
      profilePhoto: profile,
      fullName: "John Doe",
      email: "johndoe@example.com",
      mobileNumber: "(202) 39384384203",
      interests: ["Photography", "Music", "Video Games", "Technology"],
    },
    {
      id: 2,
      profilePhoto: profile,
      fullName: "Jane Smith",
      email: "janesmith@example.com",
      mobileNumber: "(303) 4958472938",
      interests: ["Art & Craft", "Reading", "Travelling", "Education"],
    },
    {
      id: 3,
      profilePhoto: profile,
      fullName: "Michael Johnson",
      email: "michaeljohnson@example.com",
      mobileNumber: "(404) 5832948204",
      interests: ["Politics", "Photography", "Technology", "Programming"],
    },
    {
      id: 4,
      profilePhoto: profile,
      fullName: "Emily Davis",
      email: "emilydavis@example.com",
      mobileNumber: "(505) 5849304950",
      interests: ["Music", "Travelling", "Education", "Video Games"],
    },
    {
      id: 5,
      profilePhoto: profile,
      fullName: "David Wilson",
      email: "davidwilson@example.com",
      mobileNumber: "(606) 5932043948",
      interests: ["Programming", "Art & Craft", "Reading", "Politics"],
    },
  ]);


  return (
    <div>
      <Header header={"User Profiles"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 pt-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-black text-sm border-b-2 bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">Profile Photo</th>
                  <th scope="col" className="px-6 py-3">Full Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Mobile Number</th>
                  <th scope="col" className="px-6 py-3">Interests</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="bg-white border-b hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <img
                        src={user.profilePhoto}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {user.fullName}
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.mobileNumber}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest) => (
                          <div
                            key={interest}
                            className="flex items-center bg-blue-150/20 text-blue-150 font-medium px-4 py-1 rounded-full"
                          >
                            {interest}
                            
                          </div>
                        ))}
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
  );
}
