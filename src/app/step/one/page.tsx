'use client'

import { useState } from 'react';

import { useProcessIdStore } from '@/store/useProcessIdStore';
import { useStepperStore } from '@/store/useStepperStore';

export default function OnePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const { nextStep } = useStepperStore();
  const setProcessId = useProcessIdStore((state) => state.setProcessId);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isFormValid = name !== '' && email !== '' && phoneNumber !== '';

  return (
    <>

      <form>
        <div className="pb-12 text-customGray">
          <h2 className="text-xl-1600 text-lg-1263 font-medium leading-7">Personal Info</h2>
          <p className="mt-1 text-lg-1600 text-sm-1263 leading-6 font-normal">Please provide your name, email address, and phone number.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-5">
              <label htmlFor="name" className="text-lg-1600 text-sm-1263 font-medium leading-6">Name</label>
              <div className="mt-2">
                <div className="flex sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="custom-input"
                    placeholder="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-5">
              <label htmlFor="email" className="text-lg-1600 text-sm-1263 font-medium leading-6">Email Address</label>
              <div className="mt-2">
                <div className="flex sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="custom-input"
                    placeholder="email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-5">
              <label htmlFor="phoneNumber" className="text-lg-1600 text-sm-1263 font-medium leading-6">Name</label>
              <div className="mt-2">
                <div className="flex sm:max-w-md">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="custom-input"
                    placeholder="e.g. +1 234 567 890"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="flex justify-end gap-x-6">
          <button
            onClick={nextStep}
            disabled={!isFormValid}
            className={`custom-button text-base-1600 text-sm-1263 ${isFormValid ? 'custom-button-valid' : 'custom-button-invalid'}`}
          >
            Next Step
          </button>
        </div>
      </form>

    </>
  );
}