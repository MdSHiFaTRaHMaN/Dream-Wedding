import './banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner hero h-[600px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <form>
            <div className="search-box pr-5 rounded">
                <h1 className='text-2xl font-bold'>Your Wedding,Your Way</h1>
                <p className='text-xl my-5'>Find the best wedding vendors with thousands of trusted reviews</p>
                <select type="text" className="search-field py-3 text-red-500">
            <option disabled selected>Select vendor type</option>
            <option value="Wedding Venues">Wedding Venues</option>
            <option value="Family makeup">Family makeup</option>
            <option value="bridal makeup">Bridal Makeup</option>
            <option value="Groom Wear">Groom Wear</option>
            <option value="Wedding Decoration">Wedding decoration</option>
        </select>
                <select type="text" className="search-field mx-3 py-3 text-red-500">
            <option disabled selected>City</option>
            <option value="Anand">Dhaka</option>
            <option value="Ahemdabad">Barisal</option>
            <option value="Mumbai">Rangpur</option>
            <option value="Baroda">Sylet</option>
            <option value="Goa">Rajshahi</option>
        </select>
                <button className="btn btn-accent">Search</button>
            </div>
        </form>
                 </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;