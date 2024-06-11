import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section className = "max-container flex justify-center items-center text-center max-lg:flex-col gap-10" id="contact us">
      <h3 className = "text-4xl  font-palanquin font-bold">Sign up for <span className ="text-coral-red">Updates</span> & Newsletters
      </h3>
      <div className = "lg:max-w[40%] flex flex-row px-3 py-2 rounded-full border-slate-gray border-[1.5px]">
        <input type="text" placeholder = "subscribe@nike.com" />
        <div >
          <Button label="Sign Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe;