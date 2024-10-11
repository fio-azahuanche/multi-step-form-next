'use client';

import { Card } from "@/components/Card";
import { useProcessedFilesStore } from "@/store/useProcessedFilesStore";
import { useStepperStore } from "@/store/useStepperStore";
import { useState } from "react";

// Definimos el tipo para las Add-ons
interface AddOn {
  title: string;
  description: string;
  price: string;
  key: keyof SelectedAddOns; // Definimos que la clave sea solo de las existentes en el estado
}

interface SelectedAddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

export default function ThreePage() {
  const { nextStep } = useStepperStore();
  const [username, setUsername] = useState('');
  const [processId, setProcessId] = useState('');
  const setProcessedFiles = useProcessedFilesStore((state) => state.setProcessedFiles);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleProcessIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessId(e.target.value);
  };

  // Estado para las Add-ons
  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOns>({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  // Manejo de cambios para las Add-ons
  const handleChange = (addOnKey: keyof SelectedAddOns) => {
    setSelectedAddOns((prevState) => ({
      ...prevState,
      [addOnKey]: !prevState[addOnKey],
    }));
  };

  // Definimos los add-ons disponibles
  const addOns: AddOn[] = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
      key: 'onlineService',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
      key: 'largerStorage',
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
      key: 'customizableProfile',
    },
  ];

  // Función para avanzar al siguiente paso
  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form>
      <div className="pb-12 text-customGray">
        <h2 className="text-xl-1600 text-lg-1263 font-medium leading-7">Pick add-ons</h2>
        <p className="mt-1 text-lg-1600 text-sm-1263 leading-6 font-normal">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="cards">
            {addOns.map((addOn) => (
              <Card
                key={addOn.key}
                title={addOn.title}
                description={addOn.description}
                price={addOn.price}
                checked={selectedAddOns[addOn.key]} // Usamos la clave adecuada del estado
                onChange={() => handleChange(addOn.key)} // Manejamos el cambio de estado
                isRadio={false} // Asignamos un valor fijo para isRadio
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="custom-button text-base-1600 text-sm-1263 custom-button-valid"
          onClick={handleNextStep} // Avanzamos al siguiente paso
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
