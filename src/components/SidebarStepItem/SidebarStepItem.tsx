'use client'

import { useStepperStore } from "@/store/useStepperStore";
import Image from "next/image";
import iconSuccess from '@public/images/icon-success.svg';

interface SidebarStepItemProps {
    iconBlue: string; 
    iconGray: string; 
    title: string;
    step: number;
}

export const SidebarStepItem = ({ step, iconBlue, iconGray, title }: SidebarStepItemProps) => {
  const { activeStep, completedSteps } = useStepperStore();

  const isActive = activeStep === step;
  const isCompleted = completedSteps.includes(step);

  const textColor = isActive ? 'text-customStep' : 'text-customGrayLight';
  const iconSrc = isCompleted ? iconSuccess : (isActive ? iconBlue : iconGray);
    return (
      <div className="flex items-center p-4 ml-2">
        <Image src={iconSrc} alt={title} width={20} height={20} className="w-6 h-6 mr-3" />
        <span className={`text-lg-1600 text-sm-1263 font-medium ${textColor}`}>{title}</span>
      </div>
    )
};