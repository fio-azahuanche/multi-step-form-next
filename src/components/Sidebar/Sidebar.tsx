import {
  stepOneSelected,
  stepTwoSelected,
  stepThreeSelected,
  stepFourSelected,
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  bgSidebar
} from '@public/images';
import { SidebarStepItem } from '@components/SidebarStepItem';

const steps = [
  { step: 1, stepSelected: stepOneSelected, stepWhite: stepOne, title: 'STEP 1', subtitle: 'YOUR INFO' },
  { step: 2, stepSelected: stepTwoSelected, stepWhite: stepTwo, title: 'STEP 2', subtitle: 'SELECT PLAN' },
  { step: 3, stepSelected: stepThreeSelected, stepWhite: stepThree, title: 'STEP 3', subtitle: 'ADD-ONS' },
  { step: 4, stepSelected: stepFourSelected, stepWhite: stepFour, title: 'STEP 4', subtitle: 'SUMMARY' },
];

export const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col justify-between rounded-lg"
      style={{ backgroundImage: `url(${bgSidebar.src})` }} 
    >
      <div className="p-6">
        {steps.map(({ step, title, stepSelected, stepWhite, subtitle }) => (
          <SidebarStepItem key={step} step={step} title={title} subtitle={subtitle} stepSelected={stepSelected} stepWhite={stepWhite} />
        ))}
      </div>
    </div>
  );
};
