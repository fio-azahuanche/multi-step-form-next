import { create } from 'zustand';

export interface StepperState {
  activeStep: number;
  completedSteps: number[];
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
  goToStep: (step: number) => void; 
  completeStep: (step: number) => void;
  resetSteps: () => void;
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
  isConfirmed: boolean;
  confirmSubscription: () => void;
}

export const useStepperStore = create<StepperState>((set) => ({
  activeStep: 1,
  completedSteps: [],
  nextStep: () => set((state) => {
    const next = state.activeStep + 1;
    return {
      activeStep: next,
      completedSteps: [...state.completedSteps, state.activeStep],
    };
  }),
  previousStep: () =>
    set((state) => ({
      activeStep: state.activeStep > 1 ? state.activeStep - 1 : state.activeStep,
    })),
  setStep: (step: number) => set(() => ({
    activeStep: step,
  })),
  goToStep: (step: number) => set(() => ({ activeStep: step })), 
  completeStep: (step) => set((state) => ({
    completedSteps: [...state.completedSteps, step]
  })),
  resetSteps: () => set({ activeStep: 1, completedSteps: [], isConfirmed: false }),
  isYearly: false,
  setIsYearly: (value) => set({ isYearly: value }),
  isConfirmed: false,
  confirmSubscription: () => set({ isConfirmed: true }),
}));
