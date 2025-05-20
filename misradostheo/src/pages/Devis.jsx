import React, { useState } from 'react';

function Devis() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    employees: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your request has been submitted successfully!');
    setFormData({
      companyName: '',
      email: '',
      phone: '',
      employees: '',
      message: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Request a Quote</h1>
      <p className="text-center text-muted">Fill out the form to receive a personalized quote.</p>

      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Number of Employees</label>
            <input type="number" className="form-control" name="employees" value={formData.employees} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Additional Message</label>
            <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Devis;
