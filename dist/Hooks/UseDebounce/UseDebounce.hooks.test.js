import { renderHook, act } from '@testing-library/react-native';
import useDebounce from './UseDebounce.hooks';
describe('useDebounce Hook', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });
    it('should return the initial value immediately', async () => {
        const { result } = await renderHook(() => useDebounce('initial', 500));
        expect(result.current).toBe('initial');
    });
    it('should update the debounced value after the specified delay', async () => {
        const { result, rerender } = await renderHook(({ value, delay }) => useDebounce(value, delay), {
            initialProps: { value: 'initial', delay: 500 },
        });
        expect(result.current).toBe('initial');
        await act(async () => {
            rerender({ value: 'updated', delay: 500 });
        });
        expect(result.current).toBe('initial');
        await act(async () => {
            jest.advanceTimersByTime(500);
        });
        expect(result.current).toBe('updated');
    });
    it('should cancel the previous timeout if value changes before delay expires', async () => {
        const { result, rerender } = await renderHook(({ value, delay }) => useDebounce(value, delay), {
            initialProps: { value: 'first', delay: 500 },
        });
        expect(result.current).toBe('first');
        await act(async () => {
            rerender({ value: 'second', delay: 500 });
        });
        await act(async () => {
            jest.advanceTimersByTime(250);
        });
        expect(result.current).toBe('first');
        await act(async () => {
            rerender({ value: 'final', delay: 500 });
        });
        await act(async () => {
            jest.advanceTimersByTime(250);
        });
        expect(result.current).toBe('first');
        await act(async () => {
            jest.advanceTimersByTime(250);
        });
        expect(result.current).toBe('final');
    });
});
