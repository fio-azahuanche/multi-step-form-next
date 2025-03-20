import React, { ChangeEventHandler } from 'react';
import Image from "next/image";

interface CardProps {
  title: string,
  price: string,
  description?: string,
  checked?: boolean | undefined,
  onChange: ChangeEventHandler<HTMLInputElement>,
  isRadio?: boolean | undefined,
  iconSrc: string,
  isYearly: boolean,
}
export const Card: React.FC<CardProps> = ({ title, price, description, checked, onChange, iconSrc, isYearly }) => {
  return (
    <div
      className={`card p-4 border rounded-lg cursor-pointer transition-all flex flex-col items-start gap-2 ${checked ? 'border-customBlue bg-customLightBlue' : 'border-gray-300'
        }`}
      onClick={onChange as unknown as () => void}
    >
      <div className="flex items-center gap-4">
        <Image src={iconSrc} alt={title} width={30} height={30} />
        
      </div>
      <h3 className="text-customMarineBlue font-semibold mt-8">{title}</h3>
      <p className="text-gray-500">{price}</p>
      {isYearly && <span className="text-customMarineBlue font-medium">2 months free</span>}
    </div>

  );
};
