'use client'
import React, { use } from 'react'
import { useState } from 'react'
import { FaSpinner } from "react-icons/fa";

const initialFormData = {
  fullName: "",
  email: "",
  projectType: "",
  message: ""
};

export default function ContactForm() {
  const [ formData, setFormData ] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((formData) => ({...formData,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!formData.fullName || !formData.email || !formData.projectType) {
      alert("Please fill in required fields");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch("url", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData), 
      })

      const data = await response.json();
      console.log(data);
      alert("Message sent successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className='bg-surface border border-border w-full p-6 md:p-8 rounded-2xl shadow-sm lg:w-[60%] mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-4'>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName"
          className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
          <input type='text' 
          className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
          placeholder='John Doe'
          id='fullName' 
          name='fullName' 
          value={formData.fullName}
          onChange={handleChange} 
          required/>
        </div>

        {/* Email */}
        <div>
          <label htmlFor='email'
          className="block text-sm font-medium text-foreground mb-1.5">Email</label>
          <input type='email'
          className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground" 
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required 
          placeholder='johndoe@gmail.com'/>
        </div>

        {/* Project Type */}
        <div>
        <label htmlFor='projectType'
        className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
        <select id='projectType'
        name='projectType'
        value={formData.projectType}
        onChange={handleChange}
        required
            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground">
            <option value='' disabled hidden>Select Project Type</option>
            <option value='webdev'>Web Development</option>
            <option value='frontend'>Frontend Development</option>
            <option value='backend'>Backend Development</option>
            <option value='backend'>Full Stack Development</option>
            <option value='collaborate'>Collaboration</option>
            <option value='freelance'>Freelance</option>
            <option value='others'>Others</option>
        </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor='message'
          className="block text-sm font-medium text-foreground mb-1.5">Message</label>
          <textarea id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
          rows={5} 
          cols={3}
          placeholder='Tell me about your project or idea...' />
        </div>

        {/* Submit Button */}
        <div className='pt-2'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full sm:w-[60%] bg-primary text-button-text font-medium py-3 rounded-xl text-base transition-opacity hover:opacity-90 flex items-center justify-center mx-auto shadow-md'
              >
            {isSubmitting ? (
              <span className='flex gap-2 items-center justify-center'>
                <FaSpinner className='animate-spin'/>
                <span>Processing...</span>
              </span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </div>

      </form>
    </div>
  )
};
