import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="form">
      <div className="container">
        <form action="">
          <h2>Contact Us</h2>
          <div className="fullname">
            <div className="fieldsname">
              <label htmlFor="">First Name *</label>
              <input type="text" required/>
            </div>
            <div className="fieldsname">
              <label htmlFor="">Last Name *</label>
              <input type="text" required/>
            </div>
          </div>
          <div className='fieldsname'><label htmlFor="">Email Adress *</label>
          <input type="email" required/></div>
          <div className='query'>
            <label htmlFor="">Query Type</label>
            <div className="radio-group">
              <div><label htmlFor="">
              <input type="radio" />General Enquiry
              </label></div>
              <div><label htmlFor="">
              <input type="radio" />Support Request</label></div>
              
              </div>
          </div>
          <div className='fieldsname'>
            <label htmlFor="">Message *</label>
            <textarea name="" id="" rows={8} cols={40} required></textarea>
          </div>
          <div className="consent">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              I consent to being contacted by the team *
            </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
