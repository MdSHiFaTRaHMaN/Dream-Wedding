import { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';


const Services = () => {

        const [servicesCard, setServicesCard] = useState([]);
        useEffect( () =>{
            fetch('services.json')
            .then(res => res.json())
            .then(data => setServicesCard(data))
        },[])
    return (
        <div className='container px-5 py-24 mx-auto'>
            <h1 className='text-4xl text-center my-6'>Other Sercives</h1>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 -m-4'> 
           {
                servicesCard.map(card => <ServicesCard key={card.id} card={card}></ServicesCard>)
            }

           </div>
        </div>
    );
};

export default Services;