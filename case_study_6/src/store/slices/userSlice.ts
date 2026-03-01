import type { StateCreator } from "zustand";

/* User data structure */
export interface User {
  id: string;
  name: string;
}

/* State and actions for user feature */
export interface UserSlice {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

/* Slice factory */
export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  // Initial state
  user: null,

  // Sets logged-in user
  setUser: (user: User) =>
    set({
      user,
    }),

  // Clears user (logout)
  clearUser: () =>
    set({
      user: null,
    }),
});