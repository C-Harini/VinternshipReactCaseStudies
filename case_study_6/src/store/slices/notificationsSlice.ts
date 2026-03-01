import type { StateCreator } from "zustand";

// Shape of a single notification
export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

// State and actions exposed by this slice
export interface NotificationsSlice {
  notifications: Notification[];
  addNotification: (message: string) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

// Factory function that creates this slice
// It receives Zustand's set (and optionally get)
export const createNotificationsSlice: StateCreator<
  NotificationsSlice
> = (set) => ({
  
  // Initial state
  notifications: [],

  // Adds a new notification with read = false
  addNotification: (message: string) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: Date.now().toString(),
          message,
          read: false,
        },
      ],
    })),

  // Marks a notification as read by id
  markAsRead: (id: string) =>
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      ),
    })),

  // Clears all notifications
  clearNotifications: () =>
    set({
      notifications: [],
    }),
});