'use client'

import { useStepperStore } from "@/store/useStepperStore";
import Image from "next/image";

interface SidebarStepItemProps {
  stepSelected: string;
  stepWhite: string;
  title: string;
  subtitle: string;
  step: number;
}

export const SidebarStepItem = ({ step, stepSelected, stepWhite, title, subtitle }: SidebarStepItemProps) => {
  const { activeStep, completedSteps } = useStepperStore();

  const isActive = activeStep === step;
  const isCompleted = completedSteps.includes(step);

  const iconSrc = isCompleted ? stepWhite : (isActive ? stepSelected : stepWhite);

  return (
    <div className="flex items-center mt-6 p-4 ml-4">
      <Image src={iconSrc} alt={title} width={50} height={50} className="mr-6" />
      <div className="flex flex-col">
        <span className={`text-base font-light text-white`}>{title}</span>
        <span className={`text-lg font-bold text-white`}>{subtitle}</span>
      </div>
    </div>
  )
};