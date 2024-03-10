import { create } from "zustand";


const useStore = create((set) => ({
  caosMode: true,
  switchMode: () => set((state) => ({ caosMode: !state.caosMode })),
  updateMode: (newMode) => set(() => ({ caosMode: newMode })),
}));

export default useStore;
