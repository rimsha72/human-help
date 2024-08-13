import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import main from "../assets/main.png"
export default function Login({ setAuthenticated }) {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const backgroundStyle = {
    backgroundImage: `url(${main})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, 
  };

  const blurStyle = {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      emailRef.current.value === "admin@gmail.com" &&
      passwordRef.current.value === "Admin123"
    ) {
      setAuthenticated(true);
      navigate("/");
    } else {
      console.log("Authentication failed");
    }
  };

  return (
    <div className="xl:h-screen h-full " style={backgroundStyle}>
      <div className="relative flex flex-wrap lg:items-center h-screen  text-black"  style={blurStyle}>
        <div className="w-full px-4 sm:px-6 sm:py-16 lg:px-8 " >
          <div className="bg-blue-150/40 backdrop-blur-md rounded max-w-screen-sm mx-auto py-16">
            <div className="mx-auto max-w-lg text-center flex justify-center items-center flex-col">
              <img src={logo} alt="" className="w-[150px] h-[162px]" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mb-0 mt-8 max-w-lg space-y-6"
            >
              <div>
                <label className="text-base font-medium">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="w-full rounded-lg border-blue-350 bg-white text-black mt-2 p-4 pe-12 text-sm shadow-sm outline-none placeholder:text-gray-400"
                  placeholder="name@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-base font-medium">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  className="w-full rounded-lg border-blue-350 bg-white p-4 pe-12 mt-2 text-sm shadow-sm  outline-none text-black placeholder:text-gray-400"
                  placeholder="**********"
                />
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-150 px-6 py-3 font-medium text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
