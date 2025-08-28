
import  Form  from "../components/Form";
import  ContactForm  from "../components/ContactForm";
const Home = () => {
  return(
  <>
  <div className={localStorage.getItem('i18nextLng') === 'ku'?'ku':''}>
     <Form/>
     <ContactForm/>
    </div>
   </>
  )
};

export default Home;
