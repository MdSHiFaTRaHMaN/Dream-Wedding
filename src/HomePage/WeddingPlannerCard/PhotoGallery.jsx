import Image1 from '../../assets/i1.png'
import Image2 from '../../assets/i2.png'
import Image3 from '../../assets/i3.png'
import Image4 from '../../assets/i4.png'
import Image5 from '../../assets/i5.png'
import Image6 from '../../assets/i6.png'
const PhotoGallery = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-2 lg:px-12 lg:pt-7">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full lg:w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Image1} />
      </div>
      <div className="w- lg:w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Image2} />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Image5} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Image4} />
      </div>
      <div className="w-full lg:w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Image3} />
      </div>
      <div className="w-full lg:w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Image6} />
      </div>
    </div>
  </div>
      </div>
        </div>
    );
};

export default PhotoGallery;