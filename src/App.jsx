import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: '',
    message: '',
    consent: false
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleDivClick = (value) => {
    setFormData({ ...formData, query: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Show success message
    setSuccessMessage(true);

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      query: '',
      message: '',
      consent: false
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <>
      <div className="form">
        <div className="container">
          {successMessage && (
            <div className="success-message">
              ✅ <strong>Message Sent!</strong> <br />
              Thanks for completing the form. We'll be in touch soon!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            <div className="fullname">
              <div className="fieldsname">
                <label>First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="fieldsname">
                <label>Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="fieldsname">
              <label>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="query">
              <label>Query Type</label>
              <div className="radio-group">
                <div className={`radio ${formData.query === 'general' ? 'active' : ''}`} onClick={() => handleDivClick('general')}>
                  <label>
                    <input type="radio" name="query" value="general" checked={formData.query === 'general'} onChange={handleChange} />
                    General Enquiry
                  </label>
                </div>
                <div className={`radio ${formData.query === 'support' ? 'active' : ''}`} onClick={() => handleDivClick('support')}>
                  <label>
                    <input type="radio" name="query" value="support" checked={formData.query === 'support'} onChange={handleChange} />
                    Support Request
                  </label>
                </div>
              </div>
            </div>

            <div className="fieldsname">
              <label>Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={8} cols={40} required></textarea>
            </div>

            <div className="consent">
              <label>
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
                I consent to being contacted by the team *
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
