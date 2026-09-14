import { renderHook } from '@testing-library/react-native';

import { useQuery } from '@Neurogine/core-network';

import useProductSearch from './UseProductSearch';
import CatalogService from '../../Service/CatalogService';
import useSearchStore from '../../Store/Search';
import useDebounce from '../UseDebounce';

jest.mock('@Neurogine/core-network', () => ({
  useQuery: jest.fn(),
}))
  .mock('../../Service/CatalogService', () => ({
    fetchProductsBySearch: jest.fn(),
  }))
  .mock('../../Store/Search', () => ({
    __esModule: true,
    default: jest.fn(),
  }))
  .mock('../UseDebounce', () => ({
    __esModule: true,
    default: jest.fn((val) => val),
  }));

describe('useProductSearch Hook', () => {
  const mockQueryResult = {
    data: { sampleSuggestions: [{ id: 1, title: 'Phone' }] },
    isLoading: false,
    error: null,
    isFetching: false,
    isFetched: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useQuery as jest.Mock).mockReturnValue(mockQueryResult);
  });

  it('should return query states correctly when search query has value', async () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      query: 'Phone',
    });
    (useDebounce as jest.Mock).mockReturnValue('Phone');

    const { result } = await renderHook(() => useProductSearch());

    expect(result.current).toEqual(mockQueryResult);
    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ['products', 'search', 'Phone'],
        enabled: true,
      }),
    );
  });

  it('should disable query when debounced query is empty or whitespace', async () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      query: '   ',
    });
    (useDebounce as jest.Mock).mockReturnValue('   ');

    await renderHook(() => useProductSearch());

    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ['products', 'search', '   '],
        enabled: false,
      }),
    );
  });

  it('should call CatalogService.fetchProductsBySearch inside queryFn', async () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      query: 'Laptop',
    });
    (useDebounce as jest.Mock).mockReturnValue('Laptop');

    await renderHook(() => useProductSearch());

    // eslint-disable-next-line prefer-destructuring
    const queryConfig = (useQuery as unknown as jest.Mock).mock.calls[0][0];

    await queryConfig.queryFn();

    expect(CatalogService.fetchProductsBySearch).toHaveBeenCalledWith('Laptop');
  });
});