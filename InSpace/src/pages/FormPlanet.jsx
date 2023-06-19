// import bg_img from '../assets/formBg.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import "./formPlanet.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Footer from "../components/bundles/footer/Footer";

export const FormPlanet = () => {
  const notify = () =>
    toast.error("Passwords do not match ☄️", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const password_confirm = useRef();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== password_confirm.current.value) {
      notify();
    } else {
      console.log(data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    
    <section
      id="content"
      className=" bg-form-bg bg-cover bg-center  flex flex-col h-full md:items-center  xl:justify-end xl:items-start  xl:flex-row "
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" backy bg-form-bg8 bg-no-repeat  bg-cover bg-center w-1/2 h-screen  ">
        <Fade>
          <div className="overlay flex justify-center items-center bg-">
            {/* testi pc */}
            <Fade bottom delay={500}>
              <div className="flex flex-col items-center w-full p-5 m-auto rounded-xl">
                <h1 className="text-white text-7xl mb-1 italic">Be the next</h1>
                <p className="text-white text-3xl ">
                  Universe is waiting for you
                </p>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>

      <Link
        to="/"
        className=" flex justify-center items-center bg-logo h-20  bg-center bg-no-repeat md:w-full xl:hidden"
      />

      <Fade>
        <form
          action="/register"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full  shadow-2xl bg-gradient-to-b from-transparent to-blue-950 p-6   xl:w-1/2 xl:h-screen xl:my-0  xl:bg-gradient-to-b xl:from-orange xl:to-black "
        >
          <Link to="/">
            <div className="logo w-1/3 h-10 bg-logo bg-cover bg-center xl: m-auto"></div>
          </Link>

          <div className="grid gap-6 my-6 md:grid-cols-2 xl:mt-10 ">
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="firstname"
                required
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
            </div>
            <div >
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="lastname"
                required
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                State
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Italy , United States, United Kingdom..."
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Address"
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="age"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Age"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="user@gmail.com"
              required
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
              name="password_confirm"
              ref={password_confirm}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-yellow-600 hover:underline dark:text-yellow-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white  bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </Fade>
      <div className="xl:hidden">
      <Footer/>
      </div>
    </section>
    
    
  );
};

export default FormPlanet;
