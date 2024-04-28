import { create } from "zustand";

const useStore = create(
  (set) => ({
    autoRotate: true,
    updateRotate: (rotate) => set(() => ({ autoRotate: rotate })),
  }),
  {
    name: "camera",
  },
);
export default useStore;
