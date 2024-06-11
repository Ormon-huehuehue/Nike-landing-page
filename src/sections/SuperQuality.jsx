import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className = " flex xl:flex-row flex-col justify-between xl:items-center max-container">
      <div id = "Info" className = "xl:w-3/5 justify-start">
      <h3 className = "text-4xl font font-palanquin font-bold"> We Provide You <span className = "text-coral-red ">Super</span> Quality Shoes</h3>
      <p className = " mt-5  font-montserrat text-slate-gray text-xl"> Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance </p>
      <p className = "  mt-2 font-montserrat text-slate-gray text-xl mb-4 ">Our dedication to detail and excellence ensures your satisfaction</p>
      <Button label="View Details" />
      </div>

      

      <div id="image" className = "flex-1 flex justify-center items-center sm:pt-10">
        <img src={shoe8} alt="shoe" width={570} height={522} className = "object-contain"/> 
      </div>
      
    </section>
  )
}

export default SuperQuality;