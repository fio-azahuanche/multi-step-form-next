'use client'

import { useState } from "react";

import { useLoading } from "@/hooks/useLoading";
import { useStepperStore } from "@/store/useStepperStore";
import { Card } from "@/components/Card";

export default function TwoPage() {
  const [isYearly, setIsYearly] = useState(false);

  const isLoading = useLoading();
  const { nextStep } = useStepperStore();
  const [selectedPlan, setSelectedPlan] = useState('arcade'); // Default plan

  const handleChange = (plan: any) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      title: 'Arcade',
      description: 'Basic plan for casual gamers',
      price: '$9/mo',
      key: 'arcade',
    },
    {
      title: 'Advanced',
      description: 'For frequent gamers',
      price: '$12/mo',
      key: 'advanced',
    },
    {
      title: 'Pro',
      description: 'For pro gamers with special features',
      price: '$15/mo',
      key: 'pro',
    },
  ];

  return (
    <>
      <div className="pb-12 text-customGray">
        <h2 className="text-xl-1600 text-lg-1263 font-medium leading-7">Select you plan</h2>
        <p className="mt-1 text-lg-1600 text-sm-1263 leading-6 font-normal">You have the option of mothly or yearly billing.</p>

        <div className="mt-10">
          <div className="flex flex-col items-end space-y-4 sm:max-w-md">
            <div className="cards">
              {plans.map((plan) => (
                <Card
                  key={plan.key}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  checked={selectedPlan === plan.key}
                  onChange={() => handleChange(plan.key)} // Selecting the plan
                  isRadio // Prop to conditionally render radio button
                />
              ))}
            </div>
            <label>
              <input
                type="checkbox"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              Yearly
            </label>
            <button
              type="button"
              className={`custom-button text-base-1600 text-sm-1263 custom-button-valid`}
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}