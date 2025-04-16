'use client';
import { useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobile: '',
    email: '',
    website: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!agreed) {
      setStatus('Please accept the privacy policy.');
      return;
    }

    try {
      await addDoc(collection(db, 'registrations'), formData);
      setStatus('Registration successful!');

      setFormData({
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        mobile: '',
        email: '',
        website: '',
      });
      setAgreed(false);
    } catch (err) {
      console.error('Firestore error:', err);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-600 px-4">
      <div className="flex w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col justify-center p-10 w-1/2 text-white">
          <h1 className="text-5xl mb-4">Register Now</h1>
          <p className="text-xl font-bold">Join us for an unforgettable experience!</p>
        </div>

        <div className="w-1/2 p-10 rounded-4xl bg-gray-900 bg-opacity-70">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'First Name', name: 'firstName' },
              { label: 'Last Name', name: 'lastName' },
              { label: 'Job Title', name: 'jobTitle' },
              { label: 'Company', name: 'company' },
              { label: 'Mobile Number', name: 'mobile' },
              { label: 'Email Address', name: 'email', type: 'email' },
              { label: 'Company Website URL', name: 'website' },
            ].map(({ label, name, type = 'text' }) => (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={label}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-3 rounded-md text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-gray-700 transition-all"
                required={name !== 'jobTitle' && name !== 'company' && name !== 'website'}
              />
            ))}

            <label className="flex items-center space-x-2 text-sm text-white">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="accent-pink-500"
              />
              <span>
                By filling out the registration form to attend our event, you agree and consent to{' '}
                <a href="#" className="text-pink-300 underline">Cogent Solutions Privacy Policy</a>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md transition"
            >
              Register
            </button>

            {status && <p className="text-sm mt-2 text-white">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
