import { create } from "zustand";

const useStore = create(
  (set) => ({
    bannerMessage: "default",
    updateStatus: (message) => set(() => ({ bannerMessage: message })),
    resetStatus: () => set(() => ({ bannerMessage: "default" })),
  }),
  {
    name: "banner",
  },
);
export default useStore;
