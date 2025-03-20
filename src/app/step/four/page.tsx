'use client'

import { useLoading } from "@/hooks/useLoading";
import { useStepperStore } from "@/store/useStepperStore";
import { usePlanStore } from "@/store/usePlanStore";
import { useRouter } from "next/navigation";
import { iconThankYou } from '@public/images';
import Image from "next/image";

export default function FourPage() {
  const isLoading = useLoading();
  const { previousStep, goToStep, isYearly, confirmSubscription, isConfirmed, } = useStepperStore();
  const { selectedPlan, selectedAddOns } = usePlanStore();
  const router = useRouter();

  const handleChangePlan = () => {
    goToStep(2);
  };

  if (!selectedPlan) return <p>Loading...</p>;

  const billingType = isYearly ? "Yearly" : "Monthly";
  const planPrice = isYearly ? selectedPlan.priceYearly : selectedPlan.priceMonthly;

  const addOnList = [
    { name: "Online service", price: isYearly ? 10 : 1, key: "onlineService" },
    { name: "Larger storage", price: isYearly ? 20 : 2, key: "largerStorage" },
    { name: "Customizable Profile", price: isYearly ? 20 : 2, key: "customizableProfile" },
  ].filter((addOn) => selectedAddOns[addOn.key]);

  const total = parseInt(planPrice.replace(/[^0-9]/g, ""), 10) + addOnList.reduce((acc, addOn) => acc + addOn.price, 0);

  if (isConfirmed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <Image src={iconThankYou} alt="" width={100} height={100} />
        <h2 className="text-2xl font-bold text-customMarineBlue mt-4">Thank you!</h2>
        <p className="text-gray-600 mt-2">
          Thanks for confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at <strong>support@loremgaming.com</strong>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="pb-12 text-customGray">
        <h2 className="text-customMarineBlue text-3xl font-semibold leading-7">Finishing up</h2>
        <p className="mt-1 text-customCoolGray text-base leading-6 font-medium">
          Double-check everything looks OK before confirming.
        </p>

        <div className="mt-10 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-900">{selectedPlan.title} ({billingType})</h3>
              <button className="text-blue-500 text-sm underline" onClick={handleChangePlan}>Change</button>
            </div>
            <p className="font-bold text-gray-900">{planPrice}</p>
          </div>

          <hr className="my-4" />

          {addOnList.map((addOn) => (
            <div key={addOn.name} className="flex justify-between items-center mt-2">
              <p className="text-gray-700">{addOn.name}</p>
              <p className="text-gray-900">+${addOn.price}/{isYearly ? "yr" : "mo"}</p>
            </div>
          ))}

          <div className="flex justify-between items-center font-bold text-lg mt-6">
            <p>Total (per {isYearly ? "year" : "month"})</p>
            <p className="text-indigo-600">${total}/{isYearly ? "yr" : "mo"}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full pt-10">
          <span
            className="text-customMarineBlue font-medium hover:text-blue-600 cursor-pointer"
            onClick={previousStep}
          >
            Go back
          </span>
          <button className="custom-button text-base-1600 text-sm-1263 custom-button-valid" onClick={confirmSubscription}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}