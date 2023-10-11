import Rating from '../../../assets/ster.png';
import { GoCodeReview } from 'react-icons/go'
import Beauty1 from '../../../assets/m1.png';
import Beauty2 from '../../../assets/m2.png';
import Beauty3 from '../../../assets/m3.png';
import Beauty4 from '../../../assets/m4.png';
import Beauty5 from '../../../assets/m5.png';
import Beauty6 from '../../../assets/m6.png';
import Item from '../Items/Item';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Beauty = () => {
    return (
        <div>
            <Item></Item>
            <div className='bg-white mt-5'>
            <div className='bg-white py-7'>
            <h1 className='text-2xl font-bold text-center'>Other Services</h1>
            <div className='border-b-2 pb-3 w-5/6 lg:w-4/6 mx-auto'>
            <nav className='list-none grid grid-cols-2 lg:flex  justify-center gap-5 text-lg '>
                                        <li><Link to='/ourServices'>Wedding Card</Link></li>
                                        <li className='text-red-400 font-semibold text-xl underline'><Link to='/makeUp'>MakeUp & Beauty</Link></li>
                                        <li><Link to='/weddingFlower'>Wedding Flowers</Link></li>
                                        <li><Link to='/weddingCake'>Wedding Cake</Link></li>
                                    </nav>
            </div>
            </div>               
            <section className="text-gray-600 body-font">
                                    <div className="container px-5 py-4 mx-auto">
                                        <div className="flex flex-wrap -m-4">
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={Beauty1} alt="blog"/>
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MakeUp & Beauty</h1>
                                                <p className="leading-relaxed mb-3">Makeup artist best Designer for 2 year Experience.</p>
                                                <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    <h3>Price: 5,200 TK(Par day)</h3>
                                                </a>
                                                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <img src={Rating} alt="" className='w-8' /> <span className='text-lg font-bold'>4/5</span>
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-lg">
                                                    <GoCodeReview/>6
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={Beauty2} alt="blog" />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MakeUp & Beauty</h1>
                                                <p className="leading-relaxed mb-3">Makeup artist best Designer for 2 year Experience.</p>
                                                <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    <h3>Price: 3,245 TK(Par Day)</h3>
                                                </a>
                                                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <img src={Rating} alt="" className='w-8' /> <span className='text-lg font-bold'>3/5</span>
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-lg">
                                                    <GoCodeReview/>21
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={Beauty3} alt="blog"/>
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MakeUp & Beauty</h1>
                                                <p className="leading-relaxed mb-3">Makeup artist best Designer for 2 year Experience.</p>
                                                <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    <h3>Price: 350 TK(Par Day)</h3>
                                                </a>
                                                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <img src={Rating} alt="" className='w-8' /> <span className='text-lg font-bold'>5/5</span>
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-lg">
                                                    <GoCodeReview/>12
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={Beauty4} alt="blog"/>
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MakeUp & Beauty</h1>
                                                <p className="leading-relaxed mb-3">Makeup artist best Designer for 2 year Experience.</p>
                                                <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    <h3>Price: 6,250 TK(Par Day)</h3>
                                                </a>
                                                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <img src={Rating} alt="" className='w-8' /> <span className='text-lg font-bold'>3/5</span>
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-lg">
                                                    <GoCodeReview/>22
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={Beauty5} alt="blog"/>
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MakeUp & Beauty</h1>
                                                <p className="leading-relaxed mb-3">Makeup artist best Designer for 2 year Experience.</p>
                                                <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    <h3>Price: 4,450 TK(Par Day)</h3>
                                                </a>
                                                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <img src={Rating} alt="" className='w-8' /> <span className='text-lg font-bold'>4/5</span>
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-lg">
                                                    <GoCodeReview/>26
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={Beauty6} alt="blog"/>
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MakeUp & Beauty</h1>
                                                <p className="leading-relaxed mb-3">Makeup artist best Designer for 2 year Experience.</p>
                                                <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    <h3>Price: 6,350 TK(Par Day)</h3>
                                                </a>
                                                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <img src={Rating} alt="" className='w-8' /> <span className='text-lg font-bold'>3/5</span>
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-lg">
                                                    <GoCodeReview/>12
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </section>
                                 </div>
                                 <div className='bg-white py-3 mt-2 rounded-t-lg'>
                                    <h1 className='text-4xl font-extrabold text-sky-700 ml-10 my-3'>Public Reviews</h1>
                                    <Review></Review>
                                    </div>
                             </div>
    );
};

export default Beauty;