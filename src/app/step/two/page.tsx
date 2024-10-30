'use client'

import { useState } from "react";

import { useLoading } from "@/hooks/useLoading";
import { useStepperStore } from "@/store/useStepperStore";
import { Card } from "@/components/Card";
import { iconArcade, iconAdvanced, iconPro } from '@public/images';
import { ToggleSwitch } from "@/components/Toggle";

export default function TwoPage() {
  const [isYearly, setIsYearly] = useState(false);

  const isLoading = useLoading();
  const { nextStep, previousStep } = useStepperStore();
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
      iconSrc: iconArcade
    },
    {
      title: 'Advanced',
      description: 'For frequent gamers',
      price: '$12/mo',
      key: 'advanced',
      iconSrc: iconAdvanced
    },
    {
      title: 'Pro',
      description: 'For pro gamers with special features',
      price: '$15/mo',
      key: 'pro',
      iconSrc: iconPro
    },
  ];

  return (
    <>
      <form className="flex justify-center">
        <div className="pb-12 text-customGray max-w-xl w-full">
          <h2 className="text-customMarineBlue text-3xl font-semibold leading-7">Select your plan</h2>
          <p className="mt-1 text-customCoolGray text-base leading-6 font-medium">You have the option of monthly or yearly billing.</p>

          <div className="mt-10">
            <div className="flex flex-col items-center space-y-4 sm:max-w-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {plans.map((plan) => (
                  <Card
                    key={plan.key}
                    title={plan.title}
                    price={plan.price}
                    iconSrc={plan.iconSrc}
                    onChange={() => handleChange(plan.key)} // Selecting the plan
                  />
                ))}
              </div>

              <ToggleSwitch/>              

              <div className="flex items-center justify-between w-full pt-10">
                <span
                  className="text-customMarineBlue font-semibold cursor-pointer"
                  onClick={previousStep}
                >
                  Go back
                </span>
                <button
                  type="button"
                  className="custom-button text-base-1600 text-sm-1263 custom-button-valid"
                  onClick={nextStep}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
