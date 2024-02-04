import React from 'react';

const ContactForm = () => {
  return (
    <div id='box' className='p-8 bg-sky-500'>
      <h1 className='text-center text-base sm:text-3xl font-bold text-black'>CONTACT FORM</h1>
      <form className="w-full sm:w-7/12 p-6 row g-3 text-black">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control mb-2 sm:mb-0 sm:h-10" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control mb-2 sm:mb-0 sm:h-10" id="inputPassword4"/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control mb-2 sm:mb-0 sm:h-10" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control mb-2 sm:mb-0 sm:h-10" id="inputCity"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select mb-2 sm:mb-0 sm:h-10">
            <option value={"Select"}></option>
            <option>Nilesh</option>
            <option>Mangesh</option>
            <option>Ajay</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control mb-2 sm:mb-0 sm:h-10" id="inputZip"/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-secondary text-white bg-red-600">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
