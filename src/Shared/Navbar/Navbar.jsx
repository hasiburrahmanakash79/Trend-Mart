import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-50">
      <div className=" p-2 bg-white shadow-xl">
        <div className="grid md:grid-cols-3 grid-cols-2 justify-between items-center container mx-auto">
          <div className="">
            <span className="">
              <h1 className="md:text-4xl text-2xl font-bold uppercase">Trend Mart</h1>
            </span>
          </div>
          <label className="input input-bordered md:flex items-center gap-2 hidden">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="flex items-center justify-end gap-5">
            <div className="avatar">
              <div className="w-8 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://docs.material-tailwind.com/img/face-2.jpg" />
              </div>
            </div>
            <FaCartShopping className="text-2xl" />
            <button className="btn btn-success btn-sm text-white">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
