import { useLoaderData, useParams } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { FcBusinessContact } from "react-icons/fc";
import { BiSolidUserBadge } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import Ster from '../../assets/ster.png'
import PhotoGallery from "../WeddingPlannerCard/PhotoGallery";
import Review from "../../Components/OurServices/Review/Review";

const WeddingCardDetails = () => {
     const cardData = useLoaderData()
     const { id } = useParams();
     const idInt = parseInt(id);
     const cardDetails = cardData.find((cardDetails) => cardDetails.id === idInt);
     const {title,image,address,price,rating,Experience,contact_person,location,gmail,number} = cardDetails;
    return (
        <div className="my-7">
                            <div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-7">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                    className="rounded-t-lg h-[500px] w-full "
                    src={image}
                    alt="" />
                </div>
                <div className="flex justify-between">
                        <div className="p-6">
                            <h5  className=" text-xl leading-tight text-black font-bold">
                            {title}</h5>
                            <div className="flex gap-2 mt-1">
                            <span><TiLocation></TiLocation></span>
                            <p className="mb-4 text-base text-black">
                            {address}
                            </p>
                            </div>
                            <p className=" text-lg font-semibold text-green-900">
                                Open Now   
                            <small className="text-neutral-900"> →  9:00 AM to 11:00 PM</small>
                            </p>
                            <h3><span className="text-xl font-semibold">Price: </span>
                            {price} [75% Advance Payment]</h3>
                        </div>
                        <div className="mt-7 mr-2">
                        <div className="flex ">
                        <img src={Ster} alt="" className="w-12" />
                            <h1 className="text-3xl text-right font-bold">{rating}/<span className="text-sm font-normal">5</span></h1>
                        </div>
                        <h4 className="text-right mr-6">Based on Review 12k</h4>
                        </div>
                </div>
                </div>
                        <section>
                            <div className="mt-5 bg-white rounded-xl px-7 py-10">
                            <h1 className="text-blue-500 text-2xl font-semibold mb-5">Overview</h1>
                                <div className="flex justify-between text-xl pb-4  border-b-2"> 
                                    <div>
                                        <h3>Experience: {Experience}</h3>
                                        <h3>No of employees: 5</h3>
                                    </div>
                                    <div>
                                        <h3>Sulekha Score: 5.6</h3>
                                        <h3>Company type: Individual/ Proprietor / HUF</h3>
                                    </div>
                                </div>
                                {/* Serving cities */}
                            <div className="my-3 border-b-2 pb-4">
                                    <h2 className="text-blue-500 text-2xl font-semibold mb-5">Serving cities</h2>
                                    <h4>Merul Badda, Dhaka <a onClick={()=>document.getElementById('my_modal_3').showModal()}
                                    className="text-green-800  underline">More View</a></h4>
                            </div>
                                        {/* More information */}
                            <div className="my-3 border-b-2 pb-4">
                                    <h1 className="text-blue-500 text-2xl font-semibold mb-5">More information</h1>
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-green-700 text-xl ">Contact Person</h2>
                                            <h3>{contact_person}</h3>
                                            <h4>Number: {number}</h4>
                                            <h4>Email: {gmail}</h4>
                                        </div>
                                        <div>
                                            <h2 className="text-green-700 text-xl">Address</h2>
                                            <span>{location}</span>
                                        </div>
                                    </div>
                            </div>
               {/* Document verification */}
               <div>
                    <h2 className="text-blue-500 text-2xl font-semibold mb-5">Document verification</h2>
                    <div className="flex items-center text-2xl gap-1">
                    <FcBusinessContact/>
                    <h4>Business details- </h4>
                    <MdVerified className="text-green-600"></MdVerified>
                    <span className="text-green-600">Verified</span>
                    </div>
                    <div className="flex items-center text-2xl gap-1">
                    <BiSolidUserBadge/>
                    <h4>ID Proof- </h4>
                    <MdVerified className="text-green-600"></MdVerified>
                    <span className="text-green-600">Verified</span>
                    </div>
               </div>

            </div>
        </section>
        <section className="mt-5 bg-white rounded-xl px-7 py-10">
            <h1 className="text-blue-500 text-2xl font-semibold mb-5 pb-4 border-b-2 text-center">Gallery</h1>
           <PhotoGallery></PhotoGallery>
        </section>
        <section className="bg-white py-5 my-5 rounded-lg">
            <Review></Review>
        </section>
                                    {/* Model By daisyUi */}
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg text-center">Other Citis</h3>
                              <div className="flex justify-between">
                                <div className="text-lg">
                                    <li>Gazipur</li>
                                    <li>Tangail </li>
                                    <li>Manikganj </li>
                                    <li>Narayanganj </li>
                                    <li>Faridpur </li>
                                    <li>Narsingdi </li>
                                </div>
                                <div className="text-lg">
                                    <li>Gopalganj </li>
                                    <li>Madaripur </li>
                                    <li>Shariatpur </li>
                                    <li>Chandpur </li>
                                    <li>Rajbari </li>
                                    <li>Kishoreganj </li>
                                </div>
                              </div>
                        </div>
                        </dialog>
        </div>
    );
};

export default WeddingCardDetails;