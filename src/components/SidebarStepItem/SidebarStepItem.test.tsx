import { describe, test, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SidebarStepItem } from './SidebarStepItem';
import { useStepperStore } from '@/store/useStepperStore';

vi.mock('@/store/useStepperStore', () => ({
  useStepperStore: vi.fn(),
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props:any) => <img {...props} width="20" height="20" />,
}));

describe('SidebarStepItem Component', () => {
  let activeStep: number;
  let completedSteps: number[];

  beforeEach(() => {
    activeStep = 1;
    completedSteps = [1];
    (useStepperStore as unknown as Mock).mockReturnValue({
      activeStep,
      completedSteps,
    });
  });

  test('should render without crashing', () => {
    render(<SidebarStepItem step={1} stepSelected="/icon-blue.svg" stepWhite="/icon-gray.svg" title="Step 1" subtitle=''/>);
    expect(screen.getByAltText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  test('should render with active but not completed step styles', () => {
    (useStepperStore as unknown as Mock).mockReturnValueOnce({
      activeStep: 1,
      completedSteps: [],
    });
    render(<SidebarStepItem step={1} stepSelected="/icon-blue.svg" stepWhite="/icon-gray.svg" title="Step 1" subtitle=''/>);
    expect(screen.getByText('Step 1')).toHaveClass('text-customStep');
    expect(screen.getByAltText('Step 1')).toHaveAttribute('src', '/icon-blue.svg');
  });
});