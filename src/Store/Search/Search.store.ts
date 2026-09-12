import { create } from 'zustand';

import type { SearchState } from './Search.store.types';

const useSearchStore = create<SearchState>((set) => ({
  query: '',
  resultData: [],
  setQuery: (query) => set({ query }),
  setResultData: (resultData) => set({ resultData }),
  resetQuery: () => set({ query: '' }),
}));

export default useSearchStore;