import { create } from "zustand";

import type { UserSlice } from "./slices/userSlice";
import type { FileSlice } from "./slices/fileSlice";
import type { CommentSlice } from "./slices/commentSlice";
import type { NotificationsSlice } from "./slices/notificationsSlice";

import { createUserSlice } from "./slices/userSlice";
import { createFileSlice } from "./slices/fileSlice";
import { createCommentSlice } from "./slices/commentSlice";
import { createNotificationsSlice } from "./slices/notificationsSlice";

type DesignHubStore =
  UserSlice &
  FileSlice &
  CommentSlice &
  NotificationsSlice;

export const useDesignHubStore = create<DesignHubStore>(
  (set, get, store) => ({
    ...createUserSlice(set, get, store),
    ...createFileSlice(set, get, store),
    ...createCommentSlice(set, get, store),
    ...createNotificationsSlice(set, get, store),
  })
);