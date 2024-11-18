import { create } from "zustand";

const useAsyncAPI = create((set) => ({
  data: [],
  fetch: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    set({ data: json });
  },
}));

export default useAsyncAPI;
