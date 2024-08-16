import Header from "../layouts/partials/header";
import { useState } from "react";
import { MdDelete, MdReply } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, seller: "John Doe", accountId: "ACCT123", rating: 5, notes: "Impressive", reply: "" },
    { id: 2, seller: "Jane Smith", accountId: "ACCT456", rating: 4, notes: "Helpful", reply: "" },
    { id: 3, seller: "Alice Johnson", accountId: "ACCT789", rating: 3, notes: "Good", reply: "" },
  ]);

  const [replyText, setReplyText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentReplyId, setCurrentReplyId] = useState(null);

  const handleDelete = (feedbackId) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== feedbackId));
  };

  const handleReply = (feedbackId) => {
    setFeedbacks(feedbacks.map(feedback => 
      feedback.id === feedbackId ? { ...feedback, reply: replyText } : feedback
    ));
    setReplyText("");
    setIsOpen(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={`inline-block ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div>
      <Header header={"Manage Feedbacks"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 pt-8">
          <div className="flex flex-wrap gap-4 justify-end mb-6">
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
                placeholder="Search ..."
                required
              />
            </div>
          </div>
          <div className="my-10">
            <div className="relative overflow-x-auto drop-shadow-sm bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-black text-sm border-b-2 bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3"> User</th>
                    <th scope="col" className="px-6 py-3">Rating</th>
                    <th scope="col" className="px-6 py-3">Notes</th>
                    <th scope="col" className="px-6 py-3">Reply</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((feedback) => (
                    <tr key={feedback.id} className="bg-white border-b hover:bg-orange-150/30">
                      <td className="px-6 py-4 font-medium text-gray-900">{feedback.seller}</td>
                      <td className="px-6 py-4">
                        {renderStars(feedback.rating)}
                      </td>
                      <td className="px-6 py-4">{feedback.notes}</td>
                      <td className="px-6 py-4">{feedback.reply}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="bg-black text-white px-4 py-1.5 text-xs rounded flex items-center gap-2" 
                          onClick={() => { setIsOpen(true); setCurrentReplyId(feedback.id); }} 
                          >
                          Reply<MdReply 
                          className="h-5 w-5" 
                        />
                        </button>
                        
                        <MdDelete 
                          className="h-6 w-6 text-red-700 cursor-pointer" 
                          onClick={() => handleDelete(feedback.id)} 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-lg font-bold mb-4">Reply to Feedback</h2>
            <textarea
              className="w-full p-2 border focus:outline-none border-gray-300 rounded-lg mb-4"
              rows="5"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            ></textarea>
            <div className="flex gap-2 text-sm mt-6 justify-end">
              <button
                className="px-4 py-2 bg-black text-white rounded-md"
                onClick={() => handleReply(currentReplyId)}
              >
                Reply
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() => { setIsOpen(false); setReplyText(""); }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
