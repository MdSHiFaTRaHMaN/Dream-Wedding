import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/Logo2.png'
import './Navber.css'

const Navber = () => {

    return (
        <div className="">
            <header className="mx-auto text-gray-600 body-font" >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={Logo} alt="" className="w-16"  />
      <h1 className="text-3xl font-bold text-blue-600">Wedding Planer</h1>
    </a>
    <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center list-none">
        <NavLink to='/'><li className="mr-5 text-xl">Home</li></NavLink>
      <NavLink to='/ourServices'><li className="mr-5 text-xl">Services</li></NavLink>
      <NavLink to='/blogPage'><li className="mr-5 text-xl">Blog</li></NavLink>
    </nav>
        <Link to="/login"><button  className="btn btn-primary ml-1 lg:ml-40">Login</button></Link>
   
  </div>
</header>
        </div>
    );
};

export default Navber;