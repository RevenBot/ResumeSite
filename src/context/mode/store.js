import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      caosMode: true,
      switchMode: () => set((state) => ({ caosMode: !state.caosMode })),
      updateMode: (newMode) => set(() => ({ caosMode: newMode })),
    }),
    {
      name: "mode",
    },
  ),
);
export default useStore;
