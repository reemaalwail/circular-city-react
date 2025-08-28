
import  Form  from "../components/Form";

const Home = () => {
  return(
  <>
  <div className={localStorage.getItem('i18nextLng') === 'ku'?'ku':''}>
     <Form/>
    </div>
   </>
  )
};

export default Home;
