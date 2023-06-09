// import bg_img from '../assets/formBg.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";
import "./formPlanet.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import FooterLinks from "../components/atoms/FooterLinks";
import RegBurger from "../components/atoms/RegBurger";
import RegLogo from "../components/atoms/RegLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const FormPlanet = () => {
  const first_name = useRef();
  const password_confirm = useRef();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const[isError, setIsError] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== password_confirm.current.value) {
      errorNotify();
    } else {
      postData();
    }
  };

  async function postData() {
    try {
      const res = await axios.post("http://localhost:3000/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        setIsError(false)
        successfullNotify();
        setTimeout(() => {
          setData({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          });
          navigate("/Login");
        }, 2500);
      }
    } catch (error) {
      setIsError(true)
      console.log(error);
    }
  }




  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    first_name.current.focus();
  }, []);

  const successfullNotify = () =>
    toast("Registration successful", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const errorNotify = () =>
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

  return (
    <div className="flex flex-col h-fit">
      <ToastContainer />
      <nav className=" w-screen h-20  flex items-center bg-[#04091b] sticky top-0 z-10000 md:static">
        <div className="hidden xl:block text-white  relative left-10 ">
          <Link to="/Wiki-Planet">
            {" "}
            <h2 className="hover:text-slate-300">Explore Planets</h2>
          </Link>
        </div>
        <RegBurger isActive={isActive} handleToggle={handleToggle} />
        <RegLogo />
        <div className="hidden xl:block text-white relative right-10">
          <Link to="/Login">
            <h2 className="hover:text-slate-300">login</h2>
          </Link>
        </div>
        <Fade>
          <aside
            className={` ${
              isActive
                ? "absolute top-20  w-full h-fit flex  bg-[#04091b]/95 text-xl"
                : "hidden"
            }`}
          >
            <ul className="text-white rounded-br-xl rounded-bl-xl w-full flex justify-evenly items-center flex-col  gap-10 py-10 shadow-sxl md:gap-48 md:py-20 md:text-5xl">
              <Link to="/">
                <li className="active:text-yellow-600">Homepage</li>
              </Link>

              <Link to="/Wiki-Planet">
                <li className="active:text-yellow-600">Explore Planets</li>
              </Link>

              <Link to="/Login">
                <li className="active:text-yellow-600">Login</li>
              </Link>
            </ul>
          </aside>
        </Fade>
      </nav>

      <section
        id="content"
        className="bg-form-bg bg-cover bg-center flex flex-col md:h-min"
      >
        <div className=" backy bg-form-bg8 bg-no-repeat  bg-cover bg-center h-full  ">
          <div className="overlay flex justify-center items-center  ">
            {/* testi pc */}

            <div className="flex flex-col items-center p-5 md:pt-10">
              <h1 className="text-white text-7xl mb-1 italic">Be the next</h1>
              <p className="text-white text-3xl ">
                Universe is waiting for you
              </p>
            </div>
          </div>
        </div>

        <form
          id="register_form"
          action="/register"
          method="POST"
          onSubmit={handleSubmit}
          className="px-8 pb-10  w-full h-full  shadow-2xl bg-gradient-to-b from-transparent to-blue-950  md:pt-10   xl:bg-gradient-to-b xl:from-orange xl:to-black xl:max-w-3xl xl:mx-auto "
        >
          <div className="grid gap-6 my-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="  bg-gray-200 focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="firstname"
                required
                name="first_name"
                value={data.first_name}
                onChange={handleChange}
                ref={first_name}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                placeholder="lastname"
                required
                name="last_name"
                value={data.last_name}
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
                className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
                className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
                className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
                className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
              className={`bg-gray-300  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black `}
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
              className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
              className="bg-gray-200  focus:bg-slate-400 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
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
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="submit"
              className="text-white flex submit-btn justify-evenly items-center bg-yellow-600 hover:bg-yellow-600 hover:ring-yellow-600 hover:ring-2 active:ring-0 ring-yellow-600  font-medium rounded-lg text-sm md:text-lg xl:text-xl w-full sm:w-auto px-5 py-2.5 text-center md:w-1/4 "
            >
              Submit
              <div className="arrow-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>


            </button>
          </div>
          <div className="mt-10 h-4">
            {isError && <h1 className="text-red-600 text-center md:text-left text-lg">User already exist</h1>}
          </div>
        </form>
      </section>
      <div className="xl:w-full ">
        <FooterLinks />
      </div>
    </div>
  );
};

export default FormPlanet;
