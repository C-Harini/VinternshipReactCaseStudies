import type { StateCreator } from "zustand";

/* Structure of a comment */
export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}

/* State and actions for comment feature */
export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  getCommentsByFile: (fileId: string) => Comment[];
}

/* Slice factory */
export const createCommentSlice: StateCreator<CommentSlice> = (set, get) => ({
  // Initial state
  comments: [],

  // Add a new comment
  addComment: (comment: Comment) =>
    set((state) => ({
      comments: [...state.comments, comment],
    })),

  // Get comments belonging to a specific file
  getCommentsByFile: (fileId: string) =>
    get().comments.filter((comment) => comment.fileId === fileId),
});