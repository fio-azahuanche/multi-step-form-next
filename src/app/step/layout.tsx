'use client'

import { Sidebar } from "@/components/Sidebar";
import OnePage from "./one/page";
import TwoPage from "./two/page";
import ThreePage from "./three/page";
import FourPage from "./four/page";
import { useStepperStore } from "@/store/useStepperStore";

export default function StepLayout() {
  const { activeStep } = useStepperStore();

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <OnePage />;
      case 2:
        return <TwoPage />;
      case 3:
        return <ThreePage />;
      case 4:
        return <FourPage />;
      default:
        return <OnePage />;
    }
  };

  return (
    <div className="flex min-h-screen">

      <div className="w-[30%] bg-white p-4">
        <Sidebar />
      </div>

      <div className="w-[70%] bg-white pl-52 pt-28-1600 pt-20-1263 pr-60">
        {renderStep()}
      </div>

    </div>
  );
}
