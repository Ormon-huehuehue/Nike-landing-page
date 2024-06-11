import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard.jsx";

const Services = () => {
  return (
    <section className = "max-container flex justify-center flex-wrap gap-9">
      {services.map((item,index)=>(
        <ServiceCard key = {index} {...item}/>
       

      ))}

    </section>
  )
}


export default Services;