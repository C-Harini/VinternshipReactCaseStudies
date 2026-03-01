import type { StateCreator } from "zustand";

/* Structure of a file */
export interface File {
  id: string;
  name: string;
  content: string;
}

/* State and actions for file feature */
export interface FileSlice {
  files: File[];
  addFile: (file: File) => void;
  updateFile: (id: string, content: string) => void;
}

/* Slice factory */
export const createFileSlice: StateCreator<FileSlice> = (set) => ({
  // Initial state
  files: [],

  // Add a new file
  addFile: (file: File) =>
    set((state) => ({
      files: [...state.files, file],
    })),

  // Update file content by id
  updateFile: (id: string, content: string) =>
    set((state) => ({
      files: state.files.map((file) =>
        file.id === id ? { ...file, content } : file
      ),
    })),
});