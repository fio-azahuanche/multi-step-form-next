import { iconArcade } from '@public/images';
import React, { ChangeEventHandler } from 'react';
import Image from "next/image";

interface CardProps {
  title: string,
  price: string,
  description?: string,
  checked?: boolean | undefined,
  onChange: ChangeEventHandler<HTMLInputElement>,
  isRadio?: boolean | undefined,
  iconSrc: string
}
export const Card: React.FC<CardProps> = ({ title, price, description, checked, onChange, isRadio, iconSrc }) => {
  return (
    <div className={`card ${checked ? 'selected' : ''}`}>
      {/* <label className="input-container">
        <input
          type={isRadio ? 'radio' : 'checkbox'} // Usar radio o checkbox
          checked={checked}
          onChange={onChange}
          name={isRadio ? 'plan' : undefined} // Agrupar los radios
        />
        <span className="input-mark"></span>
      </label> */}
      <div className="content">
        <Image src={iconSrc} alt={title} width={30} height={30} className="mr-6" />
        <div className='mb-6'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
};
