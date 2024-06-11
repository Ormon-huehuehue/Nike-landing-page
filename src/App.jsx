import React from 'react'
import Nav from './Components/Nav.jsx'

import {PopularProducts, Services,  SuperQuality, Subscribe, Hero,Footer} from './sections/index.js'

const App = () => {
  return (
    <div className="relative">
      <Nav/>
      <section className="x1:padding-1 wide:padding-r padding-b">
        <Hero>

        </Hero>
      </section>
      <section className = "padding">
        <PopularProducts>

        </PopularProducts>  
      </section>
      <section className = "padding">
        <SuperQuality>

        </SuperQuality> 
      </section>
      <section className = "padding-x py-10">
        <Services>

        </Services>  
      </section>
  
      <section className = "padding-x sm:py-32 py-16 w-full">
        <Subscribe>

        </Subscribe>
      </section>
      <section className = "padding bg-black padding-x padding-t pb-8">
        <Footer>

        </Footer>  
      </section>
    </div>
  )
}

export default App