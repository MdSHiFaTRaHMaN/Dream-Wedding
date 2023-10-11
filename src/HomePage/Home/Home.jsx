import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import WeddingPlanner from "../WeddingPlanner/WeddingPlanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WeddingPlanner></WeddingPlanner>
            <Contact></Contact>
        </div>
    );
};

export default Home;