import { create } from 'zustand';

interface ProcessedFiles {
  processedFiles: string[];
  setProcessedFiles: (files: string[]) => void;
}

export const useProcessedFilesStore = create<ProcessedFiles>((set) => ({
  processedFiles: [],
  setProcessedFiles: (files: string[]) => set({ processedFiles: files }),
}));