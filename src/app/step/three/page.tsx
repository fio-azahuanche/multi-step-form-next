'use client';

import { usePlanStore } from "@/store/usePlanStore";
import { useStepperStore } from "@/store/useStepperStore";

interface AddOn {
  title: string;
  description: string;
  price: string;
  key: keyof SelectedAddOns; 
}

interface SelectedAddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

export default function ThreePage() {
  const { nextStep, previousStep, isYearly } = useStepperStore();
  const { selectedAddOns, setAddOns } = usePlanStore();

  const handleChange = (addOnKey: keyof SelectedAddOns) => {
    setAddOns({
      ...selectedAddOns,
      [addOnKey]: !selectedAddOns[addOnKey],
    });
  };

  const addOns: AddOn[] = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: isYearly ? '+$10/yr' : '+$1/mo',
      key: 'onlineService',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: isYearly ? '+$20/yr' : '+$2/mo',
      key: 'largerStorage',
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: isYearly ? '+$20/yr' : '+$2/mo',
      key: 'customizableProfile',
    },
  ];

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form>
      <div className="pb-12 text-customGray">
        <h2 className="text-customMarineBlue text-3xl font-semibold leading-7">Pick add-ons</h2>
        <p className="mt-1 text-customCoolGray text-base leading-6 font-medium">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="space-y-4 mt-10">
          {addOns.map((addOn) => (
            <label
              key={addOn.key}
              className={`flex items-center border rounded-lg p-4 cursor-pointer transition-all ${selectedAddOns[addOn.key] ? "border-customBlue bg-customLightBlue" : "border-gray-300"
                }`}
            >
              <input
                type="checkbox"
                checked={selectedAddOns[addOn.key]}
                onChange={() => handleChange(addOn.key)}
                className="form-checkbox h-5 w-5 text-customBlue mr-4"
              />

              <div className="flex justify-between w-full items-center">
                <div>
                  <p className="text-customMarineBlue font-semibold">{addOn.title}</p>
                  <p className="text-customCoolGray text-sm">{addOn.description}</p>
                </div>
                <span className="text-customBlue font-bold">{addOn.price}</span>
              </div>
            </label>
          ))}
        </div>

      </div>

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
    </form>
  );
}
