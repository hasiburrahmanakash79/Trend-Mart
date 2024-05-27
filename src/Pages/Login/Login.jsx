import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
    <div>
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
          <input
            {...register("password", { required: true })}
            type={passShow ? "text" : "password"}
            placeholder="enter your password"
            className="input input-bordered"
          />
          <label className="label">
            <a className="label-text-alt link link-hover">
              <p onClick={() => setPassShow(!passShow)}>
                <small>
                  {passShow ? <span>Hide Pass</span> : <span>Show Pass</span>}
                </small>
              </p>
            </a>
          </label>
        </div>
        <div className="form-control mt-1">
          <button className="btn btn-warning">Login</button>
        </div>
      </form>
      <div className="text-center mb-7 px-5">
        <div className="divider"></div>
        <p className="font-semibold">Or Sign In with</p>
        <div className="flex items-center justify-center gap-4 my-2">
          {/* <SocialLogin></SocialLogin> */}
        </div>
        <Link to="/signUp">
          Do not have an account?{" "}
          <span className="text-blue-500 font-bold">SignUp</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Login;
