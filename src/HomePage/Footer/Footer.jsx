import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo2.png'
import { MdFacebook, MdWhatsapp } from 'react-icons/md';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 bg-white body-font mx-auto">
  <div className="container px-5 py-24 mx-auto w-full lg:w-5/6 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-80 lg:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start lg:justify-center text-gray-900">
        <img src={Logo} alt="Logo" className='w-20 lg:w-28 '  />
        <span className="ml-3 text-2xl text-blue-700 font-semibold">Wedding Planner</span>
      </a>
      <p className="mt-2 mx-auto text-sm text-gray-500">Company and Professional registrations, Legal Services, Website Preparing, 
      Resume Preparing Services and all types of counsellings under one roof hastle free.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Wedding Planner</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/ourServices' className="text-gray-600 hover:text-gray-800">Our Services</Link>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Rating & Review</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Login/Register</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3">Other Services</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Wedding Cart</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Wedding Flower</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">MakeUp & Beauty</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Wedding Cake</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3">Socail Media</h2>
        <nav className="list-none mb-10 flex gap-5 ml-10  text-4xl text-sky-700">
          <MdFacebook></MdFacebook>
          <MdWhatsapp></MdWhatsapp>
          <BsTwitter></BsTwitter>
          <BsInstagram></BsInstagram>
        </nav>
      </div>
     
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;