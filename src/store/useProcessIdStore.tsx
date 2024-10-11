import { create } from 'zustand';

interface ProcessId {
  processId: string | null;
  setProcessId: (id: string) => void;
}

export const useProcessIdStore = create<ProcessId>((set) => ({
  processId: null,
  setProcessId: (id: string) => set({ processId: id }),
}));