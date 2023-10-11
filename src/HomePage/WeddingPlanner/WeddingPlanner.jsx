import { useEffect, useState } from "react";
import WeddingPlannerCard from "../WeddingPlannerCard/WeddingPlannerCard";

const WeddingPlanner = () => {
    const [weddings, setWedding] = useState([]);

    useEffect( () =>{
        fetch('WeddingData.json')
       .then(res => res.json())
       .then(data => setWedding(data))
    },[])
    

    return (
        <div>
            <section className=" body-font mx-auto">
                <h1 className="text-4xl font-bold text-center">Wedding Services</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
        {
            weddings.map(wedding => <WeddingPlannerCard key={wedding.id} wedding={wedding}></WeddingPlannerCard>)
        }
    </div>
  </div>
</section>
        </div>
    );
};

export default WeddingPlanner;