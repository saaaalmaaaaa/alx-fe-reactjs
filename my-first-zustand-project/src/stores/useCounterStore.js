import { create } from "zustand";

const initialState = { count: 0 };

const useCounterStore = create((set) => ({
  ...initialState,

  increment: () => set((state) => ({ count: state.count + 1 })),

  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({
      count: state.count + 1,
    }));
  },

  decrement: () => set((state) => ({ count: state.count - 1 })),

  resetCount: () => set(() => ({ count: 0 })),
}));

export default useCounterStore;
