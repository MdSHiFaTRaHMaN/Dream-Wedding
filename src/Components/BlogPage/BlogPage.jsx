

import { useRef, useEffect } from 'react';
const BlogPage = () => {

        const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });

        return () => {
            video.removeEventListener('ended', () => {});
        };
    }, []);
    return (
        <div>
            <section className="text-gray-600 body-font bg-white mt-5 rounded-t-lg">
                <h1 className="text-sky-500 text-3xl  text-center pt-7 font-bold">Complate Our Wedding Program</h1>
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mb-10 md:mb-0">
    <video className="object-cover object-center rounded h-[450px] w-[400px]" ref={videoRef}
        src="" autoPlay></video> 
           </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-3 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h1 className="text-2xl font-bold text-green-600 mb-4">Wedding Funtion</h1>
      <p className="mb-8 leading-relaxed">We were able to finish our work in a beautiful way and everyone appreciated our work.
       They are very happy with our work. We can fulfill them according to their mind</p>
      <div className="">
        <h1>Thanks You so Much for this opportunity for Me</h1>
      </div>
    </div>
  </div>
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
   
    <div className="lg:flex-grow md:w-1/2 lg:pl-3 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="text-2xl font-bold text-green-600 mb-4">Wedding Funtion</h1>
      <p className="mb-8 leading-relaxed">We were able to finish our work in a beautiful way and everyone appreciated our work.
       They are very happy with our work. We can fulfill them according to their mind</p>
      <div className="">
        <h1>Thanks You so Much for this opportunity for Me</h1>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mb-10 md:mb-0">
        <video className="object-cover object-center rounded h-[450px] w-[400px]" ref={videoRef}
        src="{Video2}" autoPlay></video>
    </div>
  </div>
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mb-10 md:mb-0">
    <video ref={videoRef} className="object-cover object-center rounded h-[450px] w-[400px]" src="{Video3}" autoPlay></video>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-3 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="text-2xl font-bold text-green-600 mb-4">Wedding Funtion</h1>
      <p className="mb-8 leading-relaxed">We were able to finish our work in a beautiful way and everyone appreciated our work.
       They are very happy with our work. We can fulfill them according to their mind</p>
      <div className="">
        <h1>Thanks You so Much for this opportunity for Me</h1>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default BlogPage;