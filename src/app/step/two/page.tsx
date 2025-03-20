'use client'

import { useLoading } from "@/hooks/useLoading";
import { useStepperStore } from "@/store/useStepperStore";
import { usePlanStore } from "@/store/usePlanStore";
import { Card } from "@/components/Card";
import { iconArcade, iconAdvanced, iconPro } from '@public/images';
import { ToggleSwitch } from "@/components/Toggle";

export default function TwoPage() {

  const isLoading = useLoading();
  const { nextStep, previousStep, isYearly, setIsYearly } = useStepperStore();
  const {selectedPlan, setPlan} = usePlanStore(); 


  const plans = [
    {
      title: 'Arcade',
      description: 'Basic plan for casual gamers',
      priceMonthly: '$9/mo',
      priceYearly: "$90/yr",
      key: 'arcade',
      iconSrc: iconArcade
    },
    {
      title: 'Advanced',
      description: 'For frequent gamers',
      priceMonthly: '$12/mo',
      priceYearly: "$120/yr",
      key: 'advanced',
      iconSrc: iconAdvanced
    },
    {
      title: 'Pro',
      description: 'For pro gamers with special features',
      priceMonthly: "$15/mo",
      priceYearly: "$150/yr",
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
                    price={isYearly ? plan.priceYearly : plan.priceMonthly}
                    iconSrc={plan.iconSrc}
                    checked={selectedPlan?.key === plan.key}
                    onChange={() => setPlan(plan)} 
                    isYearly={isYearly}
                  />
                ))}
              </div>

              <ToggleSwitch isYearly={isYearly} setIsYearly={setIsYearly}/>              

              <div className="flex items-center justify-between w-full pt-10">
                <span
                  className="text-customMarineBlue font-medium hover:text-blue-600 cursor-pointer"
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
