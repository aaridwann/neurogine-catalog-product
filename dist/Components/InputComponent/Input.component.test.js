import { jsx as _jsx } from "react/jsx-runtime";
import { View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { _renderActionButtons } from './Input.component';
jest.mock('@react-native-vector-icons/ionicons', () => {
    const React = jest.requireActual('react');
    return {
        __esModule: true,
        default: ({ name, size, color, testID, style }) => {
            const simpleProps = {
                name,
                size,
                color,
                testID: testID || `icon-${name}`,
                style,
            };
            return React.createElement('MockIonIcon', simpleProps);
        },
    };
});
describe('_renderActionButtons helper with testIDs', () => {
    const mockOnClear = jest.fn();
    const mockSetIsPasswordVisible = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const TestWrapper = (props) => (_jsx(View, { children: _renderActionButtons(props) }));
    it('should not render any action buttons when value is empty, disabled, and secureTextEntry is false', async () => {
        const { queryByTestId } = await render(_jsx(TestWrapper, { onClear: mockOnClear, value: "", disabled: false, secureTextEntry: false, isPasswordVisible: false, setIsPasswordVisible: mockSetIsPasswordVisible }));
        expect(queryByTestId('action_button')).toBeNull();
        expect(queryByTestId('secure_text_button')).toBeNull();
    });
    it('should render clear button and trigger onClear when pressed', async () => {
        const { getByTestId, queryByTestId } = await render(_jsx(TestWrapper, { onClear: mockOnClear, value: "Some text", disabled: false, secureTextEntry: false, isPasswordVisible: false, setIsPasswordVisible: mockSetIsPasswordVisible }));
        const clearButton = getByTestId('action_button');
        expect(clearButton).toBeTruthy();
        expect(queryByTestId('secure_text_button')).toBeNull();
        fireEvent.press(clearButton);
        expect(mockOnClear).toHaveBeenCalledTimes(1);
    });
    it('should not render clear button when input is disabled despite having a value', async () => {
        const { queryByTestId } = await render(_jsx(TestWrapper, { onClear: mockOnClear, value: "Some text", disabled: true, secureTextEntry: false, isPasswordVisible: false, setIsPasswordVisible: mockSetIsPasswordVisible }));
        expect(queryByTestId('action_button')).toBeNull();
    });
    it('should render secure text button and toggle visibility state when pressed', async () => {
        const { getByTestId } = await render(_jsx(TestWrapper, { onClear: mockOnClear, value: "", disabled: false, secureTextEntry: true, isPasswordVisible: false, setIsPasswordVisible: mockSetIsPasswordVisible }));
        const secureButton = getByTestId('secure_text_button');
        expect(secureButton).toBeTruthy();
        fireEvent.press(secureButton);
        expect(mockSetIsPasswordVisible).toHaveBeenCalledTimes(1);
        const updaterFunction = mockSetIsPasswordVisible.mock.calls[0][0];
        expect(updaterFunction(false)).toBe(true);
        expect(updaterFunction(true)).toBe(false);
    });
    it('should render both buttons when both conditions are met', async () => {
        const { getByTestId } = await render(_jsx(TestWrapper, { onClear: mockOnClear, value: "Secret Password", disabled: false, secureTextEntry: true, isPasswordVisible: true, setIsPasswordVisible: mockSetIsPasswordVisible }));
        expect(getByTestId('action_button')).toBeTruthy();
        expect(getByTestId('secure_text_button')).toBeTruthy();
    });
});
