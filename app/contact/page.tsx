"use client"
import { ContactMail } from "@/lib/mails";
import React, { useState, useEffect } from 'react';


export default function ContactForm() {
  const [form, setForm] = useState({ name: '',phone: '', email: '', message: '' })
  function handleSubmit(){
    setForm({ name: '',phone: '', email: '', message: '' })
  }

  return (
    <section className='bg-black' id='contact-us'>
      <div className=' p-4 pt-28 w-full mx-auto max-w-screen-lg'>
          <div className='text-6xl font-medium text-gray-200 text-center'>
          I&#39;d Love to Hear from you
          <p className='text-2xl text-[#7b8d61] font-bold mt-12 text-center'>
          Reach Out Anytime !
          </p>
         </div>
        </div>
        <div className='text-gray-300 text-sm font-extralight mt-3 max-w-screen-sm mx-auto text-center'>
          Please Fill this for, Ill get back to you shortly 
        </div>
        <div className='border border-gray-400 mx-auto mt-7 max-w-xs sm:max-w-md mb-20'></div>

    
    <div className="text-black max-w-md mx-auto pb-12 pt-3">
      <form action={ContactMail} onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <div className="w-full inline-flex">
            <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="name" className="block text-md font-extralight my-2 text-white">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 bg-[#eaece7] bg-opacity-25 text-gray-200" value={form.name} required onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="phone" className="block text-md font-extralight my-2 text-white">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-md py-2 px-3 bg-[#eaece7] bg-opacity-25 text-gray-200" value={form.phone} required onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
                <label htmlFor="email" className="block text-md font-extralight my-2 text-white">Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 bg-[#eaece7] bg-opacity-25 text-gray-200" value={form.email} required onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
                <label htmlFor="message" className="block text-md font-extralight my-2 text-white">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-md py-2 px-3 bg-[#eaece7] bg-opacity-25 text-gray-200" value={form.message} required onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
          </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-[#828b74] hover:bg-[#565c4d] text-white font-bold py-1 px-2 rounded-md mt-5">
                    Submit
                </button>
            </div>
      </form>
    </div>
    </section>
  )
}