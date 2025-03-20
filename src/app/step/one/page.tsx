'use client';

import { useState } from 'react';
import { useStepperStore } from '@/store/useStepperStore';

export default function OnePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', phoneNumber: '' });

  const { nextStep } = useStepperStore();

  // Regex para validación de email y número de teléfono
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^\+?[0-9]{1,3}?[0-9]{7,14}$/;

  const handleNameChange = (e: any) => {
    setName(e.target.value);
    setErrors((prev) => ({
      ...prev,
      name: e.target.value ? '' : 'Name is required.',
    }));
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: emailRegex.test(value) ? '' : 'Invalid email format.',
    }));
  };

  const handlePhoneNumberChange = (e: any) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setErrors((prev) => ({
      ...prev,
      phoneNumber: phoneRegex.test(value) ? '' : 'Invalid phone number format.',
    }));
  };

  const isFormValid =
    name && emailRegex.test(email) && phoneRegex.test(phoneNumber);

  return (
    <>
      <form className="flex justify-center">
        <div className="pb-12 text-customGray max-w-xl w-full">
          <h2 className="text-customMarineBlue text-3xl font-semibold leading-7">Personal Info</h2>
          <p className="mt-1 text-customCoolGray text-base leading-6 font-medium">
            Please provide your name, email address, and phone number.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Campo de Nombre */}
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
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            </div>

            {/* Campo de Email */}
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
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Campo de Número de Teléfono */}
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
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>
            </div>

            {/* Botón de Siguiente */}
            <div className="sm:col-span-5 flex justify-end">
              <button
                onClick={nextStep}
                className={`mt-4 custom-button text-base custom-button-valid`}
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
