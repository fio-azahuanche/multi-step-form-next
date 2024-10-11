import {
  stepOneGray,
  stepTwoGray,
  stepThreeGray,
  stepFourGray,
  stepTwo,
  stepThree,
  stepFour,
  bgSidebar
} from '@public/images';
import { SidebarStepItem } from '@components/SidebarStepItem';

const steps = [
  { step: 1, iconBlue: stepOneGray, iconGray: stepOneGray, title: 'Step 1' },
  { step: 2, iconBlue: stepTwo, iconGray: stepTwoGray, title: 'Step 2' },
  { step: 3, iconBlue: stepThree, iconGray: stepThreeGray, title: 'Step 3' },
  { step: 4, iconBlue: stepFour, iconGray: stepFourGray, title: 'Step 4' },
];

export const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col justify-between rounded-lg"
      style={{ backgroundImage: `url(${bgSidebar.src})` }} 
    >
      <div className="p-6">
        {steps.map(({ step, title, iconBlue, iconGray }) => (
          <SidebarStepItem key={step} step={step} title={title} iconBlue={iconBlue} iconGray={iconGray} />
        ))}
      </div>
    </div>
  );
};
