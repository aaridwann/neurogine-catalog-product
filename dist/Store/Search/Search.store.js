import { create } from 'zustand';
const useSearchStore = create((set) => ({
    query: '',
    resultData: [],
    setQuery: (query) => set({ query }),
    setResultData: (resultData) => set({ resultData }),
    resetQuery: () => set({ query: '' }),
}));
export default useSearchStore;
