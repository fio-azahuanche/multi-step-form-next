'use client'

import { useState } from 'react';

import { useStepperStore } from '@/store/useStepperStore';

export default function OnePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { nextStep } = useStepperStore();

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
      <form className="flex justify-center">
        <div className="pb-12 text-customGray max-w-xl w-full">
          <h2 className="text-customMarineBlue text-3xl font-semibold leading-7">Personal Info</h2>
          <p className="mt-1 text-customCoolGray text-base leading-6 font-medium">
            Please provide your name, email address, and phone number.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-5">
              <label htmlFor="name" className="text-base text-customMarineBlue font-medium leading-6">
                Name
              </label>
              <div className="mt-2">
                <div className="flex sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="custom-input"
                    placeholder="e.g. Levi Ackerman"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-5">
              <label htmlFor="email" className="text-base text-customMarineBlue font-medium leading-6">
                Email Address
              </label>
              <div className="mt-2">
                <div className="flex sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="custom-input"
                    placeholder="e.g. leviackerman@lorem.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-5">
              <label htmlFor="phoneNumber" className="text-base text-customMarineBlue font-medium leading-6">
                Phone Number
              </label>
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

            <div className="sm:col-span-5 flex justify-end">
              <button
                onClick={nextStep}
                disabled={!isFormValid}
                className={`mt-4 custom-button text-base ${isFormValid ? 'custom-button-valid' : 'custom-button-invalid'
                  }`}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}