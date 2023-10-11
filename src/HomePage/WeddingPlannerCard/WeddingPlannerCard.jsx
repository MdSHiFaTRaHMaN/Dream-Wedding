import { BsArrowRight } from 'react-icons/bs';
import { BiSolidStar } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import { RiPriceTag2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const WeddingPlannerCard = ({wedding}) => {
    const {title,rating,address,price,image,id} = wedding;
    return (
        <div>
            <div className="p-4 md:w-1/3">
        <div className=" w-[300px] lg:w-[550px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-56 md:h-36 w-full object-cover object-center" src={image} alt="blog"/>
          <div className="p-6 bg-white">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Wedding Function</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-2">{title}</h1>
            <div className='flex items-center gap-2'>
                <span><TiLocation></TiLocation></span>
                <p className="leading-relaxed font-bold">{address}</p>
            </div>
            <div className='flex items-center gap-2'>
                <span><RiPriceTag2Fill></RiPriceTag2Fill></span>
                <p className="leading-relaxed font-bold">{price}</p>
            </div>
            <div className="flex items-center flex-wrap ">
                <Link to={`weddingPlanner/${id}`}>
                <button className='btn btn-info mt-2'>
                <li className="text-white inline-flex items-center md:mb-2 lg:mb-0">Show Details
                <BsArrowRight></BsArrowRight>
              </li>
                </button>
             </Link>
              <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xl font-bold pr-3 py-1 border-r-2 border-gray-200">
                <BiSolidStar></BiSolidStar>{rating}/5
              </span>
            </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default WeddingPlannerCard;