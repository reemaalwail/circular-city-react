
import  Header  from "../components/header";
import Services  from "../components/services";
import  Partner  from "../components/partner";
import  MilestonesGrowth  from "../components/milestonesGrowth";
import  Discover  from "../components/discover";
import  WhoWeAre  from "../components/whoWeAre";
import  SlideNews  from "../components/slideNews";
import  SlideOurproject  from "../components/slideOurproject";

const Home = () => {
  return(
  <>
  <div className="home">
     <Header/>
     <WhoWeAre/>
     <Services/>
     <MilestonesGrowth/>
     <Discover/>
     <SlideOurproject/>
     <SlideNews/>
     <Partner/>

    </div>
   </>
  )
};

export default Home;
