import useSearchStore from './Search.store';

describe('useSearchStore', () => {
  beforeEach(() => {
    useSearchStore.setState({
      query: '',
      resultData: [],
    });
  });

  it('should have initial state correctly', () => {
    const state = useSearchStore.getState();

    expect(state.query).toBe('');
    expect(state.resultData).toEqual([]);
    expect(typeof state.setQuery).toBe('function');
    expect(typeof state.setResultData).toBe('function');
    expect(typeof state.resetQuery).toBe('function');
  });

  it('should update query when setQuery is called', () => {
    const { setQuery } = useSearchStore.getState();

    setQuery('Smartphone');

    const updatedState = useSearchStore.getState();
    expect(updatedState.query).toBe('Smartphone');
  });

  it('should update resultData when setResultData is called', () => {
    const { setResultData } = useSearchStore.getState();
    const mockData = [{ id: '1', title: 'Laptop' }];

    setResultData(mockData);

    const updatedState = useSearchStore.getState();
    expect(updatedState.resultData).toEqual(mockData);
  });

  it('should reset query back to empty string when resetQuery is called', () => {
    const store = useSearchStore.getState();

    store.setQuery('Headset');
    store.setResultData([{ id: '2', title: 'Audio' }]);

    expect(useSearchStore.getState().query).toBe('Headset');

    store.resetQuery();

    const resetState = useSearchStore.getState();

    expect(resetState.query).toBe('');
    expect(resetState.resultData).toEqual([{ id: '2', title: 'Audio' }]);
  });
});