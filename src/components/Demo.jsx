import React from 'react'
import NewFooter from './NewFooter'
import ContactForm from './ContactForm'






const Demo = () => {

  
  return (
    <div id='home'>

        <img src='/images/0001.jpg' alt=''/>
        <img className='' src='/images/0002.jpg' alt=''/>
      
        
      
        <ContactForm/>


        
        <NewFooter/>
        
        
        <header className='w-full fixed top-0 bg-black  opacity-75  text-white text-opacity-100 font-serif'>

        <div className="container ">
        
        <nav className="flex justify-around sm:text-2xl">
          <a href="#home" className=" text-sm sm:text-2xl hover:text-gray-300">Home</a>
          <a href="/aboutnew" className=" text-sm sm:text-2xl hover:text-gray-300">About</a>
          <a href="/services" className= "text-sm sm:text-2xl hover:text-gray-300">Services</a>
          <a href="/blog" className= "text-sm sm:text-2xl hover:text-gray-300">Blog  </a>
          <a href="#box" className= " text-sm sm:text-2xl hover:text-gray-300">Contact</a>
        </nav>
      
      </div>
     
        </header>

      

    </div>
  )
}

export default Demo