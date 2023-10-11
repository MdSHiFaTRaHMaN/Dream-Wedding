
const ServicesCard = ({card}) => {
    const {id,title,description,bg_img,logo} = card;
    return (
        <div>
            
            <section className="text-gray-600 body-font">
  <div className="">
    <div className="">
      <div className="w-full lg:w-1/3 sm:w-1/2 p-4">
      <div className="card mx-auto w-72 lg:w-96  h-60  shadow-xl image-full">
            <figure><img src={bg_img} alt="Shoes" className="w-96" /></figure>
            <div className="card-body">
                <img src={logo} alt="" className="rounded-full w-12 h-12" />
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            </div>
      </div>
    </div>
  </div>
            </section>
        </div>
    );
};

export default ServicesCard;