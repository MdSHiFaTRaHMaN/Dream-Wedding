import { BsArrowRight, BsGoogle, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div>
      <div className="flex justify-center lg:pb-40 mt-16 ">
        <div className="flex justify-center rounded shadow max-w-7xl w-[90%] bg-white  m-4">
          <div className="h-[90%] w-full mt-7">
            <div className=" flex flex-col justify-center items-center space-y-2">
              <div>
                <h1 className="text-xl font-semibold text-blue-600 ">Here you can Login</h1>
              </div>
            </div>
            <form >
              <div className="flex flex-col justify-center items-center mt-7 space-y-2 md:space-y-2">
                <div className="space-y-1">
                  <h1 className="text-base text-black">Email</h1>
                  <input
                    type="email"
                    placeholder="Your Email...."
                    name="email"
                    className="rounded-md px-5 py-2 bg-gray-100 text-gray-900 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="text-base text-black">Password</h1>
                  <input
                    type="password"
                    name="password"
                    placeholder="******"
                    className="rounded-md px-5 py-2 bg-gray-100 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                  />
                </div>
                <div className="-ml-44">
                  <a className="text-sm font-medium text-black hover:text-green-600 hover:underline underline-offset-4">
                    Forgot your Password ?
                  </a>
                </div>
              </div>
              <div className="text-center mt-5">
                  <button className="btn btn-secondary">login</button>
              </div>
            </form>
            <div className="text-center flex justify-center my-1">
              <h2 className="text-lg font-medium text-black">
                Don't Have a Account.
              </h2>
              <Link
                to="/register"
                className=" text-blue-900 flex items-center text-lg font-bold hover:underline hover:text-green-600"
              >
                <h1>Please Register </h1>
                <BsArrowRight></BsArrowRight>
              </Link>
            </div>
            <div className="flex justify-center text-center mx-auto gap-3 my-3">
              <button className="btn">
                <BsGoogle></BsGoogle> Google
              </button>
              <button className="btn" >
                <BsFacebook></BsFacebook> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
