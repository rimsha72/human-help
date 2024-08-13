
import Header from "../layouts/partials/header"
import { PiNotePencilBold } from "react-icons/pi"
import profile from "../assets/profile1.svg";
export default function Profile() {
    
    return (
        <div>
            <Header header={"profile"} />
            <div className="max-w-screen-2xl ">
               
                <div className="mx-4 sm:mx-9 my-4 rounded">
                    <div className="relative overflow-x-auto drop-shadow-xl sm:rounded-lg">
                        <div className="col-span-12 rounded-2xl bg-orange-450 px-5 pt-7 pb-5 sm:px-7 xl:col-span-8 text-black">
                            <div>
                                <img src={profile} alt="" className="mb-4" />
                                <p>Jan doe</p>
                                <p className="mt-2">jandoe@example.com</p>
                            </div>
                           
                            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-24 mt-8">
                                <div className="mb-6 flex-1">
                                    <label htmlFor="orderID1" className="block mb-2 text-sm font-medium text-black">Name</label>
                                    <input
                                        type="text"
                                        id="orderID1"
                                        className="block py-2.5 w-full lg:w-[340px] text-md text-black bg-transparent border-0 outline-none"
                                        placeholder="Jan doe"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-6 flex-1 justify-center">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Email Address</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="block py-2.5 w-full text-md text-black bg-transparent  outline-none"
                                        placeholder="jandoe@example.com"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-6 flex-1 justify-end">
                                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-black">Contact number</label>
                                    <input
                                        type="text"
                                        id="contact"
                                        className="block py-2.5 w-full text-md text-black bg-transparent  outline-none"
                                        placeholder="(308) 555-0121"
                                        readOnly
                                    />
                                </div>

                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}