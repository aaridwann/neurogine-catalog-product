import { renderHook, act } from '@testing-library/react-native';
import { useInfiniteQuery } from '@Neurogine/core-network';
import useCatalogProductInfinite, { catalogKeys } from './UseCatalog.hooks';
jest.mock('@Neurogine/core-network', () => ({
    useInfiniteQuery: jest.fn(),
}));
jest.mock('../../Service/CatalogService', () => ({
    fetchCatalogProducts: jest.fn(),
}));
describe('useCatalogProductInfinite Hook', () => {
    const mockNavigation = {
        navigate: jest.fn(),
        goBack: jest.fn(),
        dispatch: jest.fn(),
        reset: jest.fn(),
        isFocused: jest.fn(),
        canGoBack: jest.fn(),
        setParams: jest.fn(),
        setOptions: jest.fn(),
        getParent: jest.fn(),
        getState: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        replace: jest.fn(),
        push: jest.fn(),
        pop: jest.fn(),
        popToTop: jest.fn(),
    };
    const mockInfiniteQueryResult = {
        data: {
            pages: [
                { skip: 0, limit: 10, total: 20, products: [{ id: 1, title: 'Product 1' }] },
            ],
            pageParams: [0],
        },
        fetchNextPage: jest.fn(),
        hasNextPage: true,
        isFetchingNextPage: false,
        isLoading: false,
        isError: false,
        error: null,
    };
    beforeEach(() => {
        jest.clearAllMocks();
        useInfiniteQuery.mockReturnValue(mockInfiniteQueryResult);
    });
    it('should initialize and return query result along with handlers', async () => {
        const { result } = await renderHook(() => useCatalogProductInfinite(mockNavigation, { search: 'test' }));
        expect(result.current).toHaveProperty('data');
        expect(result.current).toHaveProperty('fetchNextPage');
        expect(typeof result.current.onSelectedProduct).toBe('function');
        expect(typeof result.current.onFavoriteProduct).toBe('function');
        expect(typeof result.current.onAddToCartProduct).toBe('function');
    });
    it('should navigate to DetailScreen when onSelectedProduct is called', async () => {
        const { result } = await renderHook(() => useCatalogProductInfinite(mockNavigation));
        await act(async () => {
            await result.current.onSelectedProduct('123');
        });
        expect(mockNavigation.navigate).toHaveBeenCalledWith('DetailScreen', { id: '123' });
    });
    it('should execute placeholder favorite and add to cart handlers without errors', async () => {
        const { result } = await renderHook(() => useCatalogProductInfinite(mockNavigation));
        await act(() => {
            result.current.onFavoriteProduct('123');
            result.current.onAddToCartProduct('123');
        });
        expect(result.current).toBeDefined();
    });
    it('should configure useInfiniteQuery with correct queryKey and getNextPageParam logic', async () => {
        await renderHook(() => useCatalogProductInfinite(mockNavigation, { category: 'electronics' }, { enabled: true }));
        expect(useInfiniteQuery).toHaveBeenCalled();
        const queryConfig = useInfiniteQuery.mock.calls[0][0];
        expect(queryConfig.queryKey).toEqual(catalogKeys.list({ category: 'electronics', limit: 10 }));
        expect(queryConfig.initialPageParam).toBe(0);
        const pageWithMoreData = { skip: 0, limit: 10, total: 20 };
        const pageWithNoMoreData = { skip: 10, limit: 10, total: 15 };
        const nextSkipMore = queryConfig.getNextPageParam(pageWithMoreData);
        expect(nextSkipMore).toBe(10);
        const nextSkipEnd = queryConfig.getNextPageParam(pageWithNoMoreData);
        expect(nextSkipEnd).toBeUndefined();
    });
});
