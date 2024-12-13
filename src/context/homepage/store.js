import { create } from "zustand";

const useStoreHomePage = create(
  (set) => ({
    pageId: null,
    updatePageId: (pageId) => set(() => ({ pageId: pageId })),
  }),
  {
    name: "homePage",
  },
);
export default useStoreHomePage;
