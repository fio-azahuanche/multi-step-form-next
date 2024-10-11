import React, { ChangeEventHandler } from 'react';

interface CardProps {
    title: string,
    price: string,
    description: string,
    checked: boolean | undefined,
    onChange: ChangeEventHandler<HTMLInputElement>,
    isRadio: boolean | undefined
}
export const Card: React.FC<CardProps> = ({ title, price, description, checked, onChange, isRadio }) => {
  return (
    <div className={`card ${checked ? 'selected' : ''}`}>
      <label className="input-container">
        <input
          type={isRadio ? 'radio' : 'checkbox'} // Usar radio o checkbox
          checked={checked}
          onChange={onChange}
          name={isRadio ? 'plan' : undefined} // Agrupar los radios
        />
        <span className="input-mark"></span>
      </label>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};
