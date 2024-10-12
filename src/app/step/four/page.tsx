'use client'

import { useLoading } from "@/hooks/useLoading";
import { useStepperStore } from "@/store/useStepperStore";

export default function FourPage() {
  const isLoading = useLoading();
  const { resetSteps } = useStepperStore();

  const handleRestartClick = () => {
    resetSteps();
  };

  const selectedPlan = {
    name: 'Arcade',
    billingType: 'Monthly',
    price: 9,
  };

  const addOns = [
    {
      name: 'Online service',
      price: 1,
    },
    {
      name: 'Larger storage',
      price: 2,
    },
  ];

  const total = selectedPlan.price + addOns.reduce((acc, addOn) => acc + addOn.price, 0);

  return (
    <>
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-900">Finishing up</h2>
        <p className="text-sm text-gray-500 mt-1">
          Double-check everything looks OK before confirming.
        </p>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-900">{selectedPlan.name} ({selectedPlan.billingType})</h3>
              <button className="text-blue-500 text-sm underline">Change</button>
            </div>
            <p className="font-bold text-gray-900">${selectedPlan.price}/mo</p>
          </div>

          <hr className="my-4" />

          {addOns.map((addOn) => (
            <div key={addOn.name} className="flex justify-between items-center mt-2">
              <p className="text-gray-700">{addOn.name}</p>
              <p className="text-gray-900">+${addOn.price}/mo</p>
            </div>
          ))}

          <div className="flex justify-between items-center font-bold text-lg mt-6">
            <p>Total (per month)</p>
            <p className="text-indigo-600">+${total}/mo</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="text-gray-500 underline">Go Back</button>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700" onClick={handleRestartClick}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}