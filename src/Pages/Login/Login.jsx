import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // logInUser(data.email, data.password)
    //   .then((result) => {
    //     const loggedUser = result.user;
    //     console.log(loggedUser);
    //     navigate(from, { replace: true });
    //     Swal.fire({
    //       showConfirmButton: false,
    //       timer: 2000,
    //       title: "Login Successful",
    //       icon: "success",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="grid grid-cols-2 gap-10 items-center container mx-auto min-h-screen">
      <img src="https://i.ibb.co/3TB6snz/scratch-bd-main-logo.png" className="w-2/3 mx-auto" alt="" />
      <div className="w-full mx-auto border shadow-xl rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex items-center gap-3 justify-between input input-bordered">
            <input
              {...register("password", { required: true })}
              type={passShow ? "text" : "password"}
              placeholder="enter your password"
              className="w-full"
              
            />
            <div className="text-xl text-blue-gray-400">
                <span onClick={() => setPassShow(!passShow)}>
                  
                    {passShow ? <FaEyeSlash/> : <FaEye/>}
                 
                </span>
              </div>
            </div>
            
          </div>
          <div className="form-control mt-5">
            <button className="btn btn-warning">Login</button>
          </div>
        </form>
        <div className="text-center mb-7 px-5">
          <p className="font-semibold">Or Sign In with</p>
          <div className="flex items-center justify-center gap-4 my-2">
            <SocialLogin/>
          </div>
          <Link to="/signUp">
            Do not have an account?{" "}
            <span className="text-blue-600 font-bold">SignUp</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
