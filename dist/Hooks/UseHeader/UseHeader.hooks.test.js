import { Animated, Keyboard } from 'react-native';
import { renderHook, act } from '@testing-library/react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useSearchStore from '../../Store/Search';
import useProductSearch from '../UseProductSearch';
import useHeader from './UseHeader.hooks';
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: jest.fn(),
}))
    .mock('../../Store/Search', () => ({
    __esModule: true,
    default: jest.fn(),
}))
    .mock('../UseProductSearch', () => ({
    __esModule: true,
    default: jest.fn(),
}));
describe('useHeader Hook', () => {
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
    const mockHeaderProps = {
        navigation: mockNavigation,
        route: { key: 'header-1', name: 'Home' },
        options: {},
        back: undefined,
    };
    const mockSetQuery = jest.fn();
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
        jest.spyOn(Animated, 'timing').mockImplementation(() => ({
            start: (callback) => {
                callback?.({ finished: true });
            },
        }));
        useSafeAreaInsets.mockReturnValue({ top: 10, bottom: 20, left: 0, right: 0 });
        useSearchStore.mockReturnValue({
            query: '',
            setQuery: mockSetQuery,
        });
        useProductSearch.mockReturnValue({
            data: { sampleSuggestions: [{ id: '1', title: 'Test Product' }] },
            isFetching: false,
        });
    });
    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
        jest.restoreAllMocks();
    });
    it('should initialize and return default states and handlers correctly', async () => {
        const { result } = await renderHook(() => useHeader(mockHeaderProps));
        expect(result.current.isSearchActive).toBe(false);
        expect(result.current.insets).toEqual({ top: 10, bottom: 20, left: 0, right: 0 });
        expect(result.current.query).toBe('');
        expect(typeof result.current.toggleSearch).toBe('function');
        expect(typeof result.current.onSelectSuggestion).toBe('function');
        expect(result.current.isLoadingSuggestions).toBe(false);
    });
    it('should toggle search state and trigger animation when toggleSearch is called', async () => {
        const { result } = await renderHook(() => useHeader(mockHeaderProps));
        const mockKeyboard = jest.spyOn(Keyboard, 'dismiss');
        expect(result.current.isSearchActive).toBe(false);
        await act(async () => {
            result.current.toggleSearch(true);
        });
        expect(result.current.isSearchActive).toBe(true);
        expect(Animated.timing).toHaveBeenCalled();
        await act(async () => {
            result.current.toggleSearch(false);
        });
        expect(result.current.isSearchActive).toBe(false);
        expect(mockKeyboard).toHaveBeenCalled();
    });
    it('should handle product suggestion selection correctly', async () => {
        const { result } = await renderHook(() => useHeader(mockHeaderProps));
        const selectedItem = { id: '99', title: 'Awesome Gadget' };
        await act(async () => {
            result.current.onSelectSuggestion(selectedItem);
        });
        expect(mockSetQuery).toHaveBeenCalledWith('Awesome Gadget');
        expect(result.current.isSearchActive).toBe(false);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('DetailScreen', { id: '99' });
    });
    it('should compute isLoadingSuggestions accurately based on fetch status and data', async () => {
        useProductSearch.mockReturnValue({
            data: { sampleSuggestions: [] },
            isFetching: true,
        });
        const { result } = await renderHook(() => useHeader(mockHeaderProps));
        expect(result.current.isLoadingSuggestions).toBe(true);
    });
});
