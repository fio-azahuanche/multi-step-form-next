import { create } from 'zustand';

export interface StepperState {
  activeStep: number;
  completedSteps: number[];
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
  completeStep: (step: number) => void;
  resetSteps: () => void;
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
  completeStep: (step) => set((state) => ({
    completedSteps: [...state.completedSteps, step]
  })),
  resetSteps: () => set({ activeStep: 1, completedSteps: [] }),
}));