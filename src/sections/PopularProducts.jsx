import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className = "max-container max-sm:mt-12">
      <div className = "flex flex-col justify-start gap-5">
        <h2 className = "text-4xl font font-palanquin font-bold">Our <span className= "text-coral-red">Popular</span> Products</h2>
        <p className = "lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value </p>
      </div>
      
      
      
      
      
      
      
      
      
      <div className = "flex flex-row justify-center gap-5 pt-12">
        {products.map((product,index)=>(
          <div key={index} className = "text-center">
            <img src= {product.imgURL} alt="product name" />
            <h1 className = "text-xl font-montserrat font-bold pt-4"> {product.name}</h1>
            <p className = "font-palanquin text-slate-600 text-xl mt-2"> {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts;